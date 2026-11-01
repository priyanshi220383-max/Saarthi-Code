import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './SplashView.css';

/* ========================================
   SLIDESHOW SETTINGS
======================================== */

// How long each slide stays visible (5 seconds)
const SLIDE_DURATION_MS = 3000;

// The 5 slides, in display order. Chand Baori is first.
// Each slide has its own photo AND its own text.
// To change a photo: replace the text inside the quotes after "src:".
const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80', // <-- PASTE CHAND BAORI URL HERE if this one doesn't load
    alt: 'Chand Baori Stepwell, Abhaneri',
    title: 'Chand Baori: The Labyrinth of Rajasthan',
    meta: '3,500 Steps • 13 Subterranean Tiers • Verified Oral Historians',
  },
  {
    src: 'https://i.pinimg.com/736x/84/90/d5/8490d5fec8197c186c19d1af4de3b8a6.jpg',
    alt: 'Hawa Mahal, Jaipur',
    title: 'Hawa Mahal: The Palace of Winds',
    meta: '953 Windows • 5 Storeys • Built in 1799',
  },
  {
    src: 'https://i.pinimg.com/736x/8a/22/0b/8a220b63c3d4e8cf9af9b80c9b9f5f44.jpg',
    alt: 'Amer Fort, Jaipur',
    title: 'Amer Fort: The Hilltop Citadel of Jaipur',
    meta: 'Since 1592 • Sheesh Mahal • Verified Oral Historians',
  },
  {
    src: 'https://i.pinimg.com/736x/31/7f/ed/317fede02c5cc44c57c47bb6586ca4ad.jpg',
    alt: 'Jaisalmer Fort, Jaisalmer',
    title: 'Jaisalmer Fort: The Living Golden Citadel',
    meta: 'Built in 1156 • Yellow Sandstone • Still Inhabited',
  },
  {
    src: 'https://i.pinimg.com/736x/29/1a/39/291a39bf3df87542cd4fa8f723f1803f.jpg',
    alt: 'Lake Pichola, Udaipur',
    title: 'Lake Pichola: The Mirror of Udaipur',
    meta: 'Created in 1362 • City Palace • Lake Palace',
  },
];

/* ========================================
   SLIDESHOW COMPONENT
   (photos + dark overlay + text)
======================================== */

// Kept as its own small component so that the timer's state change
// re-renders ONLY the slideshow, not the whole login page.
const HeroSlideshow: React.FC = memo(() => {
  // Index of the slide currently shown (0 = Chand Baori)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Every 10 seconds, move to the next slide.
    // The % operator loops back to 0 after the 5th slide.
    const timerId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);

    // Cleanup: stop the timer when the component unmounts (no memory leaks)
    return () => clearInterval(timerId);
  }, []);

  const activeSlide = SLIDES[activeIndex];

  return (
    <>
      {/* All photos are stacked; only the active one is visible */}
      {SLIDES.map((slide, index) => (
        <img
          key={slide.alt}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={index !== activeIndex}
          decoding="async"
          // If a photo fails to load, hide it (no ugly broken-image icon)
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          className={`splash-hero-image ${
            index === activeIndex ? 'splash-hero-image--active' : ''
          }`}
        />
      ))}

      {/* Dark gradient overlay (unchanged) */}
      <div className="splash-image-overlay"></div>

      {/* Text: fades out, then the next slide's text fades in */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="splash-feature-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <span className="splash-feature-label">
            Featured Journey
          </span>

          <h2 className="splash-feature-title">
            {activeSlide.title}
          </h2>

          <p className="splash-feature-meta">
            {activeSlide.meta}
          </p>
        </motion.div>
      </AnimatePresence>
    </>
  );
});

/* ========================================
   SPLASH VIEW (your existing login page)
======================================== */

interface SplashViewProps {
  onContinue: (authMode: 'google' | 'phone' | 'guest') => void;
  onExploreDirectly: () => void;
}

export const SplashView: React.FC<SplashViewProps> = ({
  onContinue,
  onExploreDirectly,
}) => {
  const hashtags = ['Awed', 'Spooked', 'Enlightened', 'Adventurous'];

  return (
    <div className="splash-page">

      {/* Top Left Corner Badge */}
      <div className="splash-badge-position">
        <div className="splash-badge">
          <span className="splash-badge-dot"></span>
          <span>Safe Solo Mode [01]</span>
        </div>
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="splash-container"
      >

        {/* Left Side: Visual Showcase (slideshow with photos + text) */}
        <div className="splash-visual">
          <HeroSlideshow />
        </div>

        {/* Right Side: Authentication */}
        <div className="splash-auth-panel">
          <div className="splash-auth-content">

            <h1 className="splash-logo">
              SAARTHI
            </h1>

            <p className="splash-tagline">
              Guided by Stories
            </p>

            <p className="splash-description">
              Experience the living folklore, subterranean mysteries,
              and verified oral historians of India's vast cultural heritage.
            </p>

            {/* Hashtags */}
            <div className="splash-hashtags">
              {hashtags.map((tag) => (
                <span key={tag} className="splash-hashtag">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Authentication Buttons */}
            <div className="splash-actions">

              <button
                id="btn-google-login"
                onClick={() => onContinue('google')}
                className="splash-button splash-google-button"
              >
                <svg
                  className="splash-google-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#EA4335"
                  />
                </svg>

                <span>Sign in with Google</span>
              </button>

              <button
                id="btn-phone-login"
                onClick={() => onContinue('phone')}
                className="splash-button splash-phone-button"
              >
                <span className="material-symbols-outlined splash-phone-icon">
                  phone_iphone
                </span>
                <span>Use Mobile Number</span>
              </button>

              <button
                id="btn-guest-explore"
                onClick={onExploreDirectly}
                className="splash-guest-button"
              >
                <span>Explore as Guest</span>
                <span className="material-symbols-outlined splash-arrow-icon">
                  arrow_forward
                </span>
              </button>

            </div>

            {/* Security Note */}
            <p className="splash-security-note">
              By continuing, you agree to Saarthi’s Cultural Heritage Code
              &amp; Verified Safety Terms.
            </p>

          </div>
        </div>

      </motion.div>
    </div>
  );
};
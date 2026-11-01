import React from 'react';
import { motion } from 'motion/react';
import { GuideProfile } from '../types';

interface GuideCardProps {
  guide: GuideProfile;
  index: number; // position in the list, used for the staggered entrance
  onSelectGuideForTrip: (guide: GuideProfile) => void;
  onOpenReel: (reelId: string) => void;
}

export const GuideCard: React.FC<GuideCardProps> = ({
  guide,
  index,
  onSelectGuideForTrip,
  onOpenReel,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      // Cap the delay so cards far down the list don't wait too long
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.08 }}
      id={`guide-card-${guide.id}`}
      className="guide-card"
    >
      <div>
        {/* Avatar, name and location */}
        <div className="guide-card-top">
          <div className="guide-avatar-wrap">
            <img
              src={guide.avatar}
              alt={guide.name}
              className="guide-avatar"
              loading="lazy"
            />
            <div className="guide-rating">
              <span>★</span>
              <span>{guide.rating}</span>
            </div>
          </div>

          <div className="guide-info">
            <h3 className="guide-name">{guide.name}</h3>
            <p className="guide-role">{guide.title}</p>
            <p className="guide-location">
              <span className="material-symbols-outlined">location_on</span>
              <span>{guide.location}</span>
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="guide-badges">
          {guide.badges.map((badge) => (
            <span key={badge} className="guide-badge">
              {badge}
            </span>
          ))}
        </div>

        {/* Bio and specialty */}
        <div className="guide-bio-block">
          <span className="guide-specialty">Specialty: {guide.specialty}</span>
          <p className="guide-bio">{guide.bio}</p>
        </div>

        {/* Experience and languages */}
        <div className="guide-stats">
          <div>
            <span className="guide-stat-label">Experience</span>
            <span className="guide-stat-value">{guide.experienceYears}+ Years</span>
          </div>
          <div>
            <span className="guide-stat-label">Languages</span>
            <span className="guide-stat-value">
              {guide.languages.slice(0, 2).join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Price, reel button and pick button */}
      <div className="guide-actions">
        <div className="guide-price-row">
          <div>
            <span className="guide-price-label">Day Fee</span>
            <span className="guide-price">
              ${guide.pricePerDay}{' '}
              <span className="guide-price-unit">/ day</span>
            </span>
          </div>

          {/* Only show the reel button if the guide has at least one reel */}
          {guide.hasReel && guide.reels.length > 0 && (
            <button
              id={`btn-watch-reel-${guide.id}`}
              onClick={() => onOpenReel(guide.reels[0].id)}
              className="guide-reel-button"
            >
              <span className="material-symbols-outlined">play_circle</span>
              <span>Watch Reel</span>
            </button>
          )}
        </div>

        <button
          id={`btn-pick-guide-${guide.id}`}
          onClick={() => onSelectGuideForTrip(guide)}
          className="guide-pick-button"
        >
          <span>Pick this Guide</span>
          <span className="material-symbols-outlined">check</span>
        </button>
      </div>
    </motion.div>
  );
};
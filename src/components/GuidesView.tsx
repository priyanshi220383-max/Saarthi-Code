import React, { useState } from 'react';
import { GUIDES } from '../data/mockData';
import { GuideProfile } from '../types';
import { GuideCard } from './GuideCard';
import './GuidesView.css';

interface GuidesViewProps {
  onSelectGuideForTrip: (guide: GuideProfile) => void;
  onOpenReel: (reelId: string) => void;
  womensSafetyActive: boolean;
}

// Filter buttons. Add or remove names here to change the chips.
const SPECIALTIES = ['all', 'Medieval', 'Rainforest', 'Culinary'];

export const GuidesView: React.FC<GuidesViewProps> = ({
  onSelectGuideForTrip,
  onOpenReel,
  womensSafetyActive,
}) => {
  const [searchGuide, setSearchGuide] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  // Keep only the guides that match search + specialty + safety filter
  const filteredGuides = GUIDES.filter((guide) => {
    const query = searchGuide.toLowerCase();

    const matchesSearch =
      guide.name.toLowerCase().includes(query) ||
      guide.specialty.toLowerCase().includes(query) ||
      guide.location.toLowerCase().includes(query);

    const matchesSpecialty =
      selectedSpecialty === 'all' ||
      guide.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());

    const matchesSafety =
      !womensSafetyActive ||
      guide.badges.some((b) => b.toLowerCase().includes('women'));

    return matchesSearch && matchesSpecialty && matchesSafety;
  });

  return (
    <div className="guides-page">
      {/* Header */}
      <div className="guides-header">
        <span className="guides-eyebrow">Oral Historians &amp; Guild Elders</span>
        <h1 className="guides-title">Verified Local Storytellers</h1>
        <p className="guides-subtitle">
          Connect with vetted local anthropologists, botanical elders, and
          multi-generational storytellers who turn landscapes into living
          chronicles.
        </p>
      </div>

      {/* Filter bar */}
      <div className="guides-filters">
        <div className="guides-search">
          <span className="material-symbols-outlined guides-search-icon">
            search
          </span>
          <input
            id="input-guide-search"
            type="text"
            value={searchGuide}
            onChange={(e) => setSearchGuide(e.target.value)}
            placeholder="Search guide name, fortress, botany..."
            className="guides-search-input"
          />
        </div>

        <div className="guides-chips">
          {SPECIALTIES.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`guides-chip ${
                selectedSpecialty === spec ? 'guides-chip--active' : ''
              }`}
            >
              {spec === 'all' ? 'All Specialties' : spec}
            </button>
          ))}
        </div>
      </div>

      {/* Guides grid */}
      <div className="guides-grid">
        {filteredGuides.map((guide, idx) => (
          <GuideCard
            key={guide.id}
            guide={guide}
            index={idx}
            onSelectGuideForTrip={onSelectGuideForTrip}
            onOpenReel={onOpenReel}
          />
        ))}

        {/* Friendly message when nothing matches */}
        {filteredGuides.length === 0 && (
          <p className="guides-empty">
            No guides match your search. Try a different name or filter.
          </p>
        )}
      </div>
    </div>
  );
};
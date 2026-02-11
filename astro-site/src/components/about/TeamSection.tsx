import { useState, useEffect } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { TeamCard } from './TeamCard';
import { TeamMemberModal } from './TeamMemberModal';
import { BottomSheet } from './BottomSheet';

// Hook para detectar viewport mobile
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

interface Biography {
  formation?: string;
  experience?: string;
  specializations?: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  shortDescription?: string;
  image: string;
  imgTx?: number;
  imgTy?: number;
  imgScale?: number;
  featured?: boolean;
  credentials?: string[];
  experienceNote?: string;
  specialties?: string[];
  social?: {
    linkedin?: string;
    email?: string;
  };
  biography?: Biography;
}

interface Props {
  founder?: TeamMember;
  associates: TeamMember[];
}

export const TeamSection = ({ founder, associates }: Props) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <LayoutGroup>
      {/* Founder Card */}
      {founder && (
        <div className="max-w-lg mx-auto mb-10 md:mb-14">
          <TeamCard
            member={founder}
            index={0}
            onClick={() => handleCardClick(founder)}
            isSelected={selectedMember?.name === founder.name}
          />
        </div>
      )}

      {/* Associates Grid */}
      {associates.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {associates.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index + 1}
              onClick={() => handleCardClick(member)}
              isSelected={selectedMember?.name === member.name}
            />
          ))}
        </div>
      )}

      {/* Modal/BottomSheet based on viewport */}
      <AnimatePresence>
        {selectedMember && (
          isMobile ? (
            <BottomSheet
              member={selectedMember}
              isOpen={!!selectedMember}
              onClose={handleCloseModal}
            />
          ) : (
            <TeamMemberModal
              member={selectedMember}
              isOpen={!!selectedMember}
              onClose={handleCloseModal}
            />
          )
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default TeamSection;

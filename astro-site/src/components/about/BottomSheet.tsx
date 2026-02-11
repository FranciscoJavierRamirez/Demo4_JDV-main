import { motion, useDragControls, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { X, LinkedinLogo, Envelope, Star, Check, CaretDown, GraduationCap, Briefcase, Certificate } from '@phosphor-icons/react';
import { useEffect, useCallback, useRef, useState } from 'react';

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
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

interface AccordionSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string | undefined;
}

// Genera un ID único basado en el nombre
const generateLayoutId = (name: string) => name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

const AccordionItem = ({
  section,
  isOpen,
  onToggle
}: {
  section: AccordionSection;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  if (!section.content) return null;

  return (
    <div className={`border-l-2 transition-colors duration-200 ${isOpen ? 'border-[#C9A961]' : 'border-white/10'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 text-left
                   hover:bg-white/5 transition-colors px-4"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className={`transition-colors ${isOpen ? 'text-[#C9A961]' : 'text-white/50'}`}>
            {section.icon}
          </span>
          <span className={`font-medium transition-colors ${isOpen ? 'text-white' : 'text-white/70'}`}>
            {section.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <CaretDown size={18} className="text-white/60" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-white/80 leading-relaxed text-sm">
              {section.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const BottomSheet = ({ member, isOpen, onClose }: Props) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const y = useMotionValue(0);
  const [openSection, setOpenSection] = useState<string | null>('formation');

  // Transform para opacidad del backdrop basado en el drag
  const backdropOpacity = useTransform(y, [0, 300], [1, 0]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  // Reset accordion when sheet opens
  useEffect(() => {
    if (isOpen && member) {
      setOpenSection('formation');
      y.set(0);
    }
  }, [isOpen, member, y]);

  if (!member) return null;

  const layoutId = generateLayoutId(member.name);

  const hasBiography = member.biography && (
    member.biography.formation ||
    member.biography.experience ||
    member.biography.specializations
  );

  const sections: AccordionSection[] = [
    {
      id: 'formation',
      title: 'Formación',
      icon: <GraduationCap size={18} weight="duotone" />,
      content: member.biography?.formation,
    },
    {
      id: 'experience',
      title: 'Experiencia',
      icon: <Briefcase size={18} weight="duotone" />,
      content: member.biography?.experience,
    },
    {
      id: 'specializations',
      title: 'Especialidades',
      icon: <Certificate size={18} weight="duotone" />,
      content: member.biography?.specializations,
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const handleDragEnd = (_: never, info: { velocity: { y: number }; offset: { y: number } }) => {
    // Si el drag es suficientemente rápido o largo, cerrar
    if (info.velocity.y > 500 || info.offset.y > 200) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ opacity: backdropOpacity }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <motion.div
        ref={sheetRef}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        drag="y"
        dragControls={dragControls}
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ y }}
        className="fixed bottom-0 left-0 right-0 z-[9999] max-h-[90vh]
                   bg-gradient-to-br from-[#0C2340] to-[#1A4D7A]
                   rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]
                   overflow-hidden"
      >
        {/* Drag Handle */}
        <div
          className="flex justify-center py-3 cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => dragControls.start(e)}
        >
          <div className="w-12 h-1.5 bg-white/30 rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 w-10 h-10 flex items-center justify-center
                     bg-white/10 hover:bg-white/20 rounded-full text-white
                     transition-colors z-10"
          aria-label="Cerrar"
        >
          <X size={20} weight="bold" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-60px)] pb-safe">
          {/* Hero Image */}
          <motion.div
            layoutId={`image-container-${layoutId}`}
            className="w-full aspect-[4/3] overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                transform: `translate(${member.imgTx ?? 0}px, ${member.imgTy ?? 0}px) scale(${member.imgScale ?? 1})`,
                transformOrigin: 'center top'
              }}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="p-5">
            {/* Badge */}
            {member.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1
                               bg-gradient-to-r from-[#C9A961]/20 to-[#C9A961]/10
                               rounded-full text-xs font-semibold
                               border border-[#C9A961]/40 mb-3">
                <Star size={12} weight="fill" className="text-[#C9A961]" />
                <span className="bg-gradient-to-r from-[#B89350] to-[#C9A961]
                               bg-clip-text text-transparent">Fundadora</span>
              </span>
            )}

            {/* Name & Role */}
            <h2 className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: 'var(--font-display)' }}>
              {member.name}
            </h2>
            <p className="text-white/70 text-sm mb-5">{member.role}</p>

            {/* Biography Accordion */}
            {hasBiography ? (
              <div className="mb-5 space-y-1">
                {sections.map((section) => (
                  <AccordionItem
                    key={section.id}
                    section={section}
                    isOpen={openSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-white/80 leading-relaxed text-sm mb-5">
                {member.description.split('\n\n').map((p, i) => (
                  <p key={i} className={i > 0 ? 'mt-3' : ''}>{p}</p>
                ))}
              </div>
            )}

            {/* Credentials */}
            {member.credentials && member.credentials.length > 0 && (
              <div className="py-4 border-t border-white/10">
                <h3 className="text-xs font-semibold text-[#C9A961] mb-2 uppercase tracking-wide">
                  Credenciales
                </h3>
                <ul className="space-y-1.5">
                  {member.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <Check size={12} weight="bold" className="text-[#C9A961] mt-0.5 shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {member.social?.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3
                             bg-[#0A66C2]/20 border border-[#0A66C2]/30 rounded-xl
                             text-white text-sm font-medium"
                >
                  <LinkedinLogo size={18} weight="fill" />
                  <span>LinkedIn</span>
                </a>
              )}
              {member.social?.email && (
                <a
                  href={`mailto:${member.social.email}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3
                             bg-white/10 border border-white/20 rounded-xl
                             text-white text-sm font-medium"
                >
                  <Envelope size={18} />
                  <span>Email</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BottomSheet;

import { motion, AnimatePresence } from 'framer-motion';
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
                   hover:bg-white/5 transition-colors px-4 rounded-r-lg"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <motion.span
            className={`transition-colors ${isOpen ? 'text-[#C9A961]' : 'text-white/50'}`}
            animate={{ scale: isOpen ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {section.icon}
          </motion.span>
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
            <div className="px-4 pb-4 text-white/80 leading-relaxed text-sm ml-2">
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

export const TeamMemberModal = ({ member, isOpen, onClose }: Props) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [openSection, setOpenSection] = useState<string | null>('formation');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  // Reset accordion when modal opens with new member
  useEffect(() => {
    if (isOpen && member) {
      setOpenSection('formation');
    }
  }, [isOpen, member]);

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
      title: 'Formación Académica',
      icon: <GraduationCap size={20} weight="duotone" />,
      content: member.biography?.formation,
    },
    {
      id: 'experience',
      title: 'Experiencia Profesional',
      icon: <Briefcase size={20} weight="duotone" />,
      content: member.biography?.experience,
    },
    {
      id: 'specializations',
      title: 'Especialidades',
      icon: <Certificate size={20} weight="duotone" />,
      content: member.biography?.specializations,
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
                   bg-gradient-to-br from-[#0C2340]/98 to-[#1A4D7A]/95
                   backdrop-blur-2xl border border-white/20 rounded-3xl
                   shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center
                     bg-white/10 hover:bg-white/20 border border-white/20 rounded-full
                     text-white transition-all duration-200 hover:rotate-90"
          aria-label="Cerrar"
        >
          <X size={20} weight="bold" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image - Larger for desktop with shared transition */}
            <motion.div
              layoutId={`image-container-${layoutId}`}
              className="w-full md:w-2/5 aspect-[3/4] rounded-2xl overflow-hidden shrink-0
                         bg-gradient-to-br from-gray-800 to-gray-900
                         shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.img
                layoutId={`image-${layoutId}`}
                src={member.image}
                alt={member.name}
                style={{
                  transform: `translate(${member.imgTx ?? 0}px, ${member.imgTy ?? 0}px) scale(${member.imgScale ?? 1})`,
                  transformOrigin: 'center top'
                }}
                className="w-full h-full object-cover"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="flex-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
              }}
            >
              {/* Badge */}
              {member.featured && (
                <motion.span
                  variants={itemVariants}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5
                             bg-gradient-to-r from-[#C9A961]/20 to-[#C9A961]/10
                             backdrop-blur-sm rounded-full text-xs font-semibold
                             border border-[#C9A961]/40 mb-3"
                >
                  <Star size={14} weight="fill" className="text-[#C9A961]" />
                  <span className="bg-gradient-to-r from-[#B89350] to-[#C9A961]
                                 bg-clip-text text-transparent">Fundadora</span>
                </motion.span>
              )}

              {/* Name */}
              <motion.h2
                id="modal-title"
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {member.name}
              </motion.h2>

              {/* Role */}
              <motion.p
                variants={itemVariants}
                className="text-white/70 mb-6"
              >
                {member.role}
              </motion.p>

              {/* Biography Accordion or Description */}
              {hasBiography ? (
                <motion.div variants={itemVariants} className="mb-6 space-y-1">
                  {sections.map((section) => (
                    <AccordionItem
                      key={section.id}
                      section={section}
                      isOpen={openSection === section.id}
                      onToggle={() => toggleSection(section.id)}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  variants={itemVariants}
                  className="text-white/80 leading-relaxed space-y-4 mb-6"
                >
                  {member.description.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </motion.div>
              )}

              {/* Credentials */}
              {member.credentials && member.credentials.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className="pt-6 border-t border-white/10"
                >
                  <h3 className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wide">
                    Credenciales
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {member.credentials.map((cred, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-white/70"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        <Check size={14} weight="bold" className="text-[#C9A961] mt-0.5 shrink-0" />
                        <span>{cred}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="mt-6 flex flex-wrap gap-3"
              >
                {member.social?.linkedin && (
                  <motion.a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-5 py-3 bg-[#0A66C2]/20
                               hover:bg-[#0A66C2]/30 border border-[#0A66C2]/30 rounded-xl
                               text-white text-sm font-medium transition-colors"
                  >
                    <LinkedinLogo size={18} weight="fill" />
                    <span>Ver en LinkedIn</span>
                  </motion.a>
                )}
                {member.social?.email && (
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-5 py-3 bg-white/10
                               hover:bg-white/20 border border-white/20 rounded-xl
                               text-white text-sm font-medium transition-colors"
                  >
                    <Envelope size={18} />
                    <span>Enviar Email</span>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

export default TeamMemberModal;

import { motion } from 'framer-motion';
import { Star, Check, LinkedinLogo, ArrowUpRight } from '@phosphor-icons/react';
import { useState } from 'react';

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    description: string;
    shortDescription?: string;
    image: string;
    featured?: boolean;
    credentials?: string[];
    social?: {
      linkedin?: string;
      email?: string;
    };
  };
  index: number;
}

export const TeamCard = ({ member, index }: TeamCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.01,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-white/10 backdrop-blur-lg border border-white/20 
                 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                 hover:shadow-[0_12px_40px_rgba(201,169,97,0.25),0_0_60px_rgba(201,169,97,0.15)]
                 transition-shadow duration-500"
      data-featured={member.featured}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-500 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x} ${mousePosition.y}, 
                      rgba(201,169,97,0.12), transparent 40%)`
        }}
      />
      
      {/* Contenido vertical (imagen arriba) */}
      <div className="flex flex-col relative z-10">
        {/* Imagen */}
        <motion.div 
          className="w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shrink-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={member.image} 
            alt={member.name} 
            style={{
              objectPosition: member.featured ? 'center 20%' : 'center top',
              transform: member.featured ? 'scale(1.1)' : 'scale(1.2) translateY(-8%)'
            }}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </motion.div>

        {/* Contenido */}
        <div className="p-6 flex flex-col text-white min-h-[280px]">
          {member.featured && (
            <motion.span 
              className="inline-flex items-center gap-1 px-2.5 py-1 
                         bg-gradient-to-r from-[#C9A961]/20 to-[#C9A961]/10 
                         backdrop-blur-sm rounded-full text-xs font-semibold 
                         border border-[#C9A961]/40 mb-2 w-fit relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {/* Shimmer effect */}
              <span className="absolute top-0 -left-full w-full h-full 
                             bg-gradient-to-r from-transparent via-[rgba(201,169,97,0.3)] to-transparent 
                             animate-[shimmer_3s_infinite] z-[1]" />
              <Star size={12} weight="fill" className="text-[#C9A961] relative z-[2]" />
              <span className="bg-gradient-to-r from-[#B89350] to-[#C9A961] 
                             bg-clip-text text-transparent relative z-[2]">Fundadora</span>
            </motion.span>
          )}

          <h3 className="text-xl font-bold mb-1 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {member.name}
          </h3>
          <p className="text-white/70 text-xs font-medium mb-4">{member.role}</p>
          <p className="text-white/80 text-base leading-relaxed mb-4 flex-grow line-clamp-6">
            {member.shortDescription || member.description}
          </p>

          {member.credentials && member.credentials.length > 0 && (
            <div className="mt-auto pt-4 border-t border-white/10">
              <ul className="space-y-2">
                {member.credentials.slice(0, 4).map((cred, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-1.5 text-xs text-white/70"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Check size={10} weight="bold" className="text-[#C9A961] mt-0.5 shrink-0" />
                    <span>{cred}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* LinkedIn Button */}
          {member.social?.linkedin && (
            <motion.a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5
                         bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30
                         rounded-lg text-sm text-white/80 hover:text-white
                         transition-all duration-300 group w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <LinkedinLogo size={18} weight="fill" className="text-[#0A66C2]" />
              <span className="font-medium">Ver perfil en LinkedIn</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Borde dorado para fundadora */}
      {member.featured && (
        <motion.div 
          className="absolute inset-0 border-2 border-[#C9A961]/40 rounded-2xl pointer-events-none z-[2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export default TeamCard;

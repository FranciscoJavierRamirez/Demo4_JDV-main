import { motion } from 'framer-motion';
import { Briefcase, MapPin } from '@phosphor-icons/react';

interface TimelineItem {
  period: string;
  title: string;
  location: string;
}

const timelineData: TimelineItem[] = [
  {
    period: "1994-2009",
    title: "Abogada Jefe",
    location: "Contraloría Regional de Magallanes y la Antártica Chilena"
  },
  {
    period: "2010-2012",
    title: "Abogada Jefe",
    location: "Comité II División de Toma de Razón y Registro, Santiago"
  },
  {
    period: "2012-2017",
    title: "Contralora Regional",
    location: "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    period: "2018-2020",
    title: "Contralora Regional",
    location: "Región de Arica y Parinacota"
  },
  {
    period: "2020-2024",
    title: "Jefe de Unidad",
    location: "Personal y Responsabilidad Administrativa, I Contraloría Regional Metropolitana"
  },
  {
    period: "2024-2025",
    title: "Abogada Senior",
    location: "Unidad Jurídica, II Contraloría Regional Metropolitana"
  }
];

export const AboutTimelineClient = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Timeline Line (dorada) - Desktop only */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A961] via-[#E5D5AA] to-[#C9A961] hidden md:block -translate-x-1/2 z-0" />

      {/* Timeline Line (dorada) - Mobile vertical */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A961] via-[#E5D5AA] to-[#C9A961] md:hidden z-0" />

      {/* Timeline Items */}
      <div className="space-y-8 md:space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-row md:justify-between`}
          >
            {/* Spacer for alternating layout - Desktop */}
            <div className="hidden md:block md:w-5/12" />

            {/* Timeline Node (centro) - Desktop */}
            <motion.div
              className="hidden md:flex absolute left-1/2 -translate-x-1/2
                         w-4 h-4 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B89350]
                         border-4 border-[#1E40AF] shadow-[0_0_20px_rgba(201,169,97,0.4)]
                         z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            />

            {/* Timeline Node (lado izquierdo) - Mobile */}
            <motion.div
              className="flex md:hidden absolute left-4 -translate-x-1/2
                         w-3 h-3 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B89350]
                         border-2 border-[#1E40AF] shadow-[0_0_15px_rgba(201,169,97,0.3)]
                         z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            />

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full md:w-5/12 ml-8 md:ml-0 bg-white/10 backdrop-blur-lg border border-white/20
                         rounded-2xl p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                         hover:shadow-[0_12px_40px_rgba(201,169,97,0.25),0_0_40px_rgba(201,169,97,0.1)]
                         transition-shadow duration-500 relative overflow-hidden group"
            >
              {/* Spotlight effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 pointer-events-none
                            bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,97,0.08),transparent_60%)]" />

              {/* Content */}
              <div className="relative z-10">
                {/* Period Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 
                               bg-gradient-to-r from-[#C9A961]/20 to-[#C9A961]/10 
                               border border-[#C9A961]/40 rounded-full 
                               text-xs font-semibold text-[#C9A961] mb-3">
                  {item.period}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2" 
                    style={{ fontFamily: 'var(--font-display)' }}>
                  <Briefcase size={20} weight="fill" className="text-[#C9A961] shrink-0" />
                  <span>{item.title}</span>
                </h3>

                {/* Location */}
                <p className="text-white/70 text-sm flex items-start gap-2">
                  <MapPin size={16} weight="fill" className="shrink-0 mt-0.5 text-[#C9A961]" />
                  <span>{item.location}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutTimelineClient;

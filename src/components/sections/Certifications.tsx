import { motion } from "framer-motion";
import { useSettingsStore } from "../../store/useSettingsStore";
import { certifications } from "../../data/certifications";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { techData } from "../../data/techData";

const Icons = {
  Award: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
      <path d="M12 7V3" />
      <path d="M11 4h2" />
    </svg>
  ),
  Course: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  External: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  ),
};

const parseDate = (dateObj: { en: string; br: string }) => {
  return new Date(dateObj.en).getTime();
};

const Certifications = () => {
  const { lang } = useSettingsStore();
  const scrollRef = useHorizontalScroll<HTMLDivElement>();

  const sortedCertifications = [...certifications].sort(
    (a, b) => parseDate(b.issueDate) - parseDate(a.issueDate),
  );

  return (
    <section className="py-20 px-4 md:px-10 mx-auto bg-black-blue overflow-hidden">
      <header className="mb-12 mx-auto">
        <h2 className="text-8xl font-black text-white italic uppercase tracking-tighter">
          Certificates <span className="text-light-blue">&</span> Awards
        </h2>
      </header>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-4 pb-8 custom-scrollbar"
      >
        {sortedCertifications.map((cert, index) => (
          <motion.div
            key={cert.credentialId || cert.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex-none w-[350px] md:w-[450px] flex flex-col snap-start border border-white/5 rounded-2xl overflow-hidden hover:border-light-blue/50 transition-all duration-500"
          >
            <div className="absolute top-4 left-4 z-10">
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md ${
                  cert.type === "award"
                    ? "bg-yellow-400/30 border-yellow-400/50 text-yellow-400"
                    : "bg-blue-400/30 border-blue-700/50 text-blue-700"
                }`}
              >
                {cert.type === "award" ? <Icons.Award /> : <Icons.Course />}
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest">
                  {cert.type}
                </span>
              </div>
            </div>

            <a
              href={cert.img}
              target="_blank"
              rel="noreferrer"
              className="relative h-48 shrink-0 overflow-hidden cursor-pointer"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black-blue via-transparent to-transparent" />
            </a>

            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  {cert.issuer} • {cert.issueDate[lang]}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 leading-tight group-hover:text-light-blue transition-colors line-clamp-2">
                  {cert.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {cert.skills.map((skill) => {
                  const tech = techData
                    .flatMap((category) => category.items)
                    .find((item) => item.id === skill);
                  return (
                    <span
                      key={skill}
                      className="text-[9px] font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded text-gray-400 uppercase"
                    >
                      {tech?.title ?? skill}
                    </span>
                  );
                })}
              </div>

              <div className="h-10 pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                <span className="text-[9px] font-mono text-white/20 line-clamp-2">
                  {cert.credentialId
                    ? `ID: ${cert.credentialId}`
                    : cert.description?.[lang]}
                </span>
                <a
                  href={cert.credentialUrl || cert.img}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center shrink-0 text-nowrap gap-2 text-[10px] font-mono text-light-blue hover:text-white transition-colors uppercase"
                >
                  {cert.credentialUrl ? "Verify" : "View Image"}{" "}
                  <Icons.External />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

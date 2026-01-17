import { useSettingsStore } from "../../store/useSettingsStore";
import scrollToSection from "../../utils/scrollToSection";
import AtIcon from "../icons/AtIcon";
import DownloadIcon from "../icons/DownloadIcon";
import GithubLogo from "../icons/GithubIcon";
import LinkedInLogo from "../icons/LinkedInIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useSettingsStore();
  return (
    <footer
      id="footer"
      className="relative border-t border-white/5 bg-black pt-16 pb-8 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-main-blue to-transparent shadow-[0_0_50px_2px_rgba(59,130,246,0.5)]"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
                RomeuPeniche<span className="text-main-blue">.dev</span>
              </h2>
              <p className="text-gray-400 max-w-xs leading-relaxed text-sm">
                {t("footer.rpdev")}
              </p>
            </div>

            <a
              href="/cvs/br.pdf" // usar o lang para trocar entre a versao br e a versao en
              download="CV_Romeu_Peniche.pdf"
              className="group relative flex items-center justify-center gap-3 w-fit px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:bg-main-blue/10 hover:border-main-blue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <DownloadIcon className="w-5 h-5 text-main-blue transition-transform group-hover:scale-110" />
              <span>Download CV</span>

              <div className="absolute inset-0 rounded-xl bg-main-blue/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm italic">
              {t("footer.nav")}
            </h3>
            <nav className="flex flex-col gap-2">
              {["about", "tech-stack", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-400 hover:text-main-blue transition-colors w-fit cursor-pointer capitalize"
                >
                  {section === "tech-stack"
                    ? t("footer.tech")
                    : section === "about"
                    ? t("footer.about")
                    : section === "projects"
                    ? t("footer.projects")
                    : t("footer.contact")}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm italic">
              {t("footer.contactMe")}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/romeupeniche"
                target="_blank"
                className="p-2 bg-white/5 rounded-full hover:bg-main-blue/20 hover:text-main-blue transition-all border border-white/5 group"
              >
                <GithubLogo className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com/in/romeupeniche"
                target="_blank"
                className="p-2 bg-white/5 rounded-full hover:bg-main-blue/20 hover:text-main-blue transition-all border border-white/5 group"
              >
                <LinkedInLogo className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="mailto:romeupeniche12@hotmail.com"
                target="_blank"
                className="p-2 bg-white/5 rounded-full hover:bg-main-blue/20 hover:text-main-blue transition-all border border-white/5 group"
              >
                <AtIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">
                {t("footer.available")}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} — {t("footer.developedWith")}
            <span className="text-main-blue">React</span> &{" "}
            <span className="text-main-blue">Tailwind</span>
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-[0.2em]">
            Built for performance
            <div className="w-1 h-1 bg-main-blue rounded-full shadow-[0_0_5px_#3b82f6]"></div>
            Always evolving
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

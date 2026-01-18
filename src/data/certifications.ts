import UC_a45a9e22_4415_4d80_92e2_a7f3dfa13432 from "../assets/certifications/UC-a45a9e22-4415-4d80-92e2-a7f3dfa13432.jpg";
import UC_1710db49_f919_452f_95ca_bef44f804f8b from "../assets/certifications/UC-1710db49-f919-452f-95ca-bef44f804f8b.jpg";
import CCC2025 from "../assets/certifications/CCC2025.jpg";
import ONScholar from "../assets/certifications/ONScholar.jpg";
import HonourRoll2425 from "../assets/certifications/HonourRoll2425.jpg";
import LDCSBCodingComp2024 from "../assets/certifications/LDCSBCodingComp2024.jpg";
import HighestTGJ3M2223 from "../assets/certifications/HighestTGJ3M2223.jpg";

interface TCertification {
  type: "award" | "course";
  title: string;
  issuer: "Udemy" | string;
  issueDate: { en: string; br: string };
  credentialId: string | null;
  description: { en: string; br: string } | null;
  credentialUrl: string | null;
  skills: string[];
  img: string;
}

export const certifications: TCertification[] = [
  {
    type: "course",
    title: "Curso Web Moderno Completo com JavaScript + Projetos",
    issuer: "Udemy",
    issueDate: {
      en: "September 2025",
      br: "Setembro 2025",
    },
    credentialId: "UC-a45a9e22-4415-4d80-92e2-a7f3dfa13432",
    description: null,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-a45a9e22-4415-4d80-92e2-a7f3dfa13432",
    skills: ["javascript", "html", "css", "nodejs", "git"],
    img: UC_a45a9e22_4415_4d80_92e2_a7f3dfa13432,
  },
  {
    type: "course",
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    issuer: "Udemy",
    issueDate: {
      en: "August 2023",
      br: "Agosto 2023",
    },
    credentialId: "UC-1710db49-f919-452f-95ca-bef44f804f8b",
    description: null,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-1710db49-f919-452f-95ca-bef44f804f8b",
    skills: ["react", "redux", "reactrouter", "nextjs", "typescript"],
    img: UC_1710db49_f919_452f_95ca_bef44f804f8b,
  },
  {
    type: "award",
    title: "Canadian Computing Competition (Junior Division)",
    issuer: "CEMC",
    issueDate: {
      en: "February 2025",
      br: "Fevereiro 2025",
    },
    credentialId: null,
    description: {
      en: "Official 2025 rankings were not published by Waterloo; verification via personal certificate.",
      br: "Rankings oficiais de 2025 não foram publicados pela Waterloo; verificação via certificado pessoal.",
    },
    credentialUrl: null,
    // "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024CCCResults.pdf",
    skills: ["python", "javascript"],
    img: CCC2025,
  },
  {
    type: "award",
    title: "Ontario Scholar",
    issuer: "Ministry of Education - Ontario",
    issueDate: {
      en: "June 2025",
      br: "Junho 2025",
    },
    credentialId: null,
    description: {
      en: "Designated as an Ontario Scholar for obtaining an average of at least 80% in six Grade 12 courses.",
      br: "Designado como Ontario Scholar por obter uma média de pelo menos 80% em seis disciplinas do 12º ano.",
    },
    credentialUrl: null,
    skills: ["python", "javascript"],
    img: ONScholar,
  },
  {
    type: "award",
    title: "Mother Teresa Honour Roll",
    issuer: "Mother Teresa Catholic Secondary School",
    issueDate: {
      en: "June 2025",
      br: "Junho 2025",
    },
    credentialId: null,
    description: {
      en: "Academic excellence (80%+ average) with a perfect 100% score in Grade 12 Computer Science (ICS4U).",
      br: "Excelência acadêmica (média 80%+) com nota máxima de 100% em Ciência da Computação do 12º ano (ICS4U).",
    },
    credentialUrl: null,
    skills: ["python", "javascript", "Java"],
    img: HonourRoll2425,
  },
  {
    type: "award",
    title: "LDCSB Coding Competition",
    issuer: "London District Catholic School Board",
    issueDate: {
      en: "April 2024",
      br: "Abril 2024",
    },
    credentialId: null,
    description: {
      en: "Ranked 4th place out of the entire school district, leading the competition for the majority of the event.",
      br: "4º lugar entre todos os alunos do distrito escolar, liderando a competição durante a maior parte do evento.",
    },
    credentialUrl: null,
    skills: ["python"],
    img: LDCSBCodingComp2024,
  },
  {
    type: "award",
    title: "Highest Academic Grade - Communications Technology (TGJ3M)",
    issuer: "Mother Teresa Catholic Secondary School",
    issueDate: {
      en: "June 2023",
      br: "Junho 2023",
    },
    credentialId: null,
    description: {
      en: "Achieved the highest overall grade in the class for Communications Technology, focusing on professional video editing and digital media production.",
      br: "Alcançou a maior nota da turma na disciplina de Tecnologia de Comunicação, com foco em edição de vídeo profissional e produção de mídia digital.",
    },
    credentialUrl: null,
    skills: ["Video Editing", "Digital Media", "Creative Design"],
    img: HighestTGJ3M2223,
  },
];

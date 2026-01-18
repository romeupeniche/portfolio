import UC_a45a9e22_4415_4d80_92e2_a7f3dfa13432 from "../assets/certifications/UC-a45a9e22-4415-4d80-92e2-a7f3dfa13432.jpg";
import UC_1710db49_f919_452f_95ca_bef44f804f8b from "../assets/certifications/UC-1710db49-f919-452f-95ca-bef44f804f8b.jpg";
import CCC2025 from "../assets/certifications/CCC2025.jpg";
import CCC2024 from "../assets/certifications/CCC2024.jpg";
import ONScholar from "../assets/certifications/ONScholar.jpg";
import LDCSBCodingComp2024 from "../assets/certifications/LDCSBCodingComp2024.jpg";
import HighestTGJ3M2223 from "../assets/certifications/HighestTGJ3M2223.jpg";
import HighestICS4U2324 from "../assets/certifications/HighestICS4U2324.jpg";
import HonourRoll2425 from "../assets/certifications/HonourRoll2425.jpg";
import HonourRoll2324 from "../assets/certifications/HonourRoll2324.jpg";
import HonourRoll2223 from "../assets/certifications/HonourRoll2223.jpg";
import DET from "../assets/certifications/DET.jpg";

interface TCertification {
  type: "award" | "course";
  title: string;
  issuer: string;
  date: Date;
  displayDate: { en: string; br: string };
  description: { en: string; br: string };
  credentialUrl: string | null;
  skills: string[];
  img: string;
}

export const certifications: TCertification[] = [
  {
    type: "course",
    title: "Curso Web Moderno Completo com JavaScript + Projetos",
    issuer: "Udemy",
    date: new Date(2025, 8),
    displayDate: { en: "September 2025", br: "Setembro 2025" },
    description: {
      en: "Full-stack development: core JavaScript, Node.js, databases, and modern web architectures.",
      br: "Desenvolvimento full-stack: JavaScript, Node.js, bancos de dados e arquiteturas modernas.",
    },
    credentialUrl:
      "https://www.udemy.com/certificate/UC-a45a9e22-4415-4d80-92e2-a7f3dfa13432",
    skills: ["javascript", "html", "css", "nodejs", "git"],
    img: UC_a45a9e22_4415_4d80_92e2_a7f3dfa13432,
  },
  {
    type: "award",
    title: "Ontario Scholar",
    issuer: "Ministry of Education - Ontario",
    date: new Date(2025, 5),
    displayDate: { en: "June 2025", br: "Junho 2025" },
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
    title: "Canadian Computing Competition (CCC) 2025",
    issuer: "University of Waterloo (CEMC)",
    date: new Date(2025, 1),
    displayDate: { en: "February 2025", br: "Fevereiro 2025" },
    description: {
      en: "Official 2025 rankings were not published by Waterloo; verification via personal certificate.",
      br: "Rankings oficiais de 2025 não foram publicados pela Waterloo; verificação via certificado pessoal.",
    },
    credentialUrl: null,
    skills: ["python", "javascript"],
    img: CCC2025,
  },
  {
    type: "award",
    title: "Duolingo English Test (C1 Advanced) - 140/160",
    issuer: "Duolingo",
    date: new Date(2025, 1, 11),
    displayDate: { en: "February 2025", br: "Fevereiro 2025" },
    description: {
      en: "Scored 140/160 (Advanced C1), demonstrating fluency in complex professional and academic environments.",
      br: "Nota 140/160 (C1 Avançado), demonstrando fluência para ambientes profissionais e acadêmicos complexos.",
    },
    credentialUrl: "https://certs.duolingo.com/7cvi94jcsu8h5csd",
    skills: ["English Proficiency", "Communication", "International Relations"],
    img: DET,
  },
  {
    type: "award",
    title: "Mother Teresa Honour Roll",
    issuer: "Mother Teresa Catholic Secondary School",
    date: new Date(2025, 0),
    displayDate: { en: "January 2025", br: "Janeiro 2025" },
    description: {
      en: "Academic excellence (80%+ average) during the first semester, featuring an 85% score in Grade 12 Mathematics.",
      br: "Excelência acadêmica (média 80%+) durante o primeiro semestre, com nota de 85% em Matemática do 12º ano.",
    },
    credentialUrl: null,
    skills: ["Mathematics", "Logic", "Problem Solving"],
    img: HonourRoll2425,
  },
  {
    type: "award",
    title: "Highest Academic Grade - Computer Science (ICS4U)",
    issuer: "Mother Teresa Catholic Secondary School",
    date: new Date(2024, 5),
    displayDate: { en: "June 2024", br: "Junho 2024" },
    description: {
      en: "Achieved the highest overall grade in Grade 12 Computer Science (ICS4U) with a perfect 100% final score.",
      br: "Alcançou a maior nota da turma em Ciência da Computação do 12º ano (ICS4U) com uma nota final perfeita de 100%.",
    },
    credentialUrl: null,
    skills: ["python", "javascript", "Java"],
    img: HighestICS4U2324,
  },
  {
    type: "award",
    title: "Mother Teresa Honour Roll",
    issuer: "Mother Teresa Catholic Secondary School",
    date: new Date(2024, 5),
    displayDate: { en: "June 2024", br: "Junho 2024" },
    description: {
      en: "Academic excellence (80%+ average) with a perfect 100% score in Grade 12 Computer Science (ICS4U).",
      br: "Excelência acadêmica (média 80%+) com nota máxima de 100% em Ciência da Computação do 12º ano (ICS4U).",
    },
    credentialUrl: null,
    skills: ["python", "javascript", "Java"],
    img: HonourRoll2324,
  },
  {
    type: "award",
    title: "LDCSB Coding Competition",
    issuer: "London District Catholic School Board",
    date: new Date(2024, 3, 17),
    displayDate: { en: "April 2024", br: "Abril 2024" },
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
    title: "Canadian Computing Competition (CCC) 2024",
    issuer: "University of Waterloo (CEMC)",
    date: new Date(2024, 1),
    displayDate: { en: "February 2024", br: "Fevereiro 2024" },
    description: {
      en: "Participation in the prestigious national programming contest, solving complex algorithmic challenges.",
      br: "Participação na prestigiada competição nacional de programação, resolvendo desafios algorítmicos complexos.",
    },
    credentialUrl:
      "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024CCCResults.pdf",
    skills: ["python"],
    img: CCC2024,
  },
  {
    type: "course",
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    issuer: "Udemy",
    date: new Date(2023, 7),
    displayDate: { en: "August 2023", br: "Agosto 2023" },
    description: {
      en: "Advanced React, Next.js, and TypeScript for building scalable, high-performance applications.",
      br: "React avançado, Next.js e TypeScript para aplicações escaláveis e de alta performance.",
    },
    credentialUrl:
      "https://www.udemy.com/certificate/UC-1710db49-f919-452f-95ca-bef44f804f8b",
    skills: ["react", "redux", "reactrouter", "nextjs", "typescript"],
    img: UC_1710db49_f919_452f_95ca_bef44f804f8b,
  },
  {
    type: "award",
    title: "Highest Academic Grade - Communications Technology (TGJ3M)",
    issuer: "Mother Teresa Catholic Secondary School",
    date: new Date(2023, 5),
    displayDate: { en: "June 2023", br: "Junho 2023" },
    description: {
      en: "Highest grade in the class (93%), specializing in professional video editing and digital media.",
      br: "Maior nota da turma (93%), com foco em edição de vídeo profissional e mídia digital.",
    },
    credentialUrl: null,
    skills: ["Video Editing", "Digital Media", "Creative Design"],
    img: HighestTGJ3M2223,
  },
  {
    type: "award",
    title: "Mother Teresa Honour Roll",
    issuer: "Mother Teresa Catholic Secondary School",
    date: new Date(2023, 5),
    displayDate: { en: "June 2023", br: "Junho 2023" },
    description: {
      en: "Academic excellence (80%+ average) during the 2022-2023 school year, notably achieving 93% in Communications Technology.",
      br: "Excelência acadêmica (média 80%+) no ano letivo 2022-2023, com destaque para a nota de 93% em Tecnologia de Comunicação.",
    },
    credentialUrl: null,
    skills: ["Video Editing", "Digital Media", "Creative Design"],
    img: HonourRoll2223,
  },
];

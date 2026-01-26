// Footy Shirts Images
import fs_bag from "../assets/projects-images/footy-shirts/bag.png";
import fs_category from "../assets/projects-images/footy-shirts/category.png";
import fs_checkout from "../assets/projects-images/footy-shirts/checkout.png";
import fs_product from "../assets/projects-images/footy-shirts/product.png";
import fs_search from "../assets/projects-images/footy-shirts/search.png";
import fs_home from "../assets/projects-images/footy-shirts/home.png";
import fs_hero from "../assets/projects-images/footy-shirts/hero.png";
// Trevo Images
import tr_hero from "../assets/projects-images/trevo/hero.png";
import tr_dashboard from "../assets/projects-images/trevo/dashboard.png";
import tr_welcome from "../assets/projects-images/trevo/welcome.png";
import tr_confirmation from "../assets/projects-images/trevo/confirmation.png";
import tr_delivery from "../assets/projects-images/trevo/delivery.png";
import tr_login from "../assets/projects-images/trevo/login.png";
import tr_product from "../assets/projects-images/trevo/product.png";
import tr_settings from "../assets/projects-images/trevo/settings.png";
// Portfolio Images
import pf_hero from "../assets/projects-images/portfolio/hero.png";
import pf_top from "../assets/projects-images/portfolio/top.png";
import pf_about from "../assets/projects-images/portfolio/about.jpeg";
import pf_certificates from "../assets/projects-images/portfolio/certificates.jpeg";
import pf_contact from "../assets/projects-images/portfolio/contact.jpeg";
import pf_footer from "../assets/projects-images/portfolio/footer.jpeg";
import pf_projects from "../assets/projects-images/portfolio/projects.png";
import pf_techstack from "../assets/projects-images/portfolio/techstack.jpeg";
import pf_webdetails from "../assets/projects-images/portfolio/webdetails.png";
import pf_mobiledetails from "../assets/projects-images/portfolio/mobiledetails.png";
// Hollow Key Images
import hk_hero from "../assets/projects-images/hollowkey/hero.png";
import hk_start from "../assets/projects-images/hollowkey/start.png";
import hk_about from "../assets/projects-images/hollowkey/about.png";
import hk_help from "../assets/projects-images/hollowkey/help.png";
import hk_died from "../assets/projects-images/hollowkey/died.png";
import hk_pause from "../assets/projects-images/hollowkey/pause.png";
import hk_playing from "../assets/projects-images/hollowkey/playing.png";
import hk_win from "../assets/projects-images/hollowkey/win.png";
// Other
import FootyShirtsIcon from "../components/icons/FootyShirtsIcon";
import type { ElementType } from "react";
import TrevoIcon from "../components/icons/TrevoIcon";
import PortfolioIcon from "../components/icons/PortfolioIcon";
import GameIcon from "../components/icons/GameIcon";

type LocalizedText = { en: string; br: string };
type ImagesDescription = {
  title: string;
  bullets: { title: string; body: string }[];
};
export interface IProject {
  id: string;
  icon: ElementType;
  title: string;
  link: string | null;
  githubURL: string;
  platform: "web" | "mobile" | "desktop";
  description: LocalizedText;
  startDate: string;
  endDate?: string;
  type: LocalizedText;
  mainTechUsed: string[];
  extraTechUsed: string[];
  deploy: "netlify" | "development" | "PyInstaller";
  heroImage: string;
  images: {
    title: LocalizedText;
    img: string;
    description: { en: ImagesDescription; br: ImagesDescription };
  }[];
}

export const PROJECTS_DATA: IProject[] = [
  {
    id: "footy_shirts",
    icon: FootyShirtsIcon,
    title: "Footy Shirts",
    link: "https://footyshirts.netlify.app",
    githubURL: "https://github.com/romeupeniche/footy-shirts",
    platform: "web",
    description: {
      en: "Footy Shirts is a digital catalog platform dedicated to football shirts, designed to provide a fluid and modern browsing experience. The project focuses on a clean and intuitive interface, allowing users to explore the jerseys of top clubs with ease and a strong emphasis on product visuals. Prioritizing performance and responsiveness, the application organizes the kits objectively, making it simple to view details and ensuring that enthusiasts can find their team's gear in an optimized, straightforward digital environment.",
      br: "O Footy Shirts é uma plataforma de catálogo digital dedicada a camisas de futebol, desenvolvida para oferecer uma experiência de navegação fluida e moderna. O projeto foca em uma interface limpa e intuitiva, permitindo que o usuário explore os uniformes dos principais clubes com praticidade e foco no visual do produto. Priorizando a performance e a responsividade, a aplicação organiza os mantos de forma objetiva, facilitando a visualização de detalhes e garantindo que o entusiasta encontre o item do seu time em um ambiente digital otimizado e direto ao ponto.",
    },
    startDate: "2023-05",
    endDate: "2023-12",
    type: {
      en: "Soccer Apparel E-Commerce",
      br: "E-Commerce de Vestuário Esportivo",
    },
    mainTechUsed: ["react", "javascript", "materialui", "reactrouter"],
    extraTechUsed: ["Tanstack Query"],
    deploy: "netlify",
    heroImage: fs_hero,
    images: [
      {
        title: {
          en: "Home Page",
          br: "Página Inicial",
        },
        img: fs_home,
        description: {
          en: {
            title:
              "This landing page is the entry point to the e-commerce experience, built for performance and user conversion.",
            bullets: [
              {
                title: "Featured & Conversion Focus",
                body: "Dynamic Hero section showcasing a featured product and new releases with clear CTAs, driving immediate user engagement.",
              },
              {
                title: "Intuitive UX",
                body: "Includes an interactive, data-driven Size Guide and a dedicated Customer Reviews section, designed to build trust and simplify the purchasing decision.",
              },
              {
                title: "Robust Structure",
                body: "The page features reusable components (FAQ, Reviews, and Footer navigation) demonstrating a scalable and clean component architecture.",
              },
            ],
          },
          br: {
            title:
              "Esta landing page é o ponto de entrada da experiência de e-commerce, arquitetada para alta performance e conversão de usuários.",
            bullets: [
              {
                title: "Destaque e Conversão",
                body: "Seção Hero dinâmica apresentando um produto em destaque e novos lançamentos com CTAs claros, visando engajamento imediato.",
              },
              {
                title: "UX Intuitiva",
                body: "Implementação de um Guia de Tamanhos interativo (baseado em dados reais) e uma seção de Avaliações de Clientes, focados em construir confiança e simplificar a decisão de compra.",
              },
              {
                title: "Estrutura Robusta",
                body: "A página utiliza componentes reutilizáveis (FAQ, Reviews e navegação do Rodapé) demonstrando uma arquitetura de componentes limpa e escalável.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Category Page",
          br: "Página de Categoria",
        },
        img: fs_category,
        description: {
          en: {
            title:
              "This is the central catalog view, showcasing robust filtering capabilities and a scalable structure designed to handle a growing inventory of products.",
            bullets: [
              {
                title: "Dynamic Categorization & Filtering",
                body: "Products are dynamically organized by broad categories (Men, Women, Kids), ensuring a clean URL structure. Users can instantly refine results using the search bar and filter options.",
              },
              {
                title: "Flexible Content Display",
                body: "The core page structure is fully reusable across all categories. The displayed content is rendered based on the selected category and filter criteria, demonstrating efficient state management.",
              },
              {
                title: "Admin Inventory Control (Feature)",
                body: "Includes an exclusive 'Admin Only' component that provides the capability to add new jerseys directly to the desired catalog, showcasing fundamental CRUD operations.",
              },
            ],
          },
          br: {
            title:
              "Esta é a visualização central do catálogo, apresentando recursos de filtragem robustos e uma estrutura escalável projetada para suportar um inventário crescente de produtos.",
            bullets: [
              {
                title: "Categorização e Filtragem Dinâmica",
                body: "Os produtos são organizados por categorias amplas (Masculino, Feminino, Infantil), garantindo uma estrutura de URL limpa. Os usuários podem refinar os resultados instantaneamente usando a busca e as opções de filtro.",
              },
              {
                title: "Exibição Flexível de Conteúdo",
                body: "A estrutura principal da página é totalmente reutilizável em todas as categorias. O conteúdo exibido é renderizado com base na categoria e critérios de filtro selecionados, demonstrando gestão de estado eficiente.",
              },
              {
                title: "Controle de Inventário (Admin)",
                body: "Inclui um componente exclusivo 'Apenas Admin' que fornece a capacidade de adicionar novas camisas diretamente ao catálogo, demonstrando operações CRUD (Criar, Ler, Atualizar, Excluir) essenciais.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Product Detail Page",
          br: "Página de Detalhe do Produto",
        },
        img: fs_product,
        description: {
          en: {
            title:
              "This page provides a high-fidelity view of the item, maximizing clarity for the purchasing decision while demonstrating robust stock management capabilities.",
            bullets: [
              {
                title: "High-Fidelity Product Visualization",
                body: "Displays both front and back images with an integrated 'Hover Zoom' feature, allowing users to inspect textures and details—crucial for an e-commerce experience.",
              },
              {
                title: "Dynamic Stock Management",
                body: "Sizes are rendered dynamically, clearly indicating availability based on real-time inventory status, ensuring a reliable and frustration-free checkout process.",
              },
              {
                title: "Full Admin CRUD Control",
                body: "Features exclusive 'Admin Only' controls (Edit/Delete icons) directly on the product view, demonstrating complete mastery over CRUD operations for content maintenance.",
              },
            ],
          },
          br: {
            title:
              "Esta página oferece uma visualização de alta fidelidade do item, maximizando a clareza para a decisão de compra e demonstrando capacidades robustas de gestão de estoque.",
            bullets: [
              {
                title: "Visualização de Produto de Alta Fidelidade",
                body: "Exibe imagens da frente e verso com um recurso integrado de 'Hover Zoom', permitindo que os usuários inspecionem texturas e detalhes—essencial para a experiência de e-commerce.",
              },
              {
                title: "Gestão Dinâmica de Estoque",
                body: "Os tamanhos são renderizados dinamicamente, indicando claramente a disponibilidade com base no status do inventário em tempo real, garantindo um processo de compra confiável.",
              },
              {
                title: "Controle CRUD Completo (Admin)",
                body: "Apresenta controles exclusivos 'Apenas Admin' (ícones de Editar/Excluir) diretamente na visualização do produto, demonstrando domínio total sobre as operações CRUD para manutenção de conteúdo.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Search Page",
          br: "Página de Pesquisa",
        },
        img: fs_search,
        description: {
          en: {
            title:
              "This page delivers a crucial e-commerce feature: an efficient, real-time search interface designed for maximum accuracy and speed.",
            bullets: [
              {
                title: "Real-Time Search Functionality",
                body: "Displays products and relevant content instantly based on user keywords, highlighting a focus on performance optimization and efficient data retrieval.",
              },
              {
                title: "Contextual Result Organization",
                body: "Filtered products are clearly displayed along with their corresponding categories (Kids, Men, Women), providing immediate context and simplifying user navigation post-search.",
              },
              {
                title: "Clean, Responsive Layout",
                body: "Features a modern, clean, and responsive design for the results grid, ensuring quick loading times and seamless display across all device sizes.",
              },
            ],
          },
          br: {
            title:
              "Esta página entrega uma funcionalidade crucial de e-commerce: uma interface de busca eficiente e em tempo real, projetada para máxima precisão e velocidade.",
            bullets: [
              {
                title: "Funcionalidade de Busca em Tempo Real",
                body: "Exibe produtos e conteúdo relevante instantaneamente com base nas palavras-chave do usuário, destacando o foco na otimização de performance e recuperação eficiente de dados.",
              },
              {
                title: "Organização Contextual de Resultados",
                body: "Os produtos filtrados são exibidos claramente junto com suas respectivas categorias (Infantil, Masculino, Feminino), fornecendo contexto imediato e simplificando a navegação pós-busca.",
              },
              {
                title: "Layout Limpo e Responsivo",
                body: "Apresenta um design moderno, limpo e responsivo para o grid de resultados, garantindo tempos de carregamento rápidos e exibição impecável em todos os tamanhos de dispositivos.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Bag Page",
          br: "Sacola de Compras",
        },
        img: fs_bag,
        description: {
          en: {
            title:
              "The Shopping Bag serves as the final review stage, designed for critical order management before proceeding to payment.",
            bullets: [
              {
                title: "Granular Item Management",
                body: "Provides direct controls within the list view, allowing users to easily modify the quantity of each product or remove items, demonstrating effective state and inventory reconciliation.",
              },
              {
                title: "Transparent Order Summary",
                body: "Features a clear financial summary detailing the subtotal, shipping, and tax, ensuring full cost transparency for the user prior to checkout.",
              },
              {
                title: "Seamless Checkout Transition",
                body: "The entire layout is focused on minimizing friction and preparing the user for the next critical step (Checkout), reflecting a focus on the conversion funnel.",
              },
            ],
          },
          br: {
            title:
              "A Sacola de Compras funciona como o estágio final de revisão, projetada para a gestão crítica do pedido antes de prosseguir com o pagamento.",
            bullets: [
              {
                title: "Gestão Granular de Itens",
                body: "Fornece controles diretos na visualização da lista, permitindo aos usuários modificar facilmente a quantidade de cada produto ou remover itens, demonstrando uma eficiente conciliação de estado e inventário.",
              },
              {
                title: "Sumário Transparente do Pedido",
                body: "Apresenta um resumo financeiro claro, detalhando o subtotal, frete e impostos, garantindo total transparência de custos para o usuário antes de finalizar a compra.",
              },
              {
                title: "Transição Suave para o Checkout",
                body: "O layout é totalmente focado em minimizar o atrito e preparar o usuário para a próxima etapa crítica (Checkout), refletindo atenção ao funil de conversão.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Checkout Page",
          br: "Página de Checkout",
        },
        img: fs_checkout,
        description: {
          en: {
            title:
              "This critical stage is designed to securely capture customer information while prioritizing data integrity and minimizing user input errors.",
            bullets: [
              {
                title: "Robust Input Validation",
                body: "All required input fields (name, address, contact info) implement necessary front-end validations, ensuring the submission of correct and complete data, which is key for data integrity.",
              },
              {
                title: "Legal and Transparency Compliance",
                body: "Uses mandatory checkboxes to ensure the user agrees to the store's terms and acknowledges that this is a personal portfolio project, highlighting attention to legal and ethical transparency.",
              },
              {
                title: "Clear Financial Review",
                body: "Maintains a persistent order summary (Subtotal, Shipping, Tax, Total) throughout the process, providing continuous clarity and trust before the final payment step.",
              },
            ],
          },
          br: {
            title:
              "Este estágio crucial é projetado para capturar informações do cliente de forma segura, priorizando a integridade dos dados e minimizando erros de entrada do usuário.",
            bullets: [
              {
                title: "Validação Robusta de Entrada",
                body: "Todos os campos obrigatórios (nome, endereço, contato) implementam validações de front-end necessárias, garantindo o envio de dados corretos e completos, fundamental para a integridade do sistema.",
              },
              {
                title: "Conformidade e Transparência",
                body: "Utiliza caixas de seleção obrigatórias para garantir que o usuário concorde com os termos da loja e reconheça que este é um projeto pessoal, destacando atenção à transparência legal e ética.",
              },
              {
                title: "Revisão Financeira Clara",
                body: "Mantém um resumo do pedido persistente (Subtotal, Frete, Imposto, Total) durante todo o processo, oferecendo clareza e confiança contínuas antes da etapa final de pagamento.",
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: "trevo",
    icon: TrevoIcon,
    title: "Trevo",
    link: null,
    githubURL: "https://github.com/romeupeniche/trevo",
    platform: "mobile",
    description: {
      en: "Trevo is a robust last-mile logistics solution designed to streamline complex B2B delivery and pickup workflows. Developed with a focus on field operational intelligence, the app transforms traditional manual processes into a high-precision digital environment. It features advanced route synchronization, a persistent location-based knowledge base for drivers, and a visual-first inventory system. Validated with real-world distribution data, Trevo solves critical friction points in the supply chain, from automated Proof of Delivery (PoD) to intelligent cargo management, making it an adaptable tool for any high-volume distribution vertical.",
      br: "O Trevo é uma solução logística de last-mile desenvolvida para otimizar fluxos complexos de entrega e coleta B2B. Focado em inteligência operacional de campo, o app transforma processos manuais tradicionais em um ambiente digital de alta precisão. Apresenta sincronização avançada de rotas, base de conhecimento persistente por geolocalização e um sistema de inventário focado em identificação visual. Validado com dados reais de distribuição, o Trevo resolve pontos críticos de fricção na cadeia de suprimentos, desde a Prova de Entrega (PoD) automatizada até o gerenciamento inteligente de carga, sendo uma ferramenta adaptável para qualquer vertical de distribuição.",
    },
    startDate: "2025-08",
    type: {
      en: "Last-Mile Delivery App",
      br: "Aplicativo de Logística Last-Mile",
    },
    mainTechUsed: ["reactnative", "typescript"],
    extraTechUsed: ["I18n"],
    deploy: "development",
    heroImage: tr_hero,
    images: [
      {
        title: {
          en: "Dashboard",
          br: "Painel Inicial",
        },
        img: tr_dashboard,
        description: {
          en: {
            title:
              "This dashboard serves as the operational nerve center for the driver, providing a comprehensive and real-time overview of the daily delivery route.",
            bullets: [
              {
                title: "Real-Time Operational Metrics",
                body: "Displays critical KPIs such as total stops, package counts (packs and kegs), and pickups, alongside dynamic data like estimated time remaining and total cargo weight.",
              },
              {
                title: "Active Task Management",
                body: "Features a prioritized 'Current Stop' card with precise location data, load details, and quick-action buttons for navigation and detailed information.",
              },
              {
                title: "Route Segmentation",
                body: "Includes a categorized breakdown of delivery points (Retail, Pubs, Convenience), allowing the driver to visualize the route profile and better manage expectations for each stop.",
              },
            ],
          },
          br: {
            title:
              "Este dashboard atua como o centro nervoso operacional para o motorista, fornecendo uma visão abrangente e em tempo real da rota de entrega diária.",
            bullets: [
              {
                title: "Métricas Operacionais em Tempo Real",
                body: "Exibe KPIs críticos como total de paradas, contagem de pacotes (fardos e barris) e coletas, além de dados dinâmicos como tempo estimado restante e peso total da carga.",
              },
              {
                title: "Gestão de Tarefas Ativas",
                body: "Apresenta um card de 'Parada Atual' priorizado com dados precisos de localização, detalhes da carga e botões de ação rápida para navegação e informações detalhadas.",
              },
              {
                title: "Segmentação de Rota",
                body: "Inclui uma decomposição categorizada dos pontos de entrega (Varejo, Pubs, Conveniência), permitindo que o motorista visualize o perfil da rota e gerencie melhor as expectativas de cada parada.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Order Details",
          br: "Sumário",
        },
        img: tr_delivery,
        description: {
          en: {
            title:
              "This order details page provides granular visibility into specific delivery items, accessible directly via the dashboard's info button.",
            bullets: [
              {
                title: "Detailed Inventory Checklist",
                body: "Displays product images, specific quantities, and aggregate metrics such as total weight (e.g., 60.12 kg) and package counts to ensure accurate inventory management.",
              },
              {
                title: "Persistent Location Insights",
                body: "Integrates a persistent notes system that allows drivers to save unique annotations for a location or view existing order observations to streamline future visits.",
              },
              {
                title: "Operational Quality Control",
                body: "Includes quick-action buttons for capturing photographic proof of delivery (signed documents) and a reporting tool for flagging incorrect addresses or system discrepancies.",
              },
            ],
          },
          br: {
            title:
              "Esta página de detalhes do pedido fornece visibilidade granular sobre itens de entrega específicos, acessível diretamente através do botão de informações do dashboard.",
            bullets: [
              {
                title: "Checklist de Inventário Detalhado",
                body: "Exibe imagens dos produtos, quantidades específicas e métricas agregadas, como peso total (ex: 60,12 kg) e contagem de volumes para garantir a gestão precisa do estoque.",
              },
              {
                title: "Insights Persistentes de Localização",
                body: "Integra um sistema de notas persistentes que permite aos motoristas salvar anotações exclusivas para um local ou visualizar observações existentes do pedido para agilizar visitas futuras.",
              },
              {
                title: "Controle de Qualidade Operacional",
                body: "Inclui botões de ação rápida para captura de prova fotográfica de entrega e uma ferramenta de reporte para sinalizar endereços incorretos ou discrepâncias do sistema.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Product Details",
          br: "Detalhes do Produto",
        },
        img: tr_product,
        description: {
          en: {
            title:
              "A sophisticated bottom-drawer component providing granular product information and a rich media experience for delivery accuracy.",
            bullets: [
              {
                title: "Advanced Media Gallery",
                body: "Features a smooth, animated carousel with full-screen zoom capabilities, displaying three distinct perspectives: the case, the unit, and the brand logo.",
              },
              {
                title: "Custom Iconography System",
                body: "Showcases a custom-built icon library, including specialized beverage types, varied packaging formats (trays/boxes), and precise vessel sizes like 473ml and 568ml cans.",
              },
              {
                title: "Technical Data Visualization",
                body: "Displays critical logistics metadata such as SKU, reference codes, and total weight, alongside visual indicators for delivery vs. pickup status.",
              },
            ],
          },
          br: {
            title:
              "Um componente de drawer inferior sofisticado que fornece informações granulares do produto e uma rica experiência de mídia para precisão na entrega.",
            bullets: [
              {
                title: "Galeria de Mídia Avançada",
                body: "Apresenta um carrossel animado com zoom em tela cheia, exibindo três perspectivas distintas: a caixa, a unidade e o logotipo da marca.",
              },
              {
                title: "Sistema de Iconografia Próprio",
                body: "Exibe uma biblioteca de ícones personalizados, incluindo tipos de bebidas, formatos de embalagem e tamanhos precisos como latas de 473ml e 568ml.",
              },
              {
                title: "Visualização de Dados Técnicos",
                body: "Apresenta metadados logísticos críticos como SKU, códigos de referência e peso total, além de indicadores visuais para status de entrega ou coleta.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Delivery Confirmation",
          br: "Confirmação de Entrega",
        },
        img: tr_confirmation,
        description: {
          en: {
            title:
              "A robust Proof of Delivery (POD) interface designed to handle complex logistics scenarios, including multiple invoices and conditional validation logic.",
            bullets: [
              {
                title: "Dynamic Status Management",
                body: "Implements a tri-state toggle (Success, Partial, Failed) per invoice, dynamically updating UI requirements like mandatory reason codes or signature verification.",
              },
              {
                title: "Contextual Validation",
                body: "Features a sophisticated validation system where note fields and reason selectors become mandatory (highlighted in red) based on the delivery outcome.",
              },
              {
                title: "Multi-Invoice Logistics",
                body: "Streamlined header with stop-specific metadata (keg/pickup indicators) and a non-blocking footer that ensures all delivery requirements are met before finalizing.",
              },
            ],
          },
          br: {
            title:
              "Uma interface robusta de Prova de Entrega (POD) projetada para cenários logísticos complexos, tratando múltiplas faturas e lógica de validação condicional.",
            bullets: [
              {
                title: "Gestão Dinâmica de Status",
                body: "Implementa um seletor de três estados (Sucesso, Parcial, Falha) por fatura, atualizando requisitos de UI como códigos de motivo ou verificação de assinatura.",
              },
              {
                title: "Validação Contextual",
                body: "Sistema de validação onde campos de notas e seletores de motivo tornam-se obrigatórios (destacados em vermelho) conforme o desfecho da entrega.",
              },
              {
                title: "Logística Multi-Fatura",
                body: "Header otimizado com metadados da parada (indicadores de barril/coleta) e um rodapé fixo que garante o cumprimento de todos os requisitos antes de finalizar.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Welcome Page",
          br: "Boas-Vindas",
        },
        img: tr_welcome,
        description: {
          en: {
            title:
              "This welcome screen serves as the initial onboarding touchpoint, designed to greet drivers with a clean, professional, and inviting interface.",
            bullets: [
              {
                title: "Brand Identity & Value Prop",
                body: "Features custom illustrations and the core mission statement, immediately communicating the app's purpose of simplifying and streamlining delivery routines.",
              },
              {
                title: "Frictionless Authentication",
                body: "Provides clear entry points for both new and returning users, including a 'Continue as' option to accelerate the login process for active drivers.",
              },
              {
                title: "Modern Logtech Aesthetic",
                body: "Utilizes a minimalist design with a soft color palette and high-quality iconography to establish a sense of reliability and ease of use.",
              },
            ],
          },
          br: {
            title:
              "Esta tela de boas-vindas serve como o ponto inicial de onboarding, projetada para recepcionar os motoristas com uma interface limpa, profissional e convidativa.",
            bullets: [
              {
                title: "Identidade Visual e Proposta de Valor",
                body: "Apresenta ilustrações personalizadas e a missão central do app, comunicando imediatamente o propósito de simplificar e agilizar as rotinas de entrega.",
              },
              {
                title: "Autenticação Sem Atrito",
                body: "Oferece pontos de entrada claros para usuários novos e recorrentes, incluindo a opção 'Continuar como' para acelerar o processo de login de motoristas ativos.",
              },
              {
                title: "Estética Logtech Moderna",
                body: "Utiliza um design minimalista com uma paleta de cores suaves e iconografia de alta qualidade para estabelecer uma sensação de confiabilidade e facilidade de uso.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Authentication",
          br: "Autenticação",
        },
        img: tr_login,
        description: {
          en: {
            title:
              "The login screen provides a secure and intuitive entry point for users, focused on clarity and accessibility across different languages.",
            bullets: [
              {
                title: "Internationalization Engine",
                body: "Features a dedicated language selector that opens a modal to switch the entire app interface between English, Portuguese, and Spanish.",
              },
              {
                title: "Smart Input Design",
                body: "Includes intuitive username and password fields with a visibility toggle (eye icon) to help users verify their credentials while maintaining security.",
              },
              {
                title: "Flexible User Flow",
                body: "Provides clear secondary actions, such as a 'Forgot password' recovery path and a back button to return to the welcome screen for account switching.",
              },
            ],
          },
          br: {
            title:
              "A tela de login oferece um ponto de entrada seguro e intuitivo para os usuários, com foco na clareza e acessibilidade em diferentes idiomas.",
            bullets: [
              {
                title: "Motor de Internacionalização",
                body: "Apresenta um seletor de idiomas dedicado que abre um modal para alternar toda a interface do app entre Inglês, Português e Espanhol.",
              },
              {
                title: "Design de Input Inteligente",
                body: "Inclui campos intuitivos de usuário e senha com um alternador de visibilidade (ícone de olho) para ajudar os usuários a verificar suas credenciais.",
              },
              {
                title: "Fluxo de Usuário Flexível",
                body: "Oferece ações secundárias claras, como recuperação de senha e um botão de retorno à tela inicial para troca de método de acesso.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Settings",
          br: "Configurações",
        },
        img: tr_settings,
        description: {
          en: {
            title:
              "The application's configuration hub, designed to manage user preferences and future logistics optimization parameters.",
            bullets: [
              {
                title: "Logistics Optimization (Planned)",
                body: "Engineered to store home and supply base locations, enabling automatic route calculation to ensure drivers start at warehouses and finish near home.",
              },
              {
                title: "Support & Ticketing System",
                body: "Features a dedicated 'Reports' section to track support tickets, such as location corrections reported during deliveries, ensuring a closed-loop resolution process.",
              },
              {
                title: "Core Functionalities",
                body: "Provides active features including a secure logout flow with confirmation modals and an integrated language selector for full app internationalization.",
              },
            ],
          },
          br: {
            title:
              "O hub de configuração do aplicativo, projetado para gerenciar preferências do usuário e parâmetros futuros de otimização logística.",
            bullets: [
              {
                title: "Otimização Logística (Planejado)",
                body: "Projetado para armazenar locais de residência e base de abastecimento, permitindo o cálculo automático de rotas para otimizar o deslocamento diário.",
              },
              {
                title: "Sistema de Suporte e Tickets",
                body: "Inclui uma seção de 'Reports' para rastrear tickets de suporte, como correções de endereços reportadas durante as entregas, garantindo a resolução de pendências.",
              },
              {
                title: "Funcionalidades Principais",
                body: "Oferece recursos ativos, incluindo um fluxo de logout seguro com modais de confirmação e um seletor de idiomas para internacionalização total do app.",
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: "portfolio",
    icon: PortfolioIcon,
    title: "Portfolio",
    link: "/",
    githubURL: "https://github.com/romeupeniche/portfolio",
    platform: "web",
    description: {
      en: "A high-performance personal portfolio designed to showcase software engineering projects with a focus on clean architecture and exceptional UX. Built with React and TypeScript, it features a bespoke design system, fluid animations, and a focus on scannability. The project demonstrates the integration of complex SVG manipulation, responsive layouts, and a modular component structure, serving as a living document of my technical evolution and design philosophy.",
      br: "Um portfólio pessoal de alta performance desenvolvido para apresentar projetos de engenharia de software com foco em arquitetura limpa e UX excepcional. Construído com React e TypeScript, apresenta um design system próprio, animações fluidas e foco em escaneabilidade. O projeto demonstra a integração de manipulação complexa de SVGs, layouts responsivos e uma estrutura de componentes modulares, servindo como um documento vivo da minha evolução técnica e filosofia de design.",
    },
    startDate: "2025-12",
    endDate: "2026-01",
    type: {
      en: "Personal Portfolio & Design System",
      br: "Portfólio Pessoal & Design System",
    },
    mainTechUsed: ["react", "typescript", "tailwind", "zustand"],
    extraTechUsed: ["I18n", "Framer Motion"],
    deploy: "netlify",
    heroImage: pf_hero,
    images: [
      {
        title: {
          en: "Hero Section",
          br: "Seção Hero",
        },
        img: pf_top,
        description: {
          en: {
            title:
              "The landing page serves as a high-impact introduction, blending visual narrative with technical performance controls.",
            bullets: [
              {
                title: "Dynamic Experience & ECO Mode",
                body: "Features a dynamic 'High-Performance' mode with fluid animations and visual effects, alongside an 'ECO' mode to ensure accessibility and smooth browsing on any device.",
              },
              {
                title: "Strategic CTA & Navigation",
                body: "Direct 'Message Me' call-to-action leads straight to the contact section, complemented by a persistent social link cluster and a responsive, section-aware header.",
              },
              {
                title: "Bi-directional Accessibility",
                body: "Integrated language switching (BR/EN) and a modular design system that adapts seamlessly across different screen sizes and performance profiles.",
              },
            ],
          },
          br: {
            title:
              "A página inicial serve como uma introdução de alto impacto, combinando narrativa visual com controles de performance técnica.",
            bullets: [
              {
                title: "Experiência Dinâmica e Modo ECO",
                body: "Apresenta um modo de 'Alta Performance' com animações fluidas e efeitos visuais, além de um modo 'ECO' para garantir acessibilidade e navegação leve em qualquer dispositivo.",
              },
              {
                title: "CTA Estratégico e Navegação",
                body: "Call-to-action 'Message Me' direciona para a seção de contato, complementado por acesso rápido às redes sociais e um header responsivo que identifica as seções.",
              },
              {
                title: "Acessibilidade Bidirecional",
                body: "Troca de idioma (BR/EN) integrada e um design system modular que se adapta perfeitamente a diferentes tamanhos de tela e perfis de hardware.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Personal Journey",
          br: "Trajetória Pessoal",
        },
        img: pf_about,
        description: {
          en: {
            title:
              "A narrative-driven section that connects early curiosity with professional technical excellence.",
            bullets: [
              {
                title: "Roots in Robotics & Computing",
                body: "Uses visual storytelling to trace my evolution from a curious child watching robotics projects to a software developer focused on scalable and well-architected products.",
              },
              {
                title: "Soft Skills & Teamwork",
                body: "Highlights personal passions like soccer to demonstrate a deep-rooted sense of teamwork, discipline, and the creative drive that fuels my search for the next challenge.",
              },
              {
                title: "Continuous Evolution",
                body: "Emphasizes a constant commitment to technical studies and personal projects, showcasing a mind that never stops searching for innovative solutions.",
              },
            ],
          },
          br: {
            title:
              "Uma seção narrativa que conecta a curiosidade precoce com a excelência técnica profissional.",
            bullets: [
              {
                title: "Raízes em Robótica e Computação",
                body: "Utiliza narrativa visual para traçar minha evolução de uma criança curiosa observando projetos de robótica até um desenvolvedor focado em produtos escaláveis e bem arquitetados.",
              },
              {
                title: "Soft Skills e Trabalho em Equipe",
                body: "Destaca paixões pessoais como o futebol para demonstrar um senso enraizado de trabalho em equipe, disciplina e o impulso criativo que alimenta minha busca pelo próximo desafio.",
              },
              {
                title: "Evolução Contínua",
                body: "Enfatiza o compromisso constante com estudos técnicos e projetos pessoais, demonstrando uma mente que nunca para de buscar soluções inovadoras.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Technical Ecosystem",
          br: "Ecossistema Técnico",
        },
        img: pf_techstack,
        description: {
          en: {
            title:
              "A dynamic showcase of technologies, categorizing expertise levels and practical application through interactive visual elements.",
            bullets: [
              {
                title: "Immersive & Reactive UI",
                body: "Features an animated 'glitch' background and dynamic typography (active in High-Performance mode) that creates a professional coding atmosphere.",
              },
              {
                title: "Strategic Categorization",
                body: "Organizes the stack into Core Competencies, Ongoing Learning, and Additional Skills, providing a transparent view of current mastery and professional growth.",
              },
              {
                title: "Project-Linked Validation",
                body: "Each technology icon features sub-indicators that link directly to specific projects in the portfolio, proving real-world application for every skill listed.",
              },
            ],
          },
          br: {
            title:
              "Uma vitrine dinâmica de tecnologias, categorizando níveis de experiência e aplicação prática através de elementos visuais interativos.",
            bullets: [
              {
                title: "UI Imersiva e Reativa",
                body: "Apresenta um fundo animado com tema 'glitch' e tipografia dinâmica (ativa no modo High-Performance) que cria uma atmosfera profissional de programação.",
              },
              {
                title: "Categorização Estratégica",
                body: "Organiza o stack em Competências Core, Aprendizado Contínuo e Habilidades Adicionais, fornecendo uma visão transparente do domínio atual e crescimento profissional.",
              },
              {
                title: "Validação por Projeto",
                body: "Cada ícone de tecnologia possui sub-indicadores que vinculam diretamente a projetos específicos do portfólio, comprovando a aplicação real de cada habilidade listada.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Featured Projects",
          br: "Projetos em Destaque",
        },
        img: pf_projects,
        description: {
          en: {
            title:
              "An interactive showcase of technical solutions, featuring dynamic mockups and deep technology integration.",
            bullets: [
              {
                title: "Adaptive Visual Identity",
                body: "Each project is presented through custom 3D-styled mockups: Laptops for Web, Smartphones for Mobile, and Retro Handhelds for Games, providing immediate platform context.",
              },
              {
                title: "Timeline & Status Tracking",
                body: "Projects are organized chronologically with status indicators (Ongoing vs. Completed), offering a clear view of my professional evolution and current focus.",
              },
              {
                title: "Interactive Preview System",
                body: "Features animated hover states where icons transform into mini-device previews (laptops, phones, or controllers), linking directly to live demos or detailed technical modals.",
              },
            ],
          },
          br: {
            title:
              "Uma vitrine interativa de soluções técnicas, apresentando mockups dinâmicos e profunda integração tecnológica.",
            bullets: [
              {
                title: "Identidade Visual Adaptável",
                body: "Cada projeto é apresentado através de mockups personalizados: Laptops para Web, Smartphones para Mobile e Portáteis Retrô para Games, fornecendo contexto imediato da plataforma.",
              },
              {
                title: "Linha do Tempo e Status",
                body: "Os projetos são organizados cronologicamente com indicadores de status (Em andamento vs. Concluído), oferecendo uma visão clara da minha evolução profissional.",
              },
              {
                title: "Sistema de Preview Interativo",
                body: "Inclui estados de hover animados onde ícones se transformam em mini-dispositivos (laptops, celulares ou controles), direcionando para demos ao vivo ou modais de detalhes técnicos.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Project Exploration (Web/Games)",
          br: "Exploração de Projetos (Web/Games)",
        },
        img: pf_webdetails,
        description: {
          en: {
            title:
              "A deep-dive interface designed as a virtual workspace, offering a comprehensive look at project architecture and live previews.",
            bullets: [
              {
                title: "Operating System UI Paradigm",
                body: "The layout mimics a desktop environment with window controls, a 'browser_preview.exe' indicator, and 'Project Details' pulsating status to simulate a live development environment.",
              },
              {
                title: "Advanced Navigation & Feedback",
                body: "Features keyboard-centric UX with dedicated indicators for ESC and Arrow keys, alongside a typewriter-animated description that expands for full technical documentation.",
              },
              {
                title: "Granular Tech Analysis",
                body: "Categorizes the stack into 'Core Stack' (main technologies) and 'Libraries & Tools' (supporting packages like Tanstack Query), providing a clear map of the project's dependency architecture.",
              },
            ],
          },
          br: {
            title:
              "Uma interface de exploração profunda projetada como um espaço de trabalho virtual, oferecendo uma visão completa da arquitetura do projeto.",
            bullets: [
              {
                title: "Paradigma de UI de Sistema Operacional",
                body: "O layout mimetiza um ambiente de desktop com controles de janela, indicador 'browser_preview.exe' e status pulsante 'Project Details' para simular um ambiente de desenvolvimento real.",
              },
              {
                title: "Navegação Avançada e Feedback",
                body: "Apresenta uma UX focada em teclado com indicadores para ESC e Setas, junto a uma descrição com animação de escrita que se expande para documentação técnica completa.",
              },
              {
                title: "Análise Técnica Granular",
                body: "Categoriza o stack em 'Core Stack' (tecnologias principais) e 'Libraries & Tools' (pacotes de suporte como Tanstack Query), fornecendo um mapa claro da arquitetura de dependências do projeto.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Project Exploration (Mobile)",
          br: "Exploração de Projetos (Mobile)",
        },
        img: pf_mobiledetails,
        description: {
          en: {
            title:
              "A dedicated mobile emulation environment designed to showcase app flows, architectural logic, and on-the-go user experiences.",
            bullets: [
              {
                title: "ISO Emulator Paradigm",
                body: "Utilizes a 'mobile_emulator.iso' interface alongside Mac-style window controls to create a professional testing and presentation environment.",
              },
              {
                title: "Full-Device Visualization",
                body: "Features a high-fidelity smartphone mockup positioned adjacent to technical descriptions, allowing for side-by-side analysis of UI elements and project documentation.",
              },
              {
                title: "Interactive Flow Navigation",
                body: "Combines typewriter-animated text descriptions with slide-based navigation, allowing users to cycle through full-screen app modules like 'Order Details' via keyboard or UI arrows.",
              },
            ],
          },
          br: {
            title:
              "Um ambiente de emulação mobile dedicado para apresentar fluxos de apps, lógica arquitetural e experiências de usuário móveis.",
            bullets: [
              {
                title: "Paradigma de Emulador ISO",
                body: "Utiliza uma interface 'mobile_emulator.iso' junto a controles de janela estilo Mac para criar um ambiente profissional de teste e apresentação.",
              },
              {
                title: "Visualização Completa do Dispositivo",
                body: "Apresenta um mockup de smartphone de alta fidelidade posicionado ao lado das descrições técnicas, permitindo uma análise simultânea da UI e da documentação.",
              },
              {
                title: "Navegação Interativa de Fluxo",
                body: "Combina descrições com animação de escrita e navegação por slides, permitindo percorrer módulos completos como 'Order Details' via teclado ou setas da interface.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Certificates & Awards",
          br: "Certificados e Prêmios",
        },
        img: pf_certificates,
        description: {
          en: {
            title:
              "A verified gallery of academic and professional achievements, validating technical expertise and linguistic proficiency.",
            bullets: [
              {
                title: "Credibility & Verification",
                body: "Each card features direct action buttons to either 'Verify' authenticity via external platforms (like Udemy) or 'View Image' for physical awards and diplomas.",
              },
              {
                title: "Skill Categorization",
                body: "Utilizes a 'chip' system to highlight core technologies used (e.g., JavaScript, Python) or general competencies for non-technical achievements like the C1 Advanced English proficiency.",
              },
              {
                title: "Academic Distinction",
                body: "Showcases prestigious recognitions such as the Ontario Scholar and Canadian Computing Competition awards, organized chronologically by issuing institution and date.",
              },
            ],
          },
          br: {
            title:
              "Uma galeria verificada de conquistas acadêmicas e profissionais, validando expertise técnica e proficiência linguística.",
            bullets: [
              {
                title: "Credibilidade e Verificação",
                body: "Cada card possui botões de ação direta para 'Verificar' a autenticidade via plataformas externas (como Udemy) ou 'Ver Imagem' para prêmios físicos e diplomas.",
              },
              {
                title: "Categorização de Habilidades",
                body: "Utiliza um sistema de 'chips' para destacar as tecnologias core utilizadas (ex: JavaScript, Python) ou competências gerais para conquistas não-técnicas como a proficiência C1 Advanced em Inglês.",
              },
              {
                title: "Distinção Acadêmica",
                body: "Exibe reconhecimentos de prestígio como o Ontario Scholar e prêmios da Canadian Computing Competition, organizados cronologicamente por instituição emissora e data.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Get in Touch",
          br: "Contato",
        },
        img: pf_contact,
        description: {
          en: {
            title:
              "A streamlined contact portal designed to bridge the gap between initial interest and professional collaboration.",
            bullets: [
              {
                title: "Real-time Context & Localization",
                body: "Features a dynamic 'Local Time' chip that reveals my current location (London, Ontario, Canada) on hover, providing global context for professional outreach.",
              },
              {
                title: "Low-Friction Communication",
                body: "Includes a predefined message suggestion to lower the barrier for starting a conversation, coupled with high-visibility animated contact buttons for LinkedIn, Email, and GitHub.",
              },
              {
                title: "Availability Indicator",
                body: "Integrates a pulsating 'Available for Work' status ping, creating a sense of urgency and confirming immediate readiness for new professional challenges.",
              },
            ],
          },
          br: {
            title:
              "Um portal de contato simplificado, projetado para facilitar a transição entre o interesse inicial e a colaboração profissional.",
            bullets: [
              {
                title: "Contexto em Tempo Real e Localização",
                body: "Apresenta um chip de 'Horário Local' que revela minha localização atual (London, Ontario, Canada) ao passar o mouse, fornecendo contexto global para contatos profissionais.",
              },
              {
                title: "Comunicação de Baixa Fricção",
                body: "Inclui uma sugestão de mensagem predefinida para facilitar o início de uma conversa, junto com botões de contato animados de alta visibilidade para LinkedIn, E-mail e GitHub.",
              },
              {
                title: "Indicador de Disponibilidade",
                body: "Integra um sinal pulsante de status 'Disponível para Trabalho', criando um senso de prontidão e confirmando a disponibilidade imediata para novos desafios profissionais.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Functional Footer",
          br: "Rodapé Funcional",
        },
        img: pf_footer,
        description: {
          en: {
            title:
              "A comprehensive closing section that reinforces professional branding while providing essential resources and navigation shortcuts.",
            bullets: [
              {
                title: "Professional Branding & Assets",
                body: "Features a unique 'romeupeniche.dev' branding identity and provides direct, one-click access to download my Resume in both English and Portuguese (PDF).",
              },
              {
                title: "Navigation Throwback",
                body: "Includes a structured section list to facilitate easy backtracking, allowing users to quickly return to specific areas like Tech Stack or Projects without excessive scrolling.",
              },
              {
                title: "Strategic Redundancy",
                body: "Intentionally replicates contact methods and the 'Available for New Projects' pulsating status to ensure a conversion point is always within reach at the end of the experience.",
              },
            ],
          },
          br: {
            title:
              "Uma seção de encerramento abrangente que reforça o branding profissional, fornecendo recursos essenciais e atalhos de navegação.",
            bullets: [
              {
                title: "Branding e Recursos Profissionais",
                body: "Apresenta uma identidade de branding 'romeupeniche.dev' e oferece acesso direto para download do meu Currículo em Inglês e Português (PDF).",
              },
              {
                title: "Navegação Retrô (Throwback)",
                body: "Inclui uma lista estruturada de seções para facilitar o retorno rápido a áreas específicas como Tech Stack ou Projetos sem a necessidade de scroll excessivo.",
              },
              {
                title: "Redundância Estratégica",
                body: "Replica propositalmente os métodos de contato e o status pulsante 'Disponível para Novos Projetos' para garantir que um ponto de conversão esteja sempre ao alcance.",
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: "hollowkey",
    icon: GameIcon,
    title: "Hollow Key",
    link: "",
    githubURL: "https://github.com/romeupeniche/hollowkey",
    platform: "web",
    description: {
      en: "A dark-fantasy survival dungeon crawler built with Python, featuring a bespoke lighting engine and completely original digital art. The project showcases complex game loop logic, including procedural item spawns, collision detection, and a multi-layered enemy AI system. From the hand-drawn atmospheric environments to the custom-painted sprites, this game serves as a comprehensive demonstration of multidisciplinary software development, blending creative direction with robust back-end execution.",
      br: "Um dungeon crawler de sobrevivência e dark fantasy desenvolvido em Python, apresentando uma engine de iluminação própria e arte digital completamente original. O projeto demonstra lógica complexa de game loop, incluindo spawn procedural de itens, detecção de colisão e um sistema de IA de inimigos em camadas. Das artes de ambiente desenhadas à mão aos sprites pintados por conta própria, este jogo serve como uma demonstração abrangente de desenvolvimento de software multidisciplinar, unindo direção criativa com uma execução robusta de back-end.",
    },
    startDate: "2023-12",
    endDate: "2023-12",
    type: {
      en: "Personal Portfolio & Design System",
      br: "Portfólio Pessoal & Design System",
    },
    mainTechUsed: ["python"],
    extraTechUsed: ["Pygame"],
    deploy: "development",
    heroImage: hk_hero,
    images: [
      {
        title: {
          en: "Game Start Screen",
          br: "Tela Inicial do Jogo",
        },
        img: hk_start,
        description: {
          en: {
            title:
              "A deep dive into an indie game project, showcasing custom digital art and core Python game logic.",
            bullets: [
              {
                title: "Custom Artistic Direction",
                body: "Features original environmental concept art, including a hand-drawn 'cabulosa' cave background and custom-painted character sprites based on GBA-style aesthetics.",
              },
              {
                title: "Interactive Desktop Experience",
                body: "The project simulates a PC environment with a classic 'Start/About/Help/Quit' menu system, designed to run natively as a desktop application.",
              },
              {
                title: "Asset Integration",
                body: "Demonstrates creative compositing by blending original art with modified sprites and environmental blocks, creating a unique and cohesive visual identity.",
              },
            ],
          },
          br: {
            title:
              "Exploração profunda de um projeto de jogo indie, destacando arte digital autoral e lógica de jogo em Python.",
            bullets: [
              {
                title: "Direção Artística Autoral",
                body: "Apresenta arte conceitual de ambiente original, incluindo um fundo de caverna 'cabuloso' desenhado à mão e sprites de personagens repintados com estética estilo GBA.",
              },
              {
                title: "Experiência Desktop Interativa",
                body: "O projeto simula um ambiente de PC com um sistema de menu clássico 'Start/About/Help/Quit', projetado para rodar nativamente como uma aplicação desktop.",
              },
              {
                title: "Integração de Assets",
                body: "Demonstra composição criativa ao misturar arte original com sprites modificados e blocos ambientais, criando uma identidade visual única e coesa.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Game Credits & Info",
          br: "Informações e Créditos",
        },
        img: hk_about,
        description: {
          en: {
            title:
              "A dedicated informational overlay that provides technical metadata and academic context for the project.",
            bullets: [
              {
                title: "Academic Documentation",
                body: "Clearly displays project credentials including the course code (ICS3U), completion date, and institutional location in London, Ontario.",
              },
              {
                title: "Professional Attribution",
                body: "Features formal attribution to the developer and lead instructor, maintaining the structured format of a submitted computer studies assignment.",
              },
              {
                title: "UI Consistency",
                body: "Maintains the game's visual identity with a thematic background and a functional 'Back' navigation system for seamless menu transitions.",
              },
            ],
          },
          br: {
            title:
              "Uma sobreposição informativa dedicada que fornece metadados técnicos e o contexto acadêmico do projeto.",
            bullets: [
              {
                title: "Documentação Acadêmica",
                body: "Exibe claramente as credenciais do projeto, incluindo o código do curso (ICS3U), data de conclusão e localização institucional em London, Ontario.",
              },
              {
                title: "Atribuição Profissional",
                body: "Apresenta atribuição formal ao desenvolvedor e à professora orientadora, mantendo o formato estruturado de um trabalho de estudos de computação.",
              },
              {
                title: "Consistência de UI",
                body: "Mantém a identidade visual do jogo com um fundo temático e um sistema de navegação 'Back' funcional para transições suaves de menu.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Game Tutorial & Mechanics",
          br: "Tutorial e Mecânicas",
        },
        img: hk_help,
        description: {
          en: {
            title:
              "A detailed visual guide covering movement, combat systems, and core gameplay objectives.",
            bullets: [
              {
                title: "Intuitive Control Scheme",
                body: "Illustrates the dual-input support for movement using either Arrow keys or WASD, paired with left-click mouse interaction for firing projectiles.",
              },
              {
                title: "Objective-Based Progression",
                body: "Outlines the core loop: finding the hidden key to unlock the stairs and progressing through 5 increasingly difficult dungeon levels.",
              },
              {
                title: "Enemy & Resource Management",
                body: "Provides a visual breakdown of slime types—warning about the stronger red variant—and highlights the importance of ammo collection for survival.",
              },
            ],
          },
          br: {
            title:
              "Um guia visual detalhado cobrindo movimentação, sistemas de combate e objetivos principais de gameplay.",
            bullets: [
              {
                title: "Esquema de Controles Intuitivo",
                body: "Ilustra o suporte a entrada dupla para movimento usando as setas ou WASD, pareado com a interação do botão esquerdo do mouse para disparar projéteis.",
              },
              {
                title: "Progressão Baseada em Objetivos",
                body: "Resume o loop principal: encontrar a chave escondida para desbloquear as escadas e avançar por 5 níveis de masmorra progressivamente mais difíceis.",
              },
              {
                title: "Gestão de Inimigos e Recursos",
                body: "Fornece um detalhamento visual dos tipos de slimes—alertando sobre a variante vermelha mais forte—e destaca a importância de coletar munição para sobreviver.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Active Gameplay & Mechanics",
          br: "Gameplay Ativo e Mecânicas",
        },
        img: hk_playing,
        description: {
          en: {
            title:
              "A top-down survival experience featuring dynamic lighting, procedural asset placement, and strategic combat.",
            bullets: [
              {
                title: "Atmospheric Lighting System",
                body: "The player navigates a dark, square labyrinth using a localized flashlight effect that illuminates the immediate surroundings.",
              },
              {
                title: "Survival UI & HUD",
                body: "Features a custom-designed header displaying real-time health, ammunition counts, and current floor level (out of 5).",
              },
              {
                title: "Dynamic Level Progression",
                body: "Each floor requires finding a hidden key to unlock the stairs; while the maze structures are fixed per level, the spawns for keys, ammo, and enemies are randomized for replayability.",
              },
              {
                title: "Tactical Combat & AI",
                body: "Utilizes mouse-aimed shooting to fend off chasing Slimes, with a specific difficulty spike for Red Slimes that require 3 shots instead of 1 to defeat.",
              },
            ],
          },
          br: {
            title:
              "Uma experiência de sobrevivência top-down com iluminação dinâmica, posicionamento procedural de assets e combate estratégico.",
            bullets: [
              {
                title: "Sistema de Iluminação Atmosférica",
                body: "O jogador navega por um labirinto quadrado e escuro usando um efeito de lanterna localizada que ilumina apenas os arredores imediatos.",
              },
              {
                title: "UI de Sobrevivência e HUD",
                body: "Apresenta um header de design autoral que exibe vida em tempo real, contagem de munição e o andar/fase atual (até o nível 5).",
              },
              {
                title: "Progressão Dinâmica de Nível",
                body: "Cada andar exige encontrar uma chave escondida para liberar a escada; embora as estruturas dos labirintos sejam fixas por nível, os locais de spawn de chaves, balas e inimigos mudam a cada tentativa.",
              },
              {
                title: "Combate Tático e IA",
                body: "Utiliza mira e tiro controlados pelo mouse para derrotar Slimes que perseguem o jogador, com um aumento de dificuldade para os Slimes Vermelhos que exigem 3 tiros para serem derrotados.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Pause Menu",
          br: "Menu de Pausa",
        },
        img: hk_pause,
        description: {
          en: {
            title:
              "A minimalist control overlay designed for immediate session management and quick access to game instructions.",
            bullets: [
              {
                title: "Session Management",
                body: "Includes a direct 'Resume' option to return to the active game state and a 'Quit' function that terminates the application instance.",
              },
              {
                title: "On-the-fly Assistance",
                body: "Features a 'Help' button that reopens the comprehensive tutorial screen, ensuring players can review controls and objectives without losing progress.",
              },
              {
                title: "Clean UI Design",
                body: "Utilizes a simplified version of the game's thematic interface, prioritizing high-contrast buttons for clear visibility during intense gameplay breaks.",
              },
            ],
          },
          br: {
            title:
              "Uma sobreposição de controle minimalista projetada para gerenciamento imediato da sessão e acesso rápido às instruções.",
            bullets: [
              {
                title: "Gerenciamento de Sessão",
                body: "Inclui uma opção direta de 'Resume' para retornar ao estado ativo do jogo e uma função 'Quit' que encerra a instância da aplicação.",
              },
              {
                title: "Assistência Rápida",
                body: "Apresenta um botão 'Help' que reabre a tela de tutorial completo, garantindo que os jogadores revisem controles e objetivos sem perder o progresso.",
              },
              {
                title: "Design de UI Limpo",
                body: "Utiliza uma versão simplificada da interface temática do jogo, priorizando botões de alto contraste para clareza visual durante as pausas na gameplay.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Game Over State",
          br: "Tela de Morte",
        },
        img: hk_died,
        description: {
          en: {
            title:
              "A somber end-state interface that utilizes atmospheric visual storytelling to reinforce the game's high-stakes survival theme.",
            bullets: [
              {
                title: "Visual Lore & Atmosphere",
                body: "Features a dark, haunting background filled with dozens of glowing red eyes and bizarre smiles, symbolizing the overwhelming presence of monsters in the dark.",
              },
              {
                title: "Subtle Environmental Storytelling",
                body: "Integrates low-opacity assets like a broken key and a distant staircase, visually communicating the failure to escape the current floor.",
              },
              {
                title: "Performance Tracking",
                body: "Clearly displays the specific floor level reached by the player, providing immediate feedback on their progress before prompting a restart.",
              },
              {
                title: "Session Recovery",
                body: "Includes simple, high-contrast buttons for 'Restart'—resetting the player to level 1—or 'Quit' to terminate the game session.",
              },
            ],
          },
          br: {
            title:
              "Uma interface de estado final sombria que utiliza narrativa visual atmosférica para reforçar o tema de sobrevivência do jogo.",
            bullets: [
              {
                title: "Lore Visual e Atmosfera",
                body: "Apresenta um fundo escuro e assustador repleto de dezenas de olhos vermelhos brilhantes e sorrisos bizarros, simbolizando a presença esmagadora dos monstros no escuro.",
              },
              {
                title: "Narrativa Ambiental Sutil",
                body: "Integra assets com baixa opacidade, como uma chave quebrada e uma escada distante, comunicando visualmente a falha em escapar do andar atual.",
              },
              {
                title: "Acompanhamento de Performance",
                body: "Exibe claramente o nível/andar específico alcançado pelo jogador, fornecendo feedback imediato sobre seu progresso antes de sugerir o reinício.",
              },
              {
                title: "Recuperação de Sessão",
                body: "Inclui botões simples de alto contraste para 'Restart' — resetando o jogador para o nível 1 — ou 'Quit' para encerrar a sessão do jogo.",
              },
            ],
          },
        },
      },
      {
        title: {
          en: "Victory & Treasure",
          br: "Vitória e Tesouro",
        },
        img: hk_win,
        description: {
          en: {
            title:
              "The definitive game-ending interface, utilizing high-key lighting and thematic assets to reward the player's progression.",
            bullets: [
              {
                title: "Dreamlike Visual Reward",
                body: "Features a bright, white-washed 'dreamlike' background that contrasts heavily with the game's previous darkness, symbolizing a successful escape.",
              },
              {
                title: "Thematic Lore Conclusion",
                body: "Displays the legendary treasure chests filled with gold and diamonds, fulfilling the narrative objective established at the start of the journey.",
              },
              {
                title: "Session Completion",
                body: "Provides finality with 'You Won' messaging and the standard 'Restart' or 'Quit' options, allowing for immediate replayability from level 1.",
              },
            ],
          },
          br: {
            title:
              "A interface definitiva de encerramento, utilizando iluminação de tons claros e assets temáticos para recompensar a progressão do jogador.",
            bullets: [
              {
                title: "Recompensa Visual Onírica",
                body: "Apresenta um fundo 'esbranquiçado' e brilhante que contrasta fortemente com a escuridão anterior do jogo, simbolizando uma fuga bem-sucedida.",
              },
              {
                title: "Conclusão Temática da Lore",
                body: "Exibe os lendários baús de tesouro repletos de ouro e diamantes, cumprindo o objetivo narrativo estabelecido no início da jornada.",
              },
              {
                title: "Finalização de Sessão",
                body: "Fornece um senso de conclusão com a mensagem 'You Won' e as opções padrão de 'Restart' ou 'Quit', permitindo o reinício imediato a partir do nível 1.",
              },
            ],
          },
        },
      },
    ],
  },
];

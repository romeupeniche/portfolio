// Footy Shirts Images
import fs_bag from "../assets/projects-images/footy-shirts/bag.png";
import fs_category from "../assets/projects-images/footy-shirts/category.png";
import fs_checkout from "../assets/projects-images/footy-shirts/checkout.png";
import fs_product from "../assets/projects-images/footy-shirts/product.png";
import fs_search from "../assets/projects-images/footy-shirts/search.png";
import fs_home from "../assets/projects-images/footy-shirts/home.png";
import fs_hero from "../assets/projects-images/footy-shirts/hero.png";
// Trevo Images
import tr_dashboard from "../assets/projects-images/trevo/dashboard.png";
import tr_welcome from "../assets/projects-images/trevo/welcome.png";
import tr_confirmation from "../assets/projects-images/trevo/confirmation.png";
import tr_delivery from "../assets/projects-images/trevo/delivery.png";
import tr_login from "../assets/projects-images/trevo/login.png";
import tr_product from "../assets/projects-images/trevo/product.png";
import tr_settings from "../assets/projects-images/trevo/settings.png";
// Portfolio Images
import pf_main from "../assets/projects-images/portfolio/main.jpeg";
import pf_hero from "../assets/projects-images/portfolio/hero.png";
// Hollow Key Images
import hk_hero from "../assets/projects-images/hollowkey/hero.png";
import hk_start from "../assets/projects-images/hollowkey/start.png";
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
  // period: LocalizedText;
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
    // period: {
    //   en: "May 2023 - Dec 2023",
    //   br: "Maio 2023 - Dez 2023",
    // },
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
    // period: {
    //   en: "Aug 2025 - Ongoing",
    //   br: "Ago 2025 - Em curso",
    // },
    startDate: "2025-08",
    type: {
      en: "Last-Mile Delivery App",
      br: "Aplicativo de Logística Last-Mile",
    },
    mainTechUsed: ["reactnative", "typescript"],
    extraTechUsed: ["I18n"],
    deploy: "development",
    heroImage: tr_dashboard,
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
    // period: {
    //   en: "Dec 2025 - Jan 2026",
    //   br: "Dez 2025 - Jan 2026",
    // },
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
          en: "Home Page",
          br: "Página Inicial",
        },
        img: pf_main,
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
      en: "A high-performance personal portfolio designed to showcase software engineering projects with a focus on clean architecture and exceptional UX. Built with React and TypeScript, it features a bespoke design system, fluid animations, and a focus on scannability. The project demonstrates the integration of complex SVG manipulation, responsive layouts, and a modular component structure, serving as a living document of my technical evolution and design philosophy.",
      br: "Um portfólio pessoal de alta performance desenvolvido para apresentar projetos de engenharia de software com foco em arquitetura limpa e UX excepcional. Construído com React e TypeScript, apresenta um design system próprio, animações fluidas e foco em escaneabilidade. O projeto demonstra a integração de manipulação complexa de SVGs, layouts responsivos e uma estrutura de componentes modulares, servindo como um documento vivo da minha evolução técnica e filosofia de design.",
    },
    // period: {
    //   en: "Dec 2023",
    //   br: "Dez 2023",
    // },
    startDate: "2023-12",
    endDate: "2023-12",
    type: {
      en: "Personal Portfolio & Design System",
      br: "Portfólio Pessoal & Design System",
    },
    mainTechUsed: ["python"],
    extraTechUsed: ["Pygame"],
    deploy: "PyInstaller",
    heroImage: hk_hero,
    images: [
      {
        title: {
          en: "Start Page",
          br: "Página Inicial",
        },
        img: hk_start,
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
    ],
  },
];

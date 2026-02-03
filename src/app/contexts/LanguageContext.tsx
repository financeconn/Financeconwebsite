import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.finance': 'Finance',
    'nav.economics': 'Economics',
    'nav.topics': 'Related Topics',
    'nav.resources': 'Resources',
    
    // Hero
    'hero.title': 'Welcome to',
    'hero.subtitle': 'Your complete platform to learn about finance, economics, and more. We help students and people master essential concepts of the financial world.',
    'hero.cta.about': 'Learn About Us',
    'hero.cta.resources': 'View Resources',
    
    // Features
    'features.finance.title': 'Finance',
    'features.finance.desc': 'Learn about financial management, investments, planning and much more',
    'features.economics.title': 'Economics',
    'features.economics.desc': 'Understand the economic principles that move the market and society',
    'features.topics.title': 'Related Topics',
    'features.topics.desc': 'Master fundamental concepts in accounting, business, mathematics and more',
    
    // CTA
    'cta.ready': 'Ready to expand your financial knowledge?',
    'cta.explore': 'Explore our educational materials and free resources',
    'cta.access': 'Access Resources',
    
    // Footer
    'footer.tagline': 'Democratizing knowledge about finance, economics and related topics.',
    'footer.made': 'Made with dedication for students',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.mission': 'Accessible financial education for everyone.',
  },
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.finance': 'Finanças',
    'nav.economics': 'Economia',
    'nav.topics': 'Tópicos Relacionados',
    'nav.resources': 'Recursos',
    
    // Hero
    'hero.title': 'Bem-vindo ao',
    'hero.subtitle': 'Sua plataforma completa para aprender sobre finanças, economia e muito mais. Ajudamos estudantes e pessoas a dominar conceitos essenciais do mundo financeiro.',
    'hero.cta.about': 'Conheça o Projeto',
    'hero.cta.resources': 'Ver Recursos',
    
    // Features
    'features.finance.title': 'Finanças',
    'features.finance.desc': 'Aprenda sobre gestão financeira, investimentos, planejamento e muito mais',
    'features.economics.title': 'Economia',
    'features.economics.desc': 'Entenda os princípios econômicos que movem o mercado e a sociedade',
    'features.topics.title': 'Tópicos Relacionados',
    'features.topics.desc': 'Domine conceitos fundamentais em contabilidade, negócios, matemática e mais',
    
    // CTA
    'cta.ready': 'Pronto para expandir seu conhecimento financeiro?',
    'cta.explore': 'Explore nossos materiais educacionais e recursos gratuitos',
    'cta.access': 'Acessar Recursos',
    
    // Footer
    'footer.tagline': 'Democratizando o conhecimento sobre finanças, economia e tópicos relacionados.',
    'footer.made': 'Feito com dedicação para estudantes',
    'footer.navigation': 'Navegação',
    'footer.contact': 'Contato',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.mission': 'Educação financeira acessível para todos.',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.finance': 'Finanzas',
    'nav.economics': 'Economía',
    'nav.topics': 'Temas Relacionados',
    'nav.resources': 'Recursos',
    
    // Hero
    'hero.title': 'Bienvenido a',
    'hero.subtitle': 'Tu plataforma completa para aprender sobre finanzas, economía y más. Ayudamos a estudiantes y personas a dominar conceptos esenciales del mundo financiero.',
    'hero.cta.about': 'Conócenos',
    'hero.cta.resources': 'Ver Recursos',
    
    // Features
    'features.finance.title': 'Finanzas',
    'features.finance.desc': 'Aprende sobre gestión financiera, inversiones, planificación y mucho más',
    'features.economics.title': 'Economía',
    'features.economics.desc': 'Entiende los principios económicos que mueven el mercado y la sociedad',
    'features.topics.title': 'Temas Relacionados',
    'features.topics.desc': 'Domina conceptos fundamentales en contabilidad, negocios, matemáticas y más',
    
    // CTA
    'cta.ready': '¿Listo para expandir tu conocimiento financiero?',
    'cta.explore': 'Explora nuestros materiales educativos y recursos gratuitos',
    'cta.access': 'Acceder a Recursos',
    
    // Footer
    'footer.tagline': 'Democratizando el conocimiento sobre finanzas, economía y temas relacionados.',
    'footer.made': 'Hecho con dedicación para estudiantes',
    'footer.navigation': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.mission': 'Educación financiera accesible para todos.',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.finance': 'Finance',
    'nav.economics': 'Économie',
    'nav.topics': 'Sujets Connexes',
    'nav.resources': 'Ressources',
    
    // Hero
    'hero.title': 'Bienvenue sur',
    'hero.subtitle': 'Votre plateforme complète pour apprendre les finances, l\'économie et plus encore. Nous aidons les étudiants et les personnes à maîtriser les concepts essentiels du monde financier.',
    'hero.cta.about': 'En savoir plus',
    'hero.cta.resources': 'Voir les Ressources',
    
    // Features
    'features.finance.title': 'Finance',
    'features.finance.desc': 'Apprenez la gestion financière, les investissements, la planification et bien plus',
    'features.economics.title': 'Économie',
    'features.economics.desc': 'Comprenez les principes économiques qui font bouger le marché et la société',
    'features.topics.title': 'Sujets Connexes',
    'features.topics.desc': 'Maîtrisez les concepts fondamentaux en comptabilité, affaires, mathématiques et plus',
    
    // CTA
    'cta.ready': 'Prêt à élargir vos connaissances financières?',
    'cta.explore': 'Explorez nos matériaux éducatifs et ressources gratuites',
    'cta.access': 'Accéder aux Ressources',
    
    // Footer
    'footer.tagline': 'Démocratiser les connaissances sur les finances, l\'économie et les sujets connexes.',
    'footer.made': 'Fait avec dévouement pour les étudiants',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.mission': 'Éducation financière accessible pour tous.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

import { GenericResourcesPage } from './GenericResourcesPage';

type Section = any;

interface BusinessResourcesPageProps {
  onNavigate: (section: Section) => void;
}

export function BusinessResourcesPage({ onNavigate }: BusinessResourcesPageProps) {
  const resources = [
    {
      title: 'Harvard Business Review',
      description: 'Leading business management insights and case studies',
      url: 'https://hbr.org/',
      type: 'Magazine & Articles',
      level: 'Intermediate to Advanced',
    },
    {
      title: 'Coursera - Business Strategy',
      description: 'Business courses from Wharton, INSEAD, and top business schools',
      url: 'https://www.coursera.org/browse/business',
      type: 'Online Platform',
      level: 'All Levels',
    },
    {
      title: 'edX - Business Administration',
      description: 'Learn business from MIT, Harvard, and leading institutions',
      url: 'https://www.edx.org/learn/business-administration',
      type: 'Online Platform',
      level: 'All Levels',
    },
    {
      title: 'Small Business Administration (SBA)',
      description: 'Free resources for entrepreneurs and small business owners',
      url: 'https://www.sba.gov/',
      type: 'Government Resource',
      level: 'Beginner to Intermediate',
    },
    {
      title: 'McKinsey Insights',
      description: 'Strategic business insights from McKinsey & Company',
      url: 'https://www.mckinsey.com/featured-insights',
      type: 'Research & Insights',
      level: 'Advanced',
    },
    {
      title: 'Seth Godin\'s Blog',
      description: 'Marketing and business strategy insights',
      url: 'https://seths.blog/',
      type: 'Blog',
      level: 'All Levels',
    },
  ];

  const books = [
    { title: 'Good to Great', author: 'Jim Collins', topic: 'Business Strategy' },
    { title: 'The Lean Startup', author: 'Eric Ries', topic: 'Entrepreneurship' },
    { title: 'Built to Last', author: 'Jim Collins', topic: 'Company Success' },
    { title: 'Blue Ocean Strategy', author: 'W. Chan Kim', topic: 'Competitive Strategy' },
  ];

  const tips = [
    {
      icon: '🎯',
      title: 'Learn from Case Studies',
      description: 'Analyze real business situations to understand strategic decisions',
    },
    {
      icon: '🤝',
      title: 'Network and Connect',
      description: 'Build relationships with other business professionals and mentors',
    },
    {
      icon: '📈',
      title: 'Stay Current',
      description: 'Follow business trends and adapt to changing market conditions',
    },
  ];

  return (
    <GenericResourcesPage
      onNavigate={onNavigate}
      title="Business Resources"
      description="Curated collection of the best places to learn about business online"
      resources={resources}
      books={books}
      tips={tips}
    />
  );
}

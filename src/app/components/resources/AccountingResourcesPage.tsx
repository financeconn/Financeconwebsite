import { GenericResourcesPage } from './GenericResourcesPage';

type Section = any;

interface AccountingResourcesPageProps {
  onNavigate: (section: Section) => void;
}

export function AccountingResourcesPage({ onNavigate }: AccountingResourcesPageProps) {
  const resources = [
    {
      title: 'AccountingCoach',
      description: 'Free accounting courses and tutorials for beginners',
      url: 'https://www.accountingcoach.com/',
      type: 'Educational Website',
      level: 'Beginner to Intermediate',
    },
    {
      title: 'AICPA - Resources',
      description: 'American Institute of CPAs educational resources',
      url: 'https://www.aicpa.org/',
      type: 'Professional Organization',
      level: 'Advanced',
    },
    {
      title: 'Coursera - Accounting Courses',
      description: 'Accounting courses from Wharton, UIUC, and top universities',
      url: 'https://www.coursera.org/browse/business/finance',
      type: 'Online Platform',
      level: 'All Levels',
    },
    {
      title: 'Corporate Finance Institute',
      description: 'Free accounting and finance courses',
      url: 'https://corporatefinanceinstitute.com/resources/accounting/',
      type: 'Professional Training',
      level: 'Intermediate to Advanced',
    },
    {
      title: 'My Accounting Course',
      description: 'Comprehensive accounting lessons and examples',
      url: 'https://www.myaccountingcourse.com/',
      type: 'Tutorial Website',
      level: 'Beginner',
    },
    {
      title: 'AccountingTools',
      description: 'Accounting reference and best practices',
      url: 'https://www.accountingtools.com/',
      type: 'Reference Material',
      level: 'All Levels',
    },
  ];

  const books = [
    { title: 'Financial Accounting', author: 'Robert Libby', topic: 'Financial Accounting' },
    { title: 'Accounting Made Simple', author: 'Mike Piper', topic: 'Accounting Basics' },
    { title: 'The Interpretation of Financial Statements', author: 'Benjamin Graham', topic: 'Analysis' },
    { title: 'Accounting for Dummies', author: 'John Tracy', topic: 'Beginner Guide' },
  ];

  const tips = [
    {
      icon: '📋',
      title: 'Master the Basics',
      description: 'Build a strong foundation in accounting principles and concepts',
    },
    {
      icon: '⚖️',
      title: 'Balance and Verify',
      description: 'Always ensure debits equal credits and verify your work',
    },
    {
      icon: '📊',
      title: 'Practice with Real Statements',
      description: 'Analyze real company financial statements to apply your knowledge',
    },
  ];

  return (
    <GenericResourcesPage
      onNavigate={onNavigate}
      title="Accounting Resources"
      description="Curated collection of the best places to learn accounting online"
      resources={resources}
      books={books}
      tips={tips}
    />
  );
}

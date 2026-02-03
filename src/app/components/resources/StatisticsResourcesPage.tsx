import { GenericResourcesPage } from './GenericResourcesPage';

type Section = any;

interface StatisticsResourcesPageProps {
  onNavigate: (section: Section) => void;
}

export function StatisticsResourcesPage({ onNavigate }: StatisticsResourcesPageProps) {
  const resources = [
    {
      title: 'Khan Academy - Statistics',
      description: 'Free courses covering statistics and probability fundamentals',
      url: 'https://www.khanacademy.org/math/statistics-probability',
      type: 'Online Course',
      level: 'Beginner to Intermediate',
    },
    {
      title: 'Statistics How To',
      description: 'Easy-to-understand statistics tutorials and examples',
      url: 'https://www.statisticshowto.com/',
      type: 'Educational Website',
      level: 'All Levels',
    },
    {
      title: 'Coursera - Statistics Courses',
      description: 'Statistics courses from Duke, Stanford, and top universities',
      url: 'https://www.coursera.org/browse/data-science/probability-and-statistics',
      type: 'Online Platform',
      level: 'Intermediate to Advanced',
    },
    {
      title: 'Stat Trek',
      description: 'Comprehensive statistics tutorial and reference',
      url: 'https://stattrek.com/',
      type: 'Tutorial Website',
      level: 'All Levels',
    },
    {
      title: 'OpenIntro Statistics',
      description: 'Free open-source statistics textbook and resources',
      url: 'https://www.openintro.org/book/os/',
      type: 'Textbook',
      level: 'Beginner to Intermediate',
    },
    {
      title: 'R for Data Science',
      description: 'Learn R programming for statistical analysis',
      url: 'https://r4ds.had.co.nz/',
      type: 'Programming Tutorial',
      level: 'Intermediate',
    },
  ];

  const books = [
    { title: 'The Signal and the Noise', author: 'Nate Silver', topic: 'Prediction & Analysis' },
    { title: 'Naked Statistics', author: 'Charles Wheelan', topic: 'Statistics Fundamentals' },
    { title: 'How to Lie with Statistics', author: 'Darrell Huff', topic: 'Critical Thinking' },
    { title: 'Statistics Done Wrong', author: 'Alex Reinhart', topic: 'Common Mistakes' },
  ];

  const tips = [
    {
      icon: '📊',
      title: 'Visualize Data',
      description: 'Create charts and graphs to better understand statistical patterns',
    },
    {
      icon: '🔍',
      title: 'Question Assumptions',
      description: 'Always validate statistical claims and understand limitations',
    },
    {
      icon: '💻',
      title: 'Use Software Tools',
      description: 'Practice with Excel, R, or Python for statistical analysis',
    },
  ];

  return (
    <GenericResourcesPage
      onNavigate={onNavigate}
      title="Statistics Resources"
      description="Curated collection of the best places to learn statistics online"
      resources={resources}
      books={books}
      tips={tips}
    />
  );
}

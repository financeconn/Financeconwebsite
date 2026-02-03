import { GenericResourcesPage } from './GenericResourcesPage';

type Section = any;

interface MathematicsResourcesPageProps {
  onNavigate: (section: Section) => void;
}

export function MathematicsResourcesPage({ onNavigate }: MathematicsResourcesPageProps) {
  const resources = [
    {
      title: 'Khan Academy - Mathematics',
      description: 'Comprehensive math courses from basic arithmetic to advanced calculus',
      url: 'https://www.khanacademy.org/math',
      type: 'Online Course',
      level: 'All Levels',
    },
    {
      title: 'MIT OpenCourseWare - Mathematics',
      description: 'University-level mathematics courses from MIT',
      url: 'https://ocw.mit.edu/courses/mathematics/',
      type: 'University Courses',
      level: 'Advanced',
    },
    {
      title: 'Brilliant.org',
      description: 'Interactive problem-solving approach to math and science',
      url: 'https://brilliant.org/',
      type: 'Interactive Platform',
      level: 'Intermediate to Advanced',
    },
    {
      title: 'Wolfram MathWorld',
      description: 'Comprehensive mathematics encyclopedia and reference',
      url: 'https://mathworld.wolfram.com/',
      type: 'Reference Material',
      level: 'All Levels',
    },
    {
      title: 'Paul\'s Online Math Notes',
      description: 'Free calculus and differential equations notes',
      url: 'https://tutorial.math.lamar.edu/',
      type: 'Educational Notes',
      level: 'Intermediate',
    },
    {
      title: 'Better Explained',
      description: 'Math concepts explained intuitively',
      url: 'https://betterexplained.com/',
      type: 'Educational Website',
      level: 'Beginner to Intermediate',
    },
  ];

  const books = [
    { title: 'How to Solve It', author: 'George Polya', topic: 'Problem Solving' },
    { title: 'The Joy of x', author: 'Steven Strogatz', topic: 'Math Appreciation' },
    { title: 'Calculus Made Easy', author: 'Silvanus Thompson', topic: 'Calculus' },
    { title: 'Linear Algebra Done Right', author: 'Sheldon Axler', topic: 'Linear Algebra' },
  ];

  const tips = [
    {
      icon: '📝',
      title: 'Practice Regularly',
      description: 'Solve problems daily to build and maintain mathematical skills',
    },
    {
      icon: '🎯',
      title: 'Understand, Don\'t Memorize',
      description: 'Focus on understanding concepts rather than memorizing formulas',
    },
    {
      icon: '💡',
      title: 'Apply to Real Problems',
      description: 'Use mathematics to solve real-world business and finance problems',
    },
  ];

  return (
    <GenericResourcesPage
      onNavigate={onNavigate}
      title="Mathematics Resources"
      description="Curated collection of the best places to learn mathematics online"
      resources={resources}
      books={books}
      tips={tips}
    />
  );
}

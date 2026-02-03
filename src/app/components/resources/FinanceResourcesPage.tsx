import { ArrowLeft, Book, ExternalLink } from 'lucide-react';

type Section = any;

interface FinanceResourcesPageProps {
  onNavigate: (section: Section) => void;
}

export function FinanceResourcesPage({ onNavigate }: FinanceResourcesPageProps) {
  const resources = [
    {
      title: 'Khan Academy - Personal Finance',
      description: 'Free comprehensive courses on personal finance, budgeting, and financial planning',
      url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
      type: 'Online Course',
      level: 'Beginner to Intermediate',
    },
    {
      title: 'Investopedia - Finance Education',
      description: 'Extensive library of articles, tutorials, and guides on all aspects of finance',
      url: 'https://www.investopedia.com/',
      type: 'Educational Website',
      level: 'All Levels',
    },
    {
      title: 'MIT OpenCourseWare - Finance',
      description: 'Free university-level courses in finance from MIT',
      url: 'https://ocw.mit.edu/courses/finance/',
      type: 'University Courses',
      level: 'Advanced',
    },
    {
      title: 'Coursera - Finance Specializations',
      description: 'Professional courses and specializations from top universities',
      url: 'https://www.coursera.org/browse/business/finance',
      type: 'Online Platform',
      level: 'Intermediate to Advanced',
    },
    {
      title: 'edX - Finance Courses',
      description: 'Finance courses from Harvard, MIT, and other leading institutions',
      url: 'https://www.edx.org/learn/finance',
      type: 'Online Platform',
      level: 'All Levels',
    },
    {
      title: 'Corporate Finance Institute (CFI)',
      description: 'Professional finance training and certification programs',
      url: 'https://corporatefinanceinstitute.com/',
      type: 'Professional Training',
      level: 'Intermediate to Advanced',
    },
    {
      title: 'The Balance - Personal Finance',
      description: 'Practical guides and articles on personal finance management',
      url: 'https://www.thebalancemoney.com/',
      type: 'Educational Website',
      level: 'Beginner to Intermediate',
    },
    {
      title: 'YouTube - Financial Education Channels',
      description: 'Channels like Graham Stephan, Andrei Jikh, and The Financial Diet',
      url: 'https://www.youtube.com',
      type: 'Video Content',
      level: 'All Levels',
    },
  ];

  const books = [
    { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', topic: 'Financial Education' },
    { title: 'The Intelligent Investor', author: 'Benjamin Graham', topic: 'Investing' },
    { title: 'Your Money or Your Life', author: 'Vicki Robin', topic: 'Personal Finance' },
    { title: 'The Total Money Makeover', author: 'Dave Ramsey', topic: 'Debt Management' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-green-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('resources')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Resources
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Finance Resources</h1>
          <p className="text-xl text-gray-600">
            Curated collection of the best places to learn about finance online
          </p>
        </div>
      </section>

      {/* Main Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Online Learning Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {resource.title}
                  </h3>
                  <ExternalLink className="text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" size={20} />
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    {resource.type}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {resource.level}
                  </span>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Book className="text-green-600" size={24} />
                  <h3 className="font-semibold text-gray-900">{book.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">By {book.author}</p>
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                  {book.topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Get the Most from These Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start with Basics</h3>
              <p className="text-gray-600">
                Begin with beginner-level resources and build a strong foundation
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay Consistent</h3>
              <p className="text-gray-600">
                Dedicate regular time to learning and practicing financial concepts
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply Knowledge</h3>
              <p className="text-gray-600">
                Use what you learn in real-life situations and track your progress
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowLeft, Book, ExternalLink } from 'lucide-react';

type Section = any;

interface EconomicsResourcesPageProps {
  onNavigate: (section: Section) => void;
}

export function EconomicsResourcesPage({ onNavigate }: EconomicsResourcesPageProps) {
  const resources = [
    {
      title: 'Khan Academy - Economics',
      description: 'Free courses covering micro and macroeconomics fundamentals',
      url: 'https://www.khanacademy.org/economics-finance-domain',
      type: 'Online Course',
      level: 'Beginner to Intermediate',
    },
    {
      title: 'MIT OpenCourseWare - Economics',
      description: 'University-level economics courses from MIT',
      url: 'https://ocw.mit.edu/courses/economics/',
      type: 'University Courses',
      level: 'Advanced',
    },
    {
      title: 'Marginal Revolution University',
      description: 'Free economics education videos by top professors',
      url: 'https://mru.org/',
      type: 'Video Platform',
      level: 'All Levels',
    },
    {
      title: 'Coursera - Economics',
      description: 'Economics courses from Yale, Stanford, and other top universities',
      url: 'https://www.coursera.org/browse/social-sciences/economics',
      type: 'Online Platform',
      level: 'Intermediate to Advanced',
    },
    {
      title: 'edX - Economics Courses',
      description: 'Learn economics from Harvard, MIT, and leading institutions',
      url: 'https://www.edx.org/learn/economics',
      type: 'Online Platform',
      level: 'All Levels',
    },
    {
      title: 'The Economist - Economics A-Z',
      description: 'Comprehensive economics dictionary and learning resources',
      url: 'https://www.economist.com/',
      type: 'Reference Material',
      level: 'All Levels',
    },
    {
      title: 'Federal Reserve Education',
      description: 'Educational resources on economics and monetary policy',
      url: 'https://www.federalreserveeducation.org/',
      type: 'Educational Website',
      level: 'Intermediate',
    },
    {
      title: 'IMF - Economic Research',
      description: 'International economic research and data from the IMF',
      url: 'https://www.imf.org/',
      type: 'Research & Data',
      level: 'Advanced',
    },
  ];

  const books = [
    { title: 'Economics in One Lesson', author: 'Henry Hazlitt', topic: 'Economic Fundamentals' },
    { title: 'Freakonomics', author: 'Steven Levitt', topic: 'Applied Economics' },
    { title: 'Capital in the 21st Century', author: 'Thomas Piketty', topic: 'Economic Inequality' },
    { title: 'Principles of Economics', author: 'Gregory Mankiw', topic: 'Textbook' },
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Economics Resources</h1>
          <p className="text-xl text-gray-600">
            Curated collection of the best places to learn about economics online
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
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Understand Graphs</h3>
              <p className="text-gray-600">
                Master economic models and visualizations to better understand concepts
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Follow Current Events</h3>
              <p className="text-gray-600">
                Apply economic theory to real-world news and policy decisions
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧮</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Practice Problems</h3>
              <p className="text-gray-600">
                Work through economic calculations and case studies regularly
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

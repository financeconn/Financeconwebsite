import { Book, Download, Video, FileText, Calculator, Newspaper } from 'lucide-react';

type Section = any; // Allow any section type

interface ResourcesProps {
  onNavigate: (section: Section) => void;
}

export function Resources({ onNavigate }: ResourcesProps) {
  const resourceCategories = [
    {
      icon: <Book className="text-green-600" size={24} />,
      title: 'Finance',
      description: 'Places where you can learn about finance',
      items: [
        'Personal Finance',
        'Introduction to Finance',
        'Finance Fundamentals',
        'Financial Planning',
      ],
      badge: '8 e-books',
      page: 'finance-resources' as Section,
    },
    {
      icon: <FileText className="text-green-600" size={24} />,
      title: 'Economics',
      description: 'Places where you can learn about economics',
      items: [
        'Macroeconomics',
        'Microeconomics',
        'Econometrics',
        'Economics Concepts',
      ],
      badge: '10+ sources',
      page: 'economics-resources' as Section,
    },
    {
      icon: <Video className="text-green-600" size={24} />,
      title: 'Mathematics',
      description: 'Places where you can learn about mathematics',
      items: [
        'Linear Algebra',
        'Calculus',
        'Financial Math',
        'Statistics',
      ],
      badge: '10+ sources',
      page: 'mathematics-resources' as Section,
    },
    {
      icon: <Newspaper className="text-green-600" size={24} />,
      title: 'Statistics',
      description: 'Places where you can learn about statistics',
      items: [
        'Descriptive Statistics',
        'Inferential Statistics',
        'Business Analytics',
        'Data Analysis',
      ],
      badge: '10+ resources',
      page: 'statistics-resources' as Section,
    },
    {
      icon: <Newspaper className="text-green-600" size={24} />,
      title: 'Business',
      description: 'Places where you can learn about business',
      items: [
        'Business Management',
        'Marketing Strategies',
        'Entrepreneurship',
        'Project Management',
      ],
      badge: '10+ resources',
      page: 'business-resources' as Section,
    },
    {
      icon: <Newspaper className="text-green-600" size={24} />,
      title: 'Accounting',
      description: 'Places where you can learn about accounting',
      items: [
        'Basic Accounting',
        'Financial Statements',
        'Cost Accounting',
        'Tax Accounting',
      ],
      badge: '10+ resources',
      page: 'accounting-resources' as Section,
    },
    {
      icon: <Calculator className="text-green-600" size={24} />,
      title: 'Calculators',
      description: 'Interactive tools for financial calculations',
      items: [
        'Compound Interest Calculator',
        'Retirement Simulator',
        'ROI Calculator',
        'Debt Planning Tool',
      ],
      badge: '4 tools',
      page: 'calculators' as Section,
    },
    {
      icon: <FileText className="text-green-600" size={24} />,
      title: 'Spreadsheets & Templates',
      description: 'Practical tools to apply your knowledge',
      items: [
        'Personal Budget Spreadsheet',
        'Investment Tracker',
        'Business Cash Flow',
        'Compound Interest Calculator',
      ],
      badge: '3+ sources',
      page: 'templates-resources' as Section,
    },
    {
      icon: <Download className="text-green-600" size={24} />,
      title: 'Supplementary Materials',
      description: 'Additional resources for your learning',
      items: [
        'Educational infographics',
        'Mind maps',
        'Practical checklists',
        'Glossary of terms',
      ],
      badge: '5+ resources',
      page: 'supplementary-resources' as Section,
    },
  ];

  const featuredResources = [
    {
      title: 'The Ultimate Personal Finance Guide',
      type: 'E-book',
      description: 'A complete guide to organize your financial life from scratch',
      pages: '120 pages',
      level: 'All levels',
    },
    {
      title: 'Master Budget Spreadsheet',
      type: 'Excel Template',
      description: 'Complete control of your finances with automatic analysis',
      pages: 'Ready templates',
      level: 'Beginner',
    },
    {
      title: 'Investment Course',
      type: 'Video Series',
      description: 'Learn to invest from basic to advanced',
      pages: '12 lessons',
      level: 'Intermediate',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources & Materials
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Access a complete library of free educational materials.
              E-books, spreadsheets, videos, calculators and much more to accelerate
              your learning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">20+</div>
                <div className="text-sm text-gray-600">Resources</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Free</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">6+</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-6 rounded-xl hover:shadow-xl transition-all"
              >
                <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-4">
                  {resource.type}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.pages}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                    {resource.level}
                  </span>
                </div>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            All Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all ${category.page ? 'cursor-pointer group' : ''}`}
                onClick={() => category.page && onNavigate(category.page)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center ${category.page ? 'group-hover:bg-green-600' : ''} transition-colors`}>
                    {category.icon}
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                    {category.badge}
                  </span>
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${category.page ? 'group-hover:text-green-600' : ''} transition-colors`}>
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2 mb-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-600 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                  {category.page ? 'Open Tools →' : 'View All'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Use Resources
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Choose your level
                </h3>
                <p className="text-gray-600">
                  Start with resources appropriate to your knowledge level: beginner,
                  intermediate or advanced
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Download and study
                </h3>
                <p className="text-gray-600">
                  Download the materials and dedicate time to study and practice
                  the presented concepts
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Apply in practice
                </h3>
                <p className="text-gray-600">
                  Use spreadsheets and calculators to apply knowledge in real
                  situations from your daily life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start learning today
            </h2>
            <p className="text-xl mb-8 text-green-50">
              All resources are free and available for immediate use
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
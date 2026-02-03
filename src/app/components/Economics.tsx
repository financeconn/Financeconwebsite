import { TrendingUp, Globe, Building2, Users, Landmark, LineChart } from 'lucide-react';

type Section = any; // Allow any section type

interface EconomicsProps {
  onNavigate: (section: Section) => void;
}

export function Economics({ onNavigate }: EconomicsProps) {
  const topics = [
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: 'Microeconomics',
      description: 'Study of individual behavior of consumers and firms',
      items: [
        'Supply and demand',
        'Elasticity',
        'Production costs',
        'Market structures',
      ],
      page: 'economics-micro' as Section,
    },
    {
      icon: <Globe className="text-green-600" size={24} />,
      title: 'Macroeconomics',
      description: 'Analysis of economy on national and global scale',
      items: [
        'GDP and economic growth',
        'Inflation and unemployment',
        'Monetary policy',
        'Fiscal policy',
      ],
      page: 'economics-macro' as Section,
    },
    {
      icon: <Building2 className="text-green-600" size={24} />,
      title: 'Business Economics',
      description: 'Application of economic principles in business',
      items: [
        'Cost analysis',
        'Pricing strategies',
        'Investment decisions',
        'Competitiveness',
      ],
      page: 'economics-business' as Section,
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: 'Labor Economics',
      description: 'Labor market and employment relations',
      items: [
        'Labor supply and demand',
        'Wages and productivity',
        'Unemployment',
        'Human capital',
      ],
      page: 'economics-labor' as Section,
    },
    {
      icon: <Landmark className="text-green-600" size={24} />,
      title: 'International Economics',
      description: 'Trade and finance in global context',
      items: [
        'International trade',
        'Exchange rates',
        'Balance of payments',
        'Globalization',
      ],
      page: 'economics-international' as Section,
    },
    {
      icon: <LineChart className="text-green-600" size={24} />,
      title: 'Development Economics',
      description: 'Economic growth and development of nations',
      items: [
        'Development indicators',
        'Poverty and inequality',
        'Sustainable development',
        'Development policies',
      ],
      page: 'economics-development' as Section,
    },
  ];

  const concepts = [
    {
      term: 'GDP (Gross Domestic Product)',
      definition: 'Total value of all goods and services produced in a country during a period',
    },
    {
      term: 'Inflation',
      definition: 'General and continuous increase in prices of goods and services',
    },
    {
      term: 'Interest Rate',
      definition: 'Cost of borrowed money or return on invested money',
    },
    {
      term: 'Public Deficit',
      definition: 'Situation where government spending exceeds its revenues',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Economics
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Understand the economic principles that influence our daily lives,
              from individual decisions to government policies and global trends.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">45+</div>
                <div className="text-sm text-gray-600">Concepts</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">6</div>
                <div className="text-sm text-gray-600">Areas</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Didactic</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('economics-formulas' as Section)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              📖 View All Economics Formulas
            </button>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Study Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => onNavigate(topic.page)}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all text-left group cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <ul className="space-y-2 mb-4">
                  {topic.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-green-600 font-medium text-sm group-hover:underline">
                  Learn more →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-green-600 mb-2">
                  {concept.term}
                </h3>
                <p className="text-gray-600">{concept.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Economics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Study Economics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Understand the World
              </h3>
              <p className="text-gray-600">
                Comprehend how markets, governments and society work
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Career
              </h3>
              <p className="text-gray-600">
                Economic knowledge is valued in various professional fields
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Better Decisions
              </h3>
              <p className="text-gray-600">
                Make more informed decisions about your life and business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Explore the world of economics
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Access educational materials and resources to deepen your knowledge
            </p>
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              View Economics Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
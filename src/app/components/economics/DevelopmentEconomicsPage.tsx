import { ArrowLeft, LineChart, Heart, TreePine, Building } from 'lucide-react';

type Section = any;

interface DevelopmentEconomicsPageProps {
  onNavigate: (section: Section) => void;
}

export function DevelopmentEconomicsPage({ onNavigate }: DevelopmentEconomicsPageProps) {
  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('economics')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Economics
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <LineChart size={20} />
              <span className="font-semibold">Economic Growth</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Development Economics
            </h1>
            <p className="text-xl text-gray-600">
              Study economic development, poverty reduction, inequality, and sustainable growth
              in developing and developed nations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-8 rounded-xl">
              <LineChart className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Indicators</h3>
              <p className="text-gray-600 mb-4">
                Metrics used to measure economic development and quality of life.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• GDP per capita</li>
                <li>• Human Development Index (HDI)</li>
                <li>• Life expectancy</li>
                <li>• Literacy rates</li>
                <li>• Gini coefficient</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 p-8 rounded-xl">
              <Heart className="text-red-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Poverty & Inequality</h3>
              <p className="text-gray-600 mb-4">
                Understanding and addressing poverty and income inequality.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Absolute vs relative poverty</li>
                <li>• Poverty line measurements</li>
                <li>• Income distribution</li>
                <li>• Wealth inequality</li>
                <li>• Social mobility</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-8 rounded-xl">
              <TreePine className="text-green-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Development</h3>
              <p className="text-gray-600 mb-4">
                Economic growth that meets present needs without compromising future generations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Environmental sustainability</li>
                <li>• Renewable resources</li>
                <li>• Green economy</li>
                <li>• Climate change economics</li>
                <li>• UN Sustainable Development Goals</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 p-8 rounded-xl">
              <Building className="text-purple-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Policies</h3>
              <p className="text-gray-600 mb-4">
                Strategies and policies to promote economic development.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Foreign aid and investment</li>
                <li>• Education and health policies</li>
                <li>• Infrastructure development</li>
                <li>• Institutional reforms</li>
                <li>• Technology transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Stages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Stages of Economic Development</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <h3 className="text-xl font-bold text-gray-900">Traditional Society</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Primarily agricultural economy with limited technology and low productivity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <h3 className="text-xl font-bold text-gray-900">Preconditions for Take-off</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Infrastructure development, increased education, and emergence of entrepreneurs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <h3 className="text-xl font-bold text-gray-900">Take-off</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Rapid industrialization, investment growth, and major economic transformation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <h3 className="text-xl font-bold text-gray-900">Drive to Maturity</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Diversified economy, advanced technology, and sustained growth.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <h3 className="text-xl font-bold text-gray-900">High Mass Consumption</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Focus shifts to consumer goods, services, and high living standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Challenges */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Major Development Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Population Growth</h3>
                <p className="text-sm text-gray-600">
                  Rapid population growth can strain resources and slow per capita income growth
                  in developing countries.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Debt Burden</h3>
                <p className="text-sm text-gray-600">
                  High external debt can limit government spending on development and create
                  dependency on foreign creditors.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Resource Curse</h3>
                <p className="text-sm text-gray-600">
                  Countries rich in natural resources may experience slower economic growth due
                  to corruption and mismanagement.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Brain Drain</h3>
                <p className="text-sm text-gray-600">
                  Emigration of educated and skilled workers to developed countries reduces
                  human capital in developing nations.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Institutional Weakness</h3>
                <p className="text-sm text-gray-600">
                  Weak governance, corruption, and lack of property rights can hinder
                  economic development.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Climate Vulnerability</h3>
                <p className="text-sm text-gray-600">
                  Many developing countries are most vulnerable to climate change impacts,
                  threatening food security and livelihoods.
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
              Learn About Development Economics
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Find here places where you can learn more about economic development
            </p>
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Start Learning
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

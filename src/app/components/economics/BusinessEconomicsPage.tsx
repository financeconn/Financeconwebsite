import { ArrowLeft, Building2, BarChart, Calculator, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Section = any;

interface BusinessEconomicsPageProps {
  onNavigate: (section: Section) => void;
}

export function BusinessEconomicsPage({ onNavigate }: BusinessEconomicsPageProps) {
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
              <Building2 size={20} />
              <span className="font-semibold">Business Strategy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Economics
            </h1>
            <p className="text-xl text-gray-600">
              Apply economic principles to business decision-making, from pricing strategies
              to cost analysis and competitive positioning.
            </p>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-8 rounded-xl">
              <Calculator className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Analysis</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Fixed vs Variable Costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Marginal Cost Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Economies of Scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Break-even Analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 p-8 rounded-xl">
              <BarChart className="text-purple-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing Strategies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Cost-plus Pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Value-based Pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Price Discrimination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Competitive Pricing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-8 rounded-xl">
              <TrendingUp className="text-green-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Decisions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Net Present Value (NPV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Internal Rate of Return (IRR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Payback Period</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Risk Assessment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 p-8 rounded-xl">
              <Building2 className="text-orange-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitiveness</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Competitive Advantage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Market Positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Porter's Five Forces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Value Chain Analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Business Concepts</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marginal Analysis</h3>
                <p className="text-gray-600">
                  Examining the additional benefits and costs of a decision. Businesses maximize profit
                  when marginal revenue equals marginal cost.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Opportunity Cost</h3>
                <p className="text-gray-600">
                  The value of the next best alternative foregone. Essential for evaluating business
                  decisions and resource allocation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Market Power</h3>
                <p className="text-gray-600">
                  A firm's ability to influence prices. More market power allows for higher profit margins
                  but may attract regulatory scrutiny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Apply Economics to Your Business
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Download practical business economics guides and tools
            </p>
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Download Business Tools
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

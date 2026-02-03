import { ArrowLeft, Landmark, Globe, DollarSign, TrendingUp } from 'lucide-react';

type Section = any;

interface InternationalEconomicsPageProps {
  onNavigate: (section: Section) => void;
}

export function InternationalEconomicsPage({ onNavigate }: InternationalEconomicsPageProps) {
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
              <Landmark size={20} />
              <span className="font-semibold">Global Economy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              International Economics
            </h1>
            <p className="text-xl text-gray-600">
              Explore international trade, exchange rates, globalization, and how countries
              interact economically on the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-8 rounded-xl">
              <Globe className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Trade</h3>
              <p className="text-gray-600 mb-4">
                Why countries trade, benefits of trade, and theories explaining trade patterns.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Comparative advantage</li>
                <li>• Absolute advantage</li>
                <li>• Trade barriers (tariffs, quotas)</li>
                <li>• Free trade agreements</li>
                <li>• Terms of trade</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 p-8 rounded-xl">
              <DollarSign className="text-purple-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exchange Rates</h3>
              <p className="text-gray-600 mb-4">
                How currencies are valued relative to each other and what affects their values.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Exchange rate systems</li>
                <li>• Currency appreciation/depreciation</li>
                <li>• Purchasing power parity</li>
                <li>• Interest rate parity</li>
                <li>• Foreign exchange markets</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-8 rounded-xl">
              <TrendingUp className="text-green-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Balance of Payments</h3>
              <p className="text-gray-600 mb-4">
                Record of all economic transactions between a country and the rest of the world.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Current account</li>
                <li>• Capital account</li>
                <li>• Financial account</li>
                <li>• Trade balance</li>
                <li>• Foreign reserves</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 p-8 rounded-xl">
              <Landmark className="text-orange-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Globalization</h3>
              <p className="text-gray-600 mb-4">
                Increasing economic integration and interdependence between countries.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Global supply chains</li>
                <li>• Multinational corporations</li>
                <li>• Economic integration</li>
                <li>• International institutions</li>
                <li>• Trade liberalization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Theories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Trade Theories</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comparative Advantage (David Ricardo)</h3>
                <p className="text-gray-600">
                  Countries should specialize in producing goods where they have a lower opportunity cost,
                  even if they don't have absolute advantage. Trade benefits all parties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heckscher-Ohlin Model</h3>
                <p className="text-gray-600">
                  Countries export goods that use their abundant factors of production intensively.
                  Labor-abundant countries export labor-intensive goods.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">New Trade Theory</h3>
                <p className="text-gray-600">
                  Trade is driven by economies of scale and network effects. Countries may specialize
                  due to historical accident rather than inherent advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Organizations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Major International Institutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">WTO - World Trade Organization</h3>
                <p className="text-sm text-gray-600">
                  Regulates international trade, settles trade disputes, and promotes free trade.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">IMF - International Monetary Fund</h3>
                <p className="text-sm text-gray-600">
                  Promotes monetary cooperation, financial stability, and provides loans to countries
                  in economic distress.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">World Bank</h3>
                <p className="text-sm text-gray-600">
                  Provides financial and technical assistance to developing countries for
                  development projects.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Regional Trade Blocs</h3>
                <p className="text-sm text-gray-600">
                  EU, NAFTA/USMCA, ASEAN - groups of countries with preferential trade agreements.
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
              Explore Global Economics
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Find here places where you can learn more about international economics
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

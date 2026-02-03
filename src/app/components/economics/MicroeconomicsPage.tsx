import { ArrowLeft, TrendingUp, Scale, DollarSign, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Section = any;

interface MicroeconomicsPageProps {
  onNavigate: (section: Section) => void;
}

export function MicroeconomicsPage({ onNavigate }: MicroeconomicsPageProps) {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                <TrendingUp size={20} />
                <span className="font-semibold">Individual Economics</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Microeconomics
              </h1>
              <p className="text-xl text-gray-600">
                Understand how consumers and firms make decisions, how markets work,
                and how prices are determined through supply and demand.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224311-beee4ece2199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXQlMjBzdXBwbHklMjBkZW1hbmR8ZW58MXx8fHwxNzY2NTg3MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Microeconomics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supply and Demand */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Supply and Demand</h2>
            <p className="text-lg text-gray-600 mb-8">
              Supply and demand is the fundamental model that determines prices in a market economy.
              Understanding this concept is essential to comprehend how markets work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Demand */}
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Demand</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Represents the quantity of a good or service that consumers are willing and able
                  to purchase at different price levels.
                </p>
                
                <div className="bg-white p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Law of Demand</h4>
                  <p className="text-sm text-gray-600">
                    When the price of a good increases, the quantity demanded decreases (and vice versa),
                    assuming other factors remain constant.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Factors Affecting Demand</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Consumer income</li>
                    <li>• Prices of related goods</li>
                    <li>• Consumer preferences</li>
                    <li>• Expectations about the future</li>
                    <li>• Number of consumers</li>
                  </ul>
                </div>
              </div>

              {/* Supply */}
              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="text-purple-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Supply</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Represents the quantity of a good or service that producers are willing to offer
                  at different price levels.
                </p>
                
                <div className="bg-white p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Law of Supply</h4>
                  <p className="text-sm text-gray-600">
                    When the price of a good increases, the quantity supplied increases (and vice versa),
                    as it becomes more profitable to produce.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Factors Affecting Supply</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Production costs</li>
                    <li>• Technology</li>
                    <li>• Number of sellers</li>
                    <li>• Expectations about prices</li>
                    <li>• Government policies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Market Equilibrium */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Equilibrium</h3>
              <p className="text-gray-600 mb-6">
                Market equilibrium occurs when the quantity demanded equals the quantity supplied.
                At this point, the equilibrium price and quantity are determined.
              </p>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">What Happens When There's No Equilibrium?</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold text-gray-900 mb-1">Surplus (Excess Supply)</h5>
                    <p className="text-sm text-gray-600">
                      When price is above equilibrium, quantity supplied exceeds quantity demanded.
                      Sellers reduce prices to sell excess inventory.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-gray-900 mb-1">Shortage (Excess Demand)</h5>
                    <p className="text-sm text-gray-600">
                      When price is below equilibrium, quantity demanded exceeds quantity supplied.
                      Competition among buyers drives prices up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elasticity */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Price Elasticity</h2>
            <p className="text-lg text-gray-600 mb-8">
              Elasticity measures how sensitive quantity demanded or supplied is to changes in price.
              This concept is crucial for business and policy decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Elastic</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Large variation in quantity for small price change
                </p>
                <p className="text-xs text-gray-500">Example: Luxury goods, non-essentials</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Inelastic</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Small variation in quantity despite price change
                </p>
                <p className="text-xs text-gray-500">Example: Medicine, basic necessities</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Unit Elastic</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Proportional variation between price and quantity
                </p>
                <p className="text-xs text-gray-500">Example: Some consumer goods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Structures */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Market Structures</h2>
            <p className="text-lg text-gray-600 mb-8">
              Markets can have different structures depending on the number of sellers,
              type of product, and barriers to entry.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Competition</h3>
                <p className="text-gray-600 mb-3">
                  Many buyers and sellers, homogeneous product, free entry and exit, perfect information
                </p>
                <p className="text-sm text-gray-500">Example: Agricultural markets</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white border-l-4 border-purple-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monopoly</h3>
                <p className="text-gray-600 mb-3">
                  Single seller, no close substitutes, high barriers to entry
                </p>
                <p className="text-sm text-gray-500">Example: Public utilities</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Oligopoly</h3>
                <p className="text-gray-600 mb-3">
                  Few sellers dominate the market, products may be differentiated or homogeneous
                </p>
                <p className="text-sm text-gray-500">Example: Automobile, airline industries</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-orange-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monopolistic Competition</h3>
                <p className="text-gray-600 mb-3">
                  Many sellers, differentiated products, relatively free entry
                </p>
                <p className="text-sm text-gray-500">Example: Restaurants, clothing</p>
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
              Master Microeconomics
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Find here places where you can learn more about microeconomics
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

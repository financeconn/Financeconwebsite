import { ArrowLeft, Users, Briefcase, TrendingDown } from 'lucide-react';

type Section = any;

interface LaborEconomicsPageProps {
  onNavigate: (section: Section) => void;
}

export function LaborEconomicsPage({ onNavigate }: LaborEconomicsPageProps) {
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
              <Users size={20} />
              <span className="font-semibold">Labor Markets</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Labor Economics
            </h1>
            <p className="text-xl text-gray-600">
              Study how labor markets function, wage determination, employment patterns,
              and the relationship between workers and employers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-8 rounded-xl">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Labor Supply & Demand</h3>
              <p className="text-gray-600 mb-4">
                How workers decide to participate in the labor force and how firms decide
                how many workers to hire.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Labor force participation</li>
                <li>• Work-leisure trade-off</li>
                <li>• Derived demand for labor</li>
                <li>• Labor market equilibrium</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 p-8 rounded-xl">
              <Briefcase className="text-purple-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wages & Productivity</h3>
              <p className="text-gray-600 mb-4">
                Understanding how wages are determined and the relationship between
                productivity and compensation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Wage determination</li>
                <li>• Marginal productivity theory</li>
                <li>• Wage differentials</li>
                <li>• Minimum wage effects</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 p-8 rounded-xl">
              <TrendingDown className="text-red-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unemployment</h3>
              <p className="text-gray-600 mb-4">
                Causes and consequences of unemployment, and policies to address it.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Types of unemployment</li>
                <li>• Natural rate of unemployment</li>
                <li>• Job search theory</li>
                <li>• Unemployment insurance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-8 rounded-xl">
              <TrendingDown className="text-green-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human Capital</h3>
              <p className="text-gray-600 mb-4">
                Investment in education and skills that increase worker productivity
                and earning potential.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Education and training</li>
                <li>• Returns to education</li>
                <li>• Skill development</li>
                <li>• On-the-job training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Labor Market Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-2">Labor Force Participation Rate</h3>
                <p className="text-gray-600 text-sm">
                  Percentage of working-age population that is either employed or actively seeking work.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-2">Monopsony</h3>
                <p className="text-gray-600 text-sm">
                  A labor market with only one employer, giving that employer significant power
                  to set wages below competitive levels.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-2">Compensating Differentials</h3>
                <p className="text-gray-600 text-sm">
                  Wage differences that arise to offset non-monetary characteristics of jobs
                  (danger, location, hours).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-2">Union Impact</h3>
                <p className="text-gray-600 text-sm">
                  Labor unions can increase wages for members but may reduce employment
                  opportunities in unionized sectors.
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
              Understand Labor Markets
            </h2>
            <p className="text-xl mb-8 text-green-50">
Find here places where you can learn more about labor economics
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

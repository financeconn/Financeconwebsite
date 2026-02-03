import { ArrowLeft, PiggyBank, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';

type Section = 
  | 'home' 
  | 'about' 
  | 'finance' 
  | 'economics' 
  | 'topics' 
  | 'resources'
  | 'finance-personal'
  | 'finance-investments'
  | 'finance-analysis'
  | 'finance-credit'
  | 'finance-planning'
  | 'finance-protection';

interface PersonalFinancePageProps {
  onNavigate: (section: Section) => void;
}

export function PersonalFinancePage({ onNavigate }: PersonalFinancePageProps) {
  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('finance')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Finance
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <PiggyBank size={20} />
              <span className="font-semibold">Finance Basics</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Personal Finance Management
            </h1>
            <p className="text-xl text-gray-600">
              Master the foundations of personal finance to build a solid and secure financial life.
              Learn to organize, plan, and control your money efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Manage Your Personal Finances?</h2>
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600 mb-6">
                Personal financial management is the foundation of a healthy financial life. It allows you
                to have control over your money, make informed decisions, and achieve your goals. Without
                proper financial organization, it's easy to accumulate debts, live paycheck to paycheck,
                and never realize your dreams.
              </p>
              <p className="text-gray-600">
                Learning to manage your personal finances is one of the most important skills you can develop,
                as it impacts all areas of your life and gives you the freedom to make choices aligned with
                your values and aspirations.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Main Topics</h2>
            
            {/* Budget Planning */}
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Budget Planning</h3>
              <p className="text-gray-600 mb-6">
                Budget is the foundation of personal finance. It's a plan that shows your income and expenses,
                helping you understand where your money is going and make conscious decisions.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">How to Create Your Budget:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>List all your sources of income (salary, freelancing, investments, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Categorize your fixed expenses (rent, bills, subscriptions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Record variable expenses (food, transportation, leisure)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Compare total income with total expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Adjust expenses to ensure income is greater than spending</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expense Control */}
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Expense Control</h3>
              <p className="text-gray-600 mb-6">
                Controlling expenses is essential to avoid living beyond your means and accumulating debts.
                It involves monitoring all your spending and identifying where you can cut or optimize.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingDown className="text-purple-600" size={20} />
                    Spending Reduction Tips
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Cancel unused subscriptions</li>
                    <li>• Cook at home more often</li>
                    <li>• Compare prices before buying</li>
                    <li>• Avoid impulse purchases</li>
                    <li>• Use coupons and discounts</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="text-orange-600" size={20} />
                    Red Flags
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Spending more than you earn</li>
                    <li>• Accumulating credit card debt</li>
                    <li>• Not knowing where money goes</li>
                    <li>• Living without savings</li>
                    <li>• Making frequent impulse purchases</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Emergency Fund */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Emergency Fund</h3>
              <p className="text-gray-600 mb-6">
                The emergency fund is financial security for unexpected situations like unemployment, illness,
                or urgent car/home repairs. It should have between 3 to 6 months of your expenses.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">How to Build Your Emergency Fund:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Calculate your monthly expenses</p>
                      <p className="text-sm text-gray-600">Add up all essential monthly expenses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Set goal (3-6 months)</p>
                      <p className="text-sm text-gray-600">Multiply monthly expenses by 3 to 6</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Save regularly</p>
                      <p className="text-sm text-gray-600">Allocate 10-20% of income monthly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Keep in safe, liquid investments</p>
                      <p className="text-sm text-gray-600">Savings account or conservative investments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Debt Management */}
            <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Debt Management</h3>
              <p className="text-gray-600 mb-6">
                If you have debts, it's essential to manage them properly to avoid the snowball effect
                of interest and fees. There are proven strategies to get out of debt faster.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Debt Reduction Strategies:</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-gray-900 mb-1">Snowball Method</h5>
                    <p className="text-sm text-gray-600">
                      Pay smallest debts first for psychological motivation, then move to larger ones.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold text-gray-900 mb-1">Avalanche Method</h5>
                    <p className="text-sm text-gray-600">
                      Pay debts with highest interest rates first to save money on interest.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-semibold text-gray-900 mb-1">Debt Consolidation</h5>
                    <p className="text-sm text-gray-600">
                      Combine multiple debts into one with lower interest rate for easier management.
                    </p>
                  </div>
                </div>
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
              Ready to take control of your finances?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Download our free personal budget spreadsheet and start today
            </p>
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Download Free Spreadsheet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
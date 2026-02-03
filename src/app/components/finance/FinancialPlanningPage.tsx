import { ArrowLeft, Wallet } from 'lucide-react';

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

interface FinancialPlanningPageProps {
  onNavigate: (section: Section) => void;
}

export function FinancialPlanningPage({ onNavigate }: FinancialPlanningPageProps) {
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
              <Wallet size={20} />
              <span className="font-semibold">Planning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Financial Planning
            </h1>
            <p className="text-xl text-gray-600">
              Set clear goals and create a comprehensive plan for your financial future,
              from retirement to major life purchases.
            </p>
          </div>
        </div>
      </section>

      {/* Content coming soon */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Full content for this section is being developed...</p>
          <button onClick={() => onNavigate('finance')} className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Return to Finance Topics
          </button>
        </div>
      </section>
    </div>
  );
}

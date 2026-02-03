import { ArrowLeft, Briefcase } from 'lucide-react';

type Section = any;

interface BusinessFormulasProps {
  onNavigate: (section: Section) => void;
}

export function BusinessFormulas({ onNavigate }: BusinessFormulasProps) {
  const formulaCategories = [
    {
      category: 'Business Valuation',
      formulas: [
        {
          name: 'Enterprise Value (EV)',
          formula: 'EV = Market Cap + Total Debt - Cash and Cash Equivalents',
          variables: [
            { symbol: 'Market Cap', meaning: 'Share Price × Total Shares Outstanding' },
            { symbol: 'Total Debt', meaning: 'Short-term + Long-term debt' },
            { symbol: 'Cash', meaning: 'Liquid assets that could pay down debt' },
          ],
          example: 'Market Cap $10B, Debt $2B, Cash $500M: EV = 10B + 2B - 0.5B = $11.5B',
        },
        {
          name: 'Price-to-Earnings (P/E) Ratio',
          formula: 'P/E Ratio = Market Price per Share / Earnings per Share',
          variables: [
            { symbol: 'P/E Ratio', meaning: 'How much investors pay per dollar of earnings' },
            { symbol: 'High P/E', meaning: 'Growth expectations or overvaluation' },
            { symbol: 'Low P/E', meaning: 'Value stock or underperformance concerns' },
          ],
          example: 'Stock price $100, EPS $5: P/E = 100/5 = 20x (investors pay $20 per $1 of earnings)',
        },
        {
          name: 'Price-to-Book (P/B) Ratio',
          formula: 'P/B Ratio = Market Price per Share / Book Value per Share',
          variables: [
            { symbol: 'Book Value', meaning: 'Net asset value from balance sheet' },
            { symbol: 'P/B > 1', meaning: 'Trading above book value (premium)' },
          ],
          example: 'Stock price $50, Book value $40: P/B = 50/40 = 1.25',
        },
        {
          name: 'Discounted Cash Flow (DCF)',
          formula: 'DCF = CF₁/(1+r)¹ + CF₂/(1+r)² + ... + CFₙ/(1+r)ⁿ',
          variables: [
            { symbol: 'CF', meaning: 'Expected cash flow in each period' },
            { symbol: 'r', meaning: 'Discount rate (required rate of return)' },
            { symbol: 'n', meaning: 'Number of periods' },
          ],
          example: 'Sum of all future cash flows discounted to present value using appropriate discount rate',
        },
      ],
    },
    {
      category: 'Marketing & Sales',
      formulas: [
        {
          name: 'Customer Acquisition Cost (CAC)',
          formula: 'CAC = Total Marketing & Sales Costs / Number of New Customers Acquired',
          variables: [
            { symbol: 'Marketing Costs', meaning: 'Advertising, content, campaigns' },
            { symbol: 'Sales Costs', meaning: 'Salaries, commissions, tools' },
          ],
          example: 'Spent $100,000 on marketing/sales, acquired 500 customers: CAC = $200 per customer',
        },
        {
          name: 'Customer Lifetime Value (CLV)',
          formula: 'CLV = (Average Purchase Value × Purchase Frequency × Customer Lifespan)',
          variables: [
            { symbol: 'Average Purchase', meaning: 'Typical transaction amount' },
            { symbol: 'Frequency', meaning: 'Purchases per year' },
            { symbol: 'Lifespan', meaning: 'Years customer stays active' },
          ],
          example: 'Avg purchase $50, frequency 10/year, lifespan 5 years: CLV = 50 × 10 × 5 = $2,500',
        },
        {
          name: 'CLV to CAC Ratio',
          formula: 'LTV:CAC Ratio = Customer Lifetime Value / Customer Acquisition Cost',
          variables: [
            { symbol: 'Ideal Ratio', meaning: '3:1 or higher (good unit economics)' },
            { symbol: '<1:1', meaning: 'Losing money on each customer' },
          ],
          example: 'CLV $2,500, CAC $200: Ratio = 12.5:1 (excellent)',
        },
        {
          name: 'Conversion Rate',
          formula: 'Conversion Rate = (Number of Conversions / Total Visitors) × 100%',
          variables: [
            { symbol: 'Conversions', meaning: 'Desired actions taken (sales, signups, etc.)' },
            { symbol: 'Visitors', meaning: 'Total traffic or leads' },
          ],
          example: '1,000 visitors, 50 purchases: Conversion Rate = (50/1,000) × 100% = 5%',
        },
        {
          name: 'Market Share',
          formula: 'Market Share = (Company Sales / Total Market Sales) × 100%',
          variables: [
            { symbol: 'Company Sales', meaning: 'Your revenue in the market' },
            { symbol: 'Total Market Sales', meaning: 'Industry-wide revenue' },
          ],
          example: 'Company sales $50M, market $500M: Market Share = 10%',
        },
      ],
    },
    {
      category: 'Growth & Performance',
      formulas: [
        {
          name: 'Revenue Growth Rate',
          formula: 'Growth Rate = [(Current Revenue - Previous Revenue) / Previous Revenue] × 100%',
          variables: [
            { symbol: 'Current Revenue', meaning: 'Revenue in current period' },
            { symbol: 'Previous Revenue', meaning: 'Revenue in comparison period' },
          ],
          example: 'Previous $1M, current $1.2M: Growth = [(1.2M - 1M) / 1M] × 100% = 20%',
        },
        {
          name: 'Compound Annual Growth Rate (CAGR)',
          formula: 'CAGR = [(Ending Value / Beginning Value)^(1/n) - 1] × 100%',
          variables: [
            { symbol: 'n', meaning: 'Number of years' },
            { symbol: 'CAGR', meaning: 'Smoothed annual growth rate' },
          ],
          example: 'Grew from $1M to $2M in 5 years: CAGR = [(2/1)^(1/5) - 1] × 100% = 14.87%',
        },
        {
          name: 'Monthly Recurring Revenue (MRR)',
          formula: 'MRR = Number of Customers × Average Revenue per Customer',
          variables: [
            { symbol: 'MRR', meaning: 'Predictable monthly revenue (subscription businesses)' },
          ],
          example: '500 customers paying $100/month: MRR = 500 × 100 = $50,000',
        },
        {
          name: 'Churn Rate',
          formula: 'Churn Rate = (Customers Lost / Total Customers at Start) × 100%',
          variables: [
            { symbol: 'Churn Rate', meaning: 'Percentage of customers who stop subscribing' },
          ],
          example: 'Started with 1,000 customers, lost 50: Churn = (50/1,000) × 100% = 5%',
        },
        {
          name: 'Net Promoter Score (NPS)',
          formula: 'NPS = % Promoters - % Detractors',
          variables: [
            { symbol: 'Promoters', meaning: 'Customers rating 9-10 (on 0-10 scale)' },
            { symbol: 'Detractors', meaning: 'Customers rating 0-6' },
            { symbol: 'Passives', meaning: 'Customers rating 7-8 (not counted)' },
          ],
          example: '60% promoters, 10% detractors: NPS = 60 - 10 = 50 (excellent)',
        },
      ],
    },
    {
      category: 'Operations & Efficiency',
      formulas: [
        {
          name: 'Operating Leverage',
          formula: 'DOL = % Change in EBIT / % Change in Sales',
          variables: [
            { symbol: 'DOL', meaning: 'Degree of Operating Leverage' },
            { symbol: 'EBIT', meaning: 'Earnings Before Interest and Taxes' },
            { symbol: 'High DOL', meaning: 'Small sales changes = large profit changes' },
          ],
          example: 'Sales increase 10%, EBIT increases 30%: DOL = 30%/10% = 3.0',
        },
        {
          name: 'Labor Productivity',
          formula: 'Productivity = Total Output / Total Labor Hours',
          variables: [
            { symbol: 'Output', meaning: 'Units produced or revenue generated' },
            { symbol: 'Labor Hours', meaning: 'Total employee work hours' },
          ],
          example: 'Produced 10,000 units using 2,000 hours: Productivity = 5 units/hour',
        },
        {
          name: 'Capacity Utilization',
          formula: 'Capacity Utilization = (Actual Output / Maximum Capacity) × 100%',
          variables: [
            { symbol: 'Actual Output', meaning: 'Current production level' },
            { symbol: 'Max Capacity', meaning: 'Theoretical maximum output' },
          ],
          example: 'Producing 8,000 units, capacity 10,000: Utilization = 80%',
        },
        {
          name: 'Economic Order Quantity (EOQ)',
          formula: 'EOQ = √[(2 × Demand × Order Cost) / Holding Cost]',
          variables: [
            { symbol: 'Demand', meaning: 'Annual quantity demanded' },
            { symbol: 'Order Cost', meaning: 'Cost per order placed' },
            { symbol: 'Holding Cost', meaning: 'Cost to hold one unit per year' },
          ],
          example: 'Demand 10,000, order cost $50, holding $2: EOQ = √[(2×10,000×50)/2] = 707 units',
        },
      ],
    },
    {
      category: 'Project Management',
      formulas: [
        {
          name: 'Return on Investment (ROI)',
          formula: 'ROI = [(Benefit - Cost) / Cost] × 100%',
          variables: [
            { symbol: 'Benefit', meaning: 'Gains from the investment or project' },
            { symbol: 'Cost', meaning: 'Total investment or project cost' },
          ],
          example: 'Project cost $100,000, generated $150,000: ROI = [(150K-100K)/100K] × 100% = 50%',
        },
        {
          name: 'Payback Period',
          formula: 'Payback Period = Initial Investment / Annual Cash Flow',
          variables: [
            { symbol: 'Payback Period', meaning: 'Time to recover initial investment' },
          ],
          example: 'Invest $200,000, annual cash flow $50,000: Payback = 4 years',
        },
        {
          name: 'Cost Variance (CV)',
          formula: 'CV = Earned Value (EV) - Actual Cost (AC)',
          variables: [
            { symbol: 'CV > 0', meaning: 'Under budget (good)' },
            { symbol: 'CV < 0', meaning: 'Over budget (concern)' },
            { symbol: 'EV', meaning: 'Value of work completed' },
          ],
          example: 'Earned $80K value, spent $75K: CV = $5K (under budget)',
        },
        {
          name: 'Schedule Variance (SV)',
          formula: 'SV = Earned Value (EV) - Planned Value (PV)',
          variables: [
            { symbol: 'SV > 0', meaning: 'Ahead of schedule' },
            { symbol: 'SV < 0', meaning: 'Behind schedule' },
            { symbol: 'PV', meaning: 'Planned value of work' },
          ],
          example: 'Earned $80K, planned $90K: SV = -$10K (behind schedule)',
        },
      ],
    },
    {
      category: 'Human Resources',
      formulas: [
        {
          name: 'Employee Turnover Rate',
          formula: 'Turnover Rate = (Number of Separations / Average Employees) × 100%',
          variables: [
            { symbol: 'Separations', meaning: 'Employees who left during period' },
            { symbol: 'Average Employees', meaning: '(Beginning + Ending) / 2' },
          ],
          example: '10 left, avg 200 employees: Turnover = (10/200) × 100% = 5%',
        },
        {
          name: 'Cost per Hire',
          formula: 'Cost per Hire = Total Recruiting Costs / Number of Hires',
          variables: [
            { symbol: 'Recruiting Costs', meaning: 'Advertising, agency fees, interviewing time' },
          ],
          example: 'Spent $50,000 recruiting, hired 10 people: Cost = $5,000 per hire',
        },
        {
          name: 'Revenue per Employee',
          formula: 'Revenue per Employee = Total Revenue / Number of Employees',
          variables: [
            { symbol: 'Revenue per Employee', meaning: 'Productivity and efficiency measure' },
          ],
          example: 'Revenue $10M, 100 employees: Revenue per employee = $100,000',
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('topics')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Related Topics
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Briefcase size={20} />
              <span className="font-semibold">Business Reference</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Formulas
            </h1>
            <p className="text-xl text-gray-600">
              Essential business metrics for valuation, marketing, growth, and operations management
            </p>
          </div>
        </div>
      </section>

      {/* Formulas Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {formulaCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-purple-600">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.formulas.map((formula, formIndex) => (
                    <div key={formIndex} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-500 transition-all">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {formula.name}
                      </h3>
                      
                      {/* Formula Display */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                        <p className="text-center text-2xl font-mono font-bold text-gray-900">
                          {formula.formula}
                        </p>
                      </div>

                      {/* Variables */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Where:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {formula.variables.map((variable, varIndex) => (
                            <div key={varIndex} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                              <span className="font-mono font-bold text-purple-600 min-w-fit">
                                {variable.symbol} =
                              </span>
                              <span className="text-gray-700">{variable.meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example */}
                      <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">📘 Example:</h4>
                        <p className="text-gray-700">{formula.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Business Metrics Best Practices</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Track trends over time:</strong> Single snapshots can be misleading; monitor metrics quarterly or monthly
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Benchmark against competitors:</strong> Know your industry averages to contextualize your performance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Focus on actionable metrics:</strong> Vanity metrics look good but don't drive decisions; track what matters
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Balance leading and lagging indicators:</strong> Use predictive metrics alongside historical performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

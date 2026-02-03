import { ArrowLeft, CreditCard, Info } from 'lucide-react';
import { useState } from 'react';

type Section = any;

interface DebtCalculatorProps {
  onNavigate: (section: Section) => void;
}

interface Debt {
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
}

export function DebtCalculator({ onNavigate }: DebtCalculatorProps) {
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(1500);
  const [strategy, setStrategy] = useState<'avalanche' | 'snowball'>('avalanche');
  const [debts, setDebts] = useState<Debt[]>([
    { name: 'Credit Card 1', balance: 5000, interestRate: 18, minimumPayment: 150 },
    { name: 'Credit Card 2', balance: 3000, interestRate: 22, minimumPayment: 90 },
    { name: 'Car Loan', balance: 15000, interestRate: 6, minimumPayment: 350 },
    { name: 'Student Loan', balance: 25000, interestRate: 5, minimumPayment: 280 },
  ]);

  const addDebt = () => {
    setDebts([...debts, { name: `Debt ${debts.length + 1}`, balance: 0, interestRate: 0, minimumPayment: 0 }]);
  };

  const removeDebt = (index: number) => {
    setDebts(debts.filter((_, i) => i !== index));
  };

  const updateDebt = (index: number, field: keyof Debt, value: string | number) => {
    const newDebts = [...debts];
    newDebts[index] = { ...newDebts[index], [field]: value };
    setDebts(newDebts);
  };

  const calculateDebtPayoff = () => {
    let sortedDebts = [...debts];
    
    // Sort based on strategy
    if (strategy === 'avalanche') {
      // Highest interest rate first
      sortedDebts.sort((a, b) => b.interestRate - a.interestRate);
    } else {
      // Smallest balance first
      sortedDebts.sort((a, b) => a.balance - b.balance);
    }

    const totalBalance = debts.reduce((sum, debt) => sum + debt.balance, 0);
    const totalMinimumPayment = debts.reduce((sum, debt) => sum + debt.minimumPayment, 0);
    const extraPayment = totalMonthlyPayment - totalMinimumPayment;

    if (extraPayment < 0) {
      return {
        totalBalance,
        totalInterestPaid: 0,
        monthsToPayoff: 0,
        yearsToPayoff: 0,
        totalPaid: 0,
        debtOrder: sortedDebts,
        insufficientPayment: true,
        totalMinimumPayment,
      };
    }

    // Simulate payoff
    let workingDebts = sortedDebts.map(d => ({ ...d, currentBalance: d.balance }));
    let months = 0;
    let totalInterestPaid = 0;
    const maxMonths = 360; // 30 years cap

    while (workingDebts.some(d => d.currentBalance > 0) && months < maxMonths) {
      months++;
      let extraThisMonth = extraPayment;

      // Apply minimum payments and interest to all debts
      workingDebts = workingDebts.map(debt => {
        if (debt.currentBalance <= 0) return debt;

        const monthlyInterestRate = debt.interestRate / 100 / 12;
        const interestCharge = debt.currentBalance * monthlyInterestRate;
        totalInterestPaid += interestCharge;

        const payment = Math.min(debt.minimumPayment, debt.currentBalance + interestCharge);
        const newBalance = debt.currentBalance + interestCharge - payment;

        return { ...debt, currentBalance: Math.max(0, newBalance) };
      });

      // Apply extra payment to first debt with balance
      for (let i = 0; i < workingDebts.length; i++) {
        if (workingDebts[i].currentBalance > 0) {
          const extraApplied = Math.min(extraThisMonth, workingDebts[i].currentBalance);
          workingDebts[i].currentBalance -= extraApplied;
          extraThisMonth -= extraApplied;
          if (extraThisMonth <= 0) break;
        }
      }
    }

    const yearsToPayoff = months / 12;
    const totalPaid = totalBalance + totalInterestPaid;

    return {
      totalBalance,
      totalInterestPaid,
      monthsToPayoff: months,
      yearsToPayoff,
      totalPaid,
      debtOrder: sortedDebts,
      insufficientPayment: false,
      totalMinimumPayment,
    };
  };

  const result = calculateDebtPayoff();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('calculators')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Calculators
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
              <CreditCard size={20} />
              <span className="font-semibold">Debt Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Debt Planning Tool
            </h1>
            <p className="text-lg text-gray-600">
              Create a strategic plan to pay off your debts efficiently and save on interest
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Payment Strategy */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payoff Strategy</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Monthly Payment Budget
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={totalMonthlyPayment}
                        onChange={(e) => setTotalMonthlyPayment(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Minimum required: {formatCurrency(result.totalMinimumPayment)}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Debt Payoff Method
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                        <input
                          type="radio"
                          name="strategy"
                          value="avalanche"
                          checked={strategy === 'avalanche'}
                          onChange={(e) => setStrategy(e.target.value as 'avalanche' | 'snowball')}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">Debt Avalanche</div>
                          <div className="text-sm text-gray-600">Pay highest interest rate first (saves more money)</div>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                        <input
                          type="radio"
                          name="strategy"
                          value="snowball"
                          checked={strategy === 'snowball'}
                          onChange={(e) => setStrategy(e.target.value as 'avalanche' | 'snowball')}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">Debt Snowball</div>
                          <div className="text-sm text-gray-600">Pay smallest balance first (quick wins for motivation)</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Debts List */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Your Debts</h2>
                  <button
                    onClick={addDebt}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
                  >
                    + Add Debt
                  </button>
                </div>

                <div className="space-y-4">
                  {debts.map((debt, index) => (
                    <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <input
                          type="text"
                          value={debt.name}
                          onChange={(e) => updateDebt(index, 'name', e.target.value)}
                          className="font-semibold text-gray-900 border-b border-transparent hover:border-gray-300 focus:border-orange-500 focus:outline-none"
                        />
                        <button
                          onClick={() => removeDebt(index)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="text-xs text-gray-600">Balance</label>
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                            <input
                              type="number"
                              value={debt.balance}
                              onChange={(e) => updateDebt(index, 'balance', Number(e.target.value))}
                              className="w-full pl-5 pr-2 py-2 border border-gray-300 rounded text-sm focus:border-orange-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-gray-600">Rate</label>
                          <div className="relative">
                            <input
                              type="number"
                              step="0.1"
                              value={debt.interestRate}
                              onChange={(e) => updateDebt(index, 'interestRate', Number(e.target.value))}
                              className="w-full pr-6 pl-2 py-2 border border-gray-300 rounded text-sm focus:border-orange-500 focus:outline-none"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-gray-600">Min Payment</label>
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                            <input
                              type="number"
                              value={debt.minimumPayment}
                              onChange={(e) => updateDebt(index, 'minimumPayment', Number(e.target.value))}
                              className="w-full pl-5 pr-2 py-2 border border-gray-300 rounded text-sm focus:border-orange-500 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {result.insufficientPayment ? (
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">⚠ Insufficient Payment</h3>
                  <p className="text-gray-700 mb-4">
                    Your total monthly payment ({formatCurrency(totalMonthlyPayment)}) is less than 
                    your minimum payments ({formatCurrency(result.totalMinimumPayment)}).
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Please increase your monthly payment budget to at least {formatCurrency(result.totalMinimumPayment)}.
                  </p>
                </div>
              ) : (
                <>
                  {/* Payoff Timeline */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                    <h3 className="text-lg font-semibold mb-2 opacity-90">Debt-Free In</h3>
                    <div className="text-5xl font-bold mb-2">
                      {result.yearsToPayoff.toFixed(1)}
                    </div>
                    <p className="text-xl opacity-90 mb-4">years</p>
                    <p className="text-sm opacity-90">
                      ({result.monthsToPayoff} months)
                    </p>
                  </div>

                  {/* Financial Summary */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Financial Summary</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Debt:</span>
                        <span className="font-semibold">{formatCurrency(result.totalBalance)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Interest:</span>
                        <span className="font-semibold text-red-600">{formatCurrency(result.totalInterestPaid)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t-2">
                        <span className="text-gray-900 font-semibold">Total You'll Pay:</span>
                        <span className="font-bold">{formatCurrency(result.totalPaid)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payoff Order */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Recommended Payoff Order ({strategy === 'avalanche' ? 'Avalanche' : 'Snowball'})
                    </h4>
                    <div className="space-y-3">
                      {result.debtOrder.map((debt, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{debt.name}</div>
                            <div className="text-sm text-gray-600">
                              {formatCurrency(debt.balance)} @ {debt.interestRate}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Savings Tip */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">💰 Money Saved</h4>
                    <p className="text-gray-700 mb-2">
                      By following this plan and paying {formatCurrency(totalMonthlyPayment)} per month, 
                      you'll be debt-free {result.yearsToPayoff.toFixed(1)} years faster than making minimum payments only!
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <Info className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Understanding Debt Payoff Strategies
                  </h3>
                  <p className="text-gray-700">
                    There are two main strategies for paying off debt: Avalanche (mathematically optimal) 
                    and Snowball (psychologically motivating). Choose the one that works best for you!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Elimination Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Debt Avalanche Method</h3>
                <p className="text-gray-600 mb-3">
                  Pay minimums on all debts, then put extra money toward the debt with the highest 
                  interest rate.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Pros:</strong> Saves the most money on interest<br/>
                  <strong>Cons:</strong> May take longer to see first debt paid off
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Debt Snowball Method</h3>
                <p className="text-gray-600 mb-3">
                  Pay minimums on all debts, then put extra money toward the smallest balance first.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Pros:</strong> Quick wins boost motivation<br/>
                  <strong>Cons:</strong> May pay more in interest overall
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Debt Payoff Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Stop adding new debt:</strong> While paying off debt, avoid creating new debt. 
                    Cut up credit cards if necessary.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Create an emergency fund:</strong> Save $1,000-2,000 for emergencies to avoid 
                    going back into debt.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Consider balance transfers:</strong> If you have good credit, transfer high-interest 
                    debt to 0% APR cards (watch for fees).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Increase income:</strong> Look for ways to earn extra money (side hustle, overtime) 
                    and apply it to debt.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Celebrate milestones:</strong> When you pay off a debt, celebrate (inexpensively!) 
                    to stay motivated.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

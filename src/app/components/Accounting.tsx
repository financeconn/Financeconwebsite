import { Calculator, FileText, BarChart, CheckCircle, BookOpen, TrendingUp } from 'lucide-react';

export function Accounting() {
  const topics = [
    {
      icon: <FileText className="text-green-600" size={24} />,
      title: 'Contabilidade Básica',
      description: 'Fundamentos e princípios contábeis essenciais',
      items: [
        'Princípios contábeis',
        'Regime de competência',
        'Partidas dobradas',
        'Plano de contas',
      ],
    },
    {
      icon: <BarChart className="text-green-600" size={24} />,
      title: 'Demonstrações Financeiras',
      description: 'Elaboração e análise de relatórios contábeis',
      items: [
        'Balanço patrimonial',
        'DRE (Demonstração do Resultado)',
        'Fluxo de caixa',
        'DMPL e DVA',
      ],
    },
    {
      icon: <Calculator className="text-green-600" size={24} />,
      title: 'Custos',
      description: 'Gestão e análise de custos empresariais',
      items: [
        'Custos fixos e variáveis',
        'Margem de contribuição',
        'Ponto de equilíbrio',
        'Análise de custos',
      ],
    },
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: 'Auditoria',
      description: 'Verificação e conformidade contábil',
      items: [
        'Auditoria interna',
        'Auditoria externa',
        'Controles internos',
        'Compliance',
      ],
    },
    {
      icon: <BookOpen className="text-green-600" size={24} />,
      title: 'Contabilidade Gerencial',
      description: 'Informações contábeis para gestão',
      items: [
        'Orçamento empresarial',
        'Análise de desempenho',
        'Indicadores gerenciais',
        'Tomada de decisão',
      ],
    },
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: 'Contabilidade Tributária',
      description: 'Aspectos fiscais e tributários',
      items: [
        'Impostos diretos e indiretos',
        'Planejamento tributário',
        'Regimes de tributação',
        'Obrigações acessórias',
      ],
    },
  ];

  const accountingEquation = [
    { label: 'Ativo', description: 'Bens e direitos', color: 'bg-blue-100 text-blue-800' },
    { label: '=', description: '', color: 'bg-gray-100 text-gray-800' },
    { label: 'Passivo', description: 'Obrigações', color: 'bg-red-100 text-red-800' },
    { label: '+', description: '', color: 'bg-gray-100 text-gray-800' },
    { label: 'Patrimônio Líquido', description: 'Capital próprio', color: 'bg-green-100 text-green-800' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contabilidade
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Aprenda a linguagem dos negócios. Domine os conceitos contábeis
              fundamentais para entender a saúde financeira de empresas e organizações.
            </p>
            <div className="flex gap-4 justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">40+</div>
                <div className="text-sm text-gray-600">Conceitos</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">6</div>
                <div className="text-sm text-gray-600">Módulos</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">Prático</div>
                <div className="text-sm text-gray-600">Aplicação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accounting Equation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Equação Fundamental da Contabilidade
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
            {accountingEquation.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`${item.color} px-6 py-4 rounded-lg ${item.label === '=' || item.label === '+' ? 'text-2xl font-bold' : 'text-xl font-semibold'}`}>
                  {item.label}
                </div>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Esta equação é a base de toda contabilidade e mostra que todos os recursos da
            empresa (ativos) são financiados por dívidas (passivos) ou capital próprio
            (patrimônio líquido).
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Áreas de Estudo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Habilidades Desenvolvidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Análise Financeira
              </h3>
              <p className="text-sm text-gray-600">
                Interpretar demonstrações e indicadores
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tomada de Decisão
              </h3>
              <p className="text-sm text-gray-600">
                Decisões baseadas em informações contábeis
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Conformidade
              </h3>
              <p className="text-sm text-gray-600">
                Garantir adequação às normas contábeis
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Planejamento
              </h3>
              <p className="text-sm text-gray-600">
                Orçamento e planejamento estratégico
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Carreiras em Contabilidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contador</h3>
              <p className="text-gray-600">
                Registro e controle das operações financeiras de empresas
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auditor</h3>
              <p className="text-gray-600">
                Verificação e validação de demonstrações contábeis
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Controller</h3>
              <p className="text-gray-600">
                Gestão contábil e financeira estratégica das organizações
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
              Domine a contabilidade
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Acesse materiais práticos e exemplos reais
            </p>
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Ver Recursos de Contabilidade
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
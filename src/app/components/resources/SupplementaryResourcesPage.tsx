import { ArrowLeft, Download, FileText, Image, MapPin, BookOpen } from 'lucide-react';

type Section = any;

interface SupplementaryResourcesPageProps {
  onNavigate: (section: Section) => void;
}

export function SupplementaryResourcesPage({ onNavigate }: SupplementaryResourcesPageProps) {
  const materials = [
    {
      icon: <Image className="text-green-600" size={24} />,
      title: 'Financial Infographics',
      description: 'Visual guides explaining complex financial concepts in simple terms',
      items: [
        'Compound Interest Explained',
        'Investment Types Overview',
        'Budget Planning Guide',
        'Debt Payoff Strategies',
        'Retirement Planning Timeline',
      ],
      type: 'Infographics',
    },
    {
      icon: <MapPin className="text-green-600" size={24} />,
      title: 'Mind Maps',
      description: 'Visual representations of financial and economic concepts',
      items: [
        'Personal Finance Roadmap',
        'Investment Decision Tree',
        'Economic Indicators Map',
        'Business Strategy Framework',
        'Accounting Principles Overview',
      ],
      type: 'Mind Maps',
    },
    {
      icon: <FileText className="text-green-600" size={24} />,
      title: 'Checklists',
      description: 'Practical checklists for financial planning and decision-making',
      items: [
        'Monthly Budget Review Checklist',
        'Investment Due Diligence Checklist',
        'Tax Preparation Checklist',
        'Retirement Planning Checklist',
        'Business Startup Checklist',
      ],
      type: 'Checklists',
    },
    {
      icon: <BookOpen className="text-green-600" size={24} />,
      title: 'Glossary of Terms',
      description: 'Comprehensive dictionary of financial and economic terminology',
      items: [
        'Finance Terms A-Z',
        'Economics Glossary',
        'Accounting Terminology',
        'Investment Vocabulary',
        'Business Acronyms',
      ],
      type: 'Reference',
    },
  ];

  const guides = [
    {
      title: 'Financial Planning Guide',
      description: 'Step-by-step guide to creating your financial plan',
      pages: '25 pages',
    },
    {
      title: 'Investment Basics eBook',
      description: 'Comprehensive introduction to investing',
      pages: '40 pages',
    },
    {
      title: 'Tax Planning Handbook',
      description: 'Essential tax strategies for individuals and businesses',
      pages: '30 pages',
    },
    {
      title: 'Business Startup Manual',
      description: 'Complete guide to starting your own business',
      pages: '50 pages',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-green-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('resources')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Resources
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Supplementary Materials
          </h1>
          <p className="text-xl text-gray-600">
            Additional learning resources to complement your financial education
          </p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {material.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {material.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {material.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{material.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {material.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-600 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download {material.type}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloadable Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-green-600" size={24} />
                  <h3 className="font-semibold text-gray-900">{guide.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                <p className="text-sm text-gray-500 mb-4">{guide.pages}</p>
                <button className="w-full px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Use These Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Learning</h3>
              <p className="text-gray-600">
                Use infographics and mind maps for quick visual reference and understanding
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay Organized</h3>
              <p className="text-gray-600">
                Use checklists to ensure you complete all necessary steps in your planning
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Reference</h3>
              <p className="text-gray-600">
                Keep glossaries and guides handy for quick reference while studying
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

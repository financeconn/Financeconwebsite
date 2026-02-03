import { Target, Heart, Lightbulb, Users } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About FinanceCon
            </h1>
            <p className="text-xl text-gray-600">
              An initiative dedicated to democratizing financial and economic knowledge
              for students and people of all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              FinanceCon was born from the need to make financial education accessible
              and understandable for everyone. We believe that knowledge about finance,
              economics, and related topics is fundamental for personal and professional
              development.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our platform offers didactic content, practical resources, and educational
              materials to help you make more conscious financial decisions and build a
              prosperous future.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're a beginner student or someone looking to deepen your
              knowledge, FinanceCon is your ally in the learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Financial knowledge should be accessible to everyone, without barriers
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clarity</h3>
              <p className="text-gray-600">
                We explain complex concepts in a simple and objective way
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commitment</h3>
              <p className="text-gray-600">
                Dedicated to offering quality and always updated content
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We build together a collaborative learning space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-8 rounded-xl hover:border-green-500 transition-colors">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Educational Content
              </h3>
              <p className="text-gray-600">
                Articles, guides and tutorials about finance, economics and related topics
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-xl hover:border-green-500 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Practical Resources
              </h3>
              <p className="text-gray-600">
                Tools, calculators and spreadsheets to apply knowledge
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-xl hover:border-green-500 transition-colors">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Free Materials
              </h3>
              <p className="text-gray-600">
                E-books, infographics and study materials for download
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
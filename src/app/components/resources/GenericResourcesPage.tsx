import { ArrowLeft, Book, ExternalLink } from 'lucide-react';

type Section = any;

interface Resource {
  title: string;
  description: string;
  url: string;
  type: string;
  level: string;
}

interface BookRecommendation {
  title: string;
  author: string;
  topic: string;
}

interface GenericResourcesPageProps {
  onNavigate: (section: Section) => void;
  title: string;
  description: string;
  resources: Resource[];
  books: BookRecommendation[];
  tips: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export function GenericResourcesPage({ 
  onNavigate, 
  title, 
  description, 
  resources, 
  books, 
  tips 
}: GenericResourcesPageProps) {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>
      </section>

      {/* Main Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Online Learning Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {resource.title}
                  </h3>
                  <ExternalLink className="text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" size={20} />
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    {resource.type}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {resource.level}
                  </span>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      {books.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Book className="text-green-600" size={24} />
                    <h3 className="font-semibold text-gray-900">{book.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">By {book.author}</p>
                  <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                    {book.topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Get the Most from These Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

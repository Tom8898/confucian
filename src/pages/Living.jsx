import { useEffect } from 'react';
import livingIcon from '../assets/living.png';
import healthcareIcon from '../assets/healthcare.png';
import transportIcon from '../assets/transport.png';

const sections = [
  {
    id: 'housing',
    titleEn: 'Housing & Accommodation',
    titleZh: '住房',
    description: 'Find rental and purchase options, understand tenancy agreements, bonds, and how to set up your home in New Zealand.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=260&fit=crop',
    imageAlt: 'Housing',
  },
  {
    id: 'shopping',
    titleEn: 'Supermarket & Shopping',
    titleZh: '日常购物',
    description: 'Where to shop for groceries, compare supermarkets, loyalty programmes, and everyday shopping tips.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=260&fit=crop',
    imageAlt: 'Supermarket',
  },
  {
    id: 'utilities',
    titleEn: 'Utilities & Household Setup',
    titleZh: '水电网',
    description: 'Power, water, gas, internet, and phone providers — how to connect and compare plans.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop',
    imageAlt: 'Utilities',
  },
  {
    id: 'transport',
    titleEn: 'Transport & Driving',
    titleZh: '日常出行',
    description: 'Public transport, driving licence, buying a car, and getting around your city.',
    image: transportIcon,
    imageAlt: 'Transport',
  },
  {
    id: 'healthcare',
    titleEn: 'Healthcare & Pharmacy',
    titleZh: '医疗',
    description: 'GPs, pharmacies, after-hours care, and how to access healthcare in NZ.',
    image: healthcareIcon,
    imageAlt: 'Healthcare',
  },
  {
    id: 'banking',
    titleEn: 'Money & Banking',
    titleZh: '日常财务',
    description: 'Banks, accounts, EFTPOS, and managing day-to-day finances in New Zealand.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=260&fit=crop',
    imageAlt: 'Banking',
  },
  {
    id: 'rubbish',
    titleEn: 'Rubbish & Local Council',
    titleZh: '社区生活',
    description: 'Rubbish collection, recycling, council services, and local community information.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=260&fit=crop',
    imageAlt: 'Rubbish and recycling',
  },
  {
    id: 'culture',
    titleEn: 'Culture & Social Norms',
    titleZh: '生活文化',
    description: 'Kiwi customs, social etiquette, and what to expect in everyday life and community.',
    image: livingIcon,
    imageAlt: 'Culture',
  },
];

export default function Living() {
  useEffect(() => {
    document.title = 'Daily Living - NZ Newcomer Guide';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Daily Living
          </h1>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for everyday life in New Zealand — housing, shopping, utilities, transport, healthcare, banking, council services, and culture.
          </p>
        </div>
      </header>

      {/* Sections grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <article
              key={section.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-blue-700">
                  {section.titleEn}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">{section.titleZh}</p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
          &copy; 2025 NZ Newcomer Guide · Daily Living
        </div>
      </footer>
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { 
  Building2, 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Landmark, 
  Factory 
} from 'lucide-react';

export function Industries() {
  const industries = [
    {
      icon: Building2,
      name: 'Real Estate',
      description: 'Innovative solutions for property management, sales, and development.',
      stats: '500+ Projects',
    },
    {
      icon: ShoppingBag,
      name: 'Retail & E-commerce',
      description: 'End-to-end digital transformation for modern retail experiences.',
      stats: '200+ Stores',
    },
    {
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'Advanced technology solutions for better patient care and management.',
      stats: '50+ Hospitals',
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Digital learning platforms and educational technology solutions.',
      stats: '100+ Institutions',
    },
    {
      icon: Landmark,
      name: 'Finance & Banking',
      description: 'Secure, scalable solutions for financial services and institutions.',
      stats: '75+ Banks',
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Industry 4.0 solutions for smart manufacturing and automation.',
      stats: '150+ Facilities',
    },
  ];

  return (
    <section id="industries" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring specialized expertise across multiple industries, 
            delivering tailored solutions that address unique challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{industry.description}</p>
                  <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {industry.stats}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
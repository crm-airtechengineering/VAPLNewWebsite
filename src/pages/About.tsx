import { Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { Target, Users, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative solutions that drive growth and success in the digital age.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of experts passionate about delivering excellence and exceeding expectations.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, innovation, and customer success are at the core of everything we do.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading company committed to innovation and excellence. 
            Our journey began with a vision to transform industries through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
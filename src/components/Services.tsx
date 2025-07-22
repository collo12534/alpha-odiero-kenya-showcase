import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Smartphone, 
  ShoppingCart, 
  PaintBucket, 
  Image, 
  FileText,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const webServices = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Portfolio Websites',
      description: 'Showcase your work with stunning, professional portfolio sites that make lasting impressions.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Contact Forms']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Business Websites',
      description: 'Professional websites that establish credibility and help your business grow online.',
      features: ['Modern Design', 'Mobile Friendly', 'Analytics Setup', 'Social Integration']
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'E-commerce Platforms',
      description: 'Complete online stores with payment integration and inventory management.',
      features: ['Payment Gateway', 'Product Management', 'Order Tracking', 'Admin Dashboard']
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to turn visitors into customers.',
      features: ['Conversion Focused', 'A/B Testing Ready', 'Lead Capture', 'Fast Performance']
    }
  ];

  const graphicServices = [
    {
      icon: <PaintBucket className="h-8 w-8" />,
      title: 'Logo Design',
      description: 'Memorable logos that capture your brand essence and make you stand out.',
      features: ['Multiple Concepts', 'Vector Files', 'Brand Guidelines', 'Unlimited Revisions']
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: 'Marketing Materials',
      description: 'Eye-catching flyers, posters, and banners that drive engagement and sales.',
      features: ['Print Ready', 'Social Media Formats', 'Brand Consistent', 'Quick Turnaround']
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'User-centered designs that create intuitive and delightful digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Brand Identity',
      description: 'Complete brand packages including logo, colors, typography, and guidelines.',
      features: ['Logo Suite', 'Color Palette', 'Typography', 'Style Guide']
    }
  ];

  const techStack = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB', 
    'Tailwind CSS', 'Figma', 'Adobe Suite', 'WordPress'
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive digital solutions to help your business thrive in the digital world
          </p>
        </div>

        {/* Web Design & Development */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">Web Design & Development</h3>
            <p className="text-muted-foreground">
              Building responsive, modern websites using cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {webServices.map((service, index) => (
              <Card key={index} className="hover-lift group">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-lg mb-4 group-hover:shadow-glow transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Technology Stack</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">Graphic Design</h3>
            <p className="text-muted-foreground">
              Creating visual solutions that communicate your message effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {graphicServices.map((service, index) => (
              <Card key={index} className="hover-lift group">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-lg mb-4 group-hover:shadow-glow transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4">Ready to Start Your Project?</h4>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your ideas and create something amazing together
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="primary-gradient text-white font-semibold hover:shadow-glow transition-smooth group">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="font-semibold hover-lift">
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
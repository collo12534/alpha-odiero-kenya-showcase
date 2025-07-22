import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const tools = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
    { category: 'Design', items: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Canva'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Postman', 'Chrome DevTools'] },
  ];

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices.'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Creative Design',
      description: 'Blending creativity with functionality for stunning visual experiences.'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Responsive Design',
      description: 'Ensuring perfect user experience across all devices and screen sizes.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Fast Delivery',
      description: 'Meeting deadlines without compromising on quality and attention to detail.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-gradient">Alpha</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate web and graphics designer based in the beautiful city of 
                <span className="text-primary font-semibold"> Nakuru, Kenya</span>. 
                With 2 years of hands-on experience in the industry, I've had the privilege 
                of working with diverse clients across Kenya and beyond.
              </p>
              
              <p>
                My journey began with a curiosity for how websites work, which evolved into 
                a deep passion for creating digital experiences that not only look stunning 
                but also solve real problems. I believe that great design is not just about 
                aesthetics—it's about creating meaningful connections between people and technology.
              </p>
              
              <p>
                When I'm not coding or designing, you'll find me exploring the latest design 
                trends, contributing to open-source projects, or sharing knowledge with the 
                growing tech community in Kenya.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">My Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses and individuals with beautiful, functional digital solutions 
                that drive growth and create lasting impact in the digital landscape.
              </p>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-4 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((toolGroup, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary mb-3">{toolGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {toolGroup.items.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
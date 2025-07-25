import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-alpha.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden gradient-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image - Background on mobile */}
          <div className="absolute inset-0 lg:relative lg:order-2 animate-scale-in">
            <div className="relative h-full">
              <img
                src={heroImage}
                alt="Alpha Odiero - Web & Graphics Designer"
                className="w-full h-full lg:h-auto object-cover lg:object-contain rounded-2xl shadow-large hover-lift opacity-20 lg:opacity-100"
              />
              
              {/* Floating Elements - hidden on mobile */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full floating-element"></div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full floating-element" style={{animationDelay: '2s'}}></div>
              
              {/* Skill Badge - hidden on mobile */}
              <div className="hidden lg:block absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Foreground on mobile */}
          <div className="relative z-10 space-y-8 animate-fade-in lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Available for Freelance
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Alpha Odiero</span>
                <br />
                A Web & Graphics Designer
                <br />
                <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
                  Based in Kenya
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                With 2 years of experience crafting beautiful digital experiences, 
                I help businesses and individuals bring their visions to life through 
                stunning web design and compelling graphics.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="primary-gradient text-white font-semibold hover:shadow-glow transition-spring group"
              >
                Hire Me Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold hover-lift group"
              >
                View Portfolio
                <Download className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold transition-smooth"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
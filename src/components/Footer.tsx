import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      href: '#',
      label: 'Facebook'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: '#',
      label: 'Instagram'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      href: 'https://wa.me/254715519158',
      label: 'WhatsApp'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    'Web Design',
    'Web Development',
    'Graphic Design',
    'Logo Design',
    'UI/UX Design',
    'E-commerce'
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Alpha Odiero</h3>
              <p className="text-gray-300 leading-relaxed">
                Web & Graphics Designer based in Nakuru, Kenya. Creating beautiful, 
                functional digital experiences that help businesses grow.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">collinsodiera8@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+254 715 519 158</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Nakuru, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-smooth"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Let's Work Together</h4>
            <p className="text-gray-300 mb-6">
              Ready to start your next project? Let's create something amazing together.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/254715519158?text=Hi%20Alpha,%20I%27d%20like%20to%20discuss%20a%20project%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-smooth"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Start on WhatsApp
              </a>
              <a
                href="mailto:collinsodiera8@gmail.com"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary hover:bg-primary-glow text-white font-semibold rounded-lg transition-smooth"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Alpha Odiero. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              <span>Made with ❤️ in Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
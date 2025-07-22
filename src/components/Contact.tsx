import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Linkedin,
  Send,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'collinsodiera8@gmail.com',
      href: 'mailto:collinsodiera8@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+254 715 519 158',
      href: 'tel:+254715519158'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'WhatsApp',
      value: '+254 715 519 158',
      href: 'https://wa.me/254715519158'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Nakuru, Kenya',
      href: 'https://maps.google.com/?q=Nakuru,Kenya'
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      label: 'Facebook',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-700'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'TikTok',
      href: '#',
      color: 'hover:text-black'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project inquiry, collaboration, etc."
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, requirements, timeline, budget, etc."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full primary-gradient text-white font-semibold hover:shadow-glow transition-smooth"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-smooth">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Stay connected on social media
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-muted rounded-lg transition-smooth hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Quick Response</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="hover-lift bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with me directly on WhatsApp for quick questions
                </p>
                <a
                  href="https://wa.me/254715519158?text=Hi%20Alpha,%20I%27d%20like%20to%20discuss%20a%20project%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-smooth w-full"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>My Location</CardTitle>
              <p className="text-muted-foreground">
                Based in the beautiful city of Nakuru, Kenya
              </p>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Nakuru, Kenya</p>
                  <p className="text-sm text-muted-foreground">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
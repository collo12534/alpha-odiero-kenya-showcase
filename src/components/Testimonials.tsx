import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Faith Wanjiru',
      role: 'Business Owner',
      location: 'Nairobi',
      content: 'Alpha brought my brand to life with an amazing logo and website. His attention to detail and creative vision exceeded my expectations. Highly recommended!',
      rating: 5,
      image: '👩🏾‍💼'
    },
    {
      name: 'Kevin Otieno',
      role: 'Techpreneur',
      location: 'Kisumu',
      content: 'His web design skills are top-notch and very professional. The website he built for my startup has helped us attract more investors and customers.',
      rating: 5,
      image: '👨🏾‍💻'
    },
    {
      name: 'Diana Mwikali',
      role: 'Fashion Designer',
      location: 'Nakuru',
      content: 'Great work on my e-commerce platform! Alpha is talented and understands the fashion industry well. My online sales have tripled since launch.',
      rating: 5,
      image: '👩🏾‍🎨'
    },
    {
      name: 'James Mwangi',
      role: 'Digital Marketer',
      location: 'Eldoret',
      content: 'Loved working with Alpha, fast delivery and great design sense. He created landing pages that convert really well for my marketing campaigns.',
      rating: 5,
      image: '👨🏾‍💼'
    },
    {
      name: 'Mercy Achieng',
      role: 'Blogger',
      location: 'Mombasa',
      content: 'He built my blog from scratch. Clean, fast, and mobile-friendly design. My readers love the new interface and navigation is so smooth.',
      rating: 5,
      image: '👩🏾‍💻'
    },
    {
      name: 'Brian Kiptoo',
      role: 'Freelancer',
      location: 'Kericho',
      content: 'His UI/UX work helped increase my conversion rates significantly. Alpha understands user psychology and creates designs that actually work.',
      rating: 5,
      image: '👨🏾‍🎨'
    },
    {
      name: 'Jane Njeri',
      role: 'Salon Owner',
      location: 'Nyeri',
      content: 'Alpha designed beautiful flyers and social media graphics that brought me more customers. His designs are eye-catching and professional.',
      rating: 5,
      image: '👩🏾‍💄'
    },
    {
      name: 'Collins Odhiambo',
      role: 'YouTuber',
      location: 'Kakamega',
      content: 'Alpha made my thumbnails and banner pop! Very happy with the work. My channel views have increased by 200% since using his designs.',
      rating: 5,
      image: '👨🏾‍🎬'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What My <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - hear from satisfied clients across Kenya
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">30+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">5.0</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
              <p className="text-muted-foreground mb-6">
                Let's create something amazing together and add your success story to this list
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/254715519158?text=Hi%20Alpha,%20I%27d%20like%20to%20discuss%20a%20project%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-smooth"
                >
                  Start Project on WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
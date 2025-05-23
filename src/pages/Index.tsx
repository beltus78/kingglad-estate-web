
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, House, Car, Bed, Oil } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: Building,
      title: "Kingglad Realty",
      description: "Expert development of residential and commercial properties with attention to quality and design.",
      link: "/realty"
    },
    {
      icon: Car,
      title: "Kingglad Auto",
      description: "Premium automotive services and sales with a focus on quality and customer satisfaction.",
      link: "/auto"
    },
    {
      icon: Bed,
      title: "Kingglad Suites",
      description: "Luxurious hospitality and accommodation services providing comfort and modern amenities.",
      link: "/suites"
    },
    {
      icon: Oil,
      title: "Kingglad Oil",
      description: "Energy sector operations with a commitment to sustainability and efficiency.",
      link: "/oil"
    }
  ];

  const projects = [
    {
      title: "Luxury Residential Complex",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
      description: "Modern 50-unit residential development in Limbe"
    },
    {
      title: "Commercial Tower",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
      description: "20-story commercial office building"
    },
    {
      title: "Executive Homes",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
      description: "Premium executive housing project"
    },
    {
      title: "Mixed-Use Development",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      description: "Integrated commercial and residential space"
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      position: "Property Investor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      quote: "Kingglad Group has exceeded my expectations with their attention to detail and quality of construction. Their developments stand out in the Cameroonian market."
    },
    {
      name: "Sarah Johnson",
      position: "Business Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      quote: "Working with Kingglad Auto for our company fleet was a seamless experience. Their professionalism and service quality is unmatched in the region."
    },
    {
      name: "Michael Brown",
      position: "Hotel Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      quote: "Kingglad Suites has set a new standard for hospitality in Limbe. The attention to guest comfort and modern amenities makes it our top recommendation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-white via-gray-50 to-kingglad-green/5 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-20 h-20 bg-kingglad-green rounded-lg flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-kingglad-charcoal mb-6 leading-tight">
                Kingglad Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
                A Diversified Conglomerate Since 2020
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Creating value and socio-economic impact by improving lives and transforming Cameroon through our strategic business operations
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                asChild
              >
                <Link to="/about">
                  Explore Our Group
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">About Kingglad Group</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-12"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Established in January 2020, Kingglad Group is a diversified conglomerate based in Limbe, Cameroon. We operate as a multi-sector business entity with strategic investments across several key industries in Cameroon's economy.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Under the leadership of our CEO, Kingnofline N. Assam, we're committed to creating value and socio-economic impact by improving lives and transforming Cameroon through our business operations and initiatives.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-kingglad-green mb-2">4</div>
                <div className="text-gray-600">Major Subsidiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kingglad-green mb-2">5+</div>
                <div className="text-gray-600">Business Sectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kingglad-green mb-2">2020</div>
                <div className="text-gray-600">Year Established</div>
              </div>
            </div>
            <div className="mt-12">
              <Button 
                className="bg-kingglad-green hover:bg-kingglad-green-dark text-white transition-colors duration-300"
                asChild
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">Our Business Sectors</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kingglad Group operates through multiple subsidiary companies across strategic sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg h-full">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <div className="w-16 h-16 bg-kingglad-green/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-kingglad-green" />
                  </div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <Button 
                    variant="outline" 
                    className="border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white mt-auto"
                    asChild
                  >
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">Our Portfolio</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our finest developments and successful projects across Cameroon
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-kingglad-green/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-kingglad-charcoal mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              className="bg-kingglad-green hover:bg-kingglad-green-dark text-white transition-colors duration-300"
              asChild
            >
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-8">
                          <div className="flex flex-col items-center text-center">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-20 h-20 rounded-full object-cover mb-6"
                            />
                            <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                            <h4 className="font-bold text-kingglad-charcoal">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.position}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kingglad-charcoal mb-6">Our Mission & Vision</h2>
              <div className="w-16 h-1 bg-kingglad-green mb-8"></div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-3">Mission</h3>
                  <p className="text-gray-600">
                    To create value and socio-economic impact by improving lives and transforming Cameroon through our business operations and initiatives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-3">Vision</h3>
                  <p className="text-gray-600">
                    To be a catalyst for development in Cameroon, focusing on modern infrastructure development and quality service delivery across our various business segments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-3">Values</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Excellence in service delivery</li>
                    <li>Innovation and modern solutions</li>
                    <li>Integrity and ethical business practices</li>
                    <li>Community development and social responsibility</li>
                    <li>Quality and sustainability in all operations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=600&fit=crop" 
                alt="Modern Building" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Simplified for the homepage */}
      <section id="contact" className="py-24 bg-kingglad-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">Contact Us</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey with us? Get in touch with our expert team today.
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              asChild
            >
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

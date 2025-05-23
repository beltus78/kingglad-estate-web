
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, House } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
      title: "Property Development",
      description: "Expert development of residential and commercial properties with attention to quality and design."
    },
    {
      icon: House,
      title: "Real Estate Services",
      description: "Comprehensive real estate solutions including buying, selling, and property management."
    },
    {
      icon: Building,
      title: "Housing Solutions",
      description: "Innovative housing solutions tailored to modern living and investment needs."
    }
  ];

  const projects = [
    {
      title: "Luxury Residential Complex",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
      description: "Modern 50-unit residential development"
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-kingglad-green rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-kingglad-charcoal">Kingglad Group</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">Home</a>
              <a href="#about" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">About</a>
              <a href="#services" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">Services</a>
              <a href="#portfolio" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">Portfolio</a>
              <a href="#contact" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

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
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Premier Real Estate & Property Development Solutions
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Building tomorrow's communities with excellence, innovation, and unwavering commitment to quality
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Our Projects
            </Button>
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
              With decades of combined experience in real estate and property development, Kingglad Group stands as a beacon of excellence in the industry. We specialize in creating exceptional residential and commercial properties that enhance communities and deliver lasting value.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our commitment to quality, innovation, and client satisfaction has established us as a trusted partner for investors, homebuyers, and businesses seeking premium real estate solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-kingglad-green mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kingglad-green mb-2">200+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kingglad-green mb-2">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">Our Services</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate and property development services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-kingglad-green/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-kingglad-green" />
                  </div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              Showcasing our finest developments and successful projects
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-kingglad-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">Contact Us</h2>
              <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to start your real estate journey? Get in touch with our expert team today.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-kingglad-charcoal mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-kingglad-charcoal mb-1">Address</h4>
                    <p className="text-gray-600">123 Business District, City Center, State 12345</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kingglad-charcoal mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kingglad-charcoal mb-1">Email</h4>
                    <p className="text-gray-600">info@kinggladgroup.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kingglad-charcoal mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-gray-200 focus:border-kingglad-green"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-gray-200 focus:border-kingglad-green"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-gray-200 focus:border-kingglad-green"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="border-gray-200 focus:border-kingglad-green resize-none"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-kingglad-green hover:bg-kingglad-green-dark text-white py-3 transition-colors duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kingglad-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-kingglad-green rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold">Kingglad Group</span>
            </div>
            <p className="text-gray-400 mb-6">Building Excellence, Creating Value</p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#home" className="text-gray-400 hover:text-kingglad-green transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-kingglad-green transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-kingglad-green transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-kingglad-green transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-kingglad-green transition-colors">Contact</a>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 Kingglad Group. All rights reserved. | Premium Real Estate & Property Development
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Home, MapPin } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Realty = () => {
  const projects = [
    {
      title: "Luxury Residential Complex",
      location: "Limbe Central",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
      features: ["50 premium units", "Swimming pool", "Fitness center", "24/7 security", "Landscaped gardens"],
      description: "Our flagship luxury residential development offering spacious apartments with modern amenities and stunning views."
    },
    {
      title: "Executive Homes",
      location: "Limbe Highlands",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
      features: ["Detached homes", "Private gardens", "Smart home features", "Premium finishes", "Secure community"],
      description: "Premium executive housing project featuring standalone homes with contemporary design and high-end finishes."
    },
    {
      title: "Mixed-Use Development",
      location: "Limbe Business District",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      features: ["Retail spaces", "Office units", "Residential apartments", "Underground parking", "Rooftop amenities"],
      description: "Integrated commercial and residential space designed to create a vibrant community where people can live, work, and play."
    },
    {
      title: "Commercial Tower",
      location: "Downtown Limbe",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
      features: ["20 floors", "Grade A office space", "Conference facilities", "High-speed elevators", "Green building certification"],
      description: "Modern office building providing premium commercial space for businesses in a prime location."
    }
  ];

  const services = [
    {
      icon: Building,
      title: "Property Development",
      description: "We develop residential and commercial properties with attention to quality, design, and sustainability."
    },
    {
      icon: Home,
      title: "Property Sales",
      description: "Our experienced sales team helps clients find and purchase their ideal properties within our developments."
    },
    {
      icon: MapPin,
      title: "Property Management",
      description: "We offer comprehensive property management services to ensure your investment is well-maintained and profitable."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-kingglad-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-kingglad-green/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-kingglad-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kingglad-charcoal mb-6">Kingglad Realty</h1>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8">
              Premium Real Estate Development and Property Management
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Our flagship operation specializing in modern residential and commercial property development with a commitment to quality and innovation.
            </p>
            <Button 
              size="lg" 
              className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              asChild
            >
              <Link to="/contact">
                Inquire About Properties
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Kingglad Realty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop"
                alt="Modern Building" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">About Kingglad Realty</h2>
              <div className="w-12 h-1 bg-kingglad-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Kingglad Realty Home and Properties is the flagship operation of Kingglad Group, specializing in modern residential and commercial property development that meets international standards while serving the local Cameroonian market.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2020, we've quickly established ourselves as a premium developer known for our attention to quality, innovative designs, and commitment to creating sustainable communities.
              </p>
              <p className="text-lg text-gray-600">
                Our developments range from luxury residential complexes to executive homes, commercial towers, and mixed-use developments, all designed with modern architecture and featuring contemporary amenities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Our Services</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate services to meet all your property needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      
      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Featured Projects</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our premium real estate developments in Limbe, Cameroon
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'order-2 md:order-1' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-lg shadow-xl h-80 w-full object-cover"
                  />
                </div>
                <div className={`${index % 2 !== 0 ? 'order-1 md:order-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-kingglad-green mr-2" />
                    <span className="text-gray-500">{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-kingglad-charcoal mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold text-kingglad-charcoal mb-3">Features</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-kingglad-green rounded-full mr-2"></span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="bg-kingglad-green hover:bg-kingglad-green-dark text-white transition-colors duration-300"
                    asChild
                  >
                    <Link to="/contact">Inquire About This Property</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6 text-center">Why Choose Kingglad Realty</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">Quality Construction</h3>
                <p className="text-gray-600">
                  We use premium materials and work with skilled professionals to ensure every property meets our high standards of quality and durability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">Modern Design</h3>
                <p className="text-gray-600">
                  Our properties feature contemporary architectural designs that combine aesthetics with functionality for modern living and working.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">Prime Locations</h3>
                <p className="text-gray-600">
                  We carefully select locations with good accessibility, amenities, and growth potential to maximize the value of your investment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  From initial inquiry through to after-sales support, we prioritize customer satisfaction and building long-term relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-kingglad-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Ideal Property?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our real estate experts today to discuss your property needs and discover our available developments.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-kingglad-green hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="/contact">
              Contact Our Real Estate Team
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Realty;

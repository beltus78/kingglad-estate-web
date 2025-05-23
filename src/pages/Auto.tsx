
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Auto = () => {
  const services = [
    {
      title: "Premium Vehicle Sales",
      image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600&h=400&fit=crop",
      description: "We offer a selection of premium vehicles for both personal and business use. Our knowledgeable sales team will help you find the perfect vehicle to meet your needs and preferences."
    },
    {
      title: "Vehicle Service & Maintenance",
      image: "https://images.unsplash.com/photo-1493121694275-4bb41622e3f7?w=600&h=400&fit=crop",
      description: "Our skilled technicians provide comprehensive maintenance and repair services to keep your vehicle in optimal condition. We use modern diagnostic equipment and genuine parts."
    },
    {
      title: "Fleet Management",
      image: "https://images.unsplash.com/photo-1592805149078-8ffcafade98c?w=600&h=400&fit=crop",
      description: "We offer complete fleet management solutions for businesses, including vehicle acquisition, maintenance scheduling, driver management, and asset tracking."
    },
    {
      title: "Automotive Consulting",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&h=400&fit=crop",
      description: "Our automotive consultants provide expert advice on vehicle selection, fleet optimization, and transportation logistics for businesses of all sizes."
    }
  ];

  const features = [
    {
      title: "Modern Facilities",
      description: "Our state-of-the-art service center is equipped with the latest diagnostic tools and equipment."
    },
    {
      title: "Certified Technicians",
      description: "Our team of highly trained and certified technicians ensures quality workmanship on every service."
    },
    {
      title: "Quality Parts",
      description: "We use only genuine parts and premium quality lubricants for all maintenance and repairs."
    },
    {
      title: "Customer Satisfaction",
      description: "We prioritize customer satisfaction with transparent pricing and detailed service explanations."
    },
    {
      title: "Courtesy Vehicles",
      description: "Complimentary loaner vehicles available for customers during extended service periods."
    },
    {
      title: "Comprehensive Warranties",
      description: "All vehicles and services are backed by comprehensive warranty programs."
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
              <Car className="w-8 h-8 text-kingglad-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kingglad-charcoal mb-6">Kingglad Auto</h1>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8">
              Premium Automotive Services & Solutions
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Providing exceptional automotive services and solutions to individual and corporate clients throughout Cameroon.
            </p>
            <Button 
              size="lg" 
              className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              asChild
            >
              <Link to="/contact">
                Inquire About Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Kingglad Auto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop"
                alt="Auto Showroom" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">About Kingglad Auto</h2>
              <div className="w-12 h-1 bg-kingglad-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Kingglad Auto, established in 2021, is a subsidiary of Kingglad Group focusing on automotive services and sales. We provide premium vehicles and maintenance services to individual and corporate clients throughout Cameroon.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our modern facilities and experienced team ensure that every customer receives exceptional service and solutions tailored to their automotive needs. From premium vehicle sales to comprehensive maintenance services, we're committed to excellence in every aspect of our operations.
              </p>
              <p className="text-lg text-gray-600">
                We prioritize customer satisfaction, quality workmanship, and building long-term relationships with our clients. Our goal is to be your trusted partner for all automotive needs.
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
              Comprehensive automotive solutions to meet all your vehicle needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg h-full">
                <div className="relative h-56">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button 
                    variant="outline" 
                    className="border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white mt-auto"
                    asChild
                  >
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Why Choose Kingglad Auto</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the Kingglad Auto difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-kingglad-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col">
                  <p className="text-gray-600 italic mb-6">"Kingglad Auto has consistently provided exceptional service for our company fleet. Their attention to detail and professionalism is unmatched in Limbe."</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" 
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-kingglad-charcoal">John Doe</h4>
                      <p className="text-sm text-gray-500">Fleet Manager, ABC Company</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col">
                  <p className="text-gray-600 italic mb-6">"The quality of service I've received from Kingglad Auto has exceeded all my expectations. They've made maintaining my vehicle incredibly convenient and stress-free."</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-kingglad-charcoal">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">Private Client</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-kingglad-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Premium Automotive Service?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our automotive experts today to discuss your vehicle needs or schedule a service appointment.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-kingglad-green hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="/contact">
              Contact Our Automotive Team
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Auto;

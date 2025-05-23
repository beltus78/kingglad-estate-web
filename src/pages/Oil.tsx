
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Oil } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const OilPage = () => {
  const services = [
    {
      title: "Fuel Distribution",
      image: "https://images.unsplash.com/photo-1611031613280-706447583cdf?w=600&h=400&fit=crop",
      description: "We provide efficient and reliable fuel distribution services for businesses and fuel stations throughout Cameroon."
    },
    {
      title: "Service Stations",
      image: "https://images.unsplash.com/photo-1565620731358-e8c038abc8d1?w=600&h=400&fit=crop",
      description: "Our modern service stations offer quality fuels, convenience stores, and vehicle services in convenient locations."
    },
    {
      title: "Petroleum Storage",
      image: "https://images.unsplash.com/photo-1518292039510-ba77d3ee327e?w=600&h=400&fit=crop",
      description: "We operate secure and efficient petroleum storage facilities that meet international safety and environmental standards."
    },
    {
      title: "Energy Consulting",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop",
      description: "Our energy experts provide consulting services for businesses looking to optimize their energy usage and operations."
    }
  ];

  const features = [
    {
      title: "Quality Products",
      description: "We provide high-quality petroleum products that meet international standards and specifications."
    },
    {
      title: "Efficient Operations",
      description: "Our operations are designed for maximum efficiency, ensuring reliable supply and service."
    },
    {
      title: "Safety Focus",
      description: "Safety is our top priority in all aspects of our operations, from storage to distribution."
    },
    {
      title: "Environmental Responsibility",
      description: "We're committed to minimizing environmental impact through responsible practices and compliance with regulations."
    },
    {
      title: "Modern Facilities",
      description: "Our facilities utilize modern technology and equipment to ensure quality and efficiency."
    },
    {
      title: "Expert Team",
      description: "Our experienced team brings extensive knowledge of the energy sector to all our operations."
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
              <Oil className="w-8 h-8 text-kingglad-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kingglad-charcoal mb-6">Kingglad Oil</h1>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8">
              Energy Sector Operations & Solutions
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Providing reliable energy solutions with a commitment to quality, sustainability, and efficiency.
            </p>
            <Button 
              size="lg" 
              className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              asChild
            >
              <Link to="/contact">
                Contact Our Energy Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Kingglad Oil */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop"
                alt="Oil Operations" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">About Kingglad Oil</h2>
              <div className="w-12 h-1 bg-kingglad-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Kingglad Oil, established in 2023, is the energy sector subsidiary of Kingglad Group. We operate in Cameroon's growing energy market, providing reliable fuel distribution, service stations, petroleum storage, and energy consulting services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our operations are guided by a commitment to quality, safety, and environmental responsibility. We utilize modern facilities and equipment to ensure efficient and reliable service delivery to our customers.
              </p>
              <p className="text-lg text-gray-600">
                With an experienced team and strategic approach, Kingglad Oil is positioned to be a significant contributor to Cameroon's energy sector development while maintaining the highest standards of operation and service.
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
              Comprehensive energy solutions to meet your needs
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
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Why Choose Kingglad Oil</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The Kingglad Oil advantage
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
      
      {/* Sustainability Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Our Commitment to Sustainability</h2>
              <div className="w-12 h-1 bg-kingglad-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                At Kingglad Oil, we recognize the importance of responsible energy operations. We're committed to minimizing our environmental footprint while providing essential energy services to our customers and communities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our sustainability initiatives include:
              </p>
              <ul className="space-y-3 text-gray-600 mb-6 list-disc pl-6">
                <li>Implementing modern technologies to reduce emissions and waste</li>
                <li>Adhering to strict environmental standards in all operations</li>
                <li>Regular monitoring and improvement of our environmental performance</li>
                <li>Training our team on best practices for environmental protection</li>
                <li>Exploring renewable energy options for future growth</li>
              </ul>
              <p className="text-lg text-gray-600">
                We believe that responsible energy operations are essential for the sustainable development of Cameroon and the well-being of future generations.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop"
                alt="Sustainable Energy" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-kingglad-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Discuss Your Energy Needs?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our energy experts today to explore how Kingglad Oil can support your business or project.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-kingglad-green hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="/contact">
              Contact Our Energy Team
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OilPage;

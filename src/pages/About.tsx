import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building, House, Car, Bed, Droplets, Users, MapPin } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Kingglad Group was incorporated in January 2020 in Limbe, Cameroon."
    },
    {
      year: "2020",
      title: "Kingglad Realty Established",
      description: "Our flagship real estate development subsidiary was launched."
    },
    {
      year: "2021",
      title: "Kingglad Auto Launched",
      description: "Expanded into the automotive sector with sales and services."
    },
    {
      year: "2021",
      title: "First Major Development",
      description: "Completed our first luxury residential complex project."
    },
    {
      year: "2022",
      title: "Kingglad Suites Opened",
      description: "Entered the hospitality industry with our premium accommodation services."
    },
    {
      year: "2023",
      title: "Kingglad Oil Established",
      description: "Strategic expansion into the energy sector operations."
    }
  ];

  const team = [
    {
      name: "Kingnofline N. Assam",
      position: "Chief Executive Officer",
      image: "/lovable-uploads/7ddb9b03-3931-4f46-8da3-828ce1eeb487.png",
      description: "Founder and visionary leader of Kingglad Group, with expertise in strategic business development and property investment."
    },
    {
      name: "Executive Team Member",
      position: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
      description: "Oversees daily operations across all business units, ensuring excellence in project delivery."
    },
    {
      name: "Executive Team Member",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
      description: "Manages the financial strategy and operations of the Kingglad Group."
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-kingglad-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-kingglad-charcoal mb-6">About Kingglad Group</h1>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-12">
              A diversified conglomerate committed to excellence across multiple business sectors in Cameroon
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Company Overview</h2>
              <div className="w-12 h-1 bg-kingglad-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Kingglad Group (KG)</strong> is a diversified conglomerate based in Limbe, Cameroon, that was incorporated in January 2020. The company operates as a multi-sector business entity with strategic investments across several key industries in Cameroon's economy.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Under the leadership of our CEO, Kingnofline N. Assam, we're focused on developing modern infrastructure and providing quality services that meet international standards while serving the local Cameroonian market.
              </p>
              <p className="text-lg text-gray-600">
                Our flagship operation is Kingglad Realty Home and Properties, which specializes in modern residential and commercial property development, but our business interests span multiple sectors including automotive, hospitality, and energy.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-kingglad-green/10 rounded-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop"
                alt="Modern Building" 
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-kingglad-green/10 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-kingglad-charcoal mb-4">Our Mission</h3>
              <div className="w-12 h-1 bg-kingglad-green mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Kingglad Group is committed to creating value and socio-economic impact by improving lives and transforming Cameroon through its business operations and initiatives. We aim to deliver exceptional quality across all our business sectors while prioritizing sustainability and community development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-kingglad-charcoal mb-4">Our Vision</h3>
              <div className="w-12 h-1 bg-kingglad-green mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                To be a catalyst for development in Cameroon, focusing on modern infrastructure development and quality service delivery across our various business segments. We aspire to be recognized as a leading conglomerate that sets new standards of excellence in every industry we operate in.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Sectors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6 text-center">Business Sectors & Subsidiaries</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-12"></div>
            
            <p className="text-lg text-gray-600 mb-8 text-center">
              Kingglad Group operates through multiple subsidiary companies across strategic sectors:
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 bg-kingglad-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-10 h-10 text-kingglad-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-2">KINGGLA REALTY</h3>
                  <p className="text-gray-600">
                    Our real estate development and property management subsidiary specializes in modern residential and commercial property development. We create multi-story residential complexes featuring contemporary architectural designs, luxury housing projects, and mixed-use developments that blend residential and commercial spaces.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 bg-kingglad-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="w-10 h-10 text-kingglad-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-2">KINGGLAD AUTO</h3>
                  <p className="text-gray-600">
                    Our automotive services and sales division provides premium vehicles and maintenance services to individual and corporate clients. We focus on quality service delivery and customer satisfaction in all our automotive operations.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 bg-kingglad-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bed className="w-10 h-10 text-kingglad-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-2">KINGGLAD SUITES</h3>
                  <p className="text-gray-600">
                    Our hospitality and accommodation services provide comfortable and modern lodging options. We focus on creating exceptional guest experiences with modern amenities and professional service.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 bg-kingglad-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-10 h-10 text-kingglad-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-2">KINGGLAD OIL</h3>
                  <p className="text-gray-600">
                    Our energy sector operations focus on sustainable practices and efficient service delivery in Cameroon's growing energy market. We're committed to responsible business practices in this vital economic sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6 text-center">Our Journey</h2>
          <div className="w-16 h-1 bg-kingglad-green mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-kingglad-green/20"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 z-10">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-sm font-medium text-kingglad-green mb-1">{item.year}</div>
                        <h3 className="text-xl font-bold text-kingglad-charcoal mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-kingglad-green z-10"></div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6 text-center">Our Leadership</h2>
          <div className="w-16 h-1 bg-kingglad-green mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-1">{member.name}</h3>
                  <div className="text-kingglad-green font-medium mb-4">{member.position}</div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Market Position */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6 text-center">Our Market Position</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-12"></div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-6">
                As a relatively new company (incorporated in 2020), Kingglad Group is positioning itself as a modern, integrated business conglomerate targeting Cameroon's growing middle class and urban development needs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our diversified approach across real estate, automotive, hospitality, and energy sectors suggests a strategy to capture multiple revenue streams while contributing to the country's economic development.
              </p>
              <p className="text-lg text-gray-600">
                The professional branding and modern property designs indicate that we are targeting the premium to mid-premium market segments, offering contemporary solutions that meet international standards while serving the local Cameroonian market.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-kingglad-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how Kingglad Group can help you achieve your property or business goals
          </p>
          <Button 
            size="lg" 
            className="bg-white text-kingglad-green hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="/contact">
              Contact Our Team
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

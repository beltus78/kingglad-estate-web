
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Suites = () => {
  const accommodations = [
    {
      title: "Executive Suite",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop",
      features: ["King-sized bed", "Living area", "Executive workspace", "Premium amenities", "Room service"],
      description: "Our spacious Executive Suite offers the perfect blend of comfort and functionality for business travelers and discerning guests."
    },
    {
      title: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop",
      features: ["Queen-sized bed", "Modern décor", "Workspace", "Complimentary Wi-Fi", "Rainfall shower"],
      description: "Contemporary and comfortable, our Deluxe Rooms provide everything you need for a relaxing stay in Limbe."
    },
    {
      title: "Family Suite",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      features: ["Master bedroom", "Second bedroom with twin beds", "Living area", "Family-friendly amenities", "Dining space"],
      description: "Perfect for families, our spacious Family Suite offers separate bedrooms and a comfortable living area for quality time together."
    },
    {
      title: "Penthouse Suite",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&h=400&fit=crop",
      features: ["Panoramic views", "Luxury furnishings", "Private terrace", "Full kitchen", "Premium entertainment system"],
      description: "Our premium Penthouse Suite offers unparalleled luxury and spectacular views of Limbe and the surrounding landscape."
    }
  ];

  const amenities = [
    {
      title: "Restaurant & Bar",
      description: "Enjoy local and international cuisine at our on-site restaurant, complemented by a selection of fine wines and spirits at the bar."
    },
    {
      title: "Fitness Center",
      description: "Stay active during your stay with our modern fitness center, equipped with cardio machines and free weights."
    },
    {
      title: "Business Center",
      description: "Access our fully-equipped business center with high-speed internet, printing services, and meeting rooms."
    },
    {
      title: "Swimming Pool",
      description: "Relax and unwind in our outdoor swimming pool, surrounded by a comfortable lounge area."
    },
    {
      title: "Concierge Service",
      description: "Our dedicated concierge team is available to assist with reservations, transportation, and local recommendations."
    },
    {
      title: "Room Service",
      description: "Enjoy the convenience of 24-hour room service with a selection of meals and refreshments."
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
              <Bed className="w-8 h-8 text-kingglad-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-kingglad-charcoal mb-6">Kingglad Suites</h1>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8">
              Premium Hospitality & Accommodation Services
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Experience comfort and luxury at Kingglad Suites, where exceptional service meets modern amenities.
            </p>
            <Button 
              size="lg" 
              className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              asChild
            >
              <Link to="/contact">
                Book Your Stay
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Kingglad Suites */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">About Kingglad Suites</h2>
              <div className="w-12 h-1 bg-kingglad-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Kingglad Suites, established in 2022, offers premium hospitality and accommodation services in Limbe, Cameroon. Our modern facilities provide a perfect blend of comfort, convenience, and luxury for both business and leisure travelers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We pride ourselves on delivering exceptional guest experiences through our attention to detail, personalized service, and commitment to quality in every aspect of our operations.
              </p>
              <p className="text-lg text-gray-600">
                From our thoughtfully designed accommodations to our comprehensive range of amenities, Kingglad Suites is dedicated to making your stay memorable and comfortable, whether you're visiting for business or pleasure.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop"
                alt="Hotel Lobby" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Accommodations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Our Accommodations</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of comfortable and stylish accommodations
            </p>
          </div>
          
          <div className="space-y-16">
            {accommodations.map((room, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'order-2 md:order-1' : ''}`}>
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="rounded-lg shadow-xl h-80 w-full object-cover"
                  />
                </div>
                <div className={`${index % 2 !== 0 ? 'order-1 md:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-kingglad-charcoal mb-4">{room.title}</h3>
                  <p className="text-gray-600 mb-6">{room.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold text-kingglad-charcoal mb-3">Features</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {room.features.map((feature, idx) => (
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
                    <Link to="/contact">Book This Room</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Amenities & Services</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhancing your stay with premium facilities and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-kingglad-charcoal mb-3">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Guest Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6 text-center">The Kingglad Suites Experience</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-12"></div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">Exceptional Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  At Kingglad Suites, we believe that exceptional service is the foundation of a memorable stay. Our dedicated staff is committed to ensuring your comfort and satisfaction from check-in to check-out. We pride ourselves on anticipating your needs and delivering personalized service that exceeds your expectations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">Comfort & Convenience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every aspect of our accommodations is designed with your comfort in mind. From our premium bedding and thoughtful room amenities to our convenient location and comprehensive facilities, we strive to make your stay as comfortable and convenient as possible, whether you're traveling for business or pleasure.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">Local Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're passionate about helping our guests experience the best of Limbe and Cameroon. Our concierge team can provide recommendations and arrange experiences that showcase the local culture, cuisine, and attractions, allowing you to create lasting memories during your stay with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-kingglad-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to check availability and reserve your accommodation at Kingglad Suites.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-kingglad-green hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="/contact">
              Book Now
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Suites;

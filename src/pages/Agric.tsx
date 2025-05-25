
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Coffee, TreePine, Banana } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Agric = () => {
  const agricProducts = [
    {
      title: "Cocoa Production",
      description: "Premium cocoa beans grown in the fertile regions of Cameroon, recognized for their exceptional flavor and quality.",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop"
    },
    {
      title: "Palm Cultivation",
      description: "Sustainable palm plantation management focused on producing high-quality palm oil while preserving the environment.",
      icon: TreePine,
      image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=600&h=400&fit=crop"
    },
    {
      title: "Plantain Farming",
      description: "Large-scale plantain farming operations providing fresh and processed plantain products to local and international markets.",
      icon: Banana,
      image: "https://images.unsplash.com/photo-1543218024-57a70143c369?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 relative">
        <div className="h-[500px] bg-black/50 relative">
          <img 
            src="https://images.unsplash.com/photo-1599768793949-2da60ecd72e2?q=80&w=1500"
            alt="African Agriculture"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Kingglad Agric</h1>
              <p className="text-xl md:text-2xl mb-10 drop-shadow-md">
                Sustainable agricultural solutions for Cameroon's development
              </p>
              <Button 
                className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-6 text-lg"
                asChild
              >
                <a href="#products">Explore Our Products</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kingglad-charcoal mb-6">Agricultural Excellence</h2>
              <div className="w-16 h-1 bg-kingglad-green mb-8"></div>
              <p className="text-gray-600 mb-6 text-lg">
                Kingglad Agric is dedicated to developing sustainable agricultural practices that benefit both local communities and the environment. We focus on growing high-quality crops that represent the best of Cameroon's agricultural potential.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our farming operations span across the fertile regions of Cameroon, where we cultivate cocoa, palm, and plantains using environmentally responsible methods that preserve the land for future generations.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Through innovative farming techniques and community partnerships, we're creating a model for sustainable agriculture in Cameroon while producing premium crops for both domestic consumption and export.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-kingglad-green/20 rounded-full flex items-center justify-center mr-3">
                    <Leaf className="w-4 h-4 text-kingglad-green" />
                  </div>
                  <span className="text-kingglad-charcoal">Sustainable Farming</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-kingglad-green/20 rounded-full flex items-center justify-center mr-3">
                    <Leaf className="w-4 h-4 text-kingglad-green" />
                  </div>
                  <span className="text-kingglad-charcoal">Community Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-kingglad-green/20 rounded-full flex items-center justify-center mr-3">
                    <Leaf className="w-4 h-4 text-kingglad-green" />
                  </div>
                  <span className="text-kingglad-charcoal">Premium Products</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=700" 
                alt="Agricultural Operations" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">Our Agricultural Products</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We focus on cultivating high-quality produce that showcases Cameroon's exceptional agricultural potential and supports sustainable farming practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agricProducts.map((product, index) => (
              <Card key={index} className="card-luxury overflow-hidden">
                <div className="h-60 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="absolute w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-kingglad-green/10 rounded-full flex items-center justify-center mr-3">
                      <product.icon className="w-5 h-5 text-kingglad-green" />
                    </div>
                    <h3 className="text-xl font-bold text-kingglad-charcoal">{product.title}</h3>
                  </div>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Farming Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1623003641967-d71de2c0ce5f?q=80&w=700" 
                alt="Sustainable Farming" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-kingglad-charcoal mb-6">Sustainability Commitment</h2>
              <div className="w-16 h-1 bg-kingglad-green mb-8"></div>
              <p className="text-gray-600 mb-6 text-lg">
                At Kingglad Agric, we're committed to farming practices that protect and preserve Cameroon's natural resources. Our sustainable approach includes:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-kingglad-green rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Implementing environmentally responsible farming methods that minimize impact on local ecosystems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-kingglad-green rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Employing advanced irrigation systems to optimize water usage and reduce waste</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-kingglad-green rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Reducing chemical inputs through natural pest management and organic fertilization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-kingglad-green rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Supporting local farmers through fair trade practices and knowledge sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-kingglad-charcoal mb-8">Partner With Us</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Interested in our agricultural products or sustainable farming practices? Contact us today to learn more about partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button 
              variant="outline"
              className="border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white px-8 py-6 text-lg"
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agric;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Luxury Residential Complex",
      category: "realty",
      location: "Limbe Central",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
      description: "Modern 50-unit residential development featuring premium finishes and community amenities."
    },
    {
      title: "Executive Homes",
      category: "realty",
      location: "Limbe Highlands",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
      description: "Premium executive housing project with contemporary design and smart home features."
    },
    {
      title: "Kingglad Suites Hotel",
      category: "suites",
      location: "Limbe Beachfront",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      description: "Luxury boutique hotel offering premium accommodations with ocean views."
    },
    {
      title: "Mixed-Use Development",
      category: "realty",
      location: "Limbe Business District",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      description: "Integrated commercial and residential space designed for modern urban living."
    },
    {
      title: "Commercial Tower",
      category: "realty",
      location: "Downtown Limbe",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
      description: "20-story commercial office building with premium amenities and workspaces."
    },
    {
      title: "Auto Showroom",
      category: "auto",
      location: "Limbe Auto District",
      image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600&h=400&fit=crop",
      description: "Modern automotive showroom displaying our premium vehicle collection."
    },
    {
      title: "Kingglad Oil Station",
      category: "oil",
      location: "East Limbe",
      image: "https://images.unsplash.com/photo-1611031613280-706447583cdf?w=600&h=400&fit=crop",
      description: "Contemporary fuel station designed with efficiency and customer convenience in mind."
    },
    {
      title: "Luxury Apartments",
      category: "realty",
      location: "Limbe Waterfront",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      description: "Premium apartment complex with waterfront views and upscale amenities."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-kingglad-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-kingglad-charcoal mb-6">Our Portfolio</h1>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8">
              Showcasing our finest projects and developments across multiple business sectors
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              className={filter === 'all' ? 'bg-kingglad-green hover:bg-kingglad-green-dark text-white' : 'border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white'}
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'realty' ? 'default' : 'outline'}
              className={filter === 'realty' ? 'bg-kingglad-green hover:bg-kingglad-green-dark text-white' : 'border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white'}
              onClick={() => setFilter('realty')}
            >
              Realty
            </Button>
            <Button
              variant={filter === 'auto' ? 'default' : 'outline'}
              className={filter === 'auto' ? 'bg-kingglad-green hover:bg-kingglad-green-dark text-white' : 'border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white'}
              onClick={() => setFilter('auto')}
            >
              Auto
            </Button>
            <Button
              variant={filter === 'suites' ? 'default' : 'outline'}
              className={filter === 'suites' ? 'bg-kingglad-green hover:bg-kingglad-green-dark text-white' : 'border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white'}
              onClick={() => setFilter('suites')}
            >
              Suites
            </Button>
            <Button
              variant={filter === 'oil' ? 'default' : 'outline'}
              className={filter === 'oil' ? 'bg-kingglad-green hover:bg-kingglad-green-dark text-white' : 'border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white'}
              onClick={() => setFilter('oil')}
            >
              Oil
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-kingglad-green text-white text-xs px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-2">{project.title}</h3>
                  <p className="text-kingglad-green text-sm mb-4">{project.location}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-kingglad-green text-kingglad-green hover:bg-kingglad-green hover:text-white"
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
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Interested in Our Projects?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our current and upcoming developments across all business sectors.
          </p>
          <Button 
            size="lg" 
            className="bg-kingglad-green hover:bg-kingglad-green-dark text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;

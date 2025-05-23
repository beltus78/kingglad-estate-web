
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contacts = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Limbe, Cameroon"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["671673049"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@kinggladgroup.com"]
    }
  ];

  const departments = [
    {
      name: "General Inquiries",
      email: "info@kinggladgroup.com",
      phone: "671673049"
    },
    {
      name: "Kingglad Realty",
      email: "realty@kinggladgroup.com",
      phone: "671673049"
    },
    {
      name: "Kingglad Auto",
      email: "auto@kinggladgroup.com",
      phone: "671673049"
    },
    {
      name: "Kingglad Suites",
      email: "suites@kinggladgroup.com",
      phone: "671673049"
    },
    {
      name: "Kingglad Oil",
      email: "oil@kinggladgroup.com",
      phone: "671673049"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-kingglad-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-kingglad-charcoal mb-6">Contact Us</h1>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8">
              We're here to answer your questions and discuss how we can help you
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contacts.map((contact, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-kingglad-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <contact.icon className="w-8 h-8 text-kingglad-green" />
                  </div>
                  <h3 className="text-xl font-bold text-kingglad-charcoal mb-4">{contact.title}</h3>
                  <div className="space-y-2">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Get In Touch</h2>
                <div className="w-12 h-1 bg-kingglad-green mb-8"></div>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours. We're ready to answer your questions and provide the information you need.
                </p>
                
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-kingglad-charcoal">Our Departments</h3>
                  <div className="space-y-6">
                    {departments.map((dept, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                        <h4 className="font-bold text-kingglad-charcoal mb-2">{dept.name}</h4>
                        <p className="text-gray-600 flex items-center mb-1">
                          <Mail className="w-4 h-4 text-kingglad-green mr-2" />
                          {dept.email}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <Phone className="w-4 h-4 text-kingglad-green mr-2" />
                          {dept.phone}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-kingglad-charcoal mb-6">Send Us a Message</h3>
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
                        <Input
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="border-gray-200 focus:border-kingglad-green"
                          required
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
        </div>
      </section>
      
      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-kingglad-charcoal mb-6">Business Hours</h2>
            <div className="w-16 h-1 bg-kingglad-green mx-auto mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
              <div>
                <h3 className="font-bold text-kingglad-charcoal mb-4">Weekdays</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-bold text-kingglad-charcoal mb-4">Weekends</h3>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

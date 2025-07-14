"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Globe,
  Users,
  Headphones,
  Building
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: '24/7 customer support',
    contact: '1-800-AUTO-PRO',
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email',
    contact: 'support@autoconnectpro.com',
    action: 'Send Email'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Instant messaging support',
    contact: 'Available 24/7',
    action: 'Start Chat'
  },
  {
    icon: Building,
    title: 'Visit Our Office',
    description: 'Meet us in person',
    contact: '123 Auto Plaza, NYC',
    action: 'Get Directions'
  }
];

const offices = [
  {
    city: 'New York',
    address: '123 Auto Plaza, Suite 500\nNew York, NY 10001',
    phone: '+1 (212) 555-0123',
    email: 'ny@autoconnectpro.com',
    hours: 'Mon-Fri: 9AM-6PM EST'
  },
  {
    city: 'Los Angeles',
    address: '456 Motor Ave, Floor 12\nLos Angeles, CA 90028',
    phone: '+1 (323) 555-0456',
    email: 'la@autoconnectpro.com',
    hours: 'Mon-Fri: 9AM-6PM PST'
  },
  {
    city: 'Miami',
    address: '789 Ocean Drive, Suite 200\nMiami, FL 33139',
    phone: '+1 (305) 555-0789',
    email: 'miami@autoconnectpro.com',
    hours: 'Mon-Fri: 9AM-6PM EST'
  }
];

const faqs = [
  {
    question: 'How does the dropshipping process work?',
    answer: 'Our dropshipping process is seamless. Once you place an order, we coordinate directly with our verified dealers to arrange inspection, documentation, and shipping to your location.'
  },
  {
    question: 'Are all vehicles inspected before delivery?',
    answer: 'Yes, every vehicle undergoes a comprehensive 150-point inspection by certified technicians before delivery. We provide detailed inspection reports with photos.'
  },
  {
    question: 'What countries do you ship to?',
    answer: 'We currently ship to 45+ countries worldwide. Shipping costs and delivery times vary by location. Contact us for specific shipping information to your area.'
  },
  {
    question: 'How do I become a verified dealer?',
    answer: 'To become a verified dealer, you need to meet our strict criteria including proper licensing, insurance, and track record. Apply through our dealer portal for review.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept wire transfers, certified checks, and financing through our partner institutions. All transactions are secured and insured for your protection.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AutoConnect Pro</h1>
                <p className="text-xs text-gray-500">Premium Car Marketplace</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/inventory" className="text-gray-700 hover:text-blue-600 transition-colors">Inventory</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-blue-600 font-medium">Contact</Link>
              <Link href="/dashboard">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Dashboard
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Have questions about our premium vehicles or services? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach us. Our team is available 24/7 to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 font-semibold mb-4">{method.contact}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="vehicle">Vehicle Information</SelectItem>
                            <SelectItem value="dealer">Dealer Partnership</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="shipping">Shipping & Logistics</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                          {office.city}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start">
                          <Building className="w-4 h-4 mr-2 text-gray-500 mt-1" />
                          <div className="text-gray-600 whitespace-pre-line">{office.address}</div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-gray-600">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-gray-600">{office.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-gray-600">{office.hours}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6">
            <Headphones className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Support</h2>
          <p className="text-xl mb-6 text-red-100 max-w-2xl mx-auto">
            For urgent matters related to vehicle delivery, accidents, or emergency assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Emergency Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
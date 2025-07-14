"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Car, 
  Search, 
  Book, 
  MessageSquare, 
  Phone, 
  Mail,
  Video,
  Download,
  ExternalLink,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  FileText,
  PlayCircle,
  Users,
  Zap
} from 'lucide-react';

const supportCategories = [
  {
    title: 'Getting Started',
    icon: Zap,
    articles: 12,
    description: 'Learn the basics of using AutoConnect Pro'
  },
  {
    title: 'Vehicle Management',
    icon: Car,
    articles: 18,
    description: 'How to list, edit, and manage your inventory'
  },
  {
    title: 'Account & Billing',
    icon: FileText,
    articles: 8,
    description: 'Manage your account settings and billing'
  },
  {
    title: 'Shipping & Logistics',
    icon: ExternalLink,
    articles: 15,
    description: 'International shipping and delivery processes'
  },
  {
    title: 'API Documentation',
    icon: Book,
    articles: 25,
    description: 'Technical documentation for developers'
  },
  {
    title: 'Troubleshooting',
    icon: AlertCircle,
    articles: 20,
    description: 'Common issues and solutions'
  }
];

const popularArticles = [
  {
    title: 'How to create your first vehicle listing',
    category: 'Getting Started',
    readTime: '5 min',
    views: '12.5k',
    status: 'updated'
  },
  {
    title: 'Understanding international shipping costs',
    category: 'Shipping & Logistics',
    readTime: '8 min',
    views: '9.2k',
    status: 'new'
  },
  {
    title: 'Setting up payment methods and billing',
    category: 'Account & Billing',
    readTime: '6 min',
    views: '8.7k',
    status: 'updated'
  },
  {
    title: 'Using the analytics dashboard effectively',
    category: 'Vehicle Management',
    readTime: '10 min',
    views: '7.3k',
    status: 'popular'
  },
  {
    title: 'API authentication and rate limits',
    category: 'API Documentation',
    readTime: '12 min',
    views: '6.1k',
    status: 'technical'
  }
];

const videoTutorials = [
  {
    title: 'Platform Overview - Getting Started',
    duration: '8:32',
    thumbnail: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=400',
    views: '15.2k'
  },
  {
    title: 'Creating Professional Vehicle Listings',
    duration: '12:45',
    thumbnail: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=400',
    views: '11.8k'
  },
  {
    title: 'Managing Orders and Customer Communications',
    duration: '9:18',
    thumbnail: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=400',
    views: '8.9k'
  },
  {
    title: 'Advanced Analytics and Reporting',
    duration: '15:22',
    thumbnail: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=400',
    views: '7.4k'
  }
];

const contactOptions = [
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: 'Available 24/7',
    responseTime: 'Typically < 2 minutes',
    icon: MessageSquare,
    action: 'Start Chat',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with a support specialist',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    icon: Phone,
    action: 'Call Now',
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    title: 'Email Support',
    description: 'Send us a detailed message',
    availability: 'Available 24/7',
    responseTime: 'Within 4 hours',
    icon: Mail,
    action: 'Send Email',
    color: 'bg-orange-600 hover:bg-orange-700'
  },
  {
    title: 'Video Call',
    description: 'Schedule a screen-sharing session',
    availability: 'By appointment',
    responseTime: 'Same day booking',
    icon: Video,
    action: 'Schedule Call',
    color: 'bg-purple-600 hover:bg-purple-700'
  }
];

const systemStatus = [
  { service: 'Platform API', status: 'operational', uptime: '99.9%' },
  { service: 'Vehicle Search', status: 'operational', uptime: '99.8%' },
  { service: 'Payment Processing', status: 'operational', uptime: '99.9%' },
  { service: 'Image Upload', status: 'maintenance', uptime: '99.7%' },
  { service: 'Email Notifications', status: 'operational', uptime: '99.9%' }
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('help-center');

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
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Support Center</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Find answers, get help, and learn how to make the most of AutoConnect Pro
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search for help articles, guides, and more..."
                className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="help-center">Help Center</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
            <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
            <TabsTrigger value="status">System Status</TabsTrigger>
          </TabsList>

          <TabsContent value="help-center" className="space-y-8">
            {/* Categories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supportCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                            <category.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{category.title}</CardTitle>
                            <p className="text-sm text-gray-600">{category.articles} articles</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Popular Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                            <Badge 
                              className={
                                article.status === 'new' ? 'bg-green-100 text-green-800' :
                                article.status === 'updated' ? 'bg-blue-100 text-blue-800' :
                                article.status === 'popular' ? 'bg-orange-100 text-orange-800' :
                                'bg-purple-100 text-purple-800'
                              }
                            >
                              {article.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{article.category}</span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.readTime}
                            </span>
                            <span>{article.views} views</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Support Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                          <option.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{option.title}</CardTitle>
                          <CardDescription>{option.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Availability:</span>
                          <span className="font-medium">{option.availability}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time:</span>
                          <span className="font-medium">{option.responseTime}</span>
                        </div>
                      </div>
                      <Button className={`w-full ${option.color}`}>
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Emergency Support */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 mb-4">
                  For urgent issues affecting vehicle deliveries, payment problems, or security concerns.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoTutorials.map((video, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
                        <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                          <PlayCircle className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-4">
                        <span>{video.views} views</span>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Download Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Downloadable Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Quick Start Guide (PDF)</h4>
                      <p className="text-sm text-gray-600">Complete setup guide for new dealers</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">API Documentation</h4>
                      <p className="text-sm text-gray-600">Technical reference for developers</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Online
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">System Status</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    All Systems Operational
                  </CardTitle>
                  <CardDescription>
                    Last updated: {new Date().toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemStatus.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            service.status === 'operational' ? 'bg-green-500' :
                            service.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <span className="font-medium">{service.service}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">{service.uptime} uptime</span>
                          <Badge className={
                            service.status === 'operational' ? 'bg-green-100 text-green-800' :
                            service.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }>
                            {service.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Incident History */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Recent Incidents</h3>
                  <p className="text-gray-600">All systems have been running smoothly for the past 30 days.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
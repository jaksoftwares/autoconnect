"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Car, 
  Check, 
  X, 
  Star, 
  Shield, 
  Zap, 
  Crown,
  Users,
  BarChart3,
  Headphones,
  Globe,
  Truck
} from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 99,
    period: 'month',
    description: 'Perfect for new dealers getting started',
    icon: Car,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    popular: false,
    features: [
      { name: 'Up to 25 vehicle listings', included: true },
      { name: 'Basic analytics dashboard', included: true },
      { name: 'Email support', included: true },
      { name: 'Standard listing visibility', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Basic vehicle history reports', included: true },
      { name: 'Priority listing placement', included: false },
      { name: 'Advanced analytics', included: false },
      { name: 'Phone support', included: false },
      { name: 'Custom branding', included: false },
      { name: 'API access', included: false },
      { name: 'Dedicated account manager', included: false }
    ]
  },
  {
    name: 'Professional',
    price: 299,
    period: 'month',
    description: 'Ideal for established dealers with growing inventory',
    icon: Star,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    popular: true,
    features: [
      { name: 'Up to 100 vehicle listings', included: true },
      { name: 'Advanced analytics dashboard', included: true },
      { name: 'Priority email & phone support', included: true },
      { name: 'Enhanced listing visibility', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Comprehensive vehicle reports', included: true },
      { name: 'Priority listing placement', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Phone support', included: true },
      { name: 'Basic custom branding', included: true },
      { name: 'API access', included: false },
      { name: 'Dedicated account manager', included: false }
    ]
  },
  {
    name: 'Enterprise',
    price: 799,
    period: 'month',
    description: 'For large dealerships and dealer networks',
    icon: Crown,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    popular: false,
    features: [
      { name: 'Unlimited vehicle listings', included: true },
      { name: 'Enterprise analytics suite', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Premium listing visibility', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Premium vehicle reports', included: true },
      { name: 'Top priority listing placement', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Phone support', included: true },
      { name: 'Full custom branding', included: true },
      { name: 'Full API access', included: true },
      { name: 'Dedicated account manager', included: true }
    ]
  }
];

const additionalServices = [
  {
    name: 'Premium Photography',
    price: 150,
    period: 'vehicle',
    description: 'Professional vehicle photography service',
    icon: Camera,
    features: ['360° interior/exterior shots', 'Professional editing', 'High-resolution images', '24-hour turnaround']
  },
  {
    name: 'Vehicle Inspection',
    price: 299,
    period: 'vehicle',
    description: 'Comprehensive 150-point inspection',
    icon: Shield,
    features: ['Certified technician inspection', 'Detailed report with photos', 'History verification', 'Condition assessment']
  },
  {
    name: 'Global Shipping',
    price: 'Custom',
    period: 'quote',
    description: 'Worldwide vehicle shipping coordination',
    icon: Truck,
    features: ['Door-to-door delivery', 'Insurance coverage', 'Real-time tracking', 'Customs handling']
  },
  {
    name: 'Marketing Boost',
    price: 199,
    period: 'month',
    description: 'Enhanced marketing and promotion',
    icon: Zap,
    features: ['Featured listings', 'Social media promotion', 'Email marketing', 'SEO optimization']
  }
];

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, wire transfers, and ACH payments. Enterprise customers can also set up invoicing with NET 30 terms.'
  },
  {
    question: 'Can I change my plan at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees for any of our plans. You only pay the monthly subscription fee and any additional services you choose.'
  },
  {
    question: 'What happens if I exceed my listing limit?',
    answer: 'You can purchase additional listing slots for $5 per vehicle per month, or upgrade to a higher plan for better value.'
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Yes, we offer custom solutions for large dealer networks and enterprise customers. Contact our sales team for a personalized quote.'
  }
];

function Camera(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function Pricing() {
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Choose the perfect plan for your dealership. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All plans include our core features. Upgrade anytime as your business grows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`flex items-center justify-center w-16 h-16 ${plan.bgColor} rounded-full mx-auto mb-4`}>
                    <plan.icon className={`w-8 h-8 ${plan.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your listings and sales with our premium add-on services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-center mt-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {service.price === 'Custom' ? 'Custom' : `$${service.price}`}
                    </span>
                    <span className="text-gray-600">/{service.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    {service.price === 'Custom' ? 'Get Quote' : 'Add Service'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose AutoConnect Pro?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading features and support to help your dealership succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Network</h3>
              <p className="text-gray-600">Access to 850+ verified dealers and 2,500+ premium vehicles worldwide.</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Comprehensive insights and reporting to optimize your sales performance.</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                <Headphones className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to help you succeed at every step.</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Sell to customers in 45+ countries with our international shipping network.</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Bank-level security and insurance protection for all transactions.</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Setup</h3>
              <p className="text-gray-600">Get started in minutes with our streamlined onboarding process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and services
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of successful dealers who trust AutoConnect Pro for their premium vehicle sales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
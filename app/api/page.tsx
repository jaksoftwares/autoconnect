"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Car, 
  Code, 
  Key, 
  Zap, 
  Shield, 
  Globe,
  Database,
  Webhook,
  BarChart3,
  Settings,
  ExternalLink,
  Copy,
  CheckCircle
} from 'lucide-react';

const apiFeatures = [
  {
    icon: Database,
    title: 'Vehicle Data API',
    description: 'Access comprehensive vehicle information, specifications, and pricing data.',
    endpoints: ['GET /api/vehicles', 'GET /api/vehicles/{id}', 'POST /api/vehicles']
  },
  {
    icon: Settings,
    title: 'Inventory Management',
    description: 'Programmatically manage your vehicle listings and inventory.',
    endpoints: ['PUT /api/vehicles/{id}', 'DELETE /api/vehicles/{id}', 'GET /api/inventory']
  },
  {
    icon: BarChart3,
    title: 'Analytics API',
    description: 'Retrieve detailed analytics and performance metrics.',
    endpoints: ['GET /api/analytics', 'GET /api/reports', 'GET /api/metrics']
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Real-time notifications for orders, updates, and system events.',
    endpoints: ['POST /api/webhooks', 'GET /api/webhooks', 'DELETE /api/webhooks/{id}']
  }
];

const codeExamples = {
  javascript: `// Initialize AutoConnect Pro API client
const autoConnect = new AutoConnectAPI({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});

// Get all vehicles
const vehicles = await autoConnect.vehicles.list({
  limit: 20,
  status: 'available',
  brand: 'BMW'
});

// Create a new vehicle listing
const newVehicle = await autoConnect.vehicles.create({
  name: '2023 BMW M4 Competition',
  price: 89999,
  year: 2023,
  mileage: 1200,
  specifications: {
    engine: '3.0L Twin Turbo I6',
    horsepower: 503,
    transmission: 'Automatic'
  }
});`,
  
  python: `# AutoConnect Pro Python SDK
from autoconnect import AutoConnectAPI

# Initialize client
client = AutoConnectAPI(
    api_key='your-api-key',
    environment='production'
)

# Get all vehicles
vehicles = client.vehicles.list(
    limit=20,
    status='available',
    brand='BMW'
)

# Create a new vehicle listing
new_vehicle = client.vehicles.create({
    'name': '2023 BMW M4 Competition',
    'price': 89999,
    'year': 2023,
    'mileage': 1200,
    'specifications': {
        'engine': '3.0L Twin Turbo I6',
        'horsepower': 503,
        'transmission': 'Automatic'
    }
})`,
  
  curl: `# Get all vehicles
curl -X GET "https://api.autoconnectpro.com/v1/vehicles" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json"

# Create a new vehicle listing
curl -X POST "https://api.autoconnectpro.com/v1/vehicles" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "2023 BMW M4 Competition",
    "price": 89999,
    "year": 2023,
    "mileage": 1200,
    "specifications": {
      "engine": "3.0L Twin Turbo I6",
      "horsepower": 503,
      "transmission": "Automatic"
    }
  }'`
};

const rateLimits = [
  { plan: 'Starter', requests: '1,000', burst: '100', price: '$99/month' },
  { plan: 'Professional', requests: '10,000', burst: '500', price: '$299/month' },
  { plan: 'Enterprise', requests: 'Unlimited', burst: '2,000', price: '$799/month' }
];

const webhookEvents = [
  { event: 'vehicle.created', description: 'Triggered when a new vehicle is listed' },
  { event: 'vehicle.updated', description: 'Triggered when vehicle information is modified' },
  { event: 'vehicle.sold', description: 'Triggered when a vehicle is marked as sold' },
  { event: 'order.created', description: 'Triggered when a new order is placed' },
  { event: 'order.updated', description: 'Triggered when order status changes' },
  { event: 'payment.completed', description: 'Triggered when payment is processed' }
];

export default function API() {
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
          <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mx-auto mb-6">
            <Code className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">AutoConnect Pro API</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Powerful REST API to integrate premium vehicle data and marketplace functionality into your applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Get API Key
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">API Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive API endpoints to power your automotive applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Endpoints:</h4>
                    {feature.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="flex items-center space-x-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          {endpoint}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Code Examples</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started quickly with our SDK and code examples
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Examples</CardTitle>
              <CardDescription>
                Choose your preferred programming language to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                
                {Object.entries(codeExamples).map(([language, code]) => (
                  <TabsContent key={language} value={language}>
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute top-4 right-4"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Authentication & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication & Security</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0">
                    <Key className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">API Key Authentication</h3>
                    <p className="text-gray-600">Secure your API requests with bearer token authentication. Each request must include your API key in the Authorization header.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">HTTPS Encryption</h3>
                    <p className="text-gray-600">All API communications are encrypted using TLS 1.3. We never transmit sensitive data over unencrypted connections.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg flex-shrink-0">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rate Limiting</h3>
                    <p className="text-gray-600">Fair usage policies with generous rate limits. Upgrade your plan for higher limits and priority processing.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rate Limits</h2>
              <div className="space-y-4">
                {rateLimits.map((limit, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{limit.plan}</h3>
                        <Badge className="bg-blue-100 text-blue-800">{limit.price}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Requests/hour:</span>
                          <div className="font-semibold">{limit.requests}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Burst limit:</span>
                          <div className="font-semibold">{limit.burst}/min</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Webhooks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with real-time notifications for important events
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Webhook className="w-5 h-5 mr-2" />
                  Available Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {webhookEvents.map((webhook, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Badge variant="outline" className="font-mono text-xs mt-1">
                        {webhook.event}
                      </Badge>
                      <p className="text-sm text-gray-600 flex-1">{webhook.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Webhook Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Setup Process:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                      <li>Configure your webhook endpoint URL</li>
                      <li>Select the events you want to receive</li>
                      <li>Set up signature verification</li>
                      <li>Test your webhook configuration</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Example Payload:</h4>
                    <pre className="text-xs text-gray-600 overflow-x-auto">
{`{
  "event": "vehicle.created",
  "data": {
    "id": "veh_123456",
    "name": "2023 BMW M4",
    "price": 89999,
    "status": "available"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDKs and Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SDKs & Tools</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Official SDKs and tools to accelerate your development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4">
                  <Code className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>JavaScript SDK</CardTitle>
                <CardDescription>Official Node.js and browser SDK</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-2">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on npm
                </Button>
                <p className="text-xs text-gray-500">npm install @autoconnect/sdk</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Python SDK</CardTitle>
                <CardDescription>Official Python library</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-2">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on PyPI
                </Button>
                <p className="text-xs text-gray-500">pip install autoconnect-python</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>API Explorer</CardTitle>
                <CardDescription>Interactive API testing tool</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Explorer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get your API key and start integrating AutoConnect Pro into your applications today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Get API Key
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
              Read Documentation
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">Free tier available • No credit card required</p>
        </div>
      </section>
    </div>
  );
}
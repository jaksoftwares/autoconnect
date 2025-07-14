"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Car, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  SlidersHorizontal,
  MapPin,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Heart,
  Share2,
  Phone,
  Mail
} from 'lucide-react';

const allCars = [
  {
    id: 1,
    name: "2023 BMW M4 Competition",
    price: 89999,
    originalPrice: 94999,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: 2023,
    mileage: 1200,
    fuel: "Gasoline",
    transmission: "Automatic",
    status: "Available",
    location: "New York, NY",
    dealer: "Premium Motors NYC",
    engine: "3.0L Twin Turbo I6",
    horsepower: 503,
    bodyType: "Coupe",
    drivetrain: "RWD",
    color: "Alpine White",
    features: ["Navigation", "Leather Seats", "Sunroof", "Premium Audio"]
  },
  {
    id: 2,
    name: "2023 Mercedes-AMG GT 63",
    price: 156999,
    originalPrice: 162999,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: 2023,
    mileage: 850,
    fuel: "Gasoline",
    transmission: "Automatic",
    status: "Available",
    location: "Los Angeles, CA",
    dealer: "Luxury Auto LA",
    engine: "4.0L Twin Turbo V8",
    horsepower: 630,
    bodyType: "Sedan",
    drivetrain: "AWD",
    color: "Obsidian Black",
    features: ["AMG Performance", "Massage Seats", "360 Camera", "Burmester Audio"]
  },
  {
    id: 3,
    name: "2022 Audi RS6 Avant",
    price: 124999,
    originalPrice: 129999,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: 2022,
    mileage: 2100,
    fuel: "Gasoline",
    transmission: "Automatic",
    status: "Sold",
    location: "Miami, FL",
    dealer: "Elite Cars Miami",
    engine: "4.0L Twin Turbo V8",
    horsepower: 591,
    bodyType: "Wagon",
    drivetrain: "AWD",
    color: "Nardo Gray",
    features: ["Sport Differential", "Air Suspension", "Matrix LED", "Bang & Olufsen"]
  },
  {
    id: 4,
    name: "2023 Porsche 911 Turbo S",
    price: 198999,
    originalPrice: 205999,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: 2023,
    mileage: 600,
    fuel: "Gasoline",
    transmission: "Automatic",
    status: "Available",
    location: "Chicago, IL",
    dealer: "Sport Cars Chicago",
    engine: "3.8L Twin Turbo H6",
    horsepower: 640,
    bodyType: "Coupe",
    drivetrain: "AWD",
    color: "Guards Red",
    features: ["Sport Chrono", "PASM", "Ceramic Brakes", "Bose Audio"]
  },
  {
    id: 5,
    name: "2023 Tesla Model S Plaid",
    price: 134999,
    originalPrice: 139999,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: 2023,
    mileage: 300,
    fuel: "Electric",
    transmission: "Automatic",
    status: "Available",
    location: "Austin, TX",
    dealer: "EV Specialists Austin",
    engine: "Tri Motor Electric",
    horsepower: 1020,
    bodyType: "Sedan",
    drivetrain: "AWD",
    color: "Pearl White",
    features: ["Autopilot", "Premium Interior", "Glass Roof", "Premium Audio"]
  },
  {
    id: 6,
    name: "2022 Lamborghini Huracán",
    price: 267999,
    originalPrice: 275999,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: 2022,
    mileage: 1800,
    fuel: "Gasoline",
    transmission: "Automatic",
    status: "Available",
    location: "Las Vegas, NV",
    dealer: "Exotic Cars Vegas",
    engine: "5.2L V10",
    horsepower: 630,
    bodyType: "Coupe",
    drivetrain: "AWD",
    color: "Arancio Borealis",
    features: ["Carbon Fiber", "Sport Exhaust", "Lifting System", "Premium Leather"]
  },
  {
    id: 7,
    name: "2023 Ferrari F8 Tributo",
    price: 329999,
    originalPrice: 339999,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: 2023,
    mileage: 450,
    fuel: "Gasoline",
    transmission: "Automatic",
    status: "Available",
    location: "Beverly Hills, CA",
    dealer: "Ferrari Beverly Hills",
    engine: "3.9L Twin Turbo V8",
    horsepower: 710,
    bodyType: "Coupe",
    drivetrain: "RWD",
    color: "Rosso Corsa",
    features: ["Carbon Fiber Racing", "Scuderia Shields", "Premium Audio", "Racing Seats"]
  },
  {
    id: 8,
    name: "2023 McLaren 720S",
    price: 299999,
    originalPrice: 309999,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: 2023,
    mileage: 750,
    fuel: "Gasoline",
    transmission: "Automatic",
    status: "Available",
    location: "Miami, FL",
    dealer: "McLaren Miami",
    engine: "4.0L Twin Turbo V8",
    horsepower: 710,
    bodyType: "Coupe",
    drivetrain: "RWD",
    color: "Papaya Orange",
    features: ["Active Suspension", "Carbon Fiber Body", "Track Telemetry", "Bowers & Wilkins"]
  }
];

export default function Inventory() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedBodyType, setSelectedBodyType] = useState('all');
  const [selectedFuel, setSelectedFuel] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 400000]);
  const [yearRange, setYearRange] = useState([2020, 2024]);
  const [mileageRange, setMileageRange] = useState([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = allCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || car.name.toLowerCase().includes(selectedBrand.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || car.status.toLowerCase() === selectedStatus.toLowerCase();
    const matchesBodyType = selectedBodyType === 'all' || car.bodyType.toLowerCase() === selectedBodyType.toLowerCase();
    const matchesFuel = selectedFuel === 'all' || car.fuel.toLowerCase() === selectedFuel.toLowerCase();
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    const matchesYear = car.year >= yearRange[0] && car.year <= yearRange[1];
    const matchesMileage = car.mileage >= mileageRange[0] && car.mileage <= mileageRange[1];
    
    return matchesSearch && matchesBrand && matchesStatus && matchesBodyType && 
           matchesFuel && matchesPrice && matchesYear && matchesMileage;
  });

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
              <Link href="/inventory" className="text-blue-600 font-medium">Inventory</Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Vehicle Inventory</h2>
          <p className="text-gray-600">Discover our complete collection of premium vehicles from trusted dealers worldwide</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search vehicles..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brands</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="porsche">Porsche</SelectItem>
                      <SelectItem value="tesla">Tesla</SelectItem>
                      <SelectItem value="lamborghini">Lamborghini</SelectItem>
                      <SelectItem value="ferrari">Ferrari</SelectItem>
                      <SelectItem value="mclaren">McLaren</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Body Type Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Body Type</label>
                  <Select value={selectedBodyType} onValueChange={setSelectedBodyType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Body Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="wagon">Wagon</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Fuel Type Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Fuel Type</label>
                  <Select value={selectedFuel} onValueChange={setSelectedFuel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Fuel Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="gasoline">Gasoline</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={400000}
                    min={0}
                    step={5000}
                    className="mt-2"
                  />
                </div>

                {/* Year Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Year: {yearRange[0]} - {yearRange[1]}
                  </label>
                  <Slider
                    value={yearRange}
                    onValueChange={setYearRange}
                    max={2024}
                    min={2015}
                    step={1}
                    className="mt-2"
                  />
                </div>

                {/* Mileage Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Mileage: {mileageRange[0].toLocaleString()} - {mileageRange[1].toLocaleString()} mi
                  </label>
                  <Slider
                    value={mileageRange}
                    onValueChange={setMileageRange}
                    max={50000}
                    min={0}
                    step={500}
                    className="mt-2"
                  />
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedBrand('all');
                    setSelectedStatus('all');
                    setSelectedBodyType('all');
                    setSelectedFuel('all');
                    setPriceRange([0, 400000]);
                    setYearRange([2020, 2024]);
                    setMileageRange([0, 50000]);
                  }}
                  variant="outline"
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <p className="text-gray-600">
                  Showing {filteredCars.length} of {allCars.length} vehicles
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Vehicle Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <Card key={car.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={car.status === 'Available' ? 'bg-green-500' : 'bg-red-500'}>
                          {car.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                      {car.originalPrice > car.price && (
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="destructive">
                            Save ${(car.originalPrice - car.price).toLocaleString()}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{car.name}</CardTitle>
                      <CardDescription className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {car.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {car.year}
                        </div>
                        <div className="flex items-center">
                          <Gauge className="w-4 h-4 mr-1" />
                          {car.mileage.toLocaleString()} mi
                        </div>
                        <div className="flex items-center">
                          <Fuel className="w-4 h-4 mr-1" />
                          {car.fuel}
                        </div>
                        <div className="flex items-center">
                          <Settings className="w-4 h-4 mr-1" />
                          {car.transmission}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">
                            ${car.price.toLocaleString()}
                          </div>
                          {car.originalPrice > car.price && (
                            <div className="text-sm text-gray-500 line-through">
                              ${car.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{car.dealer}</p>
                          <p className="text-xs text-gray-500">{car.horsepower} HP</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-orange-500 hover:bg-orange-600" 
                          disabled={car.status === 'Sold'}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {car.status === 'Available' ? 'Contact' : 'Sold'}
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCars.map((car) => (
                  <Card key={car.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative md:w-64 h-48 md:h-32">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <Badge 
                            className={`absolute top-2 left-2 ${car.status === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}
                          >
                            {car.status}
                          </Badge>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-1">{car.name}</h3>
                              <p className="text-gray-600 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {car.location} • {car.dealer}
                              </p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                              <div className="text-2xl font-bold text-blue-600">
                                ${car.price.toLocaleString()}
                              </div>
                              {car.originalPrice > car.price && (
                                <div className="text-sm text-gray-500 line-through">
                                  ${car.originalPrice.toLocaleString()}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {car.year}
                            </div>
                            <div className="flex items-center">
                              <Gauge className="w-4 h-4 mr-1" />
                              {car.mileage.toLocaleString()} mi
                            </div>
                            <div className="flex items-center">
                              <Fuel className="w-4 h-4 mr-1" />
                              {car.fuel}
                            </div>
                            <div className="flex items-center">
                              <Settings className="w-4 h-4 mr-1" />
                              {car.transmission}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {car.features.slice(0, 4).map((feature, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button 
                              className="bg-orange-500 hover:bg-orange-600" 
                              disabled={car.status === 'Sold'}
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              {car.status === 'Available' ? 'Contact Dealer' : 'Sold'}
                            </Button>
                            <Button variant="outline">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
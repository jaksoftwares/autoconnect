"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Car, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Search,
  Filter,
  Settings,
  Bell,
  User,
  LogOut,
  BarChart3,
  Calendar,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload
} from 'lucide-react';

const dashboardStats = [
  { title: 'Total Vehicles', value: '2,547', change: '+12%', icon: Car, color: 'text-blue-600' },
  { title: 'Active Dealers', value: '856', change: '+8%', icon: Users, color: 'text-green-600' },
  { title: 'Monthly Revenue', value: '$2.4M', change: '+15%', icon: DollarSign, color: 'text-orange-600' },
  { title: 'Conversion Rate', value: '3.2%', change: '+0.3%', icon: TrendingUp, color: 'text-purple-600' },
];

const recentVehicles = [
  { id: 1, name: '2023 BMW M4 Competition', dealer: 'Premium Motors NYC', price: 89999, status: 'Active', date: '2024-01-15' },
  { id: 2, name: '2023 Mercedes-AMG GT 63', dealer: 'Luxury Auto LA', price: 156999, status: 'Pending', date: '2024-01-14' },
  { id: 3, name: '2022 Audi RS6 Avant', dealer: 'Elite Cars Miami', price: 124999, status: 'Sold', date: '2024-01-13' },
  { id: 4, name: '2023 Porsche 911 Turbo S', dealer: 'Sport Cars Chicago', price: 198999, status: 'Active', date: '2024-01-12' },
  { id: 5, name: '2023 Tesla Model S Plaid', dealer: 'EV Specialists Austin', price: 134999, status: 'Active', date: '2024-01-11' },
];

const recentOrders = [
  { id: 1, customer: 'John Smith', vehicle: '2023 BMW M4 Competition', amount: 89999, status: 'Processing', date: '2024-01-15' },
  { id: 2, customer: 'Sarah Johnson', vehicle: '2022 Audi RS6 Avant', amount: 124999, status: 'Completed', date: '2024-01-14' },
  { id: 3, customer: 'Michael Brown', vehicle: '2023 Tesla Model S Plaid', amount: 134999, status: 'Shipped', date: '2024-01-13' },
  { id: 4, customer: 'Emily Davis', vehicle: '2023 Mercedes-AMG GT 63', amount: 156999, status: 'Processing', date: '2024-01-12' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900">AutoConnect Pro</h1>
                  <p className="text-xs text-gray-500">Admin Dashboard</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Page Title */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-600 text-sm sm:text-base">Manage your car dealership platform and monitor performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-5 min-w-max sm:min-w-0">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="dealers">Dealers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Recent Vehicles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-base sm:text-lg">Recent Vehicles</span>
                    <Button size="sm" variant="outline" className="text-xs sm:text-sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Vehicle
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {recentVehicles.slice(0, 5).map((vehicle) => (
                      <div key={vehicle.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2 sm:gap-0">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-1">{vehicle.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{vehicle.dealer}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base">${vehicle.price.toLocaleString()}</p>
                          <Badge className={vehicle.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                         vehicle.status === 'Sold' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}>
                            {vehicle.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2 sm:gap-0">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base">{order.customer}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{order.vehicle}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base">${order.amount.toLocaleString()}</p>
                          <Badge className={order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                                         order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  <span className="text-base sm:text-lg">Performance Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">Sales Target</span>
                      <span className="text-xs sm:text-sm font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">Inventory Turnover</span>
                      <span className="text-xs sm:text-sm font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">Customer Satisfaction</span>
                      <span className="text-xs sm:text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vehicles" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-base sm:text-lg">Vehicle Management</span>
                  <div className="hidden sm:flex space-x-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Upload className="w-4 h-4 mr-2" />
                      Import
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button size="sm" className="text-xs">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Vehicle
                    </Button>
                  </div>
                  <div className="sm:hidden">
                    <Button size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input placeholder="Search vehicles..." className="pl-10 text-sm sm:text-base" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Vehicle</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm hidden sm:table-cell">Dealer</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Price</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Status</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm hidden lg:table-cell">Date Added</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentVehicles.map((vehicle) => (
                        <tr key={vehicle.id} className="border-b hover:bg-gray-50">
                          <td className="p-2 sm:p-3">
                            <div className="font-medium text-xs sm:text-sm line-clamp-2">{vehicle.name}</div>
                            <div className="text-xs text-gray-600 sm:hidden">{vehicle.dealer}</div>
                          </td>
                          <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm hidden sm:table-cell">{vehicle.dealer}</td>
                          <td className="p-2 sm:p-3 font-semibold text-xs sm:text-sm">${vehicle.price.toLocaleString()}</td>
                          <td className="p-2 sm:p-3">
                            <Badge className={vehicle.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                           vehicle.status === 'Sold' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}>
                              {vehicle.status}
                            </Badge>
                          </td>
                          <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm hidden lg:table-cell">{vehicle.date}</td>
                          <td className="p-2 sm:p-3">
                            <div className="flex space-x-1 sm:space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="hidden sm:inline-flex">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="hidden sm:inline-flex">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Order ID</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Customer</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm hidden sm:table-cell">Vehicle</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Amount</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Status</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm hidden lg:table-cell">Date</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">#{order.id.toString().padStart(6, '0')}</td>
                          <td className="p-2 sm:p-3 text-xs sm:text-sm">
                            <div>{order.customer}</div>
                            <div className="text-xs text-gray-600 sm:hidden line-clamp-1">{order.vehicle}</div>
                          </td>
                          <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm hidden sm:table-cell">{order.vehicle}</td>
                          <td className="p-2 sm:p-3 font-semibold text-xs sm:text-sm">${order.amount.toLocaleString()}</td>
                          <td className="p-2 sm:p-3">
                            <Badge className={order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                                           order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}>
                              {order.status}
                            </Badge>
                          </td>
                          <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm hidden lg:table-cell">{order.date}</td>
                          <td className="p-2 sm:p-3">
                            <div className="flex space-x-1 sm:space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="hidden sm:inline-flex">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dealers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-base sm:text-lg">Dealer Management</span>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Dealer
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6 sm:py-8">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Dealer Management</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Manage dealer accounts, permissions, and performance metrics.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  <span className="text-base sm:text-lg">Analytics & Reports</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6 sm:py-8">
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Detailed insights and reporting for your car dealership platform.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
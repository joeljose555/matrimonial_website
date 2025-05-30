import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Bell, Mail, User, Settings, LogOut } from "lucide-react";
import Footer from "./Footer";

interface ProfilePageProps {
  username?: string;
}

const ProfilePage = ({ username = "John Doe" }: ProfilePageProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-primary">
                Bless Matrimony
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link
              to="/dashboard"
              className="text-foreground hover:text-primary font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary font-medium"
            >
              About Us
            </Link>
            <Link
              to="/resources"
              className="text-foreground hover:text-primary font-medium"
            >
              Resources
            </Link>
            <Link
              to="/packages"
              className="text-foreground hover:text-primary font-medium"
            >
              Packages
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary font-medium"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input placeholder="Search by ID" className="pl-8 w-32 md:w-40" />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <div className="relative mb-8">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg"></div>
            <div className="absolute -bottom-16 left-8 flex items-end">
              <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt={username}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4 mb-4">
                <h1 className="text-2xl font-bold">{username}</h1>
                <p className="text-muted-foreground">ID: JD12345</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Button>
                <Settings className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="mt-20">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="contact">Contact Details</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">
                          Personal Information
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Name:</span>
                            <span className="font-medium">{username}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Age:</span>
                            <span className="font-medium">32 years</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Height:
                            </span>
                            <span className="font-medium">5'10" (178 cm)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Religion:
                            </span>
                            <span className="font-medium">Christian</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Mother Tongue:
                            </span>
                            <span className="font-medium">Malayalam</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Marital Status:
                            </span>
                            <span className="font-medium">Never Married</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Location:
                            </span>
                            <span className="font-medium">New York, USA</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4">
                          Education & Career
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Education:
                            </span>
                            <span className="font-medium">Master's Degree</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              College:
                            </span>
                            <span className="font-medium">
                              Columbia University
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Profession:
                            </span>
                            <span className="font-medium">
                              Software Engineer
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Company:
                            </span>
                            <span className="font-medium">Google</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Annual Income:
                            </span>
                            <span className="font-medium">
                              $100,000 - $150,000
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold mt-6 mb-4">
                          Family Details
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Family Type:
                            </span>
                            <span className="font-medium">Nuclear</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Father's Occupation:
                            </span>
                            <span className="font-medium">Doctor</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Mother's Occupation:
                            </span>
                            <span className="font-medium">Teacher</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">About Me</h3>
                      <p className="text-muted-foreground">
                        I am a software engineer with a passion for building
                        innovative products. I enjoy traveling, reading, and
                        spending time with family and friends. Looking for a
                        life partner who shares similar values and interests. I
                        believe in honesty, respect, and open communication in
                        relationships.
                      </p>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">
                        Interests & Hobbies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Reading</Badge>
                        <Badge>Traveling</Badge>
                        <Badge>Photography</Badge>
                        <Badge>Cooking</Badge>
                        <Badge>Hiking</Badge>
                        <Badge>Music</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="photos" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="aspect-square rounded-md overflow-hidden">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                          alt="Profile Photo 1"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=John2"
                          alt="Profile Photo 2"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=John3"
                          alt="Profile Photo 3"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden border-2 border-dashed border-muted flex items-center justify-center">
                        <Button variant="ghost">+ Add Photo</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Partner Preferences
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Age Range:
                          </span>
                          <span className="font-medium">25 - 35 years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Height Range:
                          </span>
                          <span className="font-medium">5'2" - 5'8"</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Religion:
                          </span>
                          <span className="font-medium">Christian</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Mother Tongue:
                          </span>
                          <span className="font-medium">Malayalam</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Education:
                          </span>
                          <span className="font-medium">
                            Bachelor's or higher
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Profession:
                          </span>
                          <span className="font-medium">Any</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Marital Status:
                          </span>
                          <span className="font-medium">Never Married</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Location:
                          </span>
                          <span className="font-medium">USA, Canada</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Contact Information
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Contact information is only visible to premium members
                          and matches who have accepted your interest.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email:</span>
                          <span className="font-medium">
                            john.doe@example.com
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Phone:</span>
                          <span className="font-medium">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Address:
                          </span>
                          <span className="font-medium">New York, USA</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;

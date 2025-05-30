import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Bell,
  Mail,
  Heart,
  Search,
  User,
  Settings,
  LogOut,
  Home as HomeIcon,
} from "lucide-react";
import ProfileCard from "./ProfileCard";
import SearchFilters from "./SearchFilters";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

interface DashboardProps {
  username?: string;
  profileCompletion?: number;
}

const Dashboard = ({
  username = "John Doe",
  profileCompletion = 75,
}: DashboardProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);

  // Check if we have search params from the home page
  useEffect(() => {
    if (location.state?.searchParams) {
      setActiveTab("search");
      setShowFilters(true);
      // In a real app, you would use the search params to filter results
      console.log("Search params:", location.state.searchParams);
    }
  }, [location.state]);

  // Mock data for recommended matches
  const recommendedMatches = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      location: "New York, USA",
      profession: "Marketing Manager",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      compatibility: 85,
    },
    {
      id: 2,
      name: "Emily Davis",
      age: 26,
      location: "San Francisco, USA",
      profession: "Software Engineer",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      compatibility: 78,
    },
    {
      id: 3,
      name: "Priya Sharma",
      age: 27,
      location: "Mumbai, India",
      profession: "Doctor",
      photo:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
      compatibility: 92,
    },
    {
      id: 4,
      name: "Michael Chen",
      age: 30,
      location: "Toronto, Canada",
      profession: "Financial Analyst",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      compatibility: 81,
    },
  ];

  // Mock data for interests
  const interests = [
    {
      id: 5,
      name: "Rebecca Wilson",
      age: 29,
      location: "London, UK",
      profession: "Architect",
      photo:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
      status: "received",
    },
    {
      id: 6,
      name: "David Kim",
      age: 31,
      location: "Seoul, South Korea",
      profession: "Photographer",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      status: "sent",
    },
  ];

  // Mock data for messages
  const messages = [
    {
      id: 7,
      name: "Sophia Martinez",
      age: 27,
      location: "Barcelona, Spain",
      profession: "Teacher",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      lastMessage: "Hi there! How are you doing today?",
      unread: true,
    },
    {
      id: 8,
      name: "James Wilson",
      age: 32,
      location: "Sydney, Australia",
      profession: "Chef",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      lastMessage: "Looking forward to our conversation!",
      unread: false,
    },
  ];

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleViewProfile = () => {
    navigate("/profile");
  };

  const handleViewMessages = () => {
    navigate("/messages");
  };

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
            <Link to="/messages">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Dashboard Tabs */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">
              {activeTab === "recommended" && "Recommended Matches"}
              {activeTab === "search" && "Search Partners"}
              {activeTab === "interests" && "Interests"}
              {activeTab === "messages" && "Messages"}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{username}</p>
                  <div className="flex items-center gap-2">
                    <Progress value={profileCompletion} className="h-2 w-24" />
                    <span className="text-xs text-muted-foreground">
                      {profileCompletion}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-6">
              <TabsTrigger value="recommended">
                <Heart className="mr-2 h-4 w-4" />
                Recommended
              </TabsTrigger>
              <TabsTrigger value="search">
                <Search className="mr-2 h-4 w-4" />
                Search
              </TabsTrigger>
              <TabsTrigger value="interests">
                <Heart className="mr-2 h-4 w-4" />
                Interests
              </TabsTrigger>
              <TabsTrigger value="messages">
                <Mail className="mr-2 h-4 w-4" />
                Messages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recommendedMatches.map((match) => (
                  <ProfileCard
                    key={match.id}
                    name={match.name}
                    age={match.age}
                    location={match.location}
                    profession={match.profession}
                    photo={match.photo}
                    compatibility={match.compatibility}
                    onViewProfile={handleViewProfile}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="search">
              <div className="flex gap-6">
                {showFilters && (
                  <div className="w-72">
                    <SearchFilters />
                  </div>
                )}
                <div className="flex-1">
                  <div className="mb-6 flex justify-between items-center">
                    <Button
                      variant="outline"
                      onClick={toggleFilters}
                      className="mb-4"
                    >
                      {showFilters ? "Hide Filters" : "Show Filters"}
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      Showing 20 results
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedMatches.map((match) => (
                      <ProfileCard
                        key={match.id}
                        name={match.name}
                        age={match.age}
                        location={match.location}
                        profession={match.profession}
                        photo={match.photo}
                        onViewProfile={handleViewProfile}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="interests">
              <Tabs defaultValue="received">
                <TabsList className="mb-6">
                  <TabsTrigger value="received">Received</TabsTrigger>
                  <TabsTrigger value="sent">Sent</TabsTrigger>
                </TabsList>
                <TabsContent value="received">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interests
                      .filter((interest) => interest.status === "received")
                      .map((interest) => (
                        <ProfileCard
                          key={interest.id}
                          name={interest.name}
                          age={interest.age}
                          location={interest.location}
                          profession={interest.profession}
                          photo={interest.photo}
                          showActions={true}
                          onViewProfile={handleViewProfile}
                          actionButtons={[
                            <Button key="accept" size="sm">
                              Accept
                            </Button>,
                            <Button key="decline" variant="outline" size="sm">
                              Decline
                            </Button>,
                          ]}
                        />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="sent">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interests
                      .filter((interest) => interest.status === "sent")
                      .map((interest) => (
                        <ProfileCard
                          key={interest.id}
                          name={interest.name}
                          age={interest.age}
                          location={interest.location}
                          profession={interest.profession}
                          photo={interest.photo}
                          showActions={true}
                          onViewProfile={handleViewProfile}
                          actionButtons={[
                            <Button key="cancel" variant="outline" size="sm">
                              Cancel Interest
                            </Button>,
                          ]}
                        />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>

            <TabsContent value="messages">
              <div className="grid grid-cols-1 gap-4">
                {messages.map((message) => (
                  <Card
                    key={message.id}
                    className={message.unread ? "border-primary/50" : ""}
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={message.photo}
                          alt={message.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        {message.unread && (
                          <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-primary"></span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium">{message.name}</h3>
                          <span className="text-xs text-muted-foreground">
                            Today
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {message.lastMessage}
                        </p>
                      </div>
                      <Button size="sm" onClick={handleViewMessages}>
                        Reply
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

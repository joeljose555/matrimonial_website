import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Bell,
  Mail,
  Heart,
  Search,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import ProfileCard from "./ProfileCard";
import SearchFilters from "./SearchFilters";

interface DashboardProps {
  username?: string;
  profileCompletion?: number;
}

const Dashboard = ({
  username = "John Doe",
  profileCompletion = 75,
}: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);

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

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card p-4 flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary">Matrimony</h2>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
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
          <Button variant="outline" className="w-full justify-start" size="sm">
            <User className="mr-2 h-4 w-4" />
            Complete Profile
          </Button>
        </div>

        <nav className="space-y-1 flex-1">
          <Button
            variant={activeTab === "recommended" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("recommended")}
          >
            <Heart className="mr-2 h-4 w-4" />
            Recommended
          </Button>
          <Button
            variant={activeTab === "search" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("search")}
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button
            variant={activeTab === "interests" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("interests")}
          >
            <Heart className="mr-2 h-4 w-4" />
            Interests
          </Button>
          <Button
            variant={activeTab === "messages" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("messages")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Messages
          </Button>
        </nav>

        <div className="pt-4 border-t space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b p-4 flex justify-between items-center bg-background sticky top-0 z-10">
          <h1 className="text-xl font-semibold">
            {activeTab === "recommended" && "Recommended Matches"}
            {activeTab === "search" && "Search Partners"}
            {activeTab === "interests" && "Interests"}
            {activeTab === "messages" && "Messages"}
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6">
          {/* Recommended Tab */}
          {activeTab === "recommended" && (
            <div>
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
                  />
                ))}
              </div>
            </div>
          )}

          {/* Search Tab */}
          {activeTab === "search" && (
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
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Interests Tab */}
          {activeTab === "interests" && (
            <div>
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
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
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
                    <Button size="sm">Reply</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

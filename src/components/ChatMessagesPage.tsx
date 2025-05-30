import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, Bell, Mail, User, LogOut, Send } from "lucide-react";
import Footer from "./Footer";

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  isMine: boolean;
}

interface ChatContact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  unreadCount: number;
  isOnline: boolean;
}

const ChatMessagesPage = () => {
  const [selectedContact, setSelectedContact] = useState<string | null>("1");
  const [messageInput, setMessageInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const contacts: ChatContact[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      lastMessage: "Hi there! How are you doing today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      lastMessage: "Looking forward to our conversation!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "3",
      name: "Emily Davis",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      lastMessage: "Thank you for your interest!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      unreadCount: 0,
      isOnline: true,
    },
    {
      id: "4",
      name: "Priya Sharma",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
      lastMessage: "I'd like to know more about you.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      unreadCount: 0,
      isOnline: false,
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      senderId: "1",
      senderName: "Sarah Johnson",
      senderAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content: "Hi there! How are you doing today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
      isRead: true,
      isMine: false,
    },
    {
      id: "2",
      senderId: "current-user",
      senderName: "John Doe",
      senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      content: "I'm doing well, thank you! How about you?",
      timestamp: new Date(Date.now() - 1000 * 60 * 55), // 55 minutes ago
      isRead: true,
      isMine: true,
    },
    {
      id: "3",
      senderId: "1",
      senderName: "Sarah Johnson",
      senderAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content:
        "I'm great! I saw your profile and I'm interested in getting to know you better.",
      timestamp: new Date(Date.now() - 1000 * 60 * 50), // 50 minutes ago
      isRead: true,
      isMine: false,
    },
    {
      id: "4",
      senderId: "current-user",
      senderName: "John Doe",
      senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      content:
        "That's wonderful! I'd be happy to chat and get to know each other. What are your interests?",
      timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
      isRead: true,
      isMine: true,
    },
    {
      id: "5",
      senderId: "1",
      senderName: "Sarah Johnson",
      senderAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content:
        "I love traveling, reading, and photography. I also enjoy cooking and trying new recipes. What about you?",
      timestamp: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
      isRead: true,
      isMine: false,
    },
    {
      id: "6",
      senderId: "1",
      senderName: "Sarah Johnson",
      senderAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content: "Are you free to chat sometime this week?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      isRead: false,
      isMine: false,
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;
    // In a real app, you would send the message to the backend
    console.log("Sending message:", messageInput);
    setMessageInput("");
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diffInDays === 0) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return date.toLocaleDateString([], { weekday: "short" });
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }
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

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden h-[calc(100vh-250px)] flex">
          {/* Contacts List */}
          <div className="w-1/3 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Input
                  placeholder="Search conversations"
                  className="pl-8"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-350px)]">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-4 border-b cursor-pointer hover:bg-muted/50 ${selectedContact === contact.id ? "bg-muted" : ""}`}
                  onClick={() => setSelectedContact(contact.id)}
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>
                          {contact.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {contact.isOnline && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{contact.name}</h3>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(contact.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {contact.lastMessage}
                      </p>
                    </div>
                    {contact.unreadCount > 0 && (
                      <div className="ml-2 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        {contact.unreadCount}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="w-2/3 flex flex-col">
            {selectedContact ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={
                        contacts.find((c) => c.id === selectedContact)?.avatar
                      }
                      alt={contacts.find((c) => c.id === selectedContact)?.name}
                    />
                    <AvatarFallback>
                      {contacts
                        .find((c) => c.id === selectedContact)
                        ?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h3 className="font-medium">
                      {contacts.find((c) => c.id === selectedContact)?.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {contacts.find((c) => c.id === selectedContact)?.isOnline
                        ? "Online"
                        : "Offline"}
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto h-[calc(100vh-450px)]">
                  <div className="space-y-4">
                    {messages
                      .filter(
                        (message) =>
                          message.senderId === selectedContact ||
                          message.isMine,
                      )
                      .map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isMine ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] ${message.isMine ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-3`}
                          >
                            {!message.isMine && (
                              <div className="flex items-center mb-1">
                                <Avatar className="h-6 w-6 mr-2">
                                  <AvatarImage
                                    src={message.senderAvatar}
                                    alt={message.senderName}
                                  />
                                  <AvatarFallback>
                                    {message.senderName.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-xs font-medium">
                                  {message.senderName}
                                </span>
                              </div>
                            )}
                            <p className="text-sm">{message.content}</p>
                            <div
                              className={`text-xs mt-1 ${message.isMine ? "text-primary-foreground/70" : "text-muted-foreground"} flex items-center justify-end`}
                            >
                              {formatTime(message.timestamp)}
                              {message.isMine && message.isRead && (
                                <span className="ml-1">✓</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <div className="flex items-center">
                    <Input
                      placeholder="Type a message..."
                      className="flex-1"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                    />
                    <Button className="ml-2" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">
                    No conversation selected
                  </h3>
                  <p className="text-muted-foreground">
                    Choose a conversation from the list
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatMessagesPage;

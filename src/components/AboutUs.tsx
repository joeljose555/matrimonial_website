import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, Mail, User, LogOut } from "lucide-react";
import Footer from "./Footer";

const AboutUs = () => {
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
            <Link to="/about" className="text-primary font-medium">
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary">About Us</h1>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Bless Matrimony, our mission is to help Catholic singles find
              their perfect life partner through a platform that respects and
              upholds the values and traditions of the Catholic community. We
              believe in creating meaningful connections that lead to happy,
              fulfilling marriages based on shared faith and values.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Bless Matrimony was founded in 2012 with a simple goal: to create
              a safe, respectful, and effective platform for Catholic singles to
              meet potential life partners. What started as a small community
              has grown into one of the most trusted Catholic matrimonial
              services, with thousands of successful matches and happy marriages
              to our credit.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our founders, themselves from Catholic backgrounds, understood the
              unique challenges faced by Catholic singles in finding partners
              who share their faith and values. This understanding has shaped
              our approach and continues to guide our service improvements.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-medium mb-3 text-primary">
                  Faith-Centered Approach
                </h3>
                <p className="text-muted-foreground">
                  We understand the importance of faith in marriage and
                  prioritize matching individuals with compatible religious
                  beliefs and practices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-medium mb-3 text-primary">
                  Verified Profiles
                </h3>
                <p className="text-muted-foreground">
                  We verify all profiles to ensure authenticity and create a
                  safe environment for our members to find their perfect match.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-medium mb-3 text-primary">
                  Community Support
                </h3>
                <p className="text-muted-foreground">
                  Our platform is endorsed by various Catholic communities and
                  organizations, providing an additional layer of trust and
                  support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-medium mb-3 text-primary">
                  Privacy & Security
                </h3>
                <p className="text-muted-foreground">
                  We prioritize the privacy and security of our members,
                  implementing strict measures to protect personal information.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Behind Bless Matrimony is a dedicated team of professionals who
              are passionate about helping people find love and happiness. Our
              team includes relationship experts, technology specialists, and
              customer support professionals who work together to provide the
              best possible service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80"
                    alt="John Thomas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">John Thomas</h3>
                <p className="text-primary">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                <p className="text-primary">Relationship Expert</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80"
                    alt="Michael Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Michael Rodriguez</h3>
                <p className="text-primary">Technical Director</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 text-center">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-lg mb-6">
              Ready to find your perfect match? Join thousands of Catholic
              singles on Bless Matrimony today.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;

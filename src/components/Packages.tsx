import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Bell, Mail, User, LogOut, Check, X } from "lucide-react";
import Footer from "./Footer";

const Packages = () => {
  const packages = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      duration: "1 Month",
      popular: false,
      features: [
        { name: "View Contact 10 Nos.", included: true },
        { name: "Express Interest 10 Nos.", included: true },
        { name: "Basic Search Filters", included: true },
        { name: "View Basic Profiles", included: true },
        { name: "Customer Support", included: false },
        { name: "Profile Highlighting", included: false },
        { name: "Digital Magazine Subscription", included: false },
      ],
    },
    {
      id: "blissful",
      name: "Blissful Beginnings",
      price: "₹3000",
      duration: "3 Months",
      popular: false,
      features: [
        { name: "View Contact 100 Nos.", included: true },
        { name: "Express Interest 100 Nos.", included: true },
        { name: "Advanced Search Filters", included: true },
        { name: "View Detailed Profiles", included: true },
        { name: "Customer Support", included: true },
        { name: "Profile Highlighting", included: false },
        { name: "Digital Magazine Subscription", included: false },
      ],
    },
    {
      id: "cherished",
      name: "Cherished Connection",
      price: "₹5000",
      duration: "6 Months",
      popular: false,
      features: [
        { name: "View Contact 300 Nos.", included: true },
        { name: "Express Interest 300 Nos.", included: true },
        { name: "Advanced Search Filters", included: true },
        { name: "View Detailed Profiles", included: true },
        { name: "Customer Support", included: true },
        { name: "Profile Highlighting", included: true },
        { name: "Digital Magazine Subscription", included: false },
      ],
    },
    {
      id: "elite",
      name: "Ever After Elite",
      price: "₹10000",
      duration: "1 Year",
      popular: true,
      features: [
        { name: "View Contact 650 Nos.", included: true },
        { name: "Express Interest 650 Nos.", included: true },
        { name: "Advanced Search Filters", included: true },
        { name: "View Detailed Profiles", included: true },
        { name: "Priority Customer Support", included: true },
        { name: "Profile Highlighting", included: true },
        { name: "Digital Magazine Subscription", included: true },
      ],
    },
  ];

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
            <Link to="/packages" className="text-primary font-medium">
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-primary">
              Membership Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package that suits your needs and start your
              journey to find your perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`border ${pkg.popular ? "border-primary" : "border-border"} overflow-hidden`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-6 ${pkg.popular ? "pt-5" : "pt-6"}`}>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
                    <div className="text-3xl font-bold mb-1">{pkg.price}</div>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                        )}
                        <span
                          className={
                            feature.included ? "" : "text-muted-foreground"
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg border border-border shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-6">Package Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4">Features</th>
                    {packages.map((pkg) => (
                      <th key={pkg.id} className="text-center py-4 px-4">
                        {pkg.name}
                        <div className="text-sm font-normal text-muted-foreground">
                          {pkg.price}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Duration</td>
                    {packages.map((pkg) => (
                      <td key={pkg.id} className="text-center py-4 px-4">
                        {pkg.duration}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">View Contacts</td>
                    <td className="text-center py-4 px-4">10</td>
                    <td className="text-center py-4 px-4">100</td>
                    <td className="text-center py-4 px-4">300</td>
                    <td className="text-center py-4 px-4">650</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Express Interest</td>
                    <td className="text-center py-4 px-4">10</td>
                    <td className="text-center py-4 px-4">100</td>
                    <td className="text-center py-4 px-4">300</td>
                    <td className="text-center py-4 px-4">650</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Profile Highlighting</td>
                    <td className="text-center py-4 px-4">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Digital Magazine</td>
                    <td className="text-center py-4 px-4">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Customer Support</td>
                    <td className="text-center py-4 px-4">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500 mr-1" />
                        <span className="text-sm">Priority</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
              <p className="text-muted-foreground mb-4">
                We accept various payment methods for your convenience. Choose
                the one that works best for you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="py-1 px-3">
                  Credit Card
                </Badge>
                <Badge variant="outline" className="py-1 px-3">
                  Debit Card
                </Badge>
                <Badge variant="outline" className="py-1 px-3">
                  Net Banking
                </Badge>
                <Badge variant="outline" className="py-1 px-3">
                  UPI
                </Badge>
                <Badge variant="outline" className="py-1 px-3">
                  Wallet
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *an extra of 2.3% of the amount will be added for card payments
                (Debit/Credit).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-4">
                If you need assistance in choosing the right package or have any
                questions, our customer support team is here to help.
              </p>
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>+91 9400846997</span>
              </div>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">
                  Can I upgrade my package later?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade to a higher package at any time. The
                  remaining value of your current package will be adjusted in
                  the new package price.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">
                  How do I renew my subscription?
                </h3>
                <p className="text-muted-foreground">
                  You can renew your subscription from your account dashboard
                  before it expires. We also send reminder emails as your
                  subscription nears its end date.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">Is there a refund policy?</h3>
                <p className="text-muted-foreground">
                  We offer a 3-day money-back guarantee if you're not satisfied
                  with our services. Please contact our customer support for
                  assistance with refunds.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">
                  What happens when I run out of contacts or interests?
                </h3>
                <p className="text-muted-foreground">
                  Once you've used all your allocated contacts or interests,
                  you'll need to upgrade your package or wait until your
                  subscription renews to receive more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;

// Phone icon component for the Need Help section
const Phone = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
};

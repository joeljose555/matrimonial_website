import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Search,
  ChevronDown,
  Star,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

function Home() {
  return (
    <div className="bg-background">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Syro Malabar Matrimony
            </h1>
          </div>

          <nav className="hidden md:flex space-x-6">
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
            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
            alt="Happy couple"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your perfect partner.
          </h1>

          <div className="bg-white/90 p-6 rounded-lg shadow-lg w-full max-w-3xl mt-8">
            <div className="text-left mb-4">
              <p className="text-primary font-medium">I am looking for</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Select>
                  <div className="flex justify-between items-center text-foreground">
                    <span>Bride</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Select>
              </div>
              <div>
                <Select>
                  <div className="flex justify-between items-center text-foreground">
                    <span>21 - 35</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Select>
              </div>
              <div>
                <Select>
                  <div className="flex justify-between items-center text-foreground">
                    <span>Community</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Select>
              </div>
              <div>
                <Select>
                  <div className="flex justify-between items-center text-foreground">
                    <span>Diocese</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Select>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Profiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Highlighted Profiles
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Get noticed by standing out from other profiles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Profile 1 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra"
                  alt="Sandra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Sandra</h3>
                  <div className="flex text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">25 yrs</p>
                <p className="text-sm font-medium mt-2">Syro-Malabar</p>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anil"
                  alt="Anil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Anil</h3>
                  <div className="flex text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">30 yrs</p>
                <p className="text-sm font-medium mt-2">Syro-Malabar</p>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=DivyaRose"
                  alt="Divya Rose"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Divya Rose</h3>
                  <div className="flex text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">31 yrs</p>
                <p className="text-sm font-medium mt-2">Syro-Malabar</p>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohith"
                  alt="Rohith"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Rohith</h3>
                  <div className="flex text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">27 yrs</p>
                <p className="text-sm font-medium mt-2">Syro-Malabar</p>
              </div>
            </div>

            {/* Profile 5 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anugraha"
                  alt="Anugraha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Anugraha</h3>
                  <div className="flex text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">27 yrs</p>
                <p className="text-sm font-medium mt-2">Syro-Malabar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-lg">Years of Service</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">13</div>
              <p className="text-lg">Eparchies in Kerala</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">18</div>
              <p className="text-lg">Eparchies Outside Kerala</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <p className="text-lg">Eparchies Outside India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <p className="text-lg">Apostolic visitation</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-medium text-primary mb-2">
              Who we are
            </h2>
            <h3 className="text-3xl font-bold mb-6">
              About Syro Malabar Matrimony
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to Syro Malabar Matrimony, the premier Catholic
              matrimonial site exclusively created for Syro Malabar brides and
              grooms. Our platform, integral to the Syro Malabar Church's
              pastoral initiatives, simplifies your search for a suitable
              Catholic life partner within your community. With a vast database
              of genuine profiles, discover a match tailored to your
              preferences. Proudly presented by SMCIM, Syro-Malabar Matrimony
              connects hearts worldwide. Start your journey towards a joyful
              Catholic marriage today.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="flex items-center">
                <div className="mr-3 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Best Matches</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Verified Profiles</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">100% Privacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Join the Premier Catholic Matrimony Community
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Conveniently book online courses and make payments for dioceses
            through our platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Seamless Online Booking for Marriage Preparation Retreats
              </h3>
              <p className="text-muted-foreground mb-4">
                Ready for happily ever after? Book and pay for wedding
                preparation retreats anywhere, anytime.
              </p>
              <img
                src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&q=80"
                alt="Marriage Preparation"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Personalised Matrimony for Syro Malabar Community
              </h3>
              <p className="text-muted-foreground mb-4">
                Our premium matchmaking service allows users to find suitable
                proposals that perfectly match their criteria.
              </p>
              <img
                src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&q=80"
                alt="Matchmaking"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Premium Mobile App</h3>
              <p className="text-muted-foreground mb-4">
                Stay Connected on the Go with Our Matrimonial App. Download our
                app from Google Play or the Apple Store to effortlessly stay
                connected on the move.
              </p>
              <div className="flex justify-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&q=80"
                  alt="Mobile App"
                  className="w-1/3 h-48 object-cover rounded-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80"
                  alt="Mobile App"
                  className="w-1/3 h-48 object-cover rounded-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?w=300&q=80"
                  alt="Mobile App"
                  className="w-1/3 h-48 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Packages</h2>
          <p className="text-center text-muted-foreground mb-10">
            Explore our range of packages to suit your preferences
          </p>
          <p className="text-center mb-10">
            <span className="font-semibold">Call +91 9400846997</span> For any
            help in making payment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Package 1 - Elite */}
            <div className="col-span-1 md:col-span-3 lg:col-span-2 bg-card rounded-lg shadow-md border border-primary overflow-hidden relative">
              <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
                Most Recommended
              </div>
              <div className="p-6">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Ever After Elite</h3>
                <p className="text-sm text-muted-foreground mb-4">1 Year</p>
                <div className="text-3xl font-bold mb-6">₹10000</div>
                <p className="text-sm text-muted-foreground mb-6">
                  Step into the future together with our One +One year package.
                  Invest in your love story today!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    View Contact 650 Nos.
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Express Interest 650 Nos.
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Push Notification
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Digital Magazine Subscription
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Matched profiles Email newsletter
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    100% Secure Payment
                  </li>
                </ul>
                <Button className="w-full">Subscribe Now</Button>
              </div>
            </div>

            {/* Package 2 - Love Forever */}
            <div className="col-span-1 lg:col-span-1 bg-card rounded-lg shadow-md border border-border overflow-hidden">
              <div className="p-6">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Love Forever</h3>
                <p className="text-sm text-muted-foreground mb-4">1 Year</p>
                <div className="text-3xl font-bold mb-6">₹7000</div>
                <Button variant="outline" className="w-full">
                  Subscribe Now
                </Button>
              </div>
            </div>

            {/* Package 3 - Cherished Connection */}
            <div className="col-span-1 lg:col-span-1 bg-card rounded-lg shadow-md border border-border overflow-hidden">
              <div className="p-6">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Cherished Connection</h3>
                <p className="text-sm text-muted-foreground mb-4">6 Months</p>
                <div className="text-3xl font-bold mb-6">₹5000</div>
                <Button variant="outline" className="w-full">
                  Subscribe Now
                </Button>
              </div>
            </div>

            {/* Package 4 - Blissful Beginnings */}
            <div className="col-span-1 lg:col-span-1 bg-card rounded-lg shadow-md border border-border overflow-hidden">
              <div className="p-6">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Blissful Beginnings</h3>
                <p className="text-sm text-muted-foreground mb-4">3 Months</p>
                <div className="text-3xl font-bold mb-6">₹3000</div>
                <Button variant="outline" className="w-full">
                  Subscribe Now
                </Button>
              </div>
            </div>

            {/* Package 5 - 35+ */}
            <div className="col-span-1 md:col-span-1.5 lg:col-span-0.5 bg-card rounded-lg shadow-md border border-border overflow-hidden">
              <div className="p-6">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">35+</h3>
                <p className="text-sm text-muted-foreground mb-4">2 Months</p>
                <div className="text-3xl font-bold mb-6">₹1750</div>
                <Button variant="outline" className="w-full">
                  Subscribe Now
                </Button>
              </div>
            </div>

            {/* Package 6 - Free */}
            <div className="col-span-1 md:col-span-1.5 lg:col-span-0.5 bg-card rounded-lg shadow-md border border-border overflow-hidden">
              <div className="p-6">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Free</h3>
                <p className="text-sm text-muted-foreground mb-4">1 Month</p>
                <div className="text-3xl font-bold mb-6">₹0</div>
                <Button variant="outline" className="w-full">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-muted-foreground text-center">
            <p>
              *an extra of 2.3 % of the amount will be added for card
              payments(Debit/Credit).
            </p>
            <p>
              *Due to issues with payment processing delays on the bank's end,
              activating your account may take up to three working days for the
              customers using online and UPI payment modes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I register a profile on the Catholic matrimonial
                  portal?
                </AccordionTrigger>
                <AccordionContent>
                  To register, click on the "Register" button on the homepage,
                  fill in your basic details, verify your email, and complete
                  your profile with personal information, preferences, and
                  photos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I register for free on the Catholic matrimonial portal?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, basic registration is free. You can create your profile
                  and browse other profiles. However, to access advanced
                  features like contacting members, you may need to upgrade to a
                  paid membership.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I deactivate or delete my profile if needed?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can deactivate your profile temporarily or delete it
                  permanently from your account settings. If you need
                  assistance, our customer support team is available to help.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How can I register a profile on the Catholic matrimonial
                  portal?
                </AccordionTrigger>
                <AccordionContent>
                  Registration is simple. Click on "Register", provide your
                  basic details, verify your email, and then complete your
                  profile with personal information, family details, and
                  preferences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How can I search for profiles on the Catholic matrimonial
                  portal?
                </AccordionTrigger>
                <AccordionContent>
                  You can use our advanced search filters to find matches based
                  on age, location, diocese, education, profession, and other
                  criteria. You can also save your search preferences for future
                  use.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Link to="/faq" className="text-primary hover:underline">
                Looking for something else? Click here for our detailed FAQs
                page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact */}
            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h2 className="text-2xl font-bold mb-6">
                Feel Free to Reach Out to Us
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9400846997</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Whatsapp</p>
                    <p className="text-muted-foreground">+91 9400846997</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">matrimony@smcim.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h2 className="text-2xl font-bold mb-6">
                Newsletter Subscription
              </h2>
              <div className="flex">
                <Input
                  placeholder="Enter your mail address"
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Privacy Security. We will never spam you.
              </p>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Get the app on:</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Google Play</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>App Store</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Site Map */}
            <div>
              <h3 className="font-bold text-lg mb-4">Site Map</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packages"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="font-bold text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/child-protection"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Child Protection Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cancellation"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/success-stories"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Happy Stories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Courses
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Syro Malabar Matrimony
              </h2>
              <p className="text-muted-foreground">
                The premier Catholic matrimonial site exclusively for Syro
                Malabar brides and grooms.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-muted-foreground">
            <p>© 2023 Syro Malabar Matrimony. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

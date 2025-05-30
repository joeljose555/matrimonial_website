import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
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
  Heart,
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    lookingFor: "bride",
    ageRange: "21-35",
    community: "syro-malabar",
    diocese: "all",
  });

  const handleSearchParamChange = (param: string, value: string) => {
    setSearchParams((prev) => ({
      ...prev,
      [param]: value,
    }));
  };

  const handleSearch = () => {
    // Navigate to dashboard with search params
    navigate("/dashboard", { state: { searchParams } });
  };

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      alt: "Happy couple at wedding",
      caption: "Begin Your Journey to Forever",
    },
    {
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80",
      alt: "Church wedding ceremony",
      caption: "Sacred Unions in Faith",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
      alt: "Couple holding hands",
      caption: "Find Your Perfect Match",
    },
  ];

  return (
    <div className="bg-background">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Bless Matrimony</h1>
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

      {/* Hero Section with Image Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        <ImageCarousel
          images={carouselImages}
          className="h-full"
          autoPlay={true}
          interval={5000}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-black/30 p-8 rounded-lg backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Begin Your Journey to Forever
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of Catholics who found their perfect match
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Register Now
                  </Button>
                </Link>
                <Link to="/success-stories">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/20"
                  >
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Partner Section - With solid color background */}
      <section className="py-16 bg-section-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Find Your Perfect Partner
              </h2>
              <p className="text-muted-foreground mb-6">
                Our advanced matching system helps you find compatible partners
                based on your preferences. We understand the importance of faith
                and values in a relationship and help you connect with
                like-minded individuals.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Success Stories</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                      alt="John & Mary"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">John & Mary</h4>
                      <p className="text-sm text-muted-foreground">
                        "We found each other through Bless Matrimony and
                        couldn't be happier!"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas"
                      alt="Thomas & Sarah"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">Thomas & Sarah</h4>
                      <p className="text-sm text-muted-foreground">
                        "The platform made it easy to connect with someone who
                        shares our faith."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">I am looking for</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Looking for</label>
                    <Select>
                      <select
                        className="flex justify-between items-center text-foreground p-2 border rounded-md w-full"
                        value={searchParams.lookingFor}
                        onChange={(e) =>
                          handleSearchParamChange("lookingFor", e.target.value)
                        }
                      >
                        <option value="bride">Bride</option>
                        <option value="groom">Groom</option>
                      </select>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Age Range</label>
                    <Select>
                      <select
                        className="flex justify-between items-center text-foreground p-2 border rounded-md w-full"
                        value={searchParams.ageRange}
                        onChange={(e) =>
                          handleSearchParamChange("ageRange", e.target.value)
                        }
                      >
                        <option value="18-25">18 - 25</option>
                        <option value="21-35">21 - 35</option>
                        <option value="25-40">25 - 40</option>
                        <option value="35-50">35 - 50</option>
                        <option value="45+">45+</option>
                      </select>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Community</label>
                    <Select>
                      <select
                        className="flex justify-between items-center text-foreground p-2 border rounded-md w-full"
                        value={searchParams.community}
                        onChange={(e) =>
                          handleSearchParamChange("community", e.target.value)
                        }
                      >
                        <option value="catholic">Catholic</option>
                        <option value="latin">Latin</option>
                        <option value="syro-malabar">Syro-Malabar</option>
                        <option value="syro-malankara">Syro-Malankara</option>
                        <option value="other">Other</option>
                      </select>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Diocese</label>
                    <Select>
                      <select
                        className="flex justify-between items-center text-foreground p-2 border rounded-md w-full"
                        value={searchParams.diocese}
                        onChange={(e) =>
                          handleSearchParamChange("diocese", e.target.value)
                        }
                      >
                        <option value="all">All Dioceses</option>
                        <option value="ernakulam">Ernakulam</option>
                        <option value="thrissur">Thrissur</option>
                        <option value="kottayam">Kottayam</option>
                        <option value="palai">Palai</option>
                        <option value="other">Other</option>
                      </select>
                    </Select>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    onClick={handleSearch}
                    className="bg-primary hover:bg-primary/90 text-white px-10 py-6 h-auto text-lg rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Find Matches
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Profiles - With solid color background */}
      <section className="py-16 bg-section-highlight">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Highlighted Profiles</h2>
              <p className="text-lg text-muted-foreground">
                Get noticed by standing out from other profiles. Our featured
                members are actively seeking meaningful connections based on
                shared faith and values.
              </p>
            </div>
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90">
                View All Profiles
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Profile 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
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

      {/* Statistics - With solid color background */}
      <section className="py-16 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Community in Numbers
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bless Matrimony has been connecting Catholic singles for over a
                decade, with a strong presence across multiple eparchies in
                India and abroad.
              </p>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">5K+</div>
                <p className="text-lg">Successful Matches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Divided into 2 columns */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg font-medium text-primary mb-2">
                Who we are
              </h2>
              <h3 className="text-3xl font-bold mb-6">About Bless Matrimony</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Welcome to Bless Matrimony, the premier Catholic matrimonial
                site exclusively created for Catholic brides and grooms. Our
                platform, integral to the Church's pastoral initiatives,
                simplifies your search for a suitable Catholic life partner
                within your community.
              </p>

              <div className="flex flex-wrap gap-6 mt-6">
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

            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80"
                alt="Catholic Wedding"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                <p className="text-white font-medium">
                  Start your journey towards a joyful Catholic marriage today
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - With solid color background */}
      <section className="py-16 bg-section-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Join the Premier Catholic Matrimony Community
              </h2>
              <p className="text-lg mb-8 text-white/80">
                Conveniently book online courses and make payments for dioceses
                through our platform. Our premium matchmaking service allows
                users to find suitable proposals that perfectly match their
                criteria.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-primary-light p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">
                    Marriage Preparation
                  </h3>
                  <p className="text-white/80">
                    Book and pay for wedding preparation retreats anywhere,
                    anytime.
                  </p>
                </div>

                <div className="bg-primary-light p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Premium Mobile App</h3>
                  <p className="text-white/80">
                    Stay connected on the go with our matrimonial app.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-white text-primary hover:bg-white/90 mr-4">
                  Download App
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&q=80"
                  alt="Marriage Preparation"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&q=80"
                  alt="Matchmaking"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
                  alt="Mobile App"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                  alt="Mobile App"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
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
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 11-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
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

      {/* FAQ Section - With solid color background */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Find answers to common questions about our matrimonial service.
                If you need further assistance, our support team is always ready
                to help.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9400846997</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>matrimony@smcim.com</span>
                </div>
              </div>
            </div>

            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full bg-white rounded-lg shadow-md"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6">
                    How do I register a profile on the Catholic matrimonial
                    portal?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    To register, click on the "Register" button on the homepage,
                    fill in your basic details, verify your email, and complete
                    your profile with personal information, preferences, and
                    photos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6">
                    Can I register for free on the Catholic matrimonial portal?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Yes, basic registration is free. You can create your profile
                    and browse other profiles. However, to access advanced
                    features like contacting members, you may need to upgrade to
                    a paid membership.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6">
                    Can I deactivate or delete my profile if needed?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Yes, you can deactivate your profile temporarily or delete
                    it permanently from your account settings. If you need
                    assistance, our customer support team is available to help.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6">
                    How can I search for profiles on the Catholic matrimonial
                    portal?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    You can use our advanced search filters to find matches
                    based on age, location, diocese, education, profession, and
                    other criteria. You can also save your search preferences
                    for future use.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center mt-6">
                <Link to="/faq" className="text-primary hover:underline">
                  Looking for something else? Click here for our detailed FAQs
                  page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Newsletter Section - With solid color background */}
      <section className="py-16 bg-section-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-border">
              <h2 className="text-2xl font-bold mb-6">
                Feel Free to Reach Out to Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9400846997</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Whatsapp</p>
                    <p className="text-muted-foreground">+91 9400846997</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">matrimony@smcim.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-border">
              <h2 className="text-2xl font-bold mb-6">
                Newsletter Subscription
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive updates on new profiles,
                success stories, and upcoming events.
              </p>

              <div className="flex">
                <Input
                  placeholder="Enter your mail address"
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Privacy Security. We will never spam you.
              </p>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Get the app on:</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 flex-1 justify-center"
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
                    className="flex items-center space-x-2 flex-1 justify-center"
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

      <Footer />
    </div>
  );
}

export default Home;

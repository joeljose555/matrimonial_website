import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Phone, Lock, User, Calendar, UserPlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "./Footer";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate mobile number
    if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number");
      setIsLoading(false);
      return;
    }

    // Simulate OTP sending process
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      // In a real app, you would send OTP via SMS
    }, 1500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate OTP
    if (!/^[0-9]{4}$/.test(otp)) {
      setError("Please enter a valid 4-digit OTP");
      setIsLoading(false);
      return;
    }

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, proceed with registration
      handleSubmit(e);
      // In a real app, you would verify OTP with an API
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, navigate to profile creation
      navigate("/profile-creation");
      // In a real app, you would send data to an API
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="text-3xl font-bold text-primary">
                Bless Matrimony
              </h1>
            </Link>
            <p className="text-muted-foreground mt-2">Create your account</p>
          </div>

          <Card className="border-border shadow-md">
            <CardHeader className="pb-4">
              <h2 className="text-2xl font-semibold text-center">Register</h2>
            </CardHeader>
            <CardContent>
              {!otpSent ? (
                <form onSubmit={handleSendOtp}>
                  {error && (
                    <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4">
                      {error}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">Mobile Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="mobileNumber"
                          name="mobileNumber"
                          type="tel"
                          placeholder="Enter your 10-digit mobile number"
                          className="pl-10"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                          maxLength={10}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending OTP...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send OTP
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp}>
                  {error && (
                    <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4">
                      {error}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 4-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                        maxLength={4}
                        className="text-center text-lg tracking-widest"
                      />
                      <p className="text-xs text-muted-foreground text-center">
                        OTP sent to {formData.mobileNumber}{" "}
                        <button
                          type="button"
                          className="text-primary hover:underline"
                          onClick={() => setOtpSent(false)}
                        >
                          Change
                        </button>
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Verifying...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Verify & Continue
                        </span>
                      )}
                    </Button>

                    <div className="text-center">
                      <button
                        type="button"
                        className="text-sm text-primary hover:underline"
                        onClick={handleSendOtp}
                      >
                        Resend OTP
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;

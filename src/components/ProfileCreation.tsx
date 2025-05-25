import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  User,
  BookOpen,
  Briefcase,
  Users,
  CheckCircle,
} from "lucide-react";

interface ProfileCreationProps {
  onComplete?: () => void;
}

const ProfileCreation = ({ onComplete = () => {} }: ProfileCreationProps) => {
  const [activeStep, setActiveStep] = useState("personal");
  const [progress, setProgress] = useState(20);

  const steps = [
    {
      id: "personal",
      label: "Personal Details",
      icon: <User className="h-5 w-5" />,
    },
    { id: "photos", label: "Photos", icon: <Upload className="h-5 w-5" /> },
    {
      id: "education",
      label: "Education",
      icon: <BookOpen className="h-5 w-5" />,
    },
    { id: "career", label: "Career", icon: <Briefcase className="h-5 w-5" /> },
    { id: "family", label: "Family", icon: <Users className="h-5 w-5" /> },
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step.id === activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1].id);
      setProgress((currentIndex + 2) * 20);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    const currentIndex = steps.findIndex((step) => step.id === activeStep);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1].id);
      setProgress(currentIndex * 20);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-background">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Your Profile
          </CardTitle>
          <CardDescription className="text-center">
            Complete all sections to create your matrimony profile
          </CardDescription>

          <div className="mt-4">
            <Progress value={progress} className="h-2" />

            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center cursor-pointer ${activeStep === step.id ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => {
                    setActiveStep(step.id);
                    setProgress((index + 1) * 20);
                  }}
                >
                  <div
                    className={`rounded-full p-2 ${activeStep === step.id ? "bg-primary/20" : "bg-muted"}`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs mt-1">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs value={activeStep} className="w-full">
            <TabsContent value="personal" className="space-y-4">
              <h3 className="text-lg font-medium">Personal Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <RadioGroup defaultValue="female" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select height" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="150">150 cm (4'11")</SelectItem>
                      <SelectItem value="155">155 cm (5'1")</SelectItem>
                      <SelectItem value="160">160 cm (5'3")</SelectItem>
                      <SelectItem value="165">165 cm (5'5")</SelectItem>
                      <SelectItem value="170">170 cm (5'7")</SelectItem>
                      <SelectItem value="175">175 cm (5'9")</SelectItem>
                      <SelectItem value="180">180 cm (5'11")</SelectItem>
                      <SelectItem value="185">185 cm (6'1")</SelectItem>
                      <SelectItem value="190">190 cm (6'3")</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="religion">Religion</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select religion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindu">Hindu</SelectItem>
                      <SelectItem value="muslim">Muslim</SelectItem>
                      <SelectItem value="christian">Christian</SelectItem>
                      <SelectItem value="sikh">Sikh</SelectItem>
                      <SelectItem value="buddhist">Buddhist</SelectItem>
                      <SelectItem value="jain">Jain</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motherTongue">Mother Tongue</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aboutMe">About Me</Label>
                <Textarea
                  id="aboutMe"
                  placeholder="Write something about yourself..."
                  className="min-h-[100px]"
                />
              </div>
            </TabsContent>

            <TabsContent value="photos" className="space-y-4">
              <h3 className="text-lg font-medium">Upload Photos</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-48 cursor-pointer hover:bg-muted/50">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Upload Profile Photo
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Main profile picture
                  </p>
                </div>

                <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-48 cursor-pointer hover:bg-muted/50">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Upload Photo</p>
                  <p className="text-xs text-muted-foreground">
                    Additional photo
                  </p>
                </div>

                <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-48 cursor-pointer hover:bg-muted/50">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Upload Photo</p>
                  <p className="text-xs text-muted-foreground">
                    Additional photo
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Photo Guidelines:</h4>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Upload clear, recent photos</li>
                  <li>Face should be clearly visible in the profile photo</li>
                  <li>Maximum file size: 5MB per photo</li>
                  <li>Accepted formats: JPG, PNG</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              <h3 className="text-lg font-medium">Education Details</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="highestEducation">Highest Education</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="highSchool">High School</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="bachelor">
                        Bachelor's Degree
                      </SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="doctorate">Doctorate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fieldOfStudy">Field of Study</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collegeName">College/University Name</Label>
                  <Input
                    id="collegeName"
                    placeholder="Enter college or university name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yearOfCompletion">Year of Completion</Label>
                  <Input
                    id="yearOfCompletion"
                    type="number"
                    placeholder="YYYY"
                    min="1980"
                    max="2030"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="career" className="space-y-4">
              <h3 className="text-lg font-medium">Career Information</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profession">Profession</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select profession" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private Job</SelectItem>
                      <SelectItem value="government">Government Job</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="selfEmployed">
                        Self Employed
                      </SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="engineer">Engineer</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company/Organization Name</Label>
                  <Input id="companyName" placeholder="Enter company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title/Designation</Label>
                  <Input id="jobTitle" placeholder="Enter your job title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="annualIncome">Annual Income</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below5">Below 5 Lakhs</SelectItem>
                      <SelectItem value="5to10">5-10 Lakhs</SelectItem>
                      <SelectItem value="10to15">10-15 Lakhs</SelectItem>
                      <SelectItem value="15to25">15-25 Lakhs</SelectItem>
                      <SelectItem value="25to50">25-50 Lakhs</SelectItem>
                      <SelectItem value="50to100">
                        50 Lakhs - 1 Crore
                      </SelectItem>
                      <SelectItem value="above100">Above 1 Crore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workLocation">Work Location</Label>
                  <Input id="workLocation" placeholder="City, Country" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="family" className="space-y-4">
              <h3 className="text-lg font-medium">Family Details</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="familyType">Family Type</Label>
                  <RadioGroup defaultValue="nuclear" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nuclear" id="nuclear" />
                      <Label htmlFor="nuclear">Nuclear</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="joint" id="joint" />
                      <Label htmlFor="joint">Joint</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                  <Input
                    id="fatherOccupation"
                    placeholder="Enter father's occupation"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                  <Input
                    id="motherOccupation"
                    placeholder="Enter mother's occupation"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brothers">Number of Brothers</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4+">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sisters">Number of Sisters</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4+">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="familyLocation">Family Location</Label>
                  <Input
                    id="familyLocation"
                    placeholder="City, State, Country"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aboutFamily">About Family</Label>
                  <Textarea
                    id="aboutFamily"
                    placeholder="Write something about your family..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={activeStep === "personal"}
          >
            Previous
          </Button>

          <Button onClick={handleNext}>
            {activeStep === "family" ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Complete Profile
              </>
            ) : (
              "Next"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfileCreation;

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";

interface SearchFiltersProps {
  onApplyFilters?: (filters: FilterValues) => void;
  onResetFilters?: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

interface FilterValues {
  ageRange: [number, number];
  location: string;
  religion: string;
  motherTongue: string;
  education: string[];
  profession: string;
  annualIncome: string;
  maritalStatus: string[];
  height: [number, number];
  diet: string;
  hasPhotos: boolean;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  onApplyFilters = () => {},
  onResetFilters = () => {},
  isOpen = true,
  onToggle = () => {},
}) => {
  const [filters, setFilters] = useState<FilterValues>({
    ageRange: [21, 40],
    location: "",
    religion: "",
    motherTongue: "",
    education: [],
    profession: "",
    annualIncome: "",
    maritalStatus: ["Never Married"],
    height: [150, 190], // in cm
    diet: "",
    hasPhotos: true,
  });

  const handleAgeRangeChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      ageRange: [value[0], value[1]] as [number, number],
    }));
  };

  const handleHeightRangeChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      height: [value[0], value[1]] as [number, number],
    }));
  };

  const handleCheckboxChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[field] as string[];
      if (currentValues.includes(value)) {
        return { ...prev, [field]: currentValues.filter((v) => v !== value) };
      } else {
        return { ...prev, [field]: [...currentValues, value] };
      }
    });
  };

  const handleInputChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleTogglePhotos = (checked: boolean) => {
    setFilters((prev) => ({ ...prev, hasPhotos: checked }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      ageRange: [21, 40],
      location: "",
      religion: "",
      motherTongue: "",
      education: [],
      profession: "",
      annualIncome: "",
      maritalStatus: ["Never Married"],
      height: [150, 190],
      diet: "",
      hasPhotos: true,
    });
    onResetFilters();
  };

  const religions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Jewish",
    "Parsi",
    "Other",
  ];

  const motherTongues = [
    "Hindi",
    "Tamil",
    "Telugu",
    "Malayalam",
    "Kannada",
    "Bengali",
    "Marathi",
    "Gujarati",
    "Punjabi",
    "Urdu",
    "Other",
  ];

  const educationLevels = [
    "High School",
    "Bachelors",
    "Masters",
    "Doctorate",
    "Professional Degree",
  ];

  const maritalStatusOptions = [
    "Never Married",
    "Divorced",
    "Widowed",
    "Separated",
  ];

  const dietOptions = [
    "Vegetarian",
    "Non-Vegetarian",
    "Eggetarian",
    "Vegan",
    "Jain",
  ];

  const incomeRanges = [
    "Below $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $200,000",
    "Above $200,000",
  ];

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 w-full max-w-[300px] h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-semibold">Search Filters</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onToggle}>
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="basic">
              <AccordionTrigger className="text-sm font-medium">
                Basic Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Age Range</Label>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{filters.ageRange[0]} yrs</span>
                      <span className="text-sm">{filters.ageRange[1]} yrs</span>
                    </div>
                    <Slider
                      value={[filters.ageRange[0], filters.ageRange[1]]}
                      min={18}
                      max={70}
                      step={1}
                      onValueChange={handleAgeRangeChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="mb-2 block">
                      Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="City, State or Country"
                      value={filters.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="marital-status" className="mb-2 block">
                      Marital Status
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {maritalStatusOptions.map((status) => (
                        <div
                          key={status}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`status-${status}`}
                            checked={filters.maritalStatus.includes(status)}
                            onCheckedChange={(checked) => {
                              if (checked)
                                handleCheckboxChange("maritalStatus", status);
                              else
                                handleCheckboxChange("maritalStatus", status);
                            }}
                          />
                          <Label
                            htmlFor={`status-${status}`}
                            className="text-sm"
                          >
                            {status}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="religion">
              <AccordionTrigger className="text-sm font-medium">
                Religion & Language
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="religion" className="mb-2 block">
                      Religion
                    </Label>
                    <Select
                      value={filters.religion}
                      onValueChange={(value) =>
                        handleSelectChange("religion", value)
                      }
                    >
                      <SelectTrigger id="religion">
                        <SelectValue placeholder="Select Religion" />
                      </SelectTrigger>
                      <SelectContent>
                        {religions.map((religion) => (
                          <SelectItem key={religion} value={religion}>
                            {religion}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mother-tongue" className="mb-2 block">
                      Mother Tongue
                    </Label>
                    <Select
                      value={filters.motherTongue}
                      onValueChange={(value) =>
                        handleSelectChange("motherTongue", value)
                      }
                    >
                      <SelectTrigger id="mother-tongue">
                        <SelectValue placeholder="Select Language" />
                      </SelectTrigger>
                      <SelectContent>
                        {motherTongues.map((language) => (
                          <SelectItem key={language} value={language}>
                            {language}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education">
              <AccordionTrigger className="text-sm font-medium">
                Education & Career
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Education Level</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {educationLevels.map((level) => (
                        <div
                          key={level}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`edu-${level}`}
                            checked={filters.education.includes(level)}
                            onCheckedChange={(checked) => {
                              if (checked)
                                handleCheckboxChange("education", level);
                              else handleCheckboxChange("education", level);
                            }}
                          />
                          <Label htmlFor={`edu-${level}`} className="text-sm">
                            {level}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="profession" className="mb-2 block">
                      Profession
                    </Label>
                    <Input
                      id="profession"
                      placeholder="Enter profession"
                      value={filters.profession}
                      onChange={(e) =>
                        handleInputChange("profession", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="annual-income" className="mb-2 block">
                      Annual Income
                    </Label>
                    <Select
                      value={filters.annualIncome}
                      onValueChange={(value) =>
                        handleSelectChange("annualIncome", value)
                      }
                    >
                      <SelectTrigger id="annual-income">
                        <SelectValue placeholder="Select Income Range" />
                      </SelectTrigger>
                      <SelectContent>
                        {incomeRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lifestyle">
              <AccordionTrigger className="text-sm font-medium">
                Lifestyle
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Height Range</Label>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">
                        {Math.floor(filters.height[0] / 30.48)}'
                        {Math.round((filters.height[0] / 2.54) % 12)}"
                      </span>
                      <span className="text-sm">
                        {Math.floor(filters.height[1] / 30.48)}'
                        {Math.round((filters.height[1] / 2.54) % 12)}"
                      </span>
                    </div>
                    <Slider
                      value={[filters.height[0], filters.height[1]]}
                      min={140}
                      max={210}
                      step={1}
                      onValueChange={handleHeightRangeChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="diet" className="mb-2 block">
                      Diet Preference
                    </Label>
                    <Select
                      value={filters.diet}
                      onValueChange={(value) =>
                        handleSelectChange("diet", value)
                      }
                    >
                      <SelectTrigger id="diet">
                        <SelectValue placeholder="Select Diet Preference" />
                      </SelectTrigger>
                      <SelectContent>
                        {dietOptions.map((diet) => (
                          <SelectItem key={diet} value={diet}>
                            {diet}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="has-photos"
                      checked={filters.hasPhotos}
                      onCheckedChange={(checked) =>
                        handleTogglePhotos(checked as boolean)
                      }
                    />
                    <Label htmlFor="has-photos" className="text-sm">
                      Profiles with Photos only
                    </Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex items-center justify-between pt-4 border-t">
            <Button variant="outline" size="sm" onClick={handleResetFilters}>
              <X className="h-4 w-4 mr-1" /> Reset
            </Button>
            <Button size="sm" onClick={handleApplyFilters}>
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;

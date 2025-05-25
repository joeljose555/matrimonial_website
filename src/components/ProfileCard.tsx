import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye } from "lucide-react";

interface ProfileCardProps {
  id?: string;
  name?: string;
  age?: number;
  location?: string;
  profession?: string;
  education?: string;
  photo?: string;
  religion?: string;
  onViewProfile?: (id: string) => void;
  onExpressInterest?: (id: string) => void;
}

const ProfileCard = ({
  id = "1",
  name = "Sarah Johnson",
  age = 28,
  location = "New York, USA",
  profession = "Software Engineer",
  education = "Masters in Computer Science",
  photo = "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  religion = "Christian",
  onViewProfile = () => {},
  onExpressInterest = () => {},
}: ProfileCardProps) => {
  return (
    <Card className="w-full max-w-[350px] overflow-hidden bg-white">
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-r from-purple-100 to-pink-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <Avatar className="h-32 w-32 border-4 border-white">
              <AvatarImage src={photo} alt={name} />
              <AvatarFallback className="text-2xl">
                {name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <CardContent className="pt-4 text-center">
        <h3 className="text-xl font-semibold">
          {name}, {age}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{location}</p>

        <div className="flex justify-center gap-2 mt-3">
          <Badge variant="secondary">{profession}</Badge>
          <Badge variant="outline">{religion}</Badge>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium">Education</p>
          <p className="text-sm text-gray-600">{education}</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between gap-2 pt-0">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onViewProfile(id)}
        >
          <Eye className="mr-2 h-4 w-4" /> View Profile
        </Button>
        <Button
          className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          onClick={() => onExpressInterest(id)}
        >
          <Heart className="mr-2 h-4 w-4" /> Express Interest
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;

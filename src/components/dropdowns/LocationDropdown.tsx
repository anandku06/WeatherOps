import React, { type Dispatch, type SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <div>
      <Select value={location} onValueChange={(value) => setLocation(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="z-1001">
          {locations.map((city, i) => (
            <SelectItem key={i} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const locations = [
  "New York",
  "London",
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Tokyo",
  "Sydney",
  "Paris",
  "Berlin",
  "Moscow",
  "Rio de Janeiro",
  "Cape Town",
  "Beijing",
];

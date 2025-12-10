import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

export default function LocationDropdown({}: Props) {
  return (
    <div>
      <Select>
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

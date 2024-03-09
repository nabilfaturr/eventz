import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";

export type DropdownProps = {
  value?: string;
  handleChange: () => void;
};

const Dropdown = ({ value, handleChange }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([
    {
      _id: "1",
      name: "Technology",
    },
    {
      _id: "1",
      name: "Finance",
    },
  ]);
  return (
    <Select>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="select-item"
            >
              {category.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;

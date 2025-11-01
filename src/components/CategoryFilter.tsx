import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className="whitespace-nowrap"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

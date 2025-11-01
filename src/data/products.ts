import chocolateChip from "@/assets/chocolate-chip.jpg";
import oatmeal from "@/assets/oatmeal.jpg";
import sugar from "@/assets/sugar.jpg";
import doubleChocolate from "@/assets/double-chocolate.jpg";
import specialty from "@/assets/specialty.jpg";
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Chocolate Chip",
    category: "Chocolate Chip",
    price: 3.99,
    image: chocolateChip,
    description: "Golden brown cookies loaded with rich chocolate chunks"
  },
  {
    id: 2,
    name: "Triple Chocolate Chip",
    category: "Chocolate Chip",
    price: 4.49,
    image: chocolateChip,
    description: "Three types of chocolate in one amazing cookie"
  },
  {
    id: 3,
    name: "Oatmeal Raisin",
    category: "Oatmeal",
    price: 3.49,
    image: oatmeal,
    description: "Wholesome oats with plump raisins in every bite"
  },
  {
    id: 4,
    name: "Oatmeal Cranberry",
    category: "Oatmeal",
    price: 3.99,
    image: oatmeal,
    description: "Hearty oats paired with tart cranberries"
  },
  {
    id: 5,
    name: "Sugar Cookie Classic",
    category: "Sugar Cookies",
    price: 2.99,
    image: sugar,
    description: "Traditional sugar cookies with colorful icing"
  },
  {
    id: 6,
    name: "Decorated Sugar Cookies",
    category: "Sugar Cookies",
    price: 4.99,
    image: sugar,
    description: "Beautifully decorated sugar cookies for any occasion"
  },
  {
    id: 7,
    name: "Double Chocolate Fudge",
    category: "Double Chocolate",
    price: 4.49,
    image: doubleChocolate,
    description: "Rich cocoa cookies with dark chocolate chips"
  },
  {
    id: 8,
    name: "Chocolate Brownie Cookie",
    category: "Double Chocolate",
    price: 4.99,
    image: doubleChocolate,
    description: "The perfect fusion of brownie and cookie"
  },
  {
    id: 9,
    name: "Salted Caramel Pecan",
    category: "Specialty",
    price: 5.49,
    image: specialty,
    description: "Gourmet cookies with caramel and toasted pecans"
  },
  {
    id: 10,
    name: "White Chocolate Macadamia",
    category: "Specialty",
    price: 5.99,
    image: specialty,
    description: "Premium white chocolate with buttery macadamia nuts"
  },
];

export const categories = [
  "All",
  "Chocolate Chip",
  "Oatmeal",
  "Sugar Cookies",
  "Double Chocolate",
  "Specialty",
];

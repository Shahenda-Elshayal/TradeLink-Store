import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 129.99,
    description:
      "Comfortable over-ear headphones with noise cancellation and 30-hour battery life.",
    image: "https://picsum.photos/seed/headphones/400/400",
    category: "Electronics",
    stock: 15,
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    description:
      "Track fitness, heart rate, and notifications with a bright always-on display.",
    image: "https://picsum.photos/seed/smartwatch/400/400",
    category: "Electronics",
    stock: 10,
  },
  {
    id: "3",
    name: "Leather Backpack",
    price: 89.5,
    description:
      "Durable everyday backpack with padded laptop sleeve and multiple pockets.",
    image: "https://picsum.photos/seed/backpack/400/400",
    category: "Accessories",
    stock: 20,
  },
  {
    id: "4",
    name: "Cotton T-Shirt",
    price: 24.99,
    description: "Soft midweight cotton tee with a relaxed fit for daily wear.",
    image: "https://picsum.photos/seed/tshirt/400/400",
    category: "Clothing",
    stock: 40,
  },
  {
    id: "5",
    name: "Running Shoes",
    price: 110,
    description:
      "Lightweight sneakers with cushioned soles for training and casual runs.",
    image: "https://picsum.photos/seed/shoes/400/400",
    category: "Clothing",
    stock: 18,
  },
  {
    id: "6",
    name: "Ceramic Mug Set",
    price: 34.99,
    description: "Set of 4 matte ceramic mugs, dishwasher safe and stackable.",
    image: "https://picsum.photos/seed/mugs/400/400",
    category: "Home",
    stock: 25,
  },
  {
    id: "7",
    name: "Desk Lamp",
    price: 49.99,
    description: "Adjustable LED desk lamp with warm and cool light modes.",
    image: "https://picsum.photos/seed/lamp/400/400",
    category: "Home",
    stock: 12,
  },
  {
    id: "8",
    name: "Sunglasses",
    price: 59.99,
    description:
      "UV-protective frames with polarized lenses for everyday outdoor use.",
    image: "https://picsum.photos/seed/sunglasses/400/400",
    category: "Accessories",
    stock: 22,
  },
];

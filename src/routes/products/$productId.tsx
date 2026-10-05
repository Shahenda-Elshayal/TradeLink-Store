import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetailsPage,
});

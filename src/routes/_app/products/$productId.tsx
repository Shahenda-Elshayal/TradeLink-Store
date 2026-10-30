import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";

export const Route = createFileRoute("/_app/products/$productId")({
  component: ProductDetailsPage,
});

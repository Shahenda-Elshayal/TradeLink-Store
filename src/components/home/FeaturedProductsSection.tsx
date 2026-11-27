import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { IconTextButton } from "../IconTextButton";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { featuredProducts } from "@/data/featuredProduct";

export function FeaturedProductsSection() {
  return (
    <section className="mt-8">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-[#306573] rounded-full block"></span>
        <p className="text-xs font-normal text-brand-description">
          INVENTORY IN STOCK
        </p>
      </div>
      <div className="flex justify-between items-start md:items-center gap-2">
        <div>
          <h2 className="text-lg font-semibold text-brand-text-secondary md:text-xl">
            Featured Products
          </h2>
        </div>
        <div>
          <IconTextButton
            nativeButton={false}
            render={<Link to="/products" />}
            variant="link"
            icon={ArrowRight}
            iconPosition="end"
            className="h-auto max-h-none min-h-0 px-0 hover:no-underline text-brand-subtitle"
          >
            View All (24)
          </IconTextButton>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {
            featuredProducts.map(product => (
                <li key={product.id}>
                    <FeaturedProductCard product={product} />
                </li>
            ))
        }
      </ul>
    </section>
  );
}

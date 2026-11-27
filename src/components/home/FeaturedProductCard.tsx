import { ShoppingCart, Star } from "lucide-react";
import { IconTextButton } from "../IconTextButton";
import type { FeaturedProduct } from "@/types/featuredProduct";


export function FeaturedProductCard({product}:{product:FeaturedProduct}) {
  return (
    <article className="rounded-[8px] p-4 shadow-[0px_1px_2px_0px_#0000000D] bg-white">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover rounded-[4px]"
        />
        <span className="absolute top-[10px] left-[10px] rounded-[12px] bg-[#B3E8F8] px-2 py-[2px] text-xs font-semibold text-[#124D5B]">
          {product.category}
        </span>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] leading-[24px] font-semibold text-brand-text-secondary">
            {product.name}
          </h3>
          <p className="flex items-center gap-1 text-xs font-semibold text-brand-text-secondary">
            <Star
              className="size-3.5 fill-[#A43E00] text-[#A43E00]"
              aria-hidden
            />{" "}
            {product.rating}
          </p>
        </div>
        <p className="text-xs font-normal text-brand-description mt-1">
          {product.description}
        </p>
        <div className="mt-4 bg-brand-surface rounded-[4px] p-3 flex items-center justify-between">
          <p className="text-[18px] leading-[24px] font-semibold text-brand-text-secondary">${product.price.toFixed(2)}</p>
          <IconTextButton
            icon={ShoppingCart}
            iconPosition="start"
            size="sm"
            className="rounded-[6px]"
          >
            Add to Cart
          </IconTextButton>
        </div>
      </div>
    </article>
  );
}

import vaseImage from "@/assets/vase.png";
import { ShoppingCart, Star } from "lucide-react";
import { IconTextButton } from "../IconTextButton";

export function FeaturedProductCard() {
  return (
    <article className="rounded-[8px] p-4 shadow-[0px_1px_2px_0px_#0000000D] bg-white">
      <div className="relative">
        <img
          src={vaseImage}
          alt=""
          className="aspect-[4/3] w-full object-cover rounded-[4px]"
        />
        <span className="absolute top-[10px] left-[10px] rounded-[12px] bg-[#B3E8F8] px-2 py-[2px] text-xs font-semibold text-[#124D5B]">
          Home
        </span>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] leading-[24px] font-semibold text-brand-text-secondary">
            Nomad Ceramic Vase
          </h2>
          <p className="flex items-center gap-1 text-xs font-semibold text-brand-text-secondary">
            <Star
              className="size-3.5 fill-[#A43E00] text-[#A43E00]"
              aria-hidden
            />{" "}
            4.9
          </p>
        </div>
        <p className="text-xs font-normal text-brand-description mt-1">
          Handmade rustic stoneware with wood-fired glaze and tactile surface
          speckles.
        </p>
        <div className="mt-4 bg-[#F6F3F2] rounded-[4px] p-3 flex items-center justify-between">
          <p className="text-[18px] leading-[24px] font-semibold text-brand-text-secondary">$84.00</p>
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

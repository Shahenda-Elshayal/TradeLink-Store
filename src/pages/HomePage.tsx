import heroImage from "@/assets/vase.png";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { IconTextButton } from "@/components/IconTextButton";
import { ArrowRightIcon } from "lucide-react";

export function HomePage() {
  return (
    <section>
      <div className="grid items-center lg:grid-cols-5 gap-4 bg-brand-surface-high text-brand-text p-8 rounded-[8px]">
        {/* left side */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <p className="flex items-center gap-2 text-sm font-medium bg-white px-4 py-1 rounded-lg w-fit">
            <span className="inline-block size-2 rounded-full bg-primary" />
            TradeLink Online Store
          </p>

          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Everything you need, all in one place
          </h1>

          <p className="max-w-lg text-sm md:text-md leading-relaxed text-muted-foreground">
            Explore a wide collection of trusted products designed to make your
            daily life easier, better, and more convenient.
          </p>

          <IconTextButton
            icon={ArrowRightIcon}
            iconPosition="end"
            className="w-fit"
          >
            View All Products
          </IconTextButton>
        </div>
        {/* right side */}
        <article className="w-[300px] max-w-full justify-self-end bg-white rounded-[4px] p-3 lg:col-span-2 lg:w-full lg:max-w-none">
          <div className="">
            <div className="rounded-[6px] relative">
              <img
                src={heroImage}
                alt="hero image"
                className="w-full h-full object-cover rounded-[6px]"
              />
              <span className="absolute top-3 left-3 bg-brand-accent text-[#124D5B] font-semibold text-xs px-2 py-1 rounded-lg">
              New Batch #04
              </span>
              <span className="absolute bottom-3 right-3 bg-white text-brand-text-secondary font-semibold text-xs px-2 py-1 rounded-[2px]">
              Hand-finished Stoneware
              </span>
            </div>
            <div className="flex justify-between items-center mt-4 gap-2 ">
              <div>
                <h3 className="text-base text-brand-text-secondary font-medium">
                  Nomad Ceramic Artifact
                </h3>
                <p className="text-sm text-brand-description font-[300]">
                  Selected by Studio Kōgei
                </p>
              </div>
              <p className="text-base text-brand-subtitle font-medium">
                $ 80,000
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

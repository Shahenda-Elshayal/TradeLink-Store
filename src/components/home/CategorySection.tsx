import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { IconTextButton } from "../IconTextButton";
import { CategoryCard } from "./CategoryCard";
import { categories } from "@/data/categories";

export function CategorySection() {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-start md:items-center gap-2">
        <div>
          <h2 className="text-lg font-semibold text-brand-text-secondary md:text-xl">
            Shop by Category
          </h2>
          <p className="mt-1 text-sm font-normal text-brand-description">
            Carefully grouped by room and functional routine
          </p>
        </div>
        <div>
          <IconTextButton
            nativeButton={false}
            render={<Link to="/products" />}
            variant="link"
            icon={ChevronRight}
            iconPosition="end"
            className="h-auto max-h-none min-h-0 px-0 hover:no-underline text-brand-subtitle"
          >
            All departments
          </IconTextButton>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {categories.map((category) => {
          return (
            <li key={category.name}>
              <Link to={"/products"}
              >
                <CategoryCard category={category} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

import type { CategoryType } from "@/types/category";

type CategoryProps = {
    category:CategoryType;
}

export function CategoryCard({category}:CategoryProps) {


  return (
    <article className="block h-36 overflow-hidden rounded-[8px] bg-brand-surface p-4 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-10 items-center justify-center rounded-[4px] bg-white">
        <category.icon className="size-5 text-brand-text" aria-hidden />
        </span>
        <span className="rounded-full bg-brand-surface-mid px-2.5 py-1 text-xs text-brand-description">
          {category.itemsCount} items    
        </span>
      </div>
      <h3 className="mt-6 text-base font-medium text-brand-text-secondary">
        {category.name}
      </h3>
      <p className="mt-1 truncate text-sm font-normal text-brand-description">
        {category.description}
      </p>
    </article>
  );
}
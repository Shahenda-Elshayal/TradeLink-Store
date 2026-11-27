import type { CategoryType } from "@/types/category";
import { HeadphonesIcon,ShirtIcon,HomeIcon,BriefcaseIcon } from "lucide-react";

export const categories : CategoryType[] = [
    {
        name: "Electronics",
        description: "Acoustics and desk tools",
        icon: HeadphonesIcon,
        itemsCount: 48,
    },
    {
        name: "Clothing",
        description: "Heavy cotton and outerwear",
        icon: ShirtIcon,
        itemsCount: 32,
    },
    {
        name: "Home",
        description: "Ceramics and living", 
        icon: HomeIcon,
        itemsCount: 24,
    },
    {
        name: "Accessories",
        description: "Carry goods and EDC",
        icon: BriefcaseIcon,
        itemsCount: 18,
    },
]
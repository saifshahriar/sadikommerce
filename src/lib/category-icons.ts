import { Bath, Home, Lamp, Leaf, Package, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const categoryIconBySlug: Record<string, LucideIcon> = {
    kitchen: Utensils,
    "home-accessories": Home,
    storage: Package,
    bathroom: Bath,
    decor: Leaf,
    lighting: Lamp,
};

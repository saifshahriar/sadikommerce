import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            href={`/products/${product.slug}`}
            className="group block overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
        >
            <div className="aspect-square overflow-hidden bg-secondary/40">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className="p-3">
                <div className="mb-2 flex gap-1">
                    {product.colors.slice(0, 5).map((color) => (
                        <span
                            key={color.skuSuffix}
                            className="h-3 w-3 rounded-sm border border-border"
                            style={{ backgroundColor: color.hex }}
                        />
                    ))}
                </div>
                <h3 className="truncate text-sm font-medium">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-base font-semibold text-primary">BDT {product.price}</span>
                        {product.oldPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                                BDT {product.oldPrice}
                            </span>
                        )}
                    </div>
                    <span
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground"
                        aria-label="Add to cart"
                        role="img"
                    >
                        <ShoppingCart className="h-4 w-4" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

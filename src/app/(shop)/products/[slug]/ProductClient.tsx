"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Minus, Plus, RotateCcw, ShoppingCart, Star, Truck, Wallet, Zap } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product } from "@/lib/products";

type ProductClientProps = {
    product: Product;
    related: Product[];
};

export default function ProductClient({ product, related }: ProductClientProps) {
    const firstInStock = product.colors.findIndex((color) => color.inStock);
    const [colorIdx, setColorIdx] = useState(firstInStock === -1 ? 0 : firstInStock);
    const [size, setSize] = useState(product.sizes?.[0]);
    const [qty, setQty] = useState(1);
    const [imgIdx, setImgIdx] = useState(0);

    const color = product.colors[colorIdx] ?? product.colors[0];
    const sku = `${product.baseSku}-${color.skuSuffix}`;
    const categoryLabel = product.category.replace(/-/g, " ");
    const ratingRounded = Math.round(product.rating);

    return (
        <div className="mx-auto max-w-7xl px-4 py-6">
            <nav className="flex gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">
                    Home
                </Link>
                <span>/</span>
                <span className="capitalize">{categoryLabel}</span>
                <span>/</span>
                <span className="text-foreground">{product.name}</span>
            </nav>

            <div className="mt-6 grid gap-10 lg:grid-cols-2">
                <div>
                    <div className="aspect-square overflow-hidden rounded-lg border border-border bg-secondary/30">
                        <img
                            src={product.gallery[imgIdx] ?? product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="mt-3 flex gap-3">
                        {product.gallery.map((src, index) => (
                            <button
                                key={src}
                                onClick={() => setImgIdx(index)}
                                className={`h-20 w-20 overflow-hidden rounded-md border ${index === imgIdx ? "border-primary ring-2 ring-primary/20" : "border-border"
                                    }`}
                            >
                                <img src={src} alt="" className="h-full w-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold md:text-3xl">{product.name}</h1>
                    <p className="mt-1 text-sm text-muted-foreground">{product.shortDesc}</p>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="flex text-amber-500">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={`${product.slug}-star-${index}`}
                                    className="h-4 w-4"
                                    fill={index < ratingRounded ? "currentColor" : "none"}
                                />
                            ))}
                        </div>
                        <span className="text-muted-foreground">
                            {product.rating} ({product.reviews} reviews)
                        </span>
                    </div>

                    <div className="mt-4 flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-primary">BDT {product.price}</span>
                        {product.oldPrice && (
                            <span className="text-base text-muted-foreground line-through">
                                BDT {product.oldPrice}
                            </span>
                        )}
                    </div>

                    <div className="mt-3 text-sm">
                        <div>
                            <span className="text-muted-foreground">SKU:</span>{" "}
                            <span className="font-medium">{sku}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            SKU updates automatically when color changes
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="mb-2 text-sm font-medium">
                            Color: <span className="text-muted-foreground">{color.name}</span>
                        </div>
                        <div className="flex gap-2">
                            {product.colors.map((option, index) => (
                                <button
                                    key={option.skuSuffix}
                                    onClick={() => option.inStock && setColorIdx(index)}
                                    disabled={!option.inStock}
                                    className={`relative h-9 w-9 rounded-md border-2 transition-all ${index === colorIdx ? "border-primary" : "border-border"
                                        } ${!option.inStock ? "cursor-not-allowed opacity-40" : ""}`}
                                    style={{ backgroundColor: option.hex }}
                                    title={option.inStock ? option.name : `${option.name} (Out of stock)`}
                                >
                                    {index === colorIdx && (
                                        <Check className="absolute inset-0 m-auto h-4 w-4 text-white drop-shadow" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {product.sizes && (
                        <div className="mt-6">
                            <div className="mb-2 text-sm font-medium">Size</div>
                            <div className="flex gap-2">
                                {product.sizes.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setSize(option)}
                                        className={`h-9 rounded-md border px-4 text-sm ${size === option ? "border-primary text-primary" : "border-border"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-6 flex items-center gap-4">
                        <div className="text-sm font-medium">Quantity</div>
                        <div className="flex items-center rounded-md border border-border">
                            <button
                                onClick={() => setQty(Math.max(1, qty - 1))}
                                className="flex h-9 w-9 items-center justify-center hover:bg-secondary"
                                type="button"
                            >
                                <Minus className="h-3 w-3" />
                            </button>
                            <input
                                value={qty}
                                onChange={(event) =>
                                    setQty(Math.max(1, Number(event.target.value) || 1))
                                }
                                className="h-9 w-12 bg-transparent text-center text-sm"
                                inputMode="numeric"
                                aria-label="Quantity"
                            />
                            <button
                                onClick={() => setQty(qty + 1)}
                                className="flex h-9 w-9 items-center justify-center hover:bg-secondary"
                                type="button"
                            >
                                <Plus className="h-3 w-3" />
                            </button>
                        </div>
                        <span className="flex items-center gap-1 text-sm font-medium text-success">
                            <Check className="h-4 w-4" /> In Stock
                        </span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <Button className="h-11" type="button">
                            <ShoppingCart className="h-4 w-4" /> Add to Cart
                        </Button>
                        <Button
                            type="button"
                            className="h-11 bg-success text-success-foreground hover:bg-success/90"
                        >
                            <Zap className="h-4 w-4" /> Place Order
                        </Button>
                    </div>

                    <div className="mt-6 grid gap-3 rounded-lg bg-secondary/40 p-4">
                        <div className="flex items-center gap-3 text-sm">
                            <Truck className="h-5 w-5 text-primary" />
                            <div>
                                <div className="font-medium">Delivery in 2-4 days</div>
                                <div className="text-xs text-muted-foreground">Inside Dhaka</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Wallet className="h-5 w-5 text-primary" />
                            <div>
                                <div className="font-medium">Cash on Delivery</div>
                                <div className="text-xs text-muted-foreground">Pay when you receive</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <RotateCcw className="h-5 w-5 text-primary" />
                            <div>
                                <div className="font-medium">7 Day Returns</div>
                                <div className="text-xs text-muted-foreground">Hassle free returns</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <Tabs defaultValue="description">
                    <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
                        <TabsTrigger
                            value="description"
                            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:text-primary"
                        >
                            Description
                        </TabsTrigger>
                        <TabsTrigger
                            value="specs"
                            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:text-primary"
                        >
                            Specifications
                        </TabsTrigger>
                        <TabsTrigger
                            value="shipping"
                            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:text-primary"
                        >
                            Shipping & Delivery
                        </TabsTrigger>
                        <TabsTrigger
                            value="returns"
                            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:text-primary"
                        >
                            Returns
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="description">
                        <div className="prose prose-sm max-w-3xl text-foreground">
                            <p>{product.description}</p>
                            <ul>
                                {product.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value="specs">
                        <table className="w-full text-sm">
                            <tbody>
                                <tr className="border-b border-border">
                                    <td className="w-40 py-2 text-muted-foreground">SKU</td>
                                    <td>{sku}</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="py-2 text-muted-foreground">Category</td>
                                    <td className="capitalize">{categoryLabel}</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="py-2 text-muted-foreground">Colors</td>
                                    <td>{product.colors.map((item) => item.name).join(", ")}</td>
                                </tr>
                                {product.sizes && (
                                    <tr className="border-b border-border">
                                        <td className="py-2 text-muted-foreground">Sizes</td>
                                        <td>{product.sizes.join(", ")}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </TabsContent>
                    <TabsContent value="shipping">
                        <p className="text-sm text-muted-foreground">
                            Free delivery inside Dhaka for orders over BDT 1000. Nationwide delivery within 2-4
                            business days. Cash on Delivery available.
                        </p>
                    </TabsContent>
                    <TabsContent value="returns">
                        <p className="text-sm text-muted-foreground">
                            7-day easy returns. Items must be unused and in original packaging. Refunds processed
                            within 5 business days.
                        </p>
                    </TabsContent>
                </Tabs>
            </div>

            <section className="mt-16">
                <h2 className="text-xl font-semibold">You may also like</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
                    {related.map((item) => (
                        <ProductCard key={item.slug} product={item} />
                    ))}
                </div>
            </section>
        </div>
    );
}

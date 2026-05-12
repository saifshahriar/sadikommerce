import Link from "next/link";
import { Lock, ShieldCheck, Tag, Truck } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { categoryIconBySlug } from "@/lib/category-icons";
import { categories, products } from "@/lib/products";

const heroImage = "/opnar/hero.jpg";
const bannerImage = "/opnar/banner-decor.jpg";

const trust = [
    { icon: ShieldCheck, title: "Best Quality", desc: "Carefully selected products" },
    { icon: Tag, title: "Affordable Prices", desc: "Value for every money" },
    { icon: Truck, title: "Fast Delivery", desc: "Across Bangladesh" },
    { icon: Lock, title: "Secure Payments", desc: "100% secure checkout" },
];

export default function HomePage() {
    const popular = products.slice(0, 5);

    return (
        <div className="flex-1">
            <section className="mx-auto max-w-7xl px-4 pt-6">
                <div className="relative overflow-hidden rounded-xl bg-sage">
                    <img
                        src={heroImage}
                        alt="Smart essentials for every home"
                        className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />
                    <div className="relative grid min-h-[320px] gap-6 p-8 md:min-h-[420px] md:grid-cols-2 md:p-14">
                        <div className="flex max-w-md flex-col justify-center">
                            <p className="text-sm font-medium text-foreground/70">Refresh Your Space</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                                Smart essentials
                                <br />
                                for every home
                            </h1>
                            <p className="mt-4 text-foreground/80">Practical, stylish, and made for everyday life.</p>
                            <div className="mt-6">
                                <Button asChild size="lg">
                                    <Link href="/products/stackable-storage-box">Shop Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-6 grid max-w-7xl grid-cols-2 gap-3 px-4 md:grid-cols-4">
                {trust.map((item) => (
                    <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
                            <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold">{item.title}</div>
                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="mx-auto mt-12 max-w-7xl px-4">
                <div className="flex items-baseline justify-between">
                    <h2 className="text-xl font-semibold">Shop by Category</h2>
                    <Link href="/products" className="text-sm text-primary hover:underline">
                        View All
                    </Link>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
                    {categories.map((category) => {
                        const Icon = categoryIconBySlug[category.slug];
                        return (
                            <Link
                                key={category.slug}
                                href={`/products?category=${category.slug}`}
                                className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-medium">{category.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="mx-auto mt-12 max-w-7xl px-4">
                <div className="flex items-baseline justify-between">
                    <h2 className="text-xl font-semibold">Popular Products</h2>
                    <Link href="/products" className="text-sm text-primary hover:underline">
                        View All
                    </Link>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
                    {popular.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            </section>

            <section className="mx-auto mt-12 max-w-7xl px-4">
                <div className="relative overflow-hidden rounded-xl bg-cream">
                    <img
                        src={bannerImage}
                        alt="Decor pieces"
                        className="absolute inset-0 h-full w-full object-cover opacity-95"
                    />
                    <div className="relative max-w-md p-8 md:p-12">
                        <p className="text-sm font-medium text-foreground/70">Make Every Corner</p>
                        <h2 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">
                            More Beautiful
                        </h2>
                        <p className="mt-3 text-sm text-foreground/70">
                            Explore decor pieces that bring personality to your space.
                        </p>
                        <Button asChild size="sm" className="mt-5">
                            <Link href="/products?category=decor">Shop Decor</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-12 max-w-7xl px-4">
                <div className="flex items-baseline justify-between">
                    <h2 className="text-xl font-semibold">More for your home</h2>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {products.slice(5).map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}

import Link from "next/link";
import { Filter, Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { categoryIconBySlug } from "@/lib/category-icons";
import { categories, products } from "@/lib/products";

type SearchParams = {
    q?: string | string[];
    category?: string | string[];
};

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const { q, category } = await searchParams;
    const query = Array.isArray(q) ? q[0] : q;
    const categorySlug = Array.isArray(category) ? category[0] : category;
    const normalizedQuery = query?.trim().toLowerCase() ?? "";
    const normalizedCategory = categorySlug?.trim() ?? "";

    const filtered = products.filter((product) => {
        const matchesCategory = !normalizedCategory || product.category === normalizedCategory;
        if (!matchesCategory) return false;
        if (!normalizedQuery) return true;
        const haystack = `${product.name} ${product.shortDesc} ${product.category}`.toLowerCase();
        return haystack.includes(normalizedQuery);
    });

    const activeCategory = normalizedCategory || "all";
    const queryParam = normalizedQuery ? `&q=${encodeURIComponent(normalizedQuery)}` : "";
    const categoriesWithAll = [{ slug: "all", name: "All" }, ...categories];

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold">Products</h1>
                <p className="text-sm text-muted-foreground">
                    {normalizedQuery
                        ? `Showing ${filtered.length} results for "${normalizedQuery}"`
                        : `Showing ${filtered.length} products`}
                </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Filter className="h-4 w-4" /> Filters
                </div>
                <div className="flex flex-wrap gap-3">
                    {categoriesWithAll.map((categoryItem) => {
                        const Icon = categoryIconBySlug[categoryItem.slug] ?? Search;
                        const href =
                            categoryItem.slug === "all"
                                ? normalizedQuery
                                    ? `/products?q=${encodeURIComponent(normalizedQuery)}`
                                    : "/products"
                                : `/products?category=${categoryItem.slug}${queryParam}`;
                        const isActive = activeCategory === categoryItem.slug;

                        return (
                            <Link
                                key={categoryItem.slug}
                                href={href}
                                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors ${isActive
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                                    }`}
                            >
                                <Icon className="h-4 w-4" /> {categoryItem.name}
                            </Link>
                        );
                    })}
                </div>
                {(normalizedQuery || normalizedCategory) && (
                    <Link href="/products" className="text-sm text-primary hover:underline">
                        Clear filters
                    </Link>
                )}
            </div>

            {filtered.length === 0 ? (
                <div className="mt-12 rounded-xl border border-dashed border-border p-10 text-center">
                    <h2 className="text-lg font-semibold">No products found</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Try a different search or category.
                    </p>
                </div>
            ) : (
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {filtered.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
}

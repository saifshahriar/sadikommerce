import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { categories } from "@/lib/products";
import { Input } from "@/components/ui/input";

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
                <Link href="/" className="text-xl font-bold tracking-tight text-primary">
                    sadikommerce
                </Link>
                <form
                    action="/products"
                    method="get"
                    className="relative mx-auto hidden w-full max-w-xl md:block"
                >
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        name="q"
                        placeholder="Search for products..."
                        className="h-10 w-full bg-secondary pl-10 pr-4"
                        aria-label="Search products"
                    />
                </form>
                <div className="ml-auto flex items-center gap-4">
                    <button
                        type="button"
                        className="hidden items-center gap-2 text-sm font-medium hover:text-primary sm:flex"
                    >
                        <User className="h-4 w-4" /> Account
                    </button>
                    <button type="button" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                        <ShoppingCart className="h-4 w-4" /> Cart (0)
                    </button>
                </div>
            </div>
            <nav className="bg-primary text-primary-foreground">
                <div className="mx-auto flex h-11 max-w-7xl items-center gap-6 overflow-x-auto px-4 text-sm">
                    <button type="button" className="flex shrink-0 items-center gap-2 font-medium">
                        <Menu className="h-4 w-4" /> All Categories
                    </button>
                    <Link href="/" className="shrink-0 hover:opacity-80">
                        Home
                    </Link>
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/products?category=${category.slug}`}
                            className="shrink-0 hover:opacity-80"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}

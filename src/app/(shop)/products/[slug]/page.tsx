import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductClient from "@/app/(shop)/products/[slug]/ProductClient";
import { getProduct, products } from "@/lib/products";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        return { title: "Product not found" };
    }

    return {
        title: `${product.name} - sadikommerce`,
        description: product.shortDesc,
        openGraph: {
            title: `${product.name} - sadikommerce`,
            description: product.shortDesc,
            images: [product.image],
        },
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        notFound();
    }

    const related = products.filter((item) => item.slug !== product.slug).slice(0, 5);

    return <ProductClient product={product} related={related} />;
}

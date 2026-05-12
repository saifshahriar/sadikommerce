const imagePath = (file: string) => `/opnar/${file}`;

export type ColorVariant = {
    name: string;
    hex: string;
    skuSuffix: string;
    inStock: boolean;
};

export type Product = {
    slug: string;
    name: string;
    shortDesc: string;
    category: string;
    price: number;
    oldPrice?: number;
    baseSku: string;
    image: string;
    gallery: string[];
    colors: ColorVariant[];
    sizes?: string[];
    description: string;
    features: string[];
    rating: number;
    reviews: number;
};

export const categories = [
    { slug: "kitchen", name: "Kitchen" },
    { slug: "home-accessories", name: "Home Accessories" },
    { slug: "storage", name: "Storage" },
    { slug: "bathroom", name: "Bathroom" },
    { slug: "decor", name: "Decor" },
    { slug: "lighting", name: "Lighting" },
];

export const products: Product[] = [
    {
        slug: "stackable-storage-box",
        name: "Stackable Storage Box",
        shortDesc: "Practical storage with a clean look.",
        category: "storage",
        price: 580,
        oldPrice: 720,
        baseSku: "STB-01",
        image: imagePath("p-storage-box.jpg"),
        gallery: [
            imagePath("p-storage-box.jpg"),
            imagePath("p-basket.jpg"),
            imagePath("p-bag.jpg"),
            imagePath("p-glass.jpg"),
        ],
        colors: [
            { name: "Beige", hex: "#e8dcc4", skuSuffix: "BGE", inStock: true },
            { name: "Cream", hex: "#f4ede0", skuSuffix: "CRM", inStock: true },
            { name: "Grey", hex: "#bdbdbd", skuSuffix: "GRY", inStock: true },
            { name: "Sage", hex: "#a8b89c", skuSuffix: "GRN", inStock: true },
            { name: "Charcoal", hex: "#3a3a3a", skuSuffix: "CHR", inStock: false },
        ],
        sizes: ["Medium", "Large"],
        description:
            "Made from durable PP material, this stackable storage box is perfect for organizing clothes, books, toys and more. The front opening door allows easy access even when stacked.",
        features: [
            "Stackable design to save space",
            "Front opening for easy access",
            "Durable and easy to clean",
            "Suitable for home, office and retail use",
        ],
        rating: 4.8,
        reviews: 142,
    },
    {
        slug: "kitchen-utensil-set",
        name: "Kitchen Utensil Set",
        shortDesc: "Premium 6-piece stainless steel set.",
        category: "kitchen",
        price: 750,
        oldPrice: 980,
        baseSku: "KUS-02",
        image: imagePath("p-utensils.jpg"),
        gallery: [imagePath("p-utensils.jpg"), imagePath("p-mug.jpg"), imagePath("p-glass.jpg")],
        colors: [
            { name: "Steel", hex: "#c0c0c0", skuSuffix: "STL", inStock: true },
            { name: "Black", hex: "#1f1f1f", skuSuffix: "BLK", inStock: true },
            { name: "Gold", hex: "#c9a96e", skuSuffix: "GLD", inStock: true },
        ],
        description:
            "A complete 6-piece utensil set crafted from premium stainless steel. Comfortable handles and a matching ceramic holder included.",
        features: [
            "Food-grade stainless steel",
            "Includes ceramic holder",
            "Dishwasher safe",
            "6-piece complete set",
        ],
        rating: 4.7,
        reviews: 96,
    },
    {
        slug: "ceramic-coffee-mug",
        name: "Ceramic Coffee Mug",
        shortDesc: "Minimal mug for everyday rituals.",
        category: "kitchen",
        price: 250,
        baseSku: "CCM-03",
        image: imagePath("p-mug.jpg"),
        gallery: [imagePath("p-mug.jpg"), imagePath("p-utensils.jpg")],
        colors: [
            { name: "Beige", hex: "#e8dcc4", skuSuffix: "BGE", inStock: true },
            { name: "White", hex: "#f8f8f8", skuSuffix: "WHT", inStock: true },
            { name: "Sage", hex: "#a8b89c", skuSuffix: "GRN", inStock: true },
            { name: "Blush", hex: "#e9c8c2", skuSuffix: "BLS", inStock: false },
        ],
        description:
            "A minimal stoneware mug with a smooth matte finish. Comfortable handle, generous 320ml capacity.",
        features: [
            "320ml capacity",
            "Matte stoneware finish",
            "Microwave safe",
            "Sold individually",
        ],
        rating: 4.9,
        reviews: 211,
    },
    {
        slug: "cotton-bath-towel",
        name: "Cotton Bath Towel",
        shortDesc: "Soft, absorbent, everyday cotton.",
        category: "bathroom",
        price: 450,
        oldPrice: 530,
        baseSku: "CBT-04",
        image: imagePath("p-towel.jpg"),
        gallery: [imagePath("p-towel.jpg")],
        colors: [
            { name: "Blush", hex: "#e9c8c2", skuSuffix: "BLS", inStock: true },
            { name: "Sky", hex: "#bdd6e6", skuSuffix: "SKY", inStock: true },
            { name: "Cream", hex: "#f4ede0", skuSuffix: "CRM", inStock: true },
            { name: "Sage", hex: "#a8b89c", skuSuffix: "GRN", inStock: true },
        ],
        sizes: ["70x140 cm", "80x160 cm"],
        description:
            "Premium ringspun cotton towel with high absorbency and a plush feel. Perfect for daily use.",
        features: ["100% ringspun cotton", "500 GSM weight", "Quick-drying", "Colorfast"],
        rating: 4.6,
        reviews: 78,
    },
    {
        slug: "waste-bin-with-lid",
        name: "Waste Bin with Lid",
        shortDesc: "Modern bin for any room.",
        category: "home-accessories",
        price: 850,
        baseSku: "WBL-05",
        image: imagePath("p-bin.jpg"),
        gallery: [imagePath("p-bin.jpg"), imagePath("p-storage-box.jpg")],
        colors: [
            { name: "Sage", hex: "#a8b89c", skuSuffix: "GRN", inStock: true },
            { name: "Cream", hex: "#f4ede0", skuSuffix: "CRM", inStock: true },
            { name: "Charcoal", hex: "#3a3a3a", skuSuffix: "CHR", inStock: true },
        ],
        description:
            "A 10L waste bin with a soft-close lid and modern silhouette. Hides odors and blends in beautifully.",
        features: ["10L capacity", "Soft-close lid", "Odor-resistant", "Easy-clean surface"],
        rating: 4.5,
        reviews: 54,
    },
    {
        slug: "led-desk-lamp",
        name: "LED Desk Lamp",
        shortDesc: "Adjustable lamp for focused work.",
        category: "lighting",
        price: 1250,
        oldPrice: 1500,
        baseSku: "LDL-06",
        image: imagePath("p-lamp.jpg"),
        gallery: [imagePath("p-lamp.jpg")],
        colors: [
            { name: "White", hex: "#f8f8f8", skuSuffix: "WHT", inStock: true },
            { name: "Black", hex: "#1f1f1f", skuSuffix: "BLK", inStock: true },
        ],
        description:
            "Slim aluminum desk lamp with three brightness levels and a touch-sensitive base. USB-powered.",
        features: ["3 brightness levels", "Touch-sensitive base", "USB powered", "Eye-care diffused light"],
        rating: 4.8,
        reviews: 132,
    },
    {
        slug: "storage-basket",
        name: "Woven Storage Basket",
        shortDesc: "Natural seagrass basket with handles.",
        category: "storage",
        price: 350,
        baseSku: "WSB-07",
        image: imagePath("p-basket.jpg"),
        gallery: [imagePath("p-basket.jpg")],
        colors: [{ name: "Natural", hex: "#d6c19a", skuSuffix: "NAT", inStock: true }],
        description:
            "Hand-woven seagrass basket with sturdy handles. Perfect for towels, toys or laundry.",
        features: ["Hand-woven seagrass", "Sturdy handles", "Lightweight", "Multi-purpose"],
        rating: 4.7,
        reviews: 41,
    },
    {
        slug: "glass-food-container",
        name: "Glass Food Container",
        shortDesc: "Borosilicate glass with bamboo lid.",
        category: "kitchen",
        price: 420,
        baseSku: "GFC-08",
        image: imagePath("p-glass.jpg"),
        gallery: [imagePath("p-glass.jpg")],
        colors: [{ name: "Clear", hex: "#e6f0f2", skuSuffix: "CLR", inStock: true }],
        description:
            "Heat-resistant borosilicate glass container with an airtight bamboo lid.",
        features: ["Borosilicate glass", "Airtight bamboo lid", "Microwave safe", "1L capacity"],
        rating: 4.9,
        reviews: 87,
    },
    {
        slug: "hanging-storage-bag",
        name: "Hanging Storage Bag",
        shortDesc: "Multi-pocket organizer for closets.",
        category: "storage",
        price: 290,
        baseSku: "HSB-09",
        image: imagePath("p-bag.jpg"),
        gallery: [imagePath("p-bag.jpg")],
        colors: [
            { name: "Beige", hex: "#e8dcc4", skuSuffix: "BGE", inStock: true },
            { name: "Grey", hex: "#bdbdbd", skuSuffix: "GRY", inStock: true },
        ],
        description:
            "Canvas hanging organizer with 6 deep pockets. Hangs from any standard rod.",
        features: ["6 deep pockets", "Durable canvas", "Universal hanger", "Foldable"],
        rating: 4.4,
        reviews: 33,
    },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);

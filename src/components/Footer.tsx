export function Footer() {
    return (
        <footer className="mt-20 border-t border-border bg-secondary/40">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
                <div>
                    <h3 className="text-lg font-bold text-primary">sadikommerce</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Smart essentials for every home. Fast delivery across Bangladesh.
                    </p>
                </div>
                <div>
                    <h4 className="mb-3 text-sm font-semibold">Shop</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>Kitchen</li>
                        <li>Storage</li>
                        <li>Bathroom</li>
                        <li>Decor</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 text-sm font-semibold">Help</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>Track Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 text-sm font-semibold">Newsletter</h4>
                    <p className="mb-2 text-sm text-muted-foreground">Get 10% off your first order.</p>
                    <div className="flex gap-2">
                        <input
                            className="h-9 flex-1 rounded-md border border-input bg-background px-3 text-sm"
                            placeholder="Email"
                        />
                        <button className="h-9 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground">
                            Join
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
                (c) 2026 sadikommerce. All rights reserved.
            </div>
        </footer>
    );
}

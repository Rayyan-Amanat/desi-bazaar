import Link from "next/link";

const featuredProducts = [
  {
    id: "ghee",
    name: "A2 Desi Cow Ghee",
    description: "Bilona method, village made",
    price: "₹1,250",
    slug: "/products/ghee-oils",
  },
  {
    id: "honey",
    name: "Raw Forest Honey",
    description: "Unprocessed & natural",
    price: "₹650",
    slug: "/products/honey",
  },
  {
    id: "birista",
    name: "Birista (Fried Onion)",
    description: "Perfect for biryani",
    price: "₹220",
    slug: "/products/birista",
  },
  {
    id: "pickle",
    name: "Homemade Mango Pickle",
    description: "Naturally preserved",
    price: "₹320",
    slug: "/products/pickles",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">Most Loved Desi Products</h2>

        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              {/* Image placeholder */}
              <div className="product-image">
                <span>Image</span>
              </div>

              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <Link href={product.slug} className="product-link">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-wrapper">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

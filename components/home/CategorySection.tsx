import Link from "next/link";

const categories = [
  {
    id: "ghee",
    title: "Ghee & Oils",
    subtitle: "Traditionally made",
    slug: "/products/ghee-oils",
  },
  {
    id: "honey",
    title: "Raw Honey",
    subtitle: "Unprocessed & pure",
    slug: "/products/honey",
  },
  {
    id: "birista",
    title: "Birista",
    subtitle: "Ready-to-use fried onions",
    slug: "/products/birista",
  },
  {
    id: "masale",
    title: "Masale",
    subtitle: "Stone-ground spices",
    slug: "/products/masale",
  },
  {
    id: "pickles",
    title: "Pickles",
    subtitle: "Naturally preserved",
    slug: "/products/pickles",
  },
];

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-title">Explore Desi Essentials</h2>

        <div className="category-grid">
          {categories.map((cat) => (
            <Link href={cat.slug} key={cat.id} className="category-card">
              <h3>{cat.title}</h3>
              <p>{cat.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

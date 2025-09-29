import dressBlack from "@/assets/dress-black.jpg";
import handbagBrown from "@/assets/handbag-brown.jpg";
import sneakersWhite from "@/assets/sneakers-white.jpg";
import jewelryRoseGold from "@/assets/jewelry-rosegold.jpg";

const products = [
  {
    id: 1,
    name: "Elegant Black Dress",
    price: "$199",
    description: "Sophisticated evening dress perfect for special occasions",
    image: dressBlack,
  },
  {
    id: 2,
    name: "Designer Leather Handbag",
    price: "$299",
    description: "Premium leather handbag with timeless design",
    image: handbagBrown,
  },
  {
    id: 3,
    name: "Classic White Sneakers",
    price: "$129", 
    description: "Comfortable designer sneakers for everyday wear",
    image: sneakersWhite,
  },
  {
    id: 4,
    name: "Rose Gold Jewelry Set",
    price: "$179",
    description: "Elegant necklace and earrings in rose gold finish",
    image: jewelryRoseGold,
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our curated collection of premium fashion items designed to elevate your style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 font-heading">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <button className="btn-accent text-sm px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
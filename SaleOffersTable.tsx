const saleOffers = [
  {
    itemName: "Summer Collection Dresses",
    discount: "30%",
    validFrom: "2025-01-01",
    validTo: "2025-01-31",
  },
  {
    itemName: "Designer Handbags",
    discount: "25%",
    validFrom: "2025-01-15",
    validTo: "2025-02-15",
  },
  {
    itemName: "Footwear Collection",
    discount: "20%",
    validFrom: "2025-01-10",
    validTo: "2025-02-10",
  },
  {
    itemName: "Jewelry & Accessories",
    discount: "35%",
    validFrom: "2025-01-05",
    validTo: "2025-01-25",
  },
  {
    itemName: "Winter Coats",
    discount: "40%",
    validFrom: "2025-01-20",
    validTo: "2025-02-28",
  },
];

const SaleOffersTable = () => {
  return (
    <section id="offers" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">Upcoming Sale Offers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't miss out on these amazing deals coming your way
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <table className="sale-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Discount</th>
                <th>Valid From</th>
                <th>Valid To</th>
              </tr>
            </thead>
            <tbody>
              {saleOffers.map((offer, index) => (
                <tr key={index}>
                  <td className="font-medium">{offer.itemName}</td>
                  <td>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent-foreground">
                      {offer.discount} OFF
                    </span>
                  </td>
                  <td className="text-muted-foreground">{offer.validFrom}</td>
                  <td className="text-muted-foreground">{offer.validTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SaleOffersTable;
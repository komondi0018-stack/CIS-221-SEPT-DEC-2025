const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-heading mb-4">Fashion Store</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your premier destination for luxury fashion. Discover timeless pieces that elevate your wardrobe.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#products" className="text-primary-foreground/80 hover:text-accent transition-colors">Products</a></li>
              <li><a href="#offers" className="text-primary-foreground/80 hover:text-accent transition-colors">Offers</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📧 info@fashionstore.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Fashion Ave, Style City</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-accent transition-colors">Facebook</a>
                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/80">© 2025 Fashion Store. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold font-heading">Fashion Store</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="hover:text-accent transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a 
              href="#products" 
              className="hover:text-accent transition-colors duration-300 font-medium"
            >
              Products
            </a>
            <a 
              href="#offers" 
              className="hover:text-accent transition-colors duration-300 font-medium"
            >
              Offers
            </a>
            <a 
              href="#contact" 
              className="hover:text-accent transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>

          <Button className="btn-accent md:inline-flex">
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
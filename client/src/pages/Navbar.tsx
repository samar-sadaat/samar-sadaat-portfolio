import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Name */}
        <h1
          className="text-2xl font-bold text-primary cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
        >
          Samar Sadaat
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg font-medium text-foreground/80">
          <li className="cursor-pointer hover:text-primary" onClick={() => handleScroll('#about')}>About</li>
          <li className="cursor-pointer hover:text-primary" onClick={() => handleScroll('#projects')}>Projects</li>
          <li className="cursor-pointer hover:text-primary" onClick={() => handleScroll('#contact')}>Contact</li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium text-foreground/80">
            <li className="cursor-pointer hover:text-primary" onClick={() => handleScroll('#about')}>About</li>
            <li className="cursor-pointer hover:text-primary" onClick={() => handleScroll('#projects')}>Projects</li>
            <li className="cursor-pointer hover:text-primary" onClick={() => handleScroll('#contact')}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

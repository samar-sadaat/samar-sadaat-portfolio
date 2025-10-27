import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // for detecting outside clicks

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // closes on link click
    }
  };

  // 👇 Close mobile menu on page scroll
  useEffect(() => {
    const handlePageScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handlePageScroll);
    return () => window.removeEventListener("scroll", handlePageScroll);
  }, [isOpen]);

  // 👇 Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
    >
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

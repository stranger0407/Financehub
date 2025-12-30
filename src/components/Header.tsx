import { Search, TrendingUp, Bell, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-primary animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold tracking-tight">
                  Fin<span className="text-gradient">Pulse</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-1">
                  Financial News
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Markets
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Economy
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Stocks
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Crypto
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Personal Finance
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="hidden sm:block">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2 animate-slide-in-right">
                  <Input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 bg-secondary/50 border-border/50 focus:border-primary"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                      onSearch('');
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:bg-secondary"
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
            </Button>

            <Button variant="default" size="sm" className="hidden sm:flex bg-primary hover:bg-primary/90">
              Subscribe
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40 animate-fade-in">
            <div className="flex flex-col gap-2">
              <a href="#" className="px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg">
                Markets
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">
                Economy
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">
                Stocks
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">
                Crypto
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">
                Personal Finance
              </a>
              <div className="px-4 py-2">
                <Input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    onSearch(e.target.value);
                  }}
                  className="bg-secondary/50 border-border/50"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

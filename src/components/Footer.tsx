import { TrendingUp, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-7 w-7 text-primary" />
              <span className="text-xl font-heading font-bold">
                Fin<span className="text-gradient">Pulse</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted source for comprehensive financial news from India's leading publications.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Markets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Economy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Stocks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cryptocurrency</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Personal Finance</a></li>
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h4 className="font-semibold mb-4">Our Sources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Financial Express</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LiveMint</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business Today</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Economic Times</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Moneycontrol</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Advertise</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 FinPulse. All rights reserved.</p>
            <p>Aggregating news from India's top financial publications.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

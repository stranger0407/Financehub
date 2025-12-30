import { useState } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Article, marketData } from '@/data/newsData';
import { Button } from '@/components/ui/button';
import { validateHexColor, isValidEmail } from '@/lib/security';
import { toast } from '@/hooks/use-toast';

interface TrendingSidebarProps {
  trendingArticles: Article[];
  onArticleClick: (article: Article) => void;
}

const TrendingSidebar = ({ trendingArticles, onArticleClick }: TrendingSidebarProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: 'Email required',
        description: 'Please enter your email address.',
        variant: 'destructive',
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate subscription (replace with actual API call when backend is ready)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: 'Subscribed!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    } catch {
      toast({
        title: 'Subscription failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Guard against empty market data
  const safeMarketData = marketData?.length > 0 ? marketData.slice(0, 6) : [];
  const safeTrendingArticles = trendingArticles?.length > 0 ? trendingArticles.slice(0, 5) : [];

  return (
    <aside className="space-y-6">
      {/* Market Overview */}
      <div className="rounded-xl bg-card border border-border/50 p-5">
        <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Market Overview
        </h3>

        {safeMarketData.length > 0 ? (
          <div className="space-y-3">
            {safeMarketData.map((item) => (
              <div
                key={item.symbol}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div>
                  <p className="font-medium text-sm">{item.symbol}</p>
                  <p className="text-xs text-muted-foreground">{item.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">{item.price}</p>
                  <p
                    className={`text-xs font-medium ${
                      item.isPositive ? 'market-up' : 'market-down'
                    }`}
                  >
                    {item.change} ({item.changePercent})
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">
            Market data unavailable
          </p>
        )}

        <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/10">
          View All Markets
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Trending Articles */}
      <div className="rounded-xl bg-card border border-border/50 p-5">
        <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Trending Now
        </h3>

        {safeTrendingArticles.length > 0 ? (
          <div className="space-y-4">
            {safeTrendingArticles.map((article, index) => {
              const safeColor = validateHexColor(article.sourceColor);
              return (
                <div
                  key={article.id}
                  className="group cursor-pointer flex gap-3"
                  onClick={() => onArticleClick(article)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onArticleClick(article);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary font-heading font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-[10px] font-medium"
                        style={{ color: safeColor }}
                      >
                        {article.source}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {article.publishedAt}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">
            No trending articles
          </p>
        )}
      </div>

      {/* Newsletter */}
      <div className="rounded-xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 p-5">
        <h3 className="font-heading text-lg font-semibold mb-2">
          Stay Informed
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get daily market insights and breaking news delivered to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={254}
            className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm focus:outline-none focus:border-primary transition-colors"
            aria-label="Email address for newsletter subscription"
          />
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
          </Button>
        </form>
      </div>
    </aside>
  );
};

export default TrendingSidebar;

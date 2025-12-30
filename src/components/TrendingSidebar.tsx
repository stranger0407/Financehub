import { TrendingUp, ArrowRight } from 'lucide-react';
import { Article, marketData } from '@/data/newsData';
import { Button } from '@/components/ui/button';

interface TrendingSidebarProps {
  trendingArticles: Article[];
}

const TrendingSidebar = ({ trendingArticles }: TrendingSidebarProps) => {
  return (
    <aside className="space-y-6">
      {/* Market Overview */}
      <div className="rounded-xl bg-card border border-border/50 p-5">
        <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Market Overview
        </h3>

        <div className="space-y-3">
          {marketData.slice(0, 6).map((item) => (
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

        <div className="space-y-4">
          {trendingArticles.slice(0, 5).map((article, index) => (
            <div
              key={article.id}
              className="group cursor-pointer flex gap-3"
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
                    style={{ color: article.sourceColor }}
                  >
                    {article.source}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {article.publishedAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 p-5">
        <h3 className="font-heading text-lg font-semibold mb-2">
          Stay Informed
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get daily market insights and breaking news delivered to your inbox.
        </p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm focus:outline-none focus:border-primary transition-colors"
          />
          <Button className="w-full bg-primary hover:bg-primary/90">
            Subscribe Free
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default TrendingSidebar;

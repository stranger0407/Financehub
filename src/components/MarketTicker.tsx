import { TrendingUp, TrendingDown } from 'lucide-react';
import { marketData } from '@/data/newsData';

const MarketTicker = () => {
  // Guard against empty or undefined market data
  if (!marketData || marketData.length === 0) {
    return null;
  }

  // Duplicate for seamless loop
  const duplicatedData = [...marketData, ...marketData];

  return (
    <div className="relative overflow-hidden border-b border-border/40 bg-secondary/30">
      <div className="flex items-center py-2">
        <div className="flex-shrink-0 px-4 border-r border-border/40">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Live Markets
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker-scroll flex gap-8 whitespace-nowrap">
            {duplicatedData.map((item, index) => (
              <div
                key={`${item.symbol}-${index}`}
                className="flex items-center gap-2 px-4"
              >
                <span className="font-semibold text-sm">{item.symbol}</span>
                <span className="text-sm text-foreground">{item.price}</span>
                <span
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    item.isPositive ? 'market-up' : 'market-down'
                  }`}
                >
                  {item.isPositive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {item.changePercent}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;

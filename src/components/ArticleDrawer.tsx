import { Clock, User, Share2, Bookmark, TrendingUp, X } from 'lucide-react';
import { Article } from '@/data/newsData';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { validateHexColor, handleImageError } from '@/lib/security';

interface ArticleDrawerProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleDrawer = ({ article, isOpen, onClose }: ArticleDrawerProps) => {
  if (!article) return null;

  const safeColor = validateHexColor(article.sourceColor);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-2xl lg:max-w-3xl p-0 overflow-hidden"
      >
        <ScrollArea className="h-full">
          <div className="relative">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80">
              <img
                src={article.imageUrl}
                alt={article.title}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Close Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background rounded-full z-10"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Badges */}
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                {article.isBreaking && (
                  <span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold uppercase animate-pulse">
                    Breaking
                  </span>
                )}
                {article.isTrending && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: `${safeColor}20`, color: safeColor }}
                  >
                    {article.source}
                  </span>
                  <span className="text-sm text-muted-foreground">{article.category}</span>
                </div>

                <SheetTitle className="font-heading text-2xl sm:text-3xl font-bold leading-tight text-left">
                  {article.title}
                </SheetTitle>
              </SheetHeader>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.publishedAt}
                </span>
                <span>{article.readTime}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <p>
                  This article from {article.source} covers the latest developments in the {article.category.toLowerCase()} sector. 
                  Our team of analysts has been tracking this story closely to bring you the most accurate and up-to-date information.
                </p>
                
                <h2>Key Highlights</h2>
                <ul>
                  <li>Market analysts are closely watching the developments in this sector</li>
                  <li>Experts predict significant changes in the coming quarters</li>
                  <li>Investors are advised to stay informed about these trends</li>
                  <li>The impact on related industries could be substantial</li>
                </ul>
                
                <p>
                  For more detailed analysis and expert opinions, continue following FinPulse for the latest updates 
                  from {article.source} and other trusted financial news sources.
                </p>

                <blockquote>
                  "This development marks a significant milestone in the {article.category.toLowerCase()} landscape," 
                  said industry experts familiar with the matter.
                </blockquote>

                <h2>What This Means for Investors</h2>
                <p>
                  The implications of this news extend beyond immediate market reactions. Long-term investors 
                  should consider how these developments align with their portfolio strategies and risk tolerance levels.
                </p>

                <p>
                  As always, we recommend consulting with financial advisors before making any investment decisions 
                  based on current market news.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default ArticleDrawer;

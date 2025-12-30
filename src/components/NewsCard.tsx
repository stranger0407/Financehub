import { TrendingUp, Clock, User } from 'lucide-react';
import { Article } from '@/data/newsData';
import { validateHexColor, handleImageError } from '@/lib/security';

interface NewsCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  onArticleClick: (article: Article) => void;
}

const NewsCard = ({ article, variant = 'default', onArticleClick }: NewsCardProps) => {
  const safeColor = validateHexColor(article.sourceColor);

  const handleClick = () => {
    onArticleClick(article);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  if (variant === 'featured') {
    return (
      <article 
        className="news-card group cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Read article: ${article.title}`}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {article.isTrending && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
              <TrendingUp className="h-3 w-3" />
              Trending
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="source-badge"
              style={{ backgroundColor: `${safeColor}15`, color: safeColor }}
            >
              {article.source}
            </span>
            <span className="text-xs text-muted-foreground">{article.category}</span>
          </div>

          <h3 className="font-heading text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article 
        className="news-card group cursor-pointer flex gap-4 p-4"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Read article: ${article.title}`}
      >
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="source-badge text-[10px]"
              style={{ backgroundColor: `${safeColor}15`, color: safeColor }}
            >
              {article.source}
            </span>
            <span className="text-[10px] text-muted-foreground">{article.publishedAt}</span>
          </div>

          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
        </div>
      </article>
    );
  }

  return (
    <article 
      className="news-card group cursor-pointer"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Read article: ${article.title}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          onError={handleImageError}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        
        {article.isTrending && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/90 text-primary-foreground text-[10px] font-medium">
            <TrendingUp className="h-2.5 w-2.5" />
            Trending
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="source-badge text-[10px]"
            style={{ backgroundColor: `${safeColor}15`, color: safeColor }}
          >
            {article.source}
          </span>
          <span className="text-[10px] text-muted-foreground">{article.category}</span>
        </div>

        <h3 className="font-heading text-base font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span>{article.author}</span>
          <span>{article.publishedAt}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

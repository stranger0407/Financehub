import { Zap } from 'lucide-react';
import { Article } from '@/data/newsData';

interface BreakingNewsProps {
  article: Article;
}

const BreakingNews = ({ article }: BreakingNewsProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-destructive/30 bg-gradient-to-r from-destructive/10 via-card to-card">
      <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-transparent" />
      <div className="relative flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:bg-gradient-to-r" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="breaking-badge flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Zap className="h-3 w-3" />
              Breaking News
            </span>
            <span
              className="source-badge"
              style={{ backgroundColor: `${article.sourceColor}20`, color: article.sourceColor }}
            >
              {article.source}
            </span>
          </div>

          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4 leading-tight">
            {article.title}
          </h2>

          <p className="text-muted-foreground mb-6 line-clamp-2 lg:line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;

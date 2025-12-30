import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2, Bookmark, TrendingUp } from 'lucide-react';
import { articles } from '@/data/newsData';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { validateHexColor, handleImageError } from '@/lib/security';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header onSearch={() => {}} />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const safeColor = validateHexColor(article.sourceColor);

  // Get related articles from the same category
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => navigate('/')} />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {article.isBreaking && (
                <span className="px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-semibold uppercase">
                  Breaking
                </span>
              )}
              {article.isTrending && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                  <TrendingUp className="h-3 w-3" />
                  Trending
                </span>
              )}
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: `${safeColor}20`, color: safeColor }}
              >
                {article.source}
              </span>
              <span className="text-sm text-muted-foreground">{article.category}</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
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
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              onError={handleImageError}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {article.excerpt}
            </p>
            
            {/* Placeholder content since we don't have full article content */}
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

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="border-t border-border pt-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => {
                  const relatedColor = validateHexColor(related.sourceColor);
                  return (
                    <article
                      key={related.id}
                      onClick={() => navigate(`/article/${related.id}`)}
                      className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={related.imageUrl}
                          alt={related.title}
                          onError={handleImageError}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span
                          className="text-xs font-medium"
                          style={{ color: relatedColor }}
                        >
                          {related.source}
                        </span>
                        <h3 className="font-medium mt-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;

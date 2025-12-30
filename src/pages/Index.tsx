import { useState, useMemo, useCallback } from 'react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import CategoryTabs from '@/components/CategoryTabs';
import BreakingNews from '@/components/BreakingNews';
import NewsCard from '@/components/NewsCard';
import TrendingSidebar from '@/components/TrendingSidebar';
import Footer from '@/components/Footer';
import ArticleDrawer from '@/components/ArticleDrawer';
import { articles, categories, Article } from '@/data/newsData';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Guard against empty articles array
  const safeArticles = articles ?? [];

  const breakingArticle = safeArticles.find((a) => a.isBreaking);
  const trendingArticles = safeArticles.filter((a) => a.isTrending);

  const filteredArticles = useMemo(() => {
    let filtered = safeArticles.filter((a) => !a.isBreaking);

    // Validate that activeCategory is a valid category
    const isValidCategory = categories.includes(activeCategory);
    
    if (isValidCategory && activeCategory !== 'All') {
      filtered = filtered.filter((a) => a.category === activeCategory);
    }

    if (searchQuery) {
      // Sanitize and prepare search query
      const query = searchQuery.toLowerCase().trim();
      
      // Skip search if query is too short
      if (query.length >= 2) {
        filtered = filtered.filter(
          (a) =>
            a.title?.toLowerCase().includes(query) ||
            a.excerpt?.toLowerCase().includes(query) ||
            a.source?.toLowerCase().includes(query) ||
            a.category?.toLowerCase().includes(query)
        );
      }
    }

    return filtered;
  }, [activeCategory, searchQuery, safeArticles]);

  const featuredArticles = filteredArticles.slice(0, 2);
  const regularArticles = filteredArticles.slice(2);

  // Memoized search handler to prevent unnecessary re-renders
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Handle category change with validation
  const handleCategoryChange = useCallback((category: string) => {
    if (categories.includes(category)) {
      setActiveCategory(category);
    } else {
      // Fallback to 'All' for invalid categories
      setActiveCategory('All');
    }
  }, []);

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setActiveCategory('All');
    setSearchQuery('');
  }, []);

  // Handle article click - open drawer with selected article
  const handleArticleClick = useCallback((article: Article) => {
    setSelectedArticle(article);
    setIsDrawerOpen(true);
  }, []);

  // Handle drawer close
  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
    // Delay clearing article to allow animation to complete
    setTimeout(() => setSelectedArticle(null), 300);
  }, []);

  // Safe display of search query (React handles escaping, but explicit for clarity)
  const displaySearchQuery = searchQuery.slice(0, 50);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      <title>FinPulse - Financial News Aggregator | Markets, Economy, Stocks & Crypto</title>
      <meta
        name="description"
        content="Stay updated with the latest financial news from Financial Express, LiveMint, Business Today, Economic Times and more. Real-time market data, stock analysis, and crypto updates."
      />

      <Header onSearch={handleSearch} />
      <MarketTicker />
      <CategoryTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <main className="container mx-auto px-4 py-8">
        {/* Breaking News */}
        {breakingArticle && activeCategory === 'All' && !searchQuery && (
          <section className="mb-10 animate-fade-in" aria-label="Breaking news">
            <BreakingNews article={breakingArticle} onArticleClick={handleArticleClick} />
          </section>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
              <section className="mb-8" aria-label="Featured articles">
                <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="h-8 w-1 bg-primary rounded-full" aria-hidden="true" />
                  {activeCategory === 'All' ? 'Top Stories' : activeCategory}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArticles.map((article, index) => (
                    <div
                      key={article.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <NewsCard 
                        article={article} 
                        variant="featured" 
                        onArticleClick={handleArticleClick}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* All Articles Grid */}
            {regularArticles.length > 0 && (
              <section aria-label="Latest news articles">
                <h2 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="h-6 w-1 bg-primary/60 rounded-full" aria-hidden="true" />
                  Latest News
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {regularArticles.map((article, index) => (
                    <div
                      key={article.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${(index + 2) * 50}ms` }}
                    >
                      <NewsCard 
                        article={article} 
                        onArticleClick={handleArticleClick}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16" role="status" aria-live="polite">
                <p className="text-muted-foreground text-lg">
                  No articles found for "{displaySearchQuery || activeCategory}"
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                  type="button"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <TrendingSidebar 
              trendingArticles={trendingArticles.length > 0 ? trendingArticles : safeArticles.slice(0, 5)} 
              onArticleClick={handleArticleClick}
            />
          </aside>
        </div>
      </main>

      <Footer />

      {/* Article Drawer */}
      <ArticleDrawer 
        article={selectedArticle}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </div>
  );
};

export default Index;

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import CategoryTabs from '@/components/CategoryTabs';
import BreakingNews from '@/components/BreakingNews';
import NewsCard from '@/components/NewsCard';
import TrendingSidebar from '@/components/TrendingSidebar';
import Footer from '@/components/Footer';
import { articles } from '@/data/newsData';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const breakingArticle = articles.find((a) => a.isBreaking);
  const trendingArticles = articles.filter((a) => a.isTrending);

  const filteredArticles = useMemo(() => {
    let filtered = articles.filter((a) => !a.isBreaking);

    if (activeCategory !== 'All') {
      filtered = filtered.filter((a) => a.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.source.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const featuredArticles = filteredArticles.slice(0, 2);
  const regularArticles = filteredArticles.slice(2);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      <title>FinPulse - Financial News Aggregator | Markets, Economy, Stocks & Crypto</title>
      <meta
        name="description"
        content="Stay updated with the latest financial news from Financial Express, LiveMint, Business Today, Economic Times and more. Real-time market data, stock analysis, and crypto updates."
      />

      <Header onSearch={setSearchQuery} />
      <MarketTicker />
      <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="container mx-auto px-4 py-8">
        {/* Breaking News */}
        {breakingArticle && activeCategory === 'All' && !searchQuery && (
          <section className="mb-10 animate-fade-in">
            <BreakingNews article={breakingArticle} />
          </section>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="h-8 w-1 bg-primary rounded-full" />
                  {activeCategory === 'All' ? 'Top Stories' : activeCategory}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArticles.map((article, index) => (
                    <div
                      key={article.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <NewsCard article={article} variant="featured" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* All Articles Grid */}
            {regularArticles.length > 0 && (
              <section>
                <h2 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="h-6 w-1 bg-primary/60 rounded-full" />
                  Latest News
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {regularArticles.map((article, index) => (
                    <div
                      key={article.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${(index + 2) * 50}ms` }}
                    >
                      <NewsCard article={article} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No articles found for "{searchQuery || activeCategory}"
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <TrendingSidebar trendingArticles={trendingArticles.length > 0 ? trendingArticles : articles.slice(0, 5)} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

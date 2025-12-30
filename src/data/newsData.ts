export interface Article {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  sourceColor: string;
  category: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  readTime: string;
  isBreaking?: boolean;
  isTrending?: boolean;
}

export interface MarketData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

export const sources = {
  'Financial Express': { color: '#FF6B35', shortName: 'FE' },
  'LiveMint': { color: '#00D4AA', shortName: 'LM' },
  'Business Today': { color: '#FF4757', shortName: 'BT' },
  'Economic Times': { color: '#2196F3', shortName: 'ET' },
  'Moneycontrol': { color: '#8B5CF6', shortName: 'MC' },
  'Bloomberg Quint': { color: '#F59E0B', shortName: 'BQ' },
  'Business Standard': { color: '#EC4899', shortName: 'BS' },
  'CNBC TV18': { color: '#10B981', shortName: 'CN' },
};

export const categories = [
  'All',
  'Markets',
  'Economy',
  'Stocks',
  'Crypto',
  'Personal Finance',
  'Industry',
  'Global',
  'Opinion',
];

export const marketData: MarketData[] = [
  { symbol: 'SENSEX', name: 'S&P BSE Sensex', price: '72,568.45', change: '+342.18', changePercent: '+0.47%', isPositive: true },
  { symbol: 'NIFTY', name: 'Nifty 50', price: '22,055.70', change: '+98.35', changePercent: '+0.45%', isPositive: true },
  { symbol: 'BANKNIFTY', name: 'Bank Nifty', price: '47,234.80', change: '-156.20', changePercent: '-0.33%', isPositive: false },
  { symbol: 'USDINR', name: 'USD/INR', price: '83.42', change: '+0.12', changePercent: '+0.14%', isPositive: true },
  { symbol: 'GOLD', name: 'Gold (MCX)', price: '62,450', change: '+285', changePercent: '+0.46%', isPositive: true },
  { symbol: 'CRUDE', name: 'Crude Oil', price: '5,842', change: '-47', changePercent: '-0.80%', isPositive: false },
  { symbol: 'BTC', name: 'Bitcoin', price: '$94,250', change: '+$1,230', changePercent: '+1.32%', isPositive: true },
  { symbol: 'ETH', name: 'Ethereum', price: '$3,456', change: '+$89', changePercent: '+2.64%', isPositive: true },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'RBI Holds Interest Rates Steady Amid Global Economic Uncertainty',
    excerpt: 'The Reserve Bank of India maintained its key lending rate at 6.5% for the tenth consecutive meeting, citing persistent inflation concerns while supporting economic growth.',
    source: 'Financial Express',
    sourceColor: sources['Financial Express'].color,
    category: 'Economy',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    author: 'Priya Sharma',
    publishedAt: '2 hours ago',
    readTime: '4 min read',
    isBreaking: true,
  },
  {
    id: '2',
    title: 'Sensex Surges 500 Points as IT Stocks Rally on Strong Q3 Earnings',
    excerpt: 'Indian equity benchmarks posted strong gains led by information technology heavyweights after major IT firms reported better-than-expected quarterly results.',
    source: 'LiveMint',
    sourceColor: sources['LiveMint'].color,
    category: 'Markets',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    author: 'Rahul Verma',
    publishedAt: '3 hours ago',
    readTime: '3 min read',
    isTrending: true,
  },
  {
    id: '3',
    title: 'Reliance Industries to Invest ₹75,000 Crore in Green Energy Projects',
    excerpt: 'Reliance Industries announced massive investments in renewable energy infrastructure, including solar manufacturing and hydrogen production facilities.',
    source: 'Business Today',
    sourceColor: sources['Business Today'].color,
    category: 'Industry',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800',
    author: 'Amit Kumar',
    publishedAt: '4 hours ago',
    readTime: '5 min read',
  },
  {
    id: '4',
    title: 'Bitcoin Breaks $95,000 Barrier as Institutional Adoption Accelerates',
    excerpt: 'Cryptocurrency markets witnessed a significant rally as Bitcoin crossed the $95,000 mark following news of increased institutional investment and favorable regulatory developments.',
    source: 'Economic Times',
    sourceColor: sources['Economic Times'].color,
    category: 'Crypto',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800',
    author: 'Sneha Gupta',
    publishedAt: '5 hours ago',
    readTime: '4 min read',
    isTrending: true,
  },
  {
    id: '5',
    title: 'HDFC Bank Reports 20% Jump in Net Profit for December Quarter',
    excerpt: 'India\'s largest private sector lender posted robust growth in net profit, driven by strong loan growth and improved asset quality metrics.',
    source: 'Moneycontrol',
    sourceColor: sources['Moneycontrol'].color,
    category: 'Stocks',
    imageUrl: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800',
    author: 'Vikram Singh',
    publishedAt: '6 hours ago',
    readTime: '3 min read',
  },
  {
    id: '6',
    title: 'Government Unveils New PLI Scheme for Electric Vehicle Components',
    excerpt: 'The Union Cabinet approved a production-linked incentive scheme worth ₹25,000 crore to boost domestic manufacturing of EV batteries and components.',
    source: 'Bloomberg Quint',
    sourceColor: sources['Bloomberg Quint'].color,
    category: 'Economy',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
    author: 'Neha Patel',
    publishedAt: '7 hours ago',
    readTime: '4 min read',
  },
  {
    id: '7',
    title: 'Mutual Fund Industry Crosses ₹60 Lakh Crore AUM Milestone',
    excerpt: 'The Indian mutual fund industry achieved a historic milestone, with assets under management crossing ₹60 lakh crore driven by strong retail participation.',
    source: 'Business Standard',
    sourceColor: sources['Business Standard'].color,
    category: 'Personal Finance',
    imageUrl: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800',
    author: 'Arjun Reddy',
    publishedAt: '8 hours ago',
    readTime: '3 min read',
  },
  {
    id: '8',
    title: 'US Fed Signals Potential Rate Cuts in 2025: Impact on Indian Markets',
    excerpt: 'The Federal Reserve\'s dovish stance on interest rates could boost foreign investment flows into emerging markets including India.',
    source: 'CNBC TV18',
    sourceColor: sources['CNBC TV18'].color,
    category: 'Global',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    author: 'Karan Mehta',
    publishedAt: '9 hours ago',
    readTime: '5 min read',
  },
  {
    id: '9',
    title: 'Tata Motors EV Sales Double in December, Market Share Expands',
    excerpt: 'Tata Motors reported a 100% year-on-year growth in electric vehicle sales, consolidating its position as the market leader in India\'s EV segment.',
    source: 'Financial Express',
    sourceColor: sources['Financial Express'].color,
    category: 'Industry',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    author: 'Rohan Das',
    publishedAt: '10 hours ago',
    readTime: '4 min read',
  },
  {
    id: '10',
    title: 'IPO Market Set for Record Year: 50+ Companies Line Up for 2025',
    excerpt: 'India\'s primary market is poised for another blockbuster year with over 50 companies planning to raise more than ₹1 lakh crore through initial public offerings.',
    source: 'LiveMint',
    sourceColor: sources['LiveMint'].color,
    category: 'Markets',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800',
    author: 'Sanjay Joshi',
    publishedAt: '11 hours ago',
    readTime: '6 min read',
  },
  {
    id: '11',
    title: 'Oil Prices Surge on Middle East Tensions: What It Means for India',
    excerpt: 'Rising crude oil prices due to geopolitical tensions could impact India\'s trade deficit and inflation trajectory in the coming months.',
    source: 'Economic Times',
    sourceColor: sources['Economic Times'].color,
    category: 'Global',
    imageUrl: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800',
    author: 'Meera Iyer',
    publishedAt: '12 hours ago',
    readTime: '4 min read',
  },
  {
    id: '12',
    title: 'Crypto Tax Rules: New Guidelines for Virtual Digital Assets',
    excerpt: 'The CBDT issued clarifications on taxation of cryptocurrency transactions, providing relief on certain transfer scenarios.',
    source: 'Business Today',
    sourceColor: sources['Business Today'].color,
    category: 'Crypto',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
    author: 'Ananya Bhatt',
    publishedAt: '13 hours ago',
    readTime: '5 min read',
  },
];

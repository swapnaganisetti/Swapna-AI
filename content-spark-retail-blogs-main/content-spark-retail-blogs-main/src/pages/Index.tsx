
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { getPublishedBlogPosts } from '@/services/blogService';
import { BlogPost } from '@/types/BlogTypes';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import BlogList from '@/components/blog/BlogList';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const publishedBlogs = await getPublishedBlogPosts();
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);
  
  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const recentBlogs = blogs.slice(1, 4);
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Swapna<span className="text-brand-blue">AI</span></h1>
          <p className="text-lg text-gray-600 mb-8">
            AI-powered content creation platform for retail blogs. Discover trends, insights, and strategies to elevate your retail business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/blogs">Browse Articles</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/create">Create Content</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Blog */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
          </div>
        ) : featuredBlog ? (
          <FeaturedBlog blog={featuredBlog} />
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-600">No featured articles yet</h3>
            <p className="text-gray-500 mt-2 mb-6">Check back soon for new content!</p>
            <Button asChild>
              <Link to="/create">Create Your First Blog</Link>
            </Button>
          </div>
        )}
      </section>
      
      {/* Recent Blog Posts */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recent Articles</h2>
          <Button asChild variant="ghost">
            <Link to="/blogs">View All</Link>
          </Button>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
          </div>
        ) : recentBlogs.length > 0 ? (
          <BlogList blogs={recentBlogs} />
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No recent articles yet</p>
          </div>
        )}
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-blue text-white rounded-lg p-8 md:p-12 mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to create amazing content?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Generate SEO-optimized blog posts for your retail business with our AI-powered platform.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link to="/create">Start Creating</Link>
        </Button>
      </section>
    </MainLayout>
  );
};

export default Index;

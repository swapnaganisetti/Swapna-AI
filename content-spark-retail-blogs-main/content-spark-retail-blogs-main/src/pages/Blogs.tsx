
import { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { getPublishedBlogPosts } from '@/services/blogService';
import { BlogPost } from '@/types/BlogTypes';
import BlogList from '@/components/blog/BlogList';
import { Input } from '@/components/ui/input';
import { Loader2, Search } from 'lucide-react';

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const publishedBlogs = await getPublishedBlogPosts();
        setBlogs(publishedBlogs);
        setFilteredBlogs(publishedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredBlogs(blogs);
      return;
    }
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        blog.summary.toLowerCase().includes(lowerCaseSearchTerm) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))
    );
    
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);
  
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Articles</h1>
          <p className="text-gray-600">
            Explore our collection of retail industry insights, trends, and strategies
          </p>
        </div>
        
        <div className="mb-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search articles by title, summary or tags..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
          </div>
        ) : filteredBlogs.length > 0 ? (
          <BlogList blogs={filteredBlogs} />
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-600">No articles found</h3>
            <p className="text-gray-500 mt-2">
              {searchTerm ? 'Try a different search term' : 'Check back soon for new content!'}
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Blogs;

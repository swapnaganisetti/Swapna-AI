
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import MainLayout from '@/components/layout/MainLayout';
import { getBlogPostById } from '@/services/blogService';
import { BlogPost } from '@/types/BlogTypes';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Loader2 } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const blogData = await getBlogPostById(id);
        
        if (!blogData) {
          setError('Blog post not found');
          return;
        }
        
        setBlog(blogData);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
  }, [id]);
  
  if (loading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
        </div>
      </MainLayout>
    );
  }
  
  if (error || !blog) {
    return (
      <MainLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error || 'Something went wrong'}</p>
          <Button asChild>
            <Link to="/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/blogs">
            <ArrowLeft size={18} className="mr-2" />
            Back to Blogs
          </Link>
        </Button>
        
        {/* Blog Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          
          <p className="text-lg text-gray-600 mb-6">{blog.summary}</p>
          
          <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{format(new Date(blog.createdAt), 'MMMM d, yyyy')}</span>
            </div>
          </div>
        </header>
        
        <Separator className="my-8" />
        
        {/* Blog Content */}
        <article className="prose max-w-none blog-content">
          <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br>')}} />
        </article>
      </div>
    </MainLayout>
  );
};

export default BlogDetail;


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { getAllBlogPosts } from '@/services/blogService';
import { BlogPost } from '@/types/BlogTypes';
import BlogTable from '@/components/dashboard/BlogTable';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Plus } from 'lucide-react';

const Dashboard = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const allBlogs = await getAllBlogPosts();
      setBlogs(allBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchBlogs();
  }, []);
  
  const publishedBlogs = blogs.filter((blog) => blog.published);
  const draftBlogs = blogs.filter((blog) => !blog.published);
  
  const displayBlogs = activeTab === 'all' 
    ? blogs 
    : activeTab === 'published'
    ? publishedBlogs
    : draftBlogs;
  
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Content Dashboard</h1>
          <Button asChild>
            <Link to="/create">
              <Plus size={18} className="mr-2" />
              New Blog Post
            </Link>
          </Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">
              All Posts <span className="ml-1 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{blogs.length}</span>
            </TabsTrigger>
            <TabsTrigger value="published">
              Published <span className="ml-1 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{publishedBlogs.length}</span>
            </TabsTrigger>
            <TabsTrigger value="drafts">
              Drafts <span className="ml-1 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{draftBlogs.length}</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {loading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
              </div>
            ) : (
              <BlogTable blogs={blogs} onBlogUpdate={fetchBlogs} />
            )}
          </TabsContent>
          <TabsContent value="published">
            {loading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
              </div>
            ) : (
              <BlogTable blogs={publishedBlogs} onBlogUpdate={fetchBlogs} />
            )}
          </TabsContent>
          <TabsContent value="drafts">
            {loading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
              </div>
            ) : (
              <BlogTable blogs={draftBlogs} onBlogUpdate={fetchBlogs} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Dashboard;

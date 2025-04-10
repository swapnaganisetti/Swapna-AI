
import { BlogPost } from '@/types/BlogTypes';
import BlogCard from './BlogCard';

interface BlogListProps {
  blogs: BlogPost[];
  isCompact?: boolean;
}

const BlogList = ({ blogs, isCompact = false }: BlogListProps) => {
  if (blogs.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-medium text-gray-600">No blog posts found</h3>
        <p className="text-gray-500 mt-2">Check back later for new content!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} isCompact={isCompact} />
      ))}
    </div>
  );
};

export default BlogList;

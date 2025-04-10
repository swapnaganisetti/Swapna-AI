
import { BlogPost } from '@/types/BlogTypes';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/badge';
import { Calendar, User } from 'lucide-react';
import { Button } from '../ui/button';

interface FeaturedBlogProps {
  blog: BlogPost;
}

const FeaturedBlog = ({ blog }: FeaturedBlogProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full">
          {blog.coverImage ? (
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="w-full h-full min-h-[300px] bg-gradient-to-r from-brand-blue to-brand-lightBlue flex items-center justify-center">
              <span className="text-white font-bold text-2xl">Featured Post</span>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex gap-2 flex-wrap mb-4">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-medium">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {blog.title}
          </h2>
          
          <p className="text-gray-600 mb-4 flex-grow">
            {blog.summary}
          </p>
          
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <div className="flex items-center mr-4">
              <User size={16} className="mr-1" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</span>
            </div>
          </div>
          
          <Button asChild className="mt-2">
            <Link to={`/blog/${blog.id}`}>Read Article</Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedBlog;

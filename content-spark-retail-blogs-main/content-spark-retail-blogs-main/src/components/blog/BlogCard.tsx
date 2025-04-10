
import { BlogPost } from '@/types/BlogTypes';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/badge';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  blog: BlogPost;
  isCompact?: boolean;
}

const BlogCard = ({ blog, isCompact = false }: BlogCardProps) => {
  return (
    <article className={`bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg ${isCompact ? 'h-full' : ''}`}>
      <Link to={`/blog/${blog.id}`}>
        <div className="aspect-video bg-gray-200 relative overflow-hidden">
          {blog.coverImage ? (
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-brand-blue/60 to-brand-lightBlue/60 flex items-center justify-center">
              <span className="text-white font-bold text-xl">ContentSpark</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex gap-2 flex-wrap mb-3">
          {blog.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-brand-blue transition-colors">
            {blog.title}
          </h3>
        </Link>
        
        {!isCompact && (
          <p className="text-gray-600 mb-4 line-clamp-2">
            {blog.summary}
          </p>
        )}
        
        <div className="flex items-center text-gray-500 text-sm mt-4">
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

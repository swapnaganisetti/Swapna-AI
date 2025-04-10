
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '@/types/BlogTypes';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Eye, Edit, Trash2, MoreVertical, Globe, FileX } from 'lucide-react';
import { format } from 'date-fns';
import { togglePublishStatus, deleteBlogPost } from '@/services/blogService';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

interface BlogTableProps {
  blogs: BlogPost[];
  onBlogUpdate: () => void;
}

const BlogTable = ({ blogs, onBlogUpdate }: BlogTableProps) => {
  const navigate = useNavigate();
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
  
  const handleView = (id: string) => {
    navigate(`/blog/${id}`);
  };
  
  const handleEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };
  
  const handlePublishToggle = async (id: string) => {
    try {
      await togglePublishStatus(id);
      onBlogUpdate();
    } catch (error) {
      console.error('Error toggling publish status:', error);
    }
  };
  
  const handleDelete = async () => {
    if (blogToDelete) {
      try {
        await deleteBlogPost(blogToDelete);
        onBlogUpdate();
      } catch (error) {
        console.error('Error deleting blog:', error);
      } finally {
        setBlogToDelete(null);
      }
    }
  };
  
  if (blogs.length === 0) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-xl font-medium mb-2">No Blog Posts Yet</h3>
        <p className="text-gray-500 mb-4">Create your first blog post to get started.</p>
        <Button onClick={() => navigate('/create')}>Create Blog Post</Button>
      </Card>
    );
  }
  
  return (
    <>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden lg:table-cell">Tags</TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell className="font-medium">
                  <div className="max-w-[300px] truncate">{blog.title}</div>
                </TableCell>
                <TableCell>
                  {blog.published ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Published</Badge>
                  ) : (
                    <Badge variant="secondary">Draft</Badge>
                  )}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {format(new Date(blog.updatedAt), 'MMM d, yyyy')}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <div className="flex flex-wrap gap-1 max-w-[250px] overflow-hidden">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {blog.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{blog.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleView(blog.id)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEdit(blog.id)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handlePublishToggle(blog.id)}>
                        {blog.published ? (
                          <>
                            <FileX className="mr-2 h-4 w-4" />
                            Unpublish
                          </>
                        ) : (
                          <>
                            <Globe className="mr-2 h-4 w-4" />
                            Publish
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setBlogToDelete(blog.id)} className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <AlertDialog open={!!blogToDelete} onOpenChange={(open) => !open && setBlogToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this blog post?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default BlogTable;

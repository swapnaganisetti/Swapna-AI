
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { BlogPostInput, BlogPost } from '@/types/BlogTypes';
import { createBlogPost, updateBlogPost } from '@/services/blogService';
import AIGenerator from './AIGenerator';
import { X, Plus, Sparkles, Eye } from 'lucide-react';

interface BlogEditorProps {
  initialBlog?: BlogPost;
  isEditing?: boolean;
}

const initialBlogState: BlogPostInput = {
  title: '',
  summary: '',
  content: '',
  tags: [],
  seoTitle: '',
  seoDescription: '',
  seoKeywords: [],
};

const BlogEditor = ({ initialBlog, isEditing = false }: BlogEditorProps) => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPostInput>(initialBlog || initialBlogState);
  const [tagInput, setTagInput] = useState('');
  const [seoKeywordInput, setSeoKeywordInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('edit');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleAddTag = () => {
    if (!tagInput.trim() || blog.tags.includes(tagInput.trim())) {
      return;
    }
    setBlog((prev) => ({
      ...prev,
      tags: [...prev.tags, tagInput.trim()],
    }));
    setTagInput('');
  };
  
  const handleRemoveTag = (tag: string) => {
    setBlog((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };
  
  const handleAddSeoKeyword = () => {
    if (!seoKeywordInput.trim() || (blog.seoKeywords && blog.seoKeywords.includes(seoKeywordInput.trim()))) {
      return;
    }
    setBlog((prev) => ({
      ...prev,
      seoKeywords: [...(prev.seoKeywords || []), seoKeywordInput.trim()],
    }));
    setSeoKeywordInput('');
  };
  
  const handleRemoveSeoKeyword = (keyword: string) => {
    setBlog((prev) => ({
      ...prev,
      seoKeywords: prev.seoKeywords ? prev.seoKeywords.filter((k) => k !== keyword) : [],
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (isEditing && initialBlog) {
        await updateBlogPost(initialBlog.id, blog);
        navigate(`/blog/${initialBlog.id}`);
      } else {
        const newBlog = await createBlogPost(blog);
        navigate(`/blog/${newBlog.id}`);
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleContentGenerated = (content: string) => {
    setBlog((prev) => ({ ...prev, content }));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
              <CardDescription>
                Fill in the details of your blog post. Fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={blog.title}
                    onChange={handleInputChange}
                    placeholder="Enter a catchy title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="summary">Summary *</Label>
                  <Textarea
                    id="summary"
                    name="summary"
                    value={blog.summary}
                    onChange={handleInputChange}
                    placeholder="Write a brief summary (1-2 sentences)"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {blog.tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      placeholder="Add a tag"
                      className="flex-grow"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                    />
                    <Button type="button" onClick={handleAddTag} size="icon">
                      <Plus size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full rounded-none border-b bg-transparent">
                  <TabsTrigger value="edit" className="flex-1 data-[state=active]:bg-transparent rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">Edit</TabsTrigger>
                  <TabsTrigger value="preview" className="flex-1 data-[state=active]:bg-transparent rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">Preview</TabsTrigger>
                </TabsList>
                
                <TabsContent value="edit" className="p-6">
                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      name="content"
                      value={blog.content}
                      onChange={handleInputChange}
                      placeholder="Write your blog post content using Markdown..."
                      className="min-h-[400px] font-mono"
                      required
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="preview" className="p-6">
                  <div className="prose max-w-none blog-content">
                    {blog.content ? (
                      <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br>')}} />
                    ) : (
                      <p className="text-gray-500 italic">No content to preview</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>
        
        <div className="space-y-6">
          <AIGenerator onContentGenerated={handleContentGenerated} />
          
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>
                Optimize your blog post for search engines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seoTitle">SEO Title</Label>
                <Input
                  id="seoTitle"
                  name="seoTitle"
                  value={blog.seoTitle || ''}
                  onChange={handleInputChange}
                  placeholder="SEO optimized title"
                />
                <p className="text-xs text-gray-500">
                  Defaults to post title if left empty
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="seoDescription">Meta Description</Label>
                <Textarea
                  id="seoDescription"
                  name="seoDescription"
                  value={blog.seoDescription || ''}
                  onChange={handleInputChange}
                  placeholder="Brief description for search results"
                  className="resize-none h-24"
                />
                <p className="text-xs text-gray-500">
                  Recommended length: 150-160 characters
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="seoKeywords">Keywords</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {blog.seoKeywords?.map((keyword) => (
                    <div
                      key={keyword}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      {keyword}
                      <button
                        type="button"
                        onClick={() => handleRemoveSeoKeyword(keyword)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={seoKeywordInput}
                    onChange={(e) => setSeoKeywordInput(e.target.value)}
                    placeholder="Add a keyword"
                    className="flex-grow"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSeoKeyword();
                      }
                    }}
                  />
                  <Button type="button" onClick={handleAddSeoKeyword} size="icon">
                    <Plus size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : isEditing ? 'Update Blog Post' : 'Create Blog Post'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
};

export default BlogEditor;

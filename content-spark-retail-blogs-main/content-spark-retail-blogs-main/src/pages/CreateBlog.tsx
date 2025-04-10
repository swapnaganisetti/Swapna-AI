
import MainLayout from '@/components/layout/MainLayout';
import BlogEditor from '@/components/blog/BlogEditor';

const CreateBlog = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <BlogEditor />
      </div>
    </MainLayout>
  );
};

export default CreateBlog;


const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Swapna AI</h3>
            <p className="text-gray-600">
              AI-powered content creation platform for retail blogs.
              Simplifying content generation with cutting-edge AI technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-brand-blue">Home</a></li>
              <li><a href="/blogs" className="text-gray-600 hover:text-brand-blue">Blogs</a></li>
              <li><a href="/create" className="text-gray-600 hover:text-brand-blue">Create Content</a></li>
              <li><a href="/dashboard" className="text-gray-600 hover:text-brand-blue">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">
              Have questions or feedback?<br />
              Email us at: <a href="mailto:info@swapna.ai" className="text-brand-blue hover:underline">info@swapna.ai</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {year} Swapna AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

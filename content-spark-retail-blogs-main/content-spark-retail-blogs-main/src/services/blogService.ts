
import { BlogPost, BlogPostInput } from '../types/BlogTypes';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';

// Mock data storage - this would be replaced with actual API calls
let blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Fashion Trends to Watch This Summer",
    summary: "Discover the hottest fashion trends that will dominate retail this summer season.",
    content: `
# 5 Fashion Trends to Watch This Summer

Summer is just around the corner, and with it comes a fresh wave of fashion trends that are set to dominate retail stores and online shopping carts. As temperatures rise, so does the excitement for vibrant colors, breathable fabrics, and innovative designs.

## 1. Sustainable Fashion

This summer, eco-friendly clothing isn't just a trend—it's becoming a movement. Retailers are responding to consumer demand by offering more sustainable options:

- Organic cotton clothing
- Recycled polyester swimwear
- Biodegradable accessories
- Upcycled vintage pieces

Brands like Patagonia and Reformation continue to lead in this space, but more mainstream retailers are joining the sustainability movement.

## 2. Bold, Saturated Colors

After seasons of neutrals, bold colors are making a dramatic comeback:

- Electric blue
- Vibrant orange
- Sunshine yellow
- Hot pink

These eye-catching hues are appearing in everything from casual wear to formal attire. Monochromatic looks in these colors are particularly striking.

## 3. Y2K Revival

The early 2000s aesthetic continues its strong comeback:

- Low-rise jeans
- Baby tees
- Platform sandals
- Baguette bags

Retailers like Urban Outfitters and Aritzia are heavily leaning into this nostalgic trend, appealing to both Gen Z shoppers experiencing it for the first time and millennials reliving their youth.

## 4. Oversized Silhouettes

Comfort remains king with oversized silhouettes dominating summer collections:

- Loose-fitting linen shirts
- Wide-leg pants
- Oversized blazers
- Flowy maxi dresses

This trend offers both style and practicality for hot summer days.

## 5. Statement Accessories

This summer's accessories are anything but subtle:

- Chunky chain necklaces
- Colorful resin rings
- Statement sunglasses
- Woven, oversized bags

Retailers should stock up on bold accessories as they offer customers an affordable way to update their wardrobes.

As a retailer, understanding these trends allows you to strategically stock your inventory and market to trend-conscious consumers. Remember that while trends are important, encouraging customers to develop their personal style with quality pieces that will last beyond a single season is equally valuable.
    `,
    author: "Sophie Bennett",
    createdAt: new Date('2023-05-15'),
    updatedAt: new Date('2023-05-15'),
    tags: ["fashion", "summer trends", "retail"],
    published: true,
    seoTitle: "Summer Fashion Trends 2023 | Retail Style Guide",
    seoDescription: "Discover the top 5 fashion trends for Summer 2023 that will dominate retail stores and online shopping this season.",
    seoKeywords: ["summer fashion", "fashion trends", "retail trends", "summer style"]
  },
  {
    id: "2",
    title: "How to Create an Omnichannel Shopping Experience",
    summary: "Learn strategies for seamlessly integrating your online and physical retail presence.",
    content: `
# How to Create an Omnichannel Shopping Experience

In today's competitive retail landscape, providing a seamless omnichannel experience isn't just a luxury—it's essential for survival. Consumers expect consistent interactions across all touchpoints with your brand, whether they're shopping online from a desktop or mobile device, through social media, or in a physical store.

## What Is Omnichannel Retail?

Omnichannel retail integrates different methods of shopping available to consumers (e.g., online, in a physical store, by phone, etc.) into a single, seamless experience. Unlike multichannel retail, which operates channels in parallel, omnichannel creates an integrated customer journey.

## Key Strategies for Successful Implementation

### 1. Unify Your Inventory Management

- Implement real-time inventory tracking across all sales channels
- Enable ship-from-store and in-store pickup options
- Create visibility for both customers and staff into product availability

### 2. Create Consistent Branding and Messaging

- Maintain consistent visual identity across all platforms
- Align marketing messages across digital and physical touchpoints
- Ensure pricing consistency to avoid customer confusion and frustration

### 3. Invest in Mobile Experience

- Develop a responsive website or dedicated app
- Enable mobile payment options
- Consider location-based notifications for in-store shoppers

### 4. Leverage Customer Data

- Implement a robust CRM system that tracks customer interactions across channels
- Use data to personalize the shopping experience
- Create targeted marketing campaigns based on customer behavior

### 5. Train Staff Thoroughly

- Educate store associates about online offerings
- Empower staff with mobile devices to access customer information
- Create incentives that don't penalize stores for online sales in their region

## Success Stories

**Target** has mastered the omnichannel approach by offering multiple fulfillment options, including same-day delivery through Shipt, curbside pickup, and in-store shopping with mobile app integration that helps customers locate products.

**Sephora's** Beauty Insider program seamlessly connects online and offline purchases, allowing customers to access their purchase history, loyalty points, and personalized recommendations regardless of where they shop.

## Common Challenges and Solutions

### Challenge: Siloed Systems
**Solution:** Invest in integrated technology platforms that connect e-commerce, point-of-sale, CRM, and inventory management systems.

### Challenge: Attribution Issues
**Solution:** Implement cross-channel attribution models that properly credit sales to all touchpoints in the customer journey.

### Challenge: Organizational Resistance
**Solution:** Create cross-functional teams and align incentives around omnichannel success metrics rather than individual channel performance.

By creating a cohesive omnichannel strategy, retailers can meet customers where they are, provide the convenience and consistency they expect, and build loyalty that transcends individual transactions.
    `,
    author: "Marcus Johnson",
    createdAt: new Date('2023-05-10'),
    updatedAt: new Date('2023-05-12'),
    tags: ["retail strategy", "omnichannel", "customer experience"],
    published: true,
    seoTitle: "Creating Seamless Omnichannel Retail Experiences | Strategy Guide",
    seoDescription: "Learn how to implement effective omnichannel strategies to connect your online and physical retail presence for improved customer experiences.",
    seoKeywords: ["omnichannel retail", "retail strategy", "customer experience", "unified commerce"]
  },
  {
    id: "3",
    title: "Sustainable Retail: More Than Just a Trend",
    summary: "How embracing sustainability can boost your retail business and appeal to conscious consumers.",
    content: `
# Sustainable Retail: More Than Just a Trend

Sustainability in retail has evolved from a niche concern to a major business imperative. Today's consumers, particularly millennials and Gen Z, are increasingly making purchasing decisions based on a brand's environmental and social impact. For retailers, embracing sustainable practices isn't just good for the planet—it's good for business too.

## Why Sustainability Matters in Retail

### Consumer Demand Is Growing

Recent studies show that:

- 73% of global consumers say they would definitely or probably change their consumption habits to reduce environmental impact
- 66% of all consumers and 75% of millennial consumers consider sustainability when making a purchase
- 44% of consumers say they would pay a premium for sustainable products

### Regulatory Pressures Are Increasing

Governments worldwide are implementing stricter regulations on:
- Packaging waste
- Carbon emissions
- Supply chain transparency
- Extended producer responsibility

Staying ahead of these regulations can prevent costly compliance issues down the line.

## Key Areas of Focus for Sustainable Retail

### 1. Sustainable Product Sourcing

- Work with suppliers who adhere to environmental and ethical standards
- Consider materials with lower environmental impacts
- Reduce packaging or switch to recyclable/biodegradable options
- Implement fair trade practices and ensure ethical labor conditions

### 2. Energy Efficient Operations

- Upgrade to LED lighting in stores
- Implement smart energy management systems
- Consider renewable energy sources like solar panels
- Optimize transportation and logistics to reduce carbon footprint

### 3. Waste Reduction

- Implement recycling programs in stores
- Reduce unnecessary packaging
- Create take-back programs for products at end of life
- Donate unsold merchandise instead of disposing of it

### 4. Circular Economy Initiatives

- Offer repair services for products
- Create resale or rental options
- Design products with disassembly and recycling in mind
- Upcycle materials from returned or damaged products

## Success Stories in Sustainable Retail

**Patagonia** has long been a pioneer in sustainable retail. Their Worn Wear program encourages customers to repair and recycle their clothing, and they use recycled materials in many of their products. Their commitment to environmental causes has built tremendous customer loyalty.

**IKEA** has committed to becoming climate positive by 2030. They're working toward using only renewable and recycled materials, offering spare parts to extend product life, and developing circular business models.

## Getting Started with Sustainable Retail

1. **Assess your current impact** - Conduct an audit of your operations to identify key areas for improvement
2. **Set realistic goals** - Start with achievable targets and gradually increase your ambition
3. **Communicate authentically** - Be transparent about your journey and avoid greenwashing
4. **Engage your customers** - Educate them about your sustainability initiatives and how they can participate
5. **Measure your progress** - Track key metrics and share your successes and challenges

Implementing sustainable practices may require initial investment, but the long-term benefits—including cost savings, increased customer loyalty, and positive brand perception—make it well worth the effort. Sustainability in retail isn't just a passing trend; it's the future of successful business.
    `,
    author: "Elena Rodriguez",
    createdAt: new Date('2023-05-05'),
    updatedAt: new Date('2023-05-07'),
    tags: ["sustainability", "green retail", "eco-friendly"],
    published: true,
    seoTitle: "Sustainable Retail Practices | Business Benefits & Implementation Guide",
    seoDescription: "Discover how implementing sustainable practices in your retail business can boost your bottom line while appealing to environmentally conscious consumers.",
    seoKeywords: ["sustainable retail", "green business practices", "eco-friendly retail", "sustainable business"]
  }
];

// Create a new blog post
export const createBlogPost = (blogPostInput: BlogPostInput): Promise<BlogPost> => {
  return new Promise((resolve) => {
    // In a real implementation, this would be an API call
    setTimeout(() => {
      const newBlog: BlogPost = {
        id: uuidv4(),
        ...blogPostInput,
        author: "Admin User", // In a real app, this would come from authentication
        createdAt: new Date(),
        updatedAt: new Date(),
        published: false
      };
      
      blogPosts = [newBlog, ...blogPosts];
      toast.success("Blog post created successfully!");
      resolve(newBlog);
    }, 500);
  });
};

// Get all blog posts
export const getAllBlogPosts = (): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...blogPosts]);
    }, 300);
  });
};

// Get published blog posts
export const getPublishedBlogPosts = (): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts.filter(post => post.published));
    }, 300);
  });
};

// Get a single blog post by ID
export const getBlogPostById = (id: string): Promise<BlogPost | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = blogPosts.find(post => post.id === id);
      resolve(post);
    }, 200);
  });
};

// Update a blog post
export const updateBlogPost = (id: string, updates: Partial<BlogPostInput>): Promise<BlogPost> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = blogPosts.findIndex(post => post.id === id);
      
      if (index === -1) {
        toast.error("Blog post not found");
        reject(new Error("Blog post not found"));
        return;
      }
      
      const updatedPost = {
        ...blogPosts[index],
        ...updates,
        updatedAt: new Date()
      };
      
      blogPosts[index] = updatedPost;
      toast.success("Blog post updated successfully!");
      resolve(updatedPost);
    }, 500);
  });
};

// Delete a blog post
export const deleteBlogPost = (id: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const initialLength = blogPosts.length;
      blogPosts = blogPosts.filter(post => post.id !== id);
      
      const deleted = initialLength > blogPosts.length;
      if (deleted) {
        toast.success("Blog post deleted successfully!");
      } else {
        toast.error("Blog post not found");
      }
      
      resolve(deleted);
    }, 500);
  });
};

// Toggle publish status
export const togglePublishStatus = (id: string): Promise<BlogPost> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = blogPosts.findIndex(post => post.id === id);
      
      if (index === -1) {
        toast.error("Blog post not found");
        reject(new Error("Blog post not found"));
        return;
      }
      
      const updatedPost = {
        ...blogPosts[index],
        published: !blogPosts[index].published,
        updatedAt: new Date()
      };
      
      blogPosts[index] = updatedPost;
      toast.success(updatedPost.published ? "Blog post published!" : "Blog post unpublished");
      resolve(updatedPost);
    }, 300);
  });
};

// Generate AI content
export const generateAIContent = (prompt: string): Promise<string> => {
  return new Promise((resolve) => {
    // In a real implementation, this would call an AI API
    setTimeout(() => {
      // This is just mock AI content generation
      const sampleResponses = [
        `# ${prompt}\n\nRetail is constantly evolving, and staying ahead of trends is crucial for success. In this article, we'll explore the latest developments and how they can impact your business.\n\n## Understanding Consumer Behavior\n\nToday's consumers are looking for more than just products—they want experiences. Research shows that 73% of shoppers value experience over price when making purchasing decisions.\n\n## Embracing Technology\n\nFrom augmented reality fitting rooms to AI-powered inventory management, technology is transforming the retail landscape. Retailers who embrace these innovations are seeing higher engagement and increased sales.\n\n## The Personal Touch\n\nDespite technological advances, personalization remains key. Customers want to feel understood and appreciated. Simple touches like personalized recommendations can increase conversion rates by up to 26%.\n\n## Looking Forward\n\nAs we move forward, successful retailers will be those who balance innovation with authentic customer connections. By understanding your audience and meeting them where they are, you can stay ahead in this competitive landscape.`,
        
        `# ${prompt}\n\nThe retail landscape is more competitive than ever, requiring businesses to constantly innovate and adapt. Let's dive into key strategies that can help your retail business thrive.\n\n## Customer-Centric Approach\n\nPutting customers at the center of your business decisions is no longer optional. This means:\n\n- Collecting and analyzing customer feedback\n- Creating personalized shopping experiences\n- Building loyalty programs that offer real value\n\n## Omnichannel Presence\n\nToday's consumers expect seamless experiences across all channels. Your online and offline presence should complement each other, offering customers flexibility in how they browse, shop, and receive products.\n\n## Data-Driven Decision Making\n\nRetailers with robust data analytics capabilities are outperforming their competitors by:\n\n- Optimizing inventory levels\n- Personalizing marketing campaigns\n- Predicting future trends\n\n## Sustainable Practices\n\nConsumers are increasingly making purchasing decisions based on a brand's environmental impact. Implementing sustainable practices isn't just good for the planet—it's good for business too.\n\n## Community Building\n\nTransforming customers into community members creates powerful brand advocates. Consider how your retail business can foster connections among your customer base.`
      ];
      
      const randomIndex = Math.floor(Math.random() * sampleResponses.length);
      resolve(sampleResponses[randomIndex]);
    }, 1500);
  });
};

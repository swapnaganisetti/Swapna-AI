require('dotenv').config();
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

const samplePosts = [
  {
    title: "10 Summer Fashion Trends You Can't Miss in 2024",
    content: `Summer 2024 is bringing exciting new fashion trends that will revolutionize your wardrobe. From sustainable materials to bold colors, this season is all about expressing yourself while staying comfortable.

1. Eco-friendly Fabrics
This summer, sustainable fashion takes center stage. Look for clothing made from recycled materials and organic cotton. These pieces not only look great but also help protect our environment.

2. Bold Neon Accessories
Accessorize your summer outfits with striking neon pieces. Think bright yellow handbags, electric blue sunglasses, and hot pink sandals. These eye-catching items add a perfect pop of color to any ensemble.

3. Minimalist Beachwear
Clean lines and simple designs dominate beach fashion this year. Choose solid-colored swimwear with architectural cuts and high-quality materials that will last multiple seasons.

Continue reading to discover more exciting trends...`,
    category: "trends",
    keywords: ["summer fashion", "2024 trends", "sustainable fashion", "neon accessories", "beachwear"],
    status: "published",
    seoTitle: "2024 Summer Fashion Trends: Your Complete Style Guide",
    seoDescription: "Discover the hottest summer fashion trends for 2024, from sustainable materials to bold neon accessories. Your complete guide to staying stylish this season.",
    publishDate: new Date()
  },
  {
    title: "The Ultimate Guide to Smart Home Devices for Modern Living",
    content: `Transform your living space into a tech-savvy haven with our comprehensive guide to smart home devices. From essential gadgets to luxury additions, we'll help you make informed decisions for your connected home.

Smart Lighting Systems
Start your smart home journey with intelligent lighting. Modern systems offer:
- Remote control via smartphone
- Automated schedules
- Energy usage monitoring
- Mood-based lighting scenes

Smart Security Solutions
Protect your home with cutting-edge security devices:
- Video doorbells with two-way communication
- Smart locks with fingerprint recognition
- Motion sensors with instant notifications
- HD security cameras with night vision

Learn more about making your home smarter...`,
    category: "product-review",
    keywords: ["smart home", "home automation", "smart devices", "security systems", "smart lighting"],
    status: "published",
    seoTitle: "Smart Home Devices 2024: Complete Buying Guide",
    seoDescription: "Everything you need to know about smart home devices in 2024. From lighting to security, discover the best products for your connected home.",
    publishDate: new Date()
  },
  {
    title: "5 Money-Saving Shopping Hacks for Online Retail",
    content: `Master the art of smart online shopping with these proven money-saving strategies. Whether you're shopping for clothes, electronics, or household items, these tips will help you get the best deals.

1. Timing is Everything
- Shop during off-season sales
- Use price tracking tools
- Wait for major shopping events
- Subscribe to newsletters for early access

2. Coupon Stacking Strategy
Learn how to combine multiple discounts:
- Store coupons
- Credit card rewards
- Cashback websites
- Loyalty program points

3. Abandoned Cart Technique
Many retailers will send you discount codes if you leave items in your cart...`,
    category: "shopping-tips",
    keywords: ["money saving", "online shopping", "shopping hacks", "discounts", "coupons"],
    status: "published",
    seoTitle: "Save Money Shopping Online: 5 Expert Tips for 2024",
    seoDescription: "Learn expert strategies for saving money while shopping online. Discover timing tricks, coupon stacking, and more ways to get the best deals.",
    publishDate: new Date()
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing posts
    await BlogPost.deleteMany({});
    console.log('Cleared existing posts');

    // Insert sample posts
    const result = await BlogPost.insertMany(samplePosts);
    console.log(`Added ${result.length} sample blog posts`);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
  }
}

seedDatabase();
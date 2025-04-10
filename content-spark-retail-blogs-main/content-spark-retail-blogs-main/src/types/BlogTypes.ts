
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  coverImage?: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export interface BlogPostInput {
  title: string;
  summary: string;
  content: string;
  coverImage?: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

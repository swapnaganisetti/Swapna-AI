
import { useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { generateAIContent } from '@/services/blogService';
import { Sparkles, Loader2 } from 'lucide-react';

interface AIGeneratorProps {
  onContentGenerated: (content: string) => void;
}

const AIGenerator = ({ onContentGenerated }: AIGeneratorProps) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      const generatedContent = await generateAIContent(prompt);
      onContentGenerated(generatedContent);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles size={18} className="mr-2 text-brand-blue" />
          AI Content Generator
        </CardTitle>
        <CardDescription>
          Describe the blog post you want to create and our AI will generate content for you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder="E.g., Write a blog post about summer fashion trends for retail stores"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-24 resize-none"
          />
          <Button 
            onClick={handleGenerate} 
            disabled={!prompt.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Content
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIGenerator;

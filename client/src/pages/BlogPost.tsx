import { useRoute, Link } from "wouter";
import { blogs } from "../data/blogs";
import { ArrowLeft, Calendar, User, Share2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const [, params] = useRoute("/blogs/:id");
  const blog = blogs.find((b) => b.id === params?.id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex flex-col font-sans">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
            <Link href="/blogs">
              <Button>Back to Blogs</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link href="/blogs" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 text-sm text-primary font-medium uppercase tracking-wider mb-4">
              <span>{blog.category}</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between border-y border-border py-6 mb-10">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{blog.author}</p>
                    <p className="text-xs text-muted-foreground">Author</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-border" />
                <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">{blog.date}</span>
                </div>
              </div>
              
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <img 
                src={blog.heroImage} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

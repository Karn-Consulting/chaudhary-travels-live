import { Link } from "wouter";
import { blogs } from "../data/blogs";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Travel Insights</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-gradient-gold">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Expert advice, industry trends, and travel inspiration from the leaders in luxury transportation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50 flex flex-col"
              >
                <Link href={`/blogs/${blog.id}`} className="block relative group overflow-hidden h-64">
                  <img 
                    src={blog.heroImage} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium rounded-full uppercase tracking-wider">
                    {blog.category}
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>

                  <Link href={`/blogs/${blog.id}`} className="block mb-3">
                    <h2 className="text-xl font-serif font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>

                  <Link 
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors mt-auto group"
                  >
                    Read Article 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

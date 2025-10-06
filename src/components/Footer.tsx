import { motion } from 'framer-motion';
import { Mail, MessageCircle, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 glass border-t border-glass-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-card-foreground mb-6">
              Ready to Get Started?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="mailto:papermind@gmail.com"
                className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>papermind@gmail.com</span>
              </a>
              
              <a 
                href="https://wa.me/923092265659"
                className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+92 309-2265659</span>
              </a>
              
              <a 
                href="https://papermind.netlify.app"
                className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>papermind.ai</span>
              </a>
            </div>
            
            <div className="border-t border-glass-border pt-6">
              <p className="text-text-muted text-sm">
                © 2025 PaperMind AI. Built with ❤️ for Pākistānī educators.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

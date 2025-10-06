import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen liquid-bg flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Liquid Glass Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 floating glass" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-secondary rounded-2xl opacity-15 floating-delayed glass" />
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-accent/20 rounded-full floating glass" />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/30 rounded-full floating glass" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-accent/25 rounded-2xl floating-delayed glass" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-7xl mx-auto"
        >
          {/* Main Heading - Bilingual with Bootstrap Display */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="display-1 font-bootstrap-display fw-bold text-text-hero mb-4">
              <span className="font-urdu text-black text-center block mt-32 pb-2 md:text-2xl">
                  مصنوعی ذہانت سے چلنے والا امتحانی نظام
              </span>
              <span className="display-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-red-600 
             bg-clip-text text-transparent animate-gradient">
                PaperMind AI
              </span>
            </h1>
            <h2 className="display-6">
              Pakistan’s First AI-Powered Test Paper Generator
            </h2>
          </motion.div>
          
          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-4xl p-8 mb-8 max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-text-secondary mb-2 font-light leading-relaxed">
            <span className="mt-3 font-urdu text-center block mb-4 text-xl">
                ڈیجیٹل تعلیم کا مستقبل — {' '}{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-900 bg-clip-text text-transparent font-extrabold text-2xl animate-pulse">
                  85% {' '}{' '}
                </span> 
                وقت کی بچت — {' '}{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-900 bg-clip-text text-transparent font-extrabold text-2xl animate-pulse">
                  20% {' '} {' '}
                </span> 
                بہتر نتائج {' '}{' '}
            </span> <br />
              Instantly create secure, error-free, and print-ready exam packages. Save hours, eliminate leaks, and boost your school’s reputation with AI-driven efficiency.
            </p>
          </motion.div>
          
          {/* Key Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">~98% Time Saved</h3>
              <p className="text-sm text-text-secondary">From ~1.5 hours to 1 minute per exam</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">Boost Student Results</h3>
              <p className="text-sm text-text-secondary">Professional, board-standard papers every time</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">Protect Your Brand</h3>
              <p className="text-sm text-text-secondary">Secure, audit-logged, and leak-proof process</p>
            </div>
          </motion.div>
          
          {/* CTA Buttons with Neumorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="group text-black bg-primary hover:bg-primary/90 px-10 py-5 rounded-2xl text-xl font-semibold shadow-glass-lg hover:shadow-glow transition-all duration-300 neumorphism-button"
              style={{
                boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff'
              }}
            >
              Start Free Trial
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group glass border-glass-border hover:bg-glass text-card-foreground px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 neumorphism-button-outline"
              style={{
                boxShadow: 'inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff'
              }}
            >
              <Play className="mr-3 h-6 w-6" />
              Schedule Demo
            </Button>
          </motion.div>
          
          {/* Enhanced Stats with Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-text-secondary">Schools Targeted</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">1,000+</div>
              <div className="text-sm text-text-secondary">Monthly Papers Generated</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm text-text-secondary">Retention Rate</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">PKR 2.5M</div>
              <div className="text-sm text-text-secondary">Annual Savings Per School</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
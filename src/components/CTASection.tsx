import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlassCard } from './GlassCard';
import { ArrowRight, MessageCircle, Clock, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-primary rounded-full opacity-10 floating" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-secondary rounded-2xl opacity-10 floating-delayed" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/20 rounded-full floating" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <GlassCard variant="glow" className="text-center relative overflow-hidden neumorphism-card">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-secondary rounded-full translate-x-20 translate-y-20" />
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/30 rounded-full -translate-x-12 -translate-y-12" />
            </div>
            
            <div className="relative z-10 p-8 md:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="display-2 font-bootstrap-display fw-bold mb-8"
              >
                <span className="font-urdu-bold hero-text text-right block mb-4 text-3xl md:text-5xl">
                  اسکولوں کی کامیابی کا نیا دور
                </span>
                <span className="text-text-hero text-4xl md:text-6xl">
                  Take Your Institution to the Next Level
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                <span className="font-urdu text-right block mb-4 text-lg">
                  اب وقت ہے روایتی طریقے چھوڑ کر جدید حل اپنانے کا
                </span>
                Ready to lead in education? Free up your staff, impress parents, and secure your school’s reputation. PaperMind AI delivers professional, error-free exams in seconds—no stress, no leaks.
              </motion.p>
              
              {/* Key Benefits Quick Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
              >
                <div className="glass rounded-2xl p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Hours Saved, Every Week</h3>
                  <p className="text-sm text-text-secondary">Focus on growth, not paperwork</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Stronger Results</h3>
                  <p className="text-sm text-text-secondary">Boost student outcomes and parent trust</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Real Cost Savings</h3>
                  <p className="text-sm text-text-secondary">Cut hidden expenses, invest in your future</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
              >
                <Button 
                  size="lg" 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-2xl text-xl font-semibold shadow-glass-lg hover:shadow-glow transition-all duration-300 neumorphism-button"
                >
                  Start Free Trial Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group glass border-glass-border hover:bg-glass text-card-foreground px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 neumorphism-button-outline"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Schedule Demo
                </Button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-text-secondary">Target Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">90%</div>
                  <div className="text-sm text-text-secondary">Retention Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">1,000+</div>
                  <div className="text-sm text-text-secondary">Monthly Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">9+</div>
                  <div className="text-sm text-text-secondary">Subjects</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-text-muted"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
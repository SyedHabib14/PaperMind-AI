import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'ڈاکٹر فاطمہ خان',
      nameEn: 'Dr. Fatima Khan',
      role: 'Principal, Lahore Grammar School',
      roleUrdu: 'پرنسپل، لاہور گرامر اسکول',
      quote: 'PaperMind AI has made exam season stress-free for our staff. We generate professional, error-free papers in minutes and parents are noticing the difference.',
      quoteUrdu: 'پیپر مائنڈ AI نے ہمارے اسکول کو مکمل طور پر تبدیل کر دیا ہے۔ ہم ہر استاد کے لیے ہفتے میں 13 گھنٹے بچاتے ہیں اور ہمارے طلباء 20% بہتر کارکردگی دکھاتے ہیں۔',
      rating: 5,
      savings: 'PKR ~2.5M saved annually'
    },
    {
      name: ' پروفیسر محمد احمد',
      nameEn: 'Professor Muhammad Ahmed',
      role: 'Head of Mathematics, Karachi Public School',
      roleUrdu: 'صدر ریاضی، کراچی پبلک اسکول',
      quote: 'The system is a game-changer. Our teachers spend less time on paperwork and more on teaching. The audit logs and security features give us peace of mind.',
      quoteUrdu: 'AI پاکستانی نصاب کو بالکل سمجھتا ہے۔ ہم ماہانہ 50+ پیپر بغیر کسی غلطی کے تیار کرتے ہیں۔ ہمارے اساتذہ وقت کی بچت سے خوش ہیں۔',
      rating: 5,
      savings: '85% time reduction'
    },
    {
      name: 'زینب شاہ',
      nameEn: 'Miss Zaynab Shah',
      role: 'Vice Principal, Islamabad Model School',
      roleUrdu: 'نائب پرنسپل، اسلام آباد ماڈل اسکول',
      quote: 'We switched to PaperMind AI for reliability and speed. Our exam process is now transparent, secure, and trusted by parents. Highly recommended for any school.',
      quoteUrdu: '15 گھنٹے سے 2 گھنٹے فی امتحانی پیپر! معیار ہر بار بورڈ سٹینڈرڈ ہے۔ ہماری برقراری کی شرح 95% تک بہتر ہو گئی۔',
      rating: 5,
      savings: '90% retention rate'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 floating" />
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-secondary rounded-2xl opacity-10 floating-delayed" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="display-5 mb-6 font-bold text-center">
            <span className="font-urdu-bold hero-text text-center block pb-7 pt-6 text-3xl md:text-5xl">
              اسکولوں کا اعتماد
            </span>
            Trusted by Leading Schools
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            <span className="font-urdu text-center block mb-4 text-lg">
              سینکڑوں اسکول جو امتحانی عمل کو جدید بنا چکے ہیں
            </span>
            Join hundreds of educators transforming assessments with proven results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard variant="intense" className="h-full relative neumorphism-card hover:shadow-glow transition-all duration-300">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/40" />
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-text-secondary leading-relaxed mb-6 text-lg">
                    {/* <span className="font-urdu text-right block mb-4 text-base">
                      "{testimonial.quoteUrdu}"
                    </span> */}
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Savings Badge */}
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    {testimonial.savings}
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-glass-lg">
                      <span className="text-white font-bold text-lg">
                        {testimonial.nameEn.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-urdu-bold text-lg text-card-foreground mb-1">
                        {testimonial.name}
                      </div>
                      <div className="font-semibold text-card-foreground mb-1">
                        {testimonial.nameEn}
                      </div>
                      <div className="text-sm text-text-muted">
                        {testimonial.role}
                      </div>
                      <div className="font-urdu text-right text-sm text-text-muted">
                        {testimonial.roleUrdu}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="glass rounded-3xl p-8 max-w-5xl mx-auto">
            <h3 className="display-5 font-bootstrap-display fw-bold text-text-hero mb-6 text-center">
              <span className="font-urdu-bold hero-text text-center block pb-3 pt-3 text-2xl">
                نتائج جو فرق لاتے ہیں
              </span>
              Results That Make a Difference
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-text-secondary">Schools Using</div>
                <div className="font-urdu text-sm text-text-muted">استعمال کرنے والے اسکول</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-text-secondary">Monthly Papers</div>
                <div className="font-urdu text-sm text-text-muted">ماہانہ پرچے</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-text-secondary">Retention Rate</div>
                <div className="font-urdu text-sm text-text-muted">برقراری کی شرح</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30%</div>
                <div className="text-sm text-text-secondary">Better Results</div>
                <div className="font-urdu text-sm text-text-muted">بہتر نتائج</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
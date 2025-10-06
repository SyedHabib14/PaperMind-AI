import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Clock, ScanLine, KeyRound, Award, Users, Target, BookOpen, Zap, X } from 'lucide-react';
import image from '@/assets/BG.jpg'
import paper from '@/assets/paper.png'
import omr from '@/assets/OMR.png'
import answer from '@/assets/answer.png'
import { Dialog, DialogContent, DialogOverlay, DialogTrigger, DialogClose } from '@/components/ui/dialog';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Print-Ready Generation',
      description: 'Instantly create BISE-compliant, print-ready exam papers. Free your teachers from hours of manual work and let them focus on teaching, not typing.',
      gradient: 'bg-gradient-primary',
      metric: '14+ Hours Saved/Week',
      urdu: '85% وقت کی بچت',
      image: paper
    },
    {
      icon: ScanLine,
      title: 'OMR Sheets for Every Exam',
      description: 'Deliver professional OMR sheets that work with any scanner. Ensure error-free, fast checking and boost your school’s credibility with parents.',
      gradient: 'bg-gradient-secondary',
      metric: '100% Error-Free Checking',
      urdu: 'اعتماد اور شفافیت',
      image: omr
    },
    {
      icon: KeyRound,
      title: 'Verified Answer Keys',
      description: 'AI-verified, ready-to-use answer keys for every paper. No more last-minute errors or manual checking—just accurate results, every time.',
      gradient: 'bg-gradient-primary',
      metric: '100% Accuracy',
      urdu: 'تیز اور درست',
      image: answer
    },
    // {
    //   icon: Award,
    //   title: '100% Board Compliance',
    //   description: 'Complete curriculum compliance with Punjab Board standards. Professional formatting every single time.',
    //   gradient: 'bg-primary',
    //   metric: '100% compliant',
    //   urdu: '100% نصابی مطابقت'
    // },
    // {
    //   icon: Users,
    //   title: '100 Schools Target',
    //   description: 'First year goal: 100 schools adoption with 80% monthly active user rate and 90% retention.',
    //   gradient: 'bg-gradient-primary',
    //   metric: '100 schools/year',
    //   urdu: '100 اسکول کا ہدف'
    // },
    // {
    //   icon: Target,
    //   title: '1,000 Papers Monthly',
    //   description: 'Scale to 1,000 papers per month by month 6. Complete exam packages with OMR sheets and answer keys.',
    //   gradient: 'bg-gradient-secondary',
    //   metric: '1,000 papers/month',
    //   urdu: '1,000 پیپر ماہانہ'
    // },
    // {
    //   icon: BookOpen,
    //   title: 'Complete Academic Coverage',
    //   description: 'All subjects: Physics, Chemistry, Biology, Math, English, Urdu, Islamiat, Pakistan Studies, Computer Science.',
    //   gradient: 'bg-accent',
    //   metric: '9+ subjects',
    //   urdu: 'مکمل نصابی کوریج'
    // },
    // {
    //   icon: Zap,
    //   title: 'Instant Generation',
    //   description: 'Generate high-quality assessments instantly. Multi-subject support from Grade 9 to university level.',
    //   gradient: 'bg-primary',
    //   metric: 'Instant results',
    //   urdu: 'فوری تیاری'
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image + Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background/90" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 floating" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-secondary rounded-2xl opacity-20 floating-delayed" />
      </div>
      
      <div className="container mx-auto px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="display-6 text-white" style={{ textShadow: '2px 3px 5px black' }}>
            <span className="font-urdu-bold text-white text-center block pb-8 pt-6 text-4xl md:text-5xl mb-3">
            چند سیکنڈ میں پروفیشنل امتحانی پیکج
            </span>
            <b> Professional Exam Packages in Seconds </b>
          </h2>
          {/* <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            <span className="font-urdu text-right block mb-4 text-lg">
              تعلیمی انقلاب - ڈیٹا سے ثابت شدہ نتائج
            </span>
            Transform your teaching experience with measurable results and proven impact
          </p> */}
        </motion.div>
            
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          {benefits.map((benefit, index) => {
            const imageOnRight = index % 2 === 0; // 1st, 3rd, 5th -> image right
            const rowDirection = imageOnRight ? 'sm:flex-row-reverse' : 'sm:flex-row';
            const textAlign = imageOnRight ? 'sm:text-left text-left' : 'sm:text-right text-left';
            const selfAlign = imageOnRight ? 'self-start' : 'self-end';
            return (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full group frosted-card frosted-lg hover:shadow-glow transition-all duration-300">
                  <div className={`flex items-center justify-between mt-12 ml-8 mr-8 ${rowDirection}`}>
                    {/* Image (60% width on sm+ screens) */}
                    <div className="w-full sm:basis-[51.5%] sm:max-w-[60%] flex items-center m-16">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            aria-label={`View ${benefit.title} image`}
                            className="w-full focus:outline-none"
                          >
                            <div className="w-full h-full sm:h-64 md:h-84 lg:h-80 rounded-3xl overflow-hidden shadow-glass-lg transition-transform duration-300 ease-out hover:scale-[1.01] cursor-zoom-in">
                              <img
                                src={benefit.image}
                                alt={benefit.title}
                                className="w-full h-full object-contain"
                                loading="lazy"
                                decoding="async"
                                fetchPriority="low"
                              />
                            </div>
                          </button>
                        </DialogTrigger>
                         <DialogContent className="w-screen h-screen max-w-none p-0 bg-transparent border-0">
                           <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
                             <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
                               <img
                                 src={benefit.image}
                                 alt={`${benefit.title} enlarged`}
                                 className="block max-w-[95vw] max-h-[90vh] object-contain"
                                 loading="eager"
                                 decoding="async"
                                 fetchPriority="high"
                               />
                             </div>
                            <span className="sr-only">Press ESC to close</span>
                            <DialogClose
                              aria-label="Close image viewer"
                               className="absolute top-10 right-32 inline-flex items-center justify-center rounded-full w-14 h-14 bg-black/50 backdrop-blur-xl text-white hover:bg-black/60 transition-all shadow-glass-lg cursor-pointer ring-1 ring-white/20 hover:ring-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                            >
                              <span className="sr-only">Close</span>
                              <X className="w-7 h-7 md:w-8 md:h-8" />
                            </DialogClose>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    {/* Content (40% width on sm+ screens) */}
                    <div className={`m-16 w-full sm:basis-[40%] sm:max-w-[40%] ${textAlign} flex flex-col justify-center ${imageOnRight ? 'items-start' : 'items-end'}`}>
                      <div className={`flex flex-row items-center gap-3 mb-3`}>
                        <div className={`w-20 h-20 ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-glass-lg`}>
                          <benefit.icon className="w-24 h-10 text-white" />
                        </div>
                        <h4 className="display-5 text-center text-white" style={{ textShadow: '2px 2px 3px black' }}>
                          {benefit.title}
                        </h4>
                      </div>
                      <div className={`inline-block self-center bg-primary/25 text-blue-900 px-3 py-1 rounded-full text-lg text-center mb-4`}>
                        {benefit.metric}
                      </div>
                      <p className="display-6 text-black text-center leading-relaxed md:text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
                <br /><br />
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="display-5 pt-6">
              <span className="font-urdu-bold hero-text text-center block pb-3 pt-2.5 text-2xl">
                اب آپ بھی جدید امتحانی نظام اپنائیں
              </span><br />
              Ready to Modernize Your Exams?
            </h3>
            <p className="text-lg text-text-secondary mb-6">
              Schools across Pakistan are saving time, reducing costs, and building trust with <b>PaperMind AI</b>. Join the movement and see the difference for yourself.
            </p><br />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary px-8 py-4 rounded-2xl text-lg font-semibold neumorphism-button">
              🚀 Kick Off Your Free Trial
              </button>
              <button className="glass border-glass-border hover:bg-glass text-card-foreground px-8 py-4 rounded-2xl text-lg font-semibold neumorphism-button-outline">
              📖 Discover Success Journeys
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Eye, Target } from 'lucide-react';

export function VisionMissionSection() {
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
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10 floating" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-secondary rounded-2xl opacity-10 floating-delayed" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-urdu-bold pb-8 pt-2 hero-text text-center block mb-4 text-3xl md:text-5xl">
              ہمارا وژن اور مشن
          </h2>
          <p className="display-6 max-w-4xl mx-auto leading-relaxed">
            <span className="font-urdu text-center block mb-4 text-lg">
            ہم تعلیم کو جدید، محفوظ اور آسان بناتے ہیں
            </span>
            Our vision is to empower every school with secure, professional, and effortless exam creation — so you can focus on what matters: teaching and growth.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Vision Card */}
          <motion.div variants={itemVariants}>
            <GlassCard className="h-full neumorphism-card hover:shadow-glow transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-primary flex items-center justify-center mr-6 shadow-glass-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="display-6 text-left">
                    <span className="font-urdu-bold hero-text text-left block mb-1 pb-3 mt-2 text-2xl">
                      ہمارا وژن
                    </span>
                    Our Vision
                  </h3>
                </div>
                <p className="display-6 leading-relaxed text-lg">
                  <span className="font-urdu text-right block text-base">
                  مصنوعی ذہانت کے ذریعے ہراستاد کے ہاتھ میں عالمی معیار کے امتحانی آلات
                  </span> <br />
                  To revolutionize education in Pakistan by making high-quality, 
                  curriculum-aligned exam generation tool available at finger tips of the teachers, 
                  empowering them to focus on what matters most - <u>teaching and 
                  nurturing young minds while saving 14 hours weekly. </u>
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={itemVariants}>
            <GlassCard className="h-full neumorphism-card hover:shadow-glow transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-secondary flex items-center justify-center mr-6 shadow-glass-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="display-6 text-left">
                    <span className="font-urdu-bold hero-text text-left block mb-1 pb-3 mt-2 text-2xl">
                      ہمارا مشن
                    </span>
                    Our Mission
                  </h3>
                </div>
                <p className="display-6 leading-relaxed text-lg">
                  <span className="font-urdu text-right block text-base">
                  ذاتی نوعیت کے، نصابی اور بورڈ مخصوص پرچے چند لمحوں میں
                  </span>  <br />
                  We leverage cutting-edge AI technology to create personalized, 
                  board-specific test papers that align with Pakistani educational 
                  standards, supporting both Urdu and English mediums while improving 
                  student performance by 30% and reducing costs by PKR ~2.5M annually.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
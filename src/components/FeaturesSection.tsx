import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { BookOpen, Languages, Brain, CheckCircle, GraduationCap, Calculator, Microscope, Globe, FileText, Users, Zap, KeyRound, DollarSign, Award, Target } from 'lucide-react';

export function FeaturesSection() {
  // Replace features array with objections/counters
  const objections = [
    {
      icon: Users,
      objection: 'Our operator handles papers & other tasks.',
      counter: 'That’s exactly the problem as exam season eats up 70% of their time. With PaperMind AI, your operator is free to focus on fee collection, admissions, and parent communication, directly boosting your revenue. Why waste salary on typing when you can automate it and grow your school?' 
    },
    {
      icon: Brain,
      objection: 'What if the AI makes errors in Urdu or Math?',
      counter: 'Every paper is delivered as an editable DOCX. Your subject teacher can review in under 5 minutes, compared to 3–5 hours from scratch. 95% of the time, the output is error-free, and you always have the final say.'
    },
    {
      icon: KeyRound,
      objection: 'How would PaperMind AI handle a paper leak?',
      counter: 'Our system uses access controls, audit logs, and instant generation. No paper exists weeks in advance, so there’s no leak window. Every action is logged, giving you legal protection and peace of mind.'
    },
    {
      icon: DollarSign,
      objection: 'Why pay monthly? It’s expensive.',
      counter: 'The cost of replacing just one teacher lost to burnout is higher than a year of PaperMind AI. Even a single exam cycle’s savings in staff hours and error prevention pays for the service. It’s a profit center, not a cost.'
    },
    {
      icon: Award,
      objection: 'Do parents care about quality of assessments?',
      counter: 'Parents care about trust and presentation. Sending OMR results and professional-looking papers builds credibility and drives admissions. Your school’s image is your edge.'
    },
    {
      icon: Target,
      objection: 'Competitor schools will not adopt this.',
      counter: 'That’s your opportunity. If a competitor adopts first, you risk looking outdated. Early adopters gain the marketing edge and set the standard.'
    },
    {
      icon: CheckCircle,
      objection: 'What if BISE or regulators ban AI-generated papers?',
      counter: 'Our AI is a content generation tool, not an assessment authority. The final paper is always approved by your teacher and is 100% BISE-compliant. We power your workflow, not your academic decisions.'
    }
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
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-20 w-40 h-40 bg-gradient-primary rounded-full opacity-5 floating" />
        <div className="absolute bottom-1/4 right-20 w-32 h-32 bg-gradient-secondary rounded-2xl opacity-5 floating-delayed" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/20 rounded-full floating" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="display-4 mb-6">
            <span className="font-urdu-bold hero-text text-center block pb-8 pt-5 text-3xl md:text-5xl">
            آپ کے تحفظات کا حل
            </span>
            Things You May Want to Know
          </h2>
          {/* <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            <span className="font-urdu text-right block mb-4 text-lg">
              پاکستانی تعلیمی نظام کے لیے خصوصی طور پر تیار کردہ
            </span>
            Built specifically for Pakistani education system with comprehensive coverage and advanced AI capabilities
          </p> */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {objections.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="h-full neumorphism-card hover:shadow-glow transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glass-lg">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p style={{fontSize: "1.25rem"}} className="display-6 mt-2">
                        {item.objection}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-md font-bold text-primary mb-1">What we say is</h4>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {item.counter}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Academic Coverage Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="glass rounded-3xl p-8 max-w-6xl mx-auto">
            <h3 className="display-6 mb-6 text-center">
              <span className="font-urdu-bold hero-text text-center block mb-3 pb-3 pt-6 text-2xl">
                مکمل امتحانی حل
              </span>
              <b>All-in-One Academic Solution</b>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold double-underline text-primary mb-4">Subjects Covered</h4>
                <div className="space-y-2">
                  <div className="text-lg">Physics, Chemistry, Biology</div>
                  <div className="text-lg">Mathematics, English, Urdu</div>
                  <div className="text-lg">Islamiat, Pakistan Studies</div>
                  <div className="text-lg">Computer Science</div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold double-underline text-accent mb-4">Grade Levels</h4>
                <div className="space-y-2">
                  <div className="text-lg">Grade 9 and 10</div>
                  <div className="text-lg">FSc Pre-Engineering</div>
                  <div className="text-lg">FSc Pre-Medical</div>
                  <div className="text-lg">ICS, I.Com, F.A</div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold double-underline text-primary mb-4">Question Types</h4>
                <div className="space-y-2">
                  <div className="text-lg">Multiple Choice Questions</div>
                  <div className="text-lg">Short Answer Questions</div>
                  <div className="text-lg">Long Answer Questions</div>
                  <div className="text-lg">Practical Questions</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
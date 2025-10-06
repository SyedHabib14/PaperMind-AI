import { HeroSection } from '@/components/HeroSection';
import { VisionMissionSection } from '@/components/VisionMissionSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisionMissionSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialsSection />
      {/* <CTASection /> */}
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic Plan",
    features: [
      { text: "15 Test Papers", type: "unlocked" },
      { text: "9th–10th basic syllabus only", type: "unlocked" },
      { text: "Higher grades locked", type: "locked" },
    ],
    idealFor: "Small schools testing the system",
    price: "PKR 4,500",
  },
  {
    name: "Standard Plan",
    features: [
      { text: "60 Test Papers", type: "unlocked" },
      { text: "Full access for 9th & 10th", type: "unlocked" },
      { text: "FA & I.Com basics unlocked", type: "unlocked" },
      { text: "F.Sc & ICS locked", type: "locked" },
    ],
    idealFor: "Mid-tier schools",
    price: "PKR 8,500",
  },
  {
    name: "Premium Plan",
    features: [
      { text: "120 Test Papers", type: "unlocked" },
      { text: "All classes & features unlocked", type: "unlocked" },
      { text: "Priority support", type: "unlocked" },
    ],
    idealFor: "Large schools & academies",
    price: "PKR 14,500",
  },
];

const PricingSection = () => {
  const handleChoosePlan = (planName: string) => {
    console.log(`Chosen plan: ${planName}`);
    // Add your logic here, e.g., redirect to payment or contact
  };

  return (
    <section
      id="pricing"
      className="py-16 px-4 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="display-1 text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-100 max-w-7xl mx-auto font-bold font-urdu">
  اپنے اسکول کے لیے موزوں پلان چُنیں کہ ہر پلان کے ساتھ خودکار، محفوظ اور پیشہ ورانہ امتحانی پرچے، جوابی شیٹس اور آسان پرنٹ کی سہولت شامل ہے۔
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              style={{ '--primary-glow': '255 255 255 / 0.4' } as any}
              className="frosted-card hover:glow transition-all duration-300 hover:scale-105 relative overflow-hidden min-h-[500px] flex flex-col"
            >
              {index === 0 && (
                <Badge
                  className="absolute top-4 right-4 border border-white rounded-full px-3 py-1 italic text-white bg-transparent cursor-default transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
                  style={{ userSelect: 'none' }}
                >
                  Free for 2 weeks
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-white">{plan.name}</CardTitle>
                <CardDescription className="display-6 text-sm text-gray-200">{plan.idealFor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-200"> / month</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 mt-20 justify-center">
                      {feature.type === 'unlocked' ? (
                        <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="h-6 w-6 text-red-400 flex-shrink-0" />
                      )}
                      <span className="display-6 text-white text-lg">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300"
                  onClick={() => handleChoosePlan(plan.name)}
                  aria-label={`Choose ${plan.name}`}
                >
                  Choose Plan
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm italic text-gray-300 max-w-3xl mx-auto">
            ◈ All plans include secure paper generation, OMR sheets, and Answer Keys.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

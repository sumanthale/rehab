import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Brain, 
  Heart, 
  Activity, 
  Utensils, 
  Users, 
  Stethoscope,
  X,
  ArrowRight,
  Sparkles,
  Shield,
  Target,
  Zap
} from 'lucide-react';

const RecoveryInfographic = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const recoveryAspects = [
    {
      id: 1,
      title: "Next-Gen Innovations",
      subtitle: "Redefining What's Possible",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      position: "top-left",
      description: "South India's only center offering non-invasive brain and spine stimulation — helping revive and restore lost functions in complex neuro cases. We also integrate hydrogen therapy, medical ozone, and evidence-based nutraceuticals to reduce inflammation and support healing at the cellular level.",
      features: [
        "Non-invasive brain stimulation",
        "Spinal cord stimulation therapy",
        "Hydrogen therapy protocols",
        "Medical ozone treatments",
        "Evidence-based nutraceuticals",
        "Cellular healing support"
      ],
      benefits: [
        "Restored neurological function",
        "Reduced inflammation",
        "Enhanced cellular repair",
        "Improved cognitive abilities"
      ]
    },
    {
      id: 2,
      title: "24x7 Critical & Emergency Care",
      subtitle: "Round-the-Clock Excellence",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      position: "top-center",
      description: "ICU-standard care, HDU-convertible suites, and round-the-clock critical care doctors and nursing teams — ensuring immediate intervention, safety, and stability at every stage of recovery.",
      features: [
        "ICU-standard monitoring",
        "HDU-convertible suites",
        "24/7 critical care doctors",
        "Specialized nursing teams",
        "Emergency response protocols",
        "Advanced life support systems"
      ],
      benefits: [
        "Immediate medical intervention",
        "Continuous patient monitoring",
        "Enhanced safety protocols",
        "Rapid emergency response"
      ]
    },
    {
      id: 3,
      title: "Advanced Physiotherapy",
      subtitle: "Led by Internationally Qualified Experts",
      icon: Activity,
      color: "from-green-500 to-emerald-600",
      position: "top-right",
      description: "Restore movement, strength, and balance — with advanced rehab protocols and first-in-South India technologies, led by internationally certified physiotherapy experts.",
      features: [
        "Advanced rehabilitation protocols",
        "Cutting-edge technology",
        "Internationally certified experts",
        "Movement restoration programs",
        "Strength building protocols",
        "Balance training systems"
      ],
      benefits: [
        "Improved mobility and strength",
        "Enhanced balance and coordination",
        "Faster recovery times",
        "Reduced disability levels"
      ]
    },
    {
      id: 4,
      title: "Personalised Diet & Nutrition Care",
      subtitle: "Tailored Nutritional Support",
      icon: Utensils,
      color: "from-orange-500 to-yellow-600",
      position: "bottom-left",
      description: "Our clinical nutritionists design personalized recovery diets aligned to your treatment goals, supported by nutraceutical protocols to reduce inflammation and aid healing. Every meal is freshly prepared in our in-house rehab kitchen, hygienically delivered, and tailored to your medical needs — every single day.",
      features: [
        "Clinical nutritionist consultations",
        "Personalized recovery diets",
        "Nutraceutical protocols",
        "In-house rehab kitchen",
        "Fresh meal preparation",
        "Medical-grade nutrition"
      ],
      benefits: [
        "Optimized healing nutrition",
        "Reduced inflammation",
        "Enhanced recovery speed",
        "Improved overall health"
      ]
    },
    {
      id: 5,
      title: "Rehabilitation Psychology & Emotional Wellbeing",
      subtitle: "Holistic Mental Health Support",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      position: "bottom-center",
      description: "Our rehabilitation psychologists provide structured therapy for trauma, anxiety and post-ICU/post surgery stress — supporting both patients and caregivers with evidence-based care that builds emotional resilience and long-term wellbeing.",
      features: [
        "Structured therapy programs",
        "Trauma counseling",
        "Anxiety management",
        "Post-ICU stress support",
        "Caregiver support programs",
        "Evidence-based interventions"
      ],
      benefits: [
        "Improved emotional resilience",
        "Reduced anxiety and stress",
        "Better coping mechanisms",
        "Enhanced family support"
      ]
    },
    {
      id: 6,
      title: "Functional Therapy Integration",
      subtitle: "Comprehensive Rehabilitation",
      icon: Stethoscope,
      color: "from-teal-500 to-green-600",
      position: "bottom-right",
      description: "A coordinated team of respiratory therapists, speech and swallowing specialists, and occupational therapists work together to improve breathing function, restore communication, and retrain essential daily skills — enabling smoother reintegration into independent life.",
      features: [
        "Respiratory therapy",
        "Speech and swallowing therapy",
        "Occupational therapy",
        "Breathing function improvement",
        "Communication restoration",
        "Daily skills training"
      ],
      benefits: [
        "Improved breathing function",
        "Restored communication abilities",
        "Enhanced daily living skills",
        "Greater independence"
      ]
    }
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'lg:col-start-1 lg:row-start-1';
      case 'top-center':
        return 'lg:col-start-2 lg:row-start-1';
      case 'top-right':
        return 'lg:col-start-3 lg:row-start-1';
      case 'bottom-left':
        return 'lg:col-start-1 lg:row-start-2';
      case 'bottom-center':
        return 'lg:col-start-2 lg:row-start-2';
      case 'bottom-right':
        return 'lg:col-start-3 lg:row-start-2';
      default:
        return '';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-dark-surface dark:via-dark-bg dark:to-primary-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-lavender-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            360° Recovery Approach
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Experience </span>
            <span className="bg-gradient-to-r from-primary-600 to-plum-700 bg-clip-text text-transparent">
              360° Recovery
            </span>
            <span className="text-gray-900 dark:text-white"> at Anantha</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where International Expertise, Breakthrough Therapies & Compassionate Care Converge
          </p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-8 mb-16">
          {recoveryAspects.map((aspect, index) => (
            <motion.div
              key={aspect.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${getPositionClasses(aspect.position)} group cursor-pointer`}
              onClick={() => setSelectedCard(aspect.id)}
            >
              <div className="relative bg-white dark:bg-dark-bg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full group-hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${aspect.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Click indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${aspect.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <aspect.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {aspect.title}
                  </h3>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">
                    {aspect.subtitle}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
                    {aspect.description}
                  </p>
                  
                  {/* Click to learn more */}
                  <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                    <span>Click to learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { icon: Target, label: 'Recovery Success Rate', value: '95%', color: 'from-green-400 to-emerald-500' },
            { icon: Shield, label: 'Patient Safety Score', value: '100%', color: 'from-blue-400 to-cyan-500' },
            { icon: Users, label: 'Expert Specialists', value: '50+', color: 'from-purple-400 to-violet-500' },
            { icon: Zap, label: 'Advanced Technologies', value: '25+', color: 'from-orange-400 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-dark-bg rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const aspect = recoveryAspects.find(a => a.id === selectedCard);
                if (!aspect) return null;

                return (
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center space-x-4">
                        <div className={`w-20 h-20 bg-gradient-to-br ${aspect.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <aspect.icon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {aspect.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {aspect.subtitle}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedCard(null)}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                          Overview
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {aspect.description}
                        </p>

                        {/* Features */}
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                          Key Features
                        </h4>
                        <div className="space-y-3">
                          {aspect.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${aspect.color} rounded-full`} />
                              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                          Benefits & Outcomes
                        </h4>
                        <div className="space-y-4">
                          {aspect.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-dark-surface p-4 rounded-xl">
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 bg-gradient-to-br ${aspect.color} rounded-lg flex items-center justify-center`}>
                                  <Target className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-lavender-50 dark:from-primary-900/20 dark:to-lavender-900/20 rounded-2xl border border-primary-100 dark:border-primary-800">
                          <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Ready to Experience This Care?
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Schedule a consultation to learn more about how this specialized care can benefit your recovery.
                          </p>
                          <button className="w-full bg-gradient-to-r from-primary-600 to-plum-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-primary-700 hover:to-plum-800 transition-all duration-200">
                            Schedule Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecoveryInfographic;
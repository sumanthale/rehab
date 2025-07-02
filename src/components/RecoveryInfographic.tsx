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
  Zap,
  CheckCircle,
  Star,
  Play,
  Award,
  Clock,
  TrendingUp
} from 'lucide-react';

const RecoveryInfographic = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const recoveryAspects = [
    {
      id: 1,
      title: "Next-Gen Innovations",
      subtitle: "Redefining What's Possible",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      position: { top: '10%', left: '50%', transform: 'translateX(-50%)' },
      angle: 0,
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
      ],
      stats: { successRate: '92%', patients: '2000+', satisfaction: '98%' }
    },
    {
      id: 2,
      title: "24x7 Critical & Emergency Care",
      subtitle: "Round-the-Clock Excellence",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      position: { top: '25%', right: '15%' },
      angle: 60,
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
      ],
      stats: { successRate: '99%', patients: '5000+', satisfaction: '100%' }
    },
    {
      id: 3,
      title: "Advanced Physiotherapy",
      subtitle: "Led by Internationally Qualified Experts",
      icon: Activity,
      color: "from-green-500 to-emerald-600",
      position: { bottom: '25%', right: '15%' },
      angle: 120,
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
      ],
      stats: { successRate: '95%', patients: '8000+', satisfaction: '97%' }
    },
    {
      id: 4,
      title: "Personalised Diet & Nutrition Care",
      subtitle: "Tailored Nutritional Support",
      icon: Utensils,
      color: "from-orange-500 to-yellow-600",
      position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
      angle: 180,
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
      ],
      stats: { successRate: '94%', patients: '6000+', satisfaction: '96%' }
    },
    {
      id: 5,
      title: "Rehabilitation Psychology & Emotional Wellbeing",
      subtitle: "Holistic Mental Health Support",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      position: { bottom: '25%', left: '15%' },
      angle: 240,
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
      ],
      stats: { successRate: '91%', patients: '4000+', satisfaction: '95%' }
    },
    {
      id: 6,
      title: "Functional Therapy Integration",
      subtitle: "Comprehensive Rehabilitation",
      icon: Stethoscope,
      color: "from-teal-500 to-green-600",
      position: { top: '25%', left: '15%' },
      angle: 300,
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
      ],
      stats: { successRate: '93%', patients: '7000+', satisfaction: '94%' }
    }
  ];

  const centerStats = [
    { icon: Target, label: 'Overall Success Rate', value: '95%', color: 'from-green-400 to-emerald-500' },
    { icon: Shield, label: 'Patient Safety Score', value: '100%', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, label: 'Expert Specialists', value: '50+', color: 'from-purple-400 to-violet-500' },
    { icon: Zap, label: 'Advanced Technologies', value: '25+', color: 'from-orange-400 to-red-500' }
  ];

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
            360° Recovery Ecosystem
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

        {/* Interactive Infographic */}
        <div className="relative flex items-center justify-center min-h-[800px] mb-16">
          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-20 w-80 h-80 bg-white dark:bg-dark-bg rounded-full shadow-2xl border-4 border-primary-200 dark:border-primary-800 flex flex-col items-center justify-center"
          >
            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-plum-500 opacity-20 animate-spin" style={{ animationDuration: '20s' }} />
            
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-plum-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Integrated Care
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Comprehensive healing ecosystem
              </p>
              
              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-3">
                {centerStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-8 h-8 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-1`}>
                      <stat.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.label.split(' ')[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 800 800">
            {recoveryAspects.map((aspect, index) => {
              const centerX = 400;
              const centerY = 400;
              const radius = 280;
              const angle = (index * 60) * (Math.PI / 180);
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              
              return (
                <motion.line
                  key={aspect.id}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className={hoveredCard === aspect.id ? 'opacity-80' : 'opacity-30'}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9966CC" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>

          {/* Recovery Aspect Cards */}
          {recoveryAspects.map((aspect, index) => {
            const radius = 280;
            const angle = (index * 60) * (Math.PI / 180);
            const x = 50 + (radius * Math.cos(angle)) / 8;
            const y = 50 + (radius * Math.sin(angle)) / 8;
            
            return (
              <motion.div
                key={aspect.id}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                className="absolute cursor-pointer group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedCard(aspect.id)}
                onMouseEnter={() => setHoveredCard(aspect.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative">
                  {/* Pulsing Ring */}
                  <div className={`absolute inset-0 w-32 h-32 bg-gradient-to-br ${aspect.color} rounded-full opacity-20 animate-ping group-hover:animate-pulse`} />
                  
                  {/* Main Card */}
                  <div className={`relative w-32 h-32 bg-gradient-to-br ${aspect.color} rounded-full shadow-2xl flex flex-col items-center justify-center text-white group-hover:shadow-3xl transition-all duration-300`}>
                    <aspect.icon className="w-8 h-8 mb-2" />
                    <div className="text-xs font-bold text-center px-2 leading-tight">
                      {aspect.title.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>

                  {/* Floating Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredCard === aspect.id ? 1 : 0,
                      y: hoveredCard === aspect.id ? -10 : 10
                    }}
                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-dark-bg px-4 py-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap"
                  >
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {aspect.title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Click to explore
                    </div>
                  </motion.div>

                  {/* Success Rate Badge */}
                  <div className="absolute -top-2 -right-2 bg-white dark:bg-dark-bg text-green-600 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-green-200 dark:border-green-800">
                    {aspect.stats.successRate}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {centerStats.map((stat, index) => (
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

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-white dark:bg-dark-bg rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const aspect = recoveryAspects.find(a => a.id === selectedCard);
                if (!aspect) return null;

                return (
                  <div>
                    {/* Header */}
                    <div className={`relative bg-gradient-to-br ${aspect.color} p-8 text-white overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full" />
                        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full" />
                      </div>
                      
                      <div className="relative z-10 flex items-start justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <aspect.icon className="w-10 h-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{aspect.title}</h3>
                            <p className="text-xl text-white/90">{aspect.subtitle}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedCard(null)}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>
                      </div>

                      {/* Stats Bar */}
                      <div className="grid grid-cols-3 gap-6 mt-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{aspect.stats.successRate}</div>
                          <div className="text-white/80 text-sm">Success Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">{aspect.stats.patients}</div>
                          <div className="text-white/80 text-sm">Patients Treated</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">{aspect.stats.satisfaction}</div>
                          <div className="text-white/80 text-sm">Satisfaction Rate</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Description and Features */}
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                              Overview
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                              {aspect.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                              <Star className="w-5 h-5 text-yellow-500 mr-2" />
                              Key Features
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {aspect.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-dark-surface rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Benefits and CTA */}
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                              <Target className="w-5 h-5 text-primary-600 mr-2" />
                              Expected Benefits
                            </h4>
                            <div className="space-y-4">
                              {aspect.benefits.map((benefit, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className={`p-4 bg-gradient-to-r ${aspect.color} bg-opacity-10 rounded-xl border-l-4 border-current`}
                                  style={{ borderColor: `var(--tw-gradient-from)` }}
                                >
                                  <div className="flex items-center space-x-3">
                                    <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Video/Demo Section */}
                          <div className="bg-gray-50 dark:bg-dark-surface p-6 rounded-2xl">
                            <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                              <Play className="w-5 h-5 text-primary-600 mr-2" />
                              See It In Action
                            </h5>
                            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                              <div className="text-center">
                                <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-500 dark:text-gray-400">Treatment Demo Video</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Watch how our {aspect.title.toLowerCase()} program works in practice
                            </p>
                          </div>

                          {/* CTA Section */}
                          <div className={`bg-gradient-to-r ${aspect.color} p-6 rounded-2xl text-white`}>
                            <h5 className="text-xl font-bold mb-3">
                              Ready to Experience This Care?
                            </h5>
                            <p className="text-white/90 mb-6">
                              Schedule a consultation to learn more about how this specialized care can benefit your recovery.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <button className="flex-1 bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                Schedule Consultation
                              </button>
                              <button className="flex-1 border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors duration-200 flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 mr-2" />
                                Learn More
                              </button>
                            </div>
                          </div>
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
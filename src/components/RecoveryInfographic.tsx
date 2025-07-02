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
  Calendar,
  TrendingUp
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
      bgColor: "bg-purple-500",
      lightColor: "bg-purple-100",
      textColor: "text-purple-600",
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
      bgColor: "bg-red-500",
      lightColor: "bg-red-100",
      textColor: "text-red-600",
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
      bgColor: "bg-green-500",
      lightColor: "bg-green-100",
      textColor: "text-green-600",
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
      bgColor: "bg-orange-500",
      lightColor: "bg-orange-100",
      textColor: "text-orange-600",
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
      bgColor: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-600",
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
      bgColor: "bg-teal-500",
      lightColor: "bg-teal-100",
      textColor: "text-teal-600",
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

        {/* Hexagonal Infographic */}
        <div className="relative flex items-center justify-center min-h-[900px] mb-16">
          {/* SVG Container for the hexagon and connecting lines */}
          <svg 
            className="absolute inset-0 w-full h-full z-10" 
            viewBox="0 0 1000 800"
            style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
          >
            {/* Define gradients */}
            <defs>
              <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
              <linearGradient id="hexGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="hexGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="hexGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="hexGradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>

            {/* Central Hexagon */}
            <motion.polygon
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              points="500,250 600,300 600,400 500,450 400,400 400,300"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="3"
              className="drop-shadow-lg"
            />

            {/* Hexagon sides with gradients */}
            {[
              { points: "500,250 600,300 600,400 500,350", gradient: "url(#hexGradient1)" },
              { points: "600,300 600,400 500,450 500,350", gradient: "url(#hexGradient2)" },
              { points: "500,450 400,400 400,300 500,350", gradient: "url(#hexGradient3)" },
              { points: "400,400 400,300 500,250 500,350", gradient: "url(#hexGradient4)" },
              { points: "500,250 600,300 500,350 400,300", gradient: "url(#hexGradient5)" },
              { points: "600,400 500,450 400,400 500,350", gradient: "url(#hexGradient6)" }
            ].map((side, index) => (
              <motion.polygon
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                points={side.points}
                fill={side.gradient}
              />
            ))}

            {/* Connecting lines to external elements */}
            {recoveryAspects.map((aspect, index) => {
              const angles = [0, 60, 120, 180, 240, 300];
              const angle = angles[index] * (Math.PI / 180);
              const hexRadius = 100;
              const lineLength = 180;
              
              const hexX = 500 + hexRadius * Math.cos(angle);
              const hexY = 350 + hexRadius * Math.sin(angle);
              const endX = 500 + lineLength * Math.cos(angle);
              const endY = 350 + lineLength * Math.sin(angle);

              return (
                <motion.g key={aspect.id}>
                  {/* Connection line */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    x1={hexX}
                    y1={hexY}
                    x2={endX}
                    y2={endY}
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Connection point on hexagon */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    cx={hexX}
                    cy={hexY}
                    r="6"
                    fill="#6b7280"
                  />
                  
                  {/* External connection point */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    cx={endX}
                    cy={endY}
                    r="8"
                    fill="white"
                    stroke={aspect.bgColor.replace('bg-', '#')}
                    strokeWidth="3"
                    className="cursor-pointer hover:scale-125 transition-transform duration-200"
                    onClick={() => setSelectedCard(aspect.id)}
                  />
                </motion.g>
              );
            })}
          </svg>

          {/* Central Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute z-20 text-center"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                RECOVERY
              </h3>
              <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                ECOSYSTEM
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">95%</div>
                  <div className="text-gray-500 text-xs">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">50+</div>
                  <div className="text-gray-500 text-xs">Specialists</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">10K+</div>
                  <div className="text-gray-500 text-xs">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">24/7</div>
                  <div className="text-gray-500 text-xs">Care</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* External Data Cards */}
          {recoveryAspects.map((aspect, index) => {
            const angles = [0, 60, 120, 180, 240, 300];
            const angle = angles[index] * (Math.PI / 180);
            const radius = 320;
            
            const x = 50 + (radius * Math.cos(angle)) / 10;
            const y = 50 + (radius * Math.sin(angle)) / 10;

            // Determine text alignment based on position
            const isLeft = angle > Math.PI / 2 && angle < 3 * Math.PI / 2;
            const isTop = angle > Math.PI;

            return (
              <motion.div
                key={aspect.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.15 }}
                className="absolute cursor-pointer group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedCard(aspect.id)}
              >
                <div className={`max-w-xs p-6 bg-white dark:bg-dark-bg rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 ${isLeft ? 'text-right' : 'text-left'}`}>
                  {/* Header */}
                  <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-12 h-12 ${aspect.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <aspect.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={isLeft ? 'text-right' : 'text-left'}>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {aspect.title.toUpperCase()}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-4">
                    {aspect.description.substring(0, 120)}...
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between items-center text-xs">
                    <div className={`${aspect.textColor} font-semibold`}>
                      {aspect.stats.successRate} Success Rate
                    </div>
                    <div className="text-gray-500">
                      {aspect.stats.patients} Treated
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className={`mt-3 text-xs ${aspect.textColor} font-medium flex items-center gap-1 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    <span>Click to explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Floating icon */}
                <div className={`absolute ${isTop ? 'bottom-full mb-4' : 'top-full mt-4'} ${isLeft ? 'right-0' : 'left-0'}`}>
                  <div className={`w-16 h-16 ${aspect.lightColor} rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300`}>
                    <aspect.icon className={`w-8 h-8 ${aspect.textColor}`} />
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
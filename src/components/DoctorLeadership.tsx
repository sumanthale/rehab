import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  Users, 
  Heart, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Stethoscope,
  Brain,
  Activity,
  Shield,
  Target,
  Calendar,
  Phone,
  Quote,
  Globe,
  BookOpen,
  Zap,
  TrendingUp,
  Eye,
  Microscope,
  UserCheck,
  Sparkles,
  Play,
  Clock,
  MapPin
} from 'lucide-react';
import { useState } from 'react';

const DoctorLeadership = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const doctorCredentials = [
    {
      icon: Award,
      title: 'Gold Medalist',
      subtitle: 'Manipal University',
      description: 'Academic excellence in medical education',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: GraduationCap,
      title: 'Masters in Pain Medicine',
      subtitle: 'University of South Wales (UK)',
      description: 'International qualification in pain management',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Globe,
      title: 'Fellow - Indian Academy',
      subtitle: 'Pain Medicine (EDRA Europe)',
      description: 'Recognized expertise in interventional procedures',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Zap,
      title: 'Licensed in Cooled RFA',
      subtitle: 'Rare credential in India',
      description: 'Advanced radiofrequency ablation techniques',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const healingProcess = [
    {
      step: 1,
      title: 'Comprehensive Assessment',
      subtitle: 'In-depth consultation with Dr. Anusha',
      duration: '60-90 minutes',
      icon: Stethoscope,
      description: 'Detailed medical history, physical examination, and personalized evaluation by India\'s most qualified pain physician.',
      highlights: [
        'Complete medical history review',
        'Comprehensive physical examination',
        'Pain assessment and analysis',
        'Treatment goal discussion'
      ]
    },
    {
      step: 2,
      title: 'Advanced Diagnostics',
      subtitle: 'Precision imaging and analysis',
      duration: '30-60 minutes',
      icon: Eye,
      description: 'State-of-the-art diagnostic tools including C-Arm and Ultrasound for precise identification of pain sources.',
      highlights: [
        'C-Arm guided imaging',
        'Real-time ultrasound guidance',
        'Advanced diagnostic protocols',
        'Precise pain localization'
      ]
    },
    {
      step: 3,
      title: 'Targeted Interventions',
      subtitle: 'Non-surgical pain relief procedures',
      duration: '45-120 minutes',
      icon: Microscope,
      description: 'Advanced procedures including RFA, PRP, and targeted nerve blocks for optimal pain relief without surgery.',
      highlights: [
        'Cooled Radiofrequency Ablation',
        'Platelet-Rich Plasma therapy',
        'Precision nerve blocks',
        'Minimally invasive techniques'
      ]
    },
    {
      step: 4,
      title: 'Holistic Recovery',
      subtitle: 'Comprehensive rehabilitation support',
      duration: 'Ongoing',
      icon: Heart,
      description: 'Integrated care including physiotherapy, nutrition counseling, and psychological support for complete healing.',
      highlights: [
        'Personalized physiotherapy',
        'Clinical nutrition planning',
        'Psychological counseling',
        'Lifestyle modification guidance'
      ]
    }
  ];

  const achievements = [
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '10K+', label: 'Patients Treated', icon: Users },
    { value: '95%', label: 'Success Rate', icon: Target },
    { value: '100%', label: 'Personal Care', icon: Heart }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-dark-surface dark:via-dark-bg dark:to-blue-900/10 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Expert Leadership</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Meet </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
              Dr. Anusha Karumuri
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            India's most qualified interventional pain physician, leading your personalized journey to recovery
          </p>
        </motion.div>

        {/* Doctor Profile Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Doctor Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              {/* Doctor Image Placeholder */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Dr. Anusha Karumuri
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Director & Pain Medicine Specialist
                    </p>
                  </div>
                </div>
                
                {/* Achievement Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Gold Medalist
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-gray-50 dark:bg-dark-surface rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <achievement.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Credentials and Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Credentials */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Exceptional Qualifications
              </h3>
              
              {doctorCredentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start space-x-4 p-6 bg-white dark:bg-dark-bg rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`w-12 h-12 bg-gradient-to-br ${credential.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <credential.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                        {credential.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                        {credential.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-3xl border border-blue-200 dark:border-blue-800">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-blue-300 dark:text-blue-700" />
              <div className="relative z-10 pl-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
                  "Pain shouldn't define your life. With the right diagnosis and advanced care, 
                  we help you move freely again — without depending on surgery or painkillers."
                </p>
                <p className="font-semibold text-blue-700 dark:text-blue-300">
                  - Dr. Anusha Karumuri
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Healing Process Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
              <Target className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Our Process</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Your Journey to </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pain-Free Living
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic, personalized approach to diagnosis, treatment, and recovery
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-4 gap-8">
            {healingProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveProcess(index)}
              >
                <div className={`relative bg-white dark:bg-dark-bg rounded-3xl p-8 shadow-lg border transition-all duration-500 ${
                  activeProcess === index 
                    ? 'border-blue-200 dark:border-blue-800 shadow-xl -translate-y-2' 
                    : 'border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1'
                }`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                      activeProcess === index 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeProcess === index 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110' 
                      : 'bg-gray-100 dark:bg-gray-700 group-hover:scale-105'
                  }`}>
                    <step.icon className={`w-8 h-8 transition-colors duration-300 ${
                      activeProcess === index ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                        {step.subtitle}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        {step.duration}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {step.highlights.slice(0, activeProcess === index ? 4 : 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                      {step.highlights.length > 2 && activeProcess !== index && (
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          +{step.highlights.length - 2} more details
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Your Recovery Today
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Dr. Anusha's Expert Care
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Take the first step towards a pain-free life with India's most qualified 
                interventional pain physician and our comprehensive care team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 98898 85052
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Banjara Hills, Hyderabad</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorLeadership;
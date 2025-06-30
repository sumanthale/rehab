import { motion } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

const DoctorLeadership = () => {
  const [activeStep, setActiveStep] = useState(0);

  const doctorCredentials = [
    {
      icon: Award,
      title: 'Gold Medalist',
      description: 'Manipal University',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: GraduationCap,
      title: 'Masters in Pain Medicine',
      description: 'University of South Wales (UK)',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Fellow - Indian Academy of Pain Medicine',
      description: 'EDRA (Europe)',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Zap,
      title: 'Licensed in Cooled RFA',
      description: 'Rare credential in India',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: '10,000+ Patients Treated',
      description: 'With compassion, precision, and care',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const healingSteps = [
    {
      step: 1,
      title: 'In-Depth Consultation with Dr. Anusha',
      description: 'Comprehensive assessment and personalized evaluation by India\'s most qualified pain physician',
      icon: Stethoscope,
      duration: '60-90 minutes',
      details: [
        'Detailed medical history review',
        'Physical examination and pain assessment',
        'Discussion of symptoms and lifestyle factors',
        'Initial treatment plan development'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Advanced Imaging & Diagnosis',
      description: 'State-of-the-art diagnostic tools including C-Arm and Ultrasound for precise identification',
      icon: Eye,
      duration: '30-60 minutes',
      details: [
        'C-Arm guided imaging',
        'Real-time ultrasound guidance',
        'Advanced diagnostic protocols',
        'Precise pain source identification'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      step: 3,
      title: 'Non-Surgical Interventions',
      description: 'Advanced procedures including RFA, PRP, and targeted nerve blocks for optimal pain relief',
      icon: Microscope,
      duration: '45-120 minutes',
      details: [
        'Cooled Radiofrequency Ablation (RFA)',
        'Platelet-Rich Plasma (PRP) therapy',
        'Precision nerve blocks',
        'Minimally invasive procedures'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 4,
      title: 'Recovery Support',
      description: 'Comprehensive rehabilitation including physiotherapy, nutrition, psychology, and rehab',
      icon: Heart,
      duration: 'Ongoing',
      details: [
        'Personalized physiotherapy programs',
        'Clinical nutrition planning',
        'Psychological support and counseling',
        'Comprehensive rehabilitation protocols'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      step: 5,
      title: 'Integrated Care Team',
      description: 'Multidisciplinary collaboration ensuring comprehensive and coordinated healing',
      icon: UserCheck,
      duration: 'Throughout journey',
      details: [
        'In-house orthopedic surgeons',
        'Expert physiotherapists',
        'Clinical dietitians',
        'Rehabilitation psychologists'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const achievements = [
    { value: '15+', label: 'Years Experience' },
    { value: '10K+', label: 'Patients Treated' },
    { value: '95%', label: 'Success Rate' },
    { value: '100%', label: 'Personal Care' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-dark-surface dark:via-dark-bg dark:to-primary-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary-300 to-lavender-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Doctor Section */}
        <div className="mb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl rounded-full border border-primary-200 dark:border-primary-800 shadow-lg mb-8">
              <Award className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
              <span className="text-primary-700 dark:text-primary-300 font-semibold">Meet Our Leader</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Meet </span>
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-plum-700 bg-clip-text text-transparent">
                Dr. Anusha Karumuri
              </span>
            </h2>
            
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              India's Highest Qualified Interventional Pain Physician
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Doctor Image and Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-gray-700/50">
                {/* Doctor Image Placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary-100 to-lavender-100 dark:from-primary-900/30 dark:to-lavender-900/30 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-plum-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Stethoscope className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Dr. Anusha Karumuri
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Professional Portrait
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating Achievement Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Gold Medalist
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 dark:bg-dark-surface rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Credential Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-bg p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">UK Qualified</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">University of South Wales</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-white dark:bg-dark-bg p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">RFA Licensed</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Rare in India</div>
              </motion.div>
            </motion.div>

            {/* Credentials and Quote */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Credentials Grid */}
              <div className="space-y-6">
                {doctorCredentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-dark-bg/60 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${credential.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <credential.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{credential.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{credential.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote Section */}
              <div className="relative bg-gradient-to-br from-primary-50 to-lavender-50 dark:from-primary-900/20 dark:to-lavender-900/20 p-8 rounded-3xl border border-primary-200 dark:border-primary-800">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary-300 dark:text-primary-700" />
                <div className="relative z-10">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4 pl-8">
                    "Pain shouldn't define your life. With the right diagnosis and advanced care, 
                    we help you move freely again — without depending on surgery or painkillers."
                  </p>
                  <div className="pl-8">
                    <p className="font-semibold text-primary-700 dark:text-primary-300">
                      - Dr. Anusha Karumuri
                    </p>
                  </div>
                </div>
              </div>

              {/* Unique Approach */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Personal Leadership Guarantee
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Unlike most clinics, Dr. Anusha personally leads every treatment plan — 
                      not delegated to junior doctors or assistants.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Healing Process Section */}
        <div>
          {/* Process Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl rounded-full border border-primary-200 dark:border-primary-800 shadow-lg mb-8">
              <Target className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
              <span className="text-primary-700 dark:text-primary-300 font-semibold">Our Healing Process</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">🧭 How We Help You </span>
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-plum-700 bg-clip-text text-transparent">
                Heal
              </span>
              <span className="text-gray-900 dark:text-white"> — Step-by-Step</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Anantha, pain care is never fragmented. It's a multidisciplinary approach — tailored for you.
            </p>
          </motion.div>

          {/* Interactive Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-primary-200 via-purple-200 to-plum-200 dark:from-primary-800 dark:via-purple-800 dark:to-plum-800 hidden lg:block rounded-full" />
            
            <div className="space-y-8">
              {healingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-8">
                    {/* Step Number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl ${activeStep === index ? 'scale-110' : ''} transition-transform duration-300`}>
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className={`bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 ${activeStep === index ? 'scale-105 shadow-2xl' : ''}`}>
                        <div className="grid lg:grid-cols-3 gap-8 items-start">
                          {/* Main Content */}
                          <div className="lg:col-span-2">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                                <step.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                  {step.title}
                                </h3>
                                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span>Duration: {step.duration}</span>
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              {step.description}
                            </p>
                            
                            {/* Details Grid */}
                            <div className="grid sm:grid-cols-2 gap-3">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Visual Element */}
                          <div className="lg:col-span-1">
                            <div className={`aspect-square bg-gradient-to-br ${step.color} opacity-10 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                              <step.icon className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-primary-600 via-purple-600 to-plum-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Comprehensive Care Ecosystem
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Dr. Anusha's Personal Care
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                From initial consultation to complete recovery, Dr. Anusha personally oversees 
                every aspect of your healing journey with our integrated multidisciplinary team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Consultation with Dr. Anusha
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorLeadership;
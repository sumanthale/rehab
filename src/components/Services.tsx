import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Bone, 
  Heart, 
  Settings as Lungs, 
  Users, 
  Baby, 
  ArrowRight, 
  Zap,
  Star,
  Clock,
  Award,
  Shield,
  CheckCircle,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 1,
      icon: Brain,
      title: 'Neuro Rehabilitation',
      category: 'rehabilitation',
      description: 'Comprehensive recovery programs for stroke, spinal cord injuries, and neurological conditions with cutting-edge technology',
      features: ['Stroke Recovery', 'Spinal Cord Injury', 'Traumatic Brain Injury', 'Multiple Sclerosis'],
      gradient: 'from-blue-500 to-indigo-600',
      stats: { successRate: '92%', patients: '2000+', duration: '3-6 months' },
      highlight: 'Most Advanced',
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      icon: Bone,
      title: 'Orthopedic Rehabilitation',
      category: 'rehabilitation',
      description: 'Advanced therapy for joint replacements, fractures, and musculoskeletal disorders with personalized treatment plans',
      features: ['Joint Replacement', 'Sports Injuries', 'Fracture Recovery', 'Arthritis Management'],
      gradient: 'from-green-500 to-emerald-600',
      stats: { successRate: '95%', patients: '3000+', duration: '2-4 months' },
      highlight: 'Fastest Recovery',
      image: 'https://images.pexels.com/photos/7176024/pexels-photo-7176024.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      icon: Heart,
      title: 'Cardiac Rehabilitation',
      category: 'rehabilitation',
      description: 'Specialized programs for heart attack recovery and cardiovascular health improvement with 24/7 monitoring',
      features: ['Post-Heart Attack', 'Cardiac Surgery Recovery', 'Heart Failure Management', 'Prevention Programs'],
      gradient: 'from-red-500 to-pink-600',
      stats: { successRate: '94%', patients: '1500+', duration: '3-6 months' },
      highlight: 'Life Saving',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      icon: Lungs,
      title: 'Pulmonary Rehabilitation',
      category: 'rehabilitation',
      description: 'Breathing therapy and lung function improvement for respiratory conditions including post-COVID recovery',
      features: ['COPD Management', 'Post-COVID Recovery', 'Asthma Control', 'Breathing Techniques'],
      gradient: 'from-cyan-500 to-blue-600',
      stats: { successRate: '89%', patients: '1200+', duration: '2-4 months' },
      highlight: 'Post-COVID Expert',
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      icon: Users,
      title: 'Geriatric Care',
      category: 'specialized',
      description: 'Specialized rehabilitation services tailored for elderly patients and age-related conditions with compassionate care',
      features: ['Fall Prevention', 'Mobility Enhancement', 'Cognitive Health', 'Balance Training'],
      gradient: 'from-purple-500 to-violet-600',
      stats: { successRate: '91%', patients: '2500+', duration: '1-3 months' },
      highlight: 'Age Specialized',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      icon: Baby,
      title: 'Pediatric Rehabilitation',
      category: 'specialized',
      description: 'Comprehensive therapy programs designed specifically for children and adolescents with developmental needs',
      features: ['Developmental Delays', 'Cerebral Palsy', 'Learning Disabilities', 'Autism Support'],
      gradient: 'from-orange-500 to-red-600',
      stats: { successRate: '88%', patients: '800+', duration: '6-12 months' },
      highlight: 'Child Friendly',
      image: 'https://images.pexels.com/photos/7176024/pexels-photo-7176024.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const painManagement = {
    title: 'Advanced Pain Management Clinic',
    subtitle: 'Led by Dr. Anusha Karumuri - Pain Medicine Specialist',
    description: 'Our specialized pain clinic offers cutting-edge, non-surgical treatments for chronic pain conditions using the latest evidence-based approaches.',
    treatments: [
      'Interventional Pain Procedures',
      'Chronic Pain Management',
      'Cancer Pain Relief',
      'Neuropathic Pain Treatment',
      'Regenerative Medicine',
      'Minimally Invasive Procedures',
    ],
    stats: { successRate: '95%', patients: '5000+', satisfaction: '99%' }
  };

  const categories = [
    { id: 'all', label: 'All Services', icon: Star },
    { id: 'rehabilitation', label: 'Rehabilitation', icon: TrendingUp },
    { id: 'specialized', label: 'Specialized Care', icon: Target },
    { id: 'pain', label: 'Pain Management', icon: Zap }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const overallStats = [
    { icon: Award, label: 'Success Rate', value: '95%', color: 'from-green-400 to-emerald-500' },
    { icon: Users, label: 'Patients Treated', value: '10K+', color: 'from-blue-400 to-cyan-500' },
    { icon: Shield, label: 'Safety Score', value: '100%', color: 'from-purple-400 to-violet-500' },
    { icon: Clock, label: 'Years Experience', value: '15+', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary-50/30 dark:from-dark-bg dark:via-dark-surface dark:to-primary-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Rehabilitation Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From neurological recovery to pain management, we offer specialized care 
            across all major rehabilitation disciplines under one roof.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {overallStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-dark-bg rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative bg-white dark:bg-dark-bg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:-translate-y-2">
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Highlight Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {service.highlight}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {service.stats.successRate}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {service.stats.patients}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Patients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {service.stats.duration}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, hoveredService === service.id ? 4 : 2).map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                      {service.features.length > 2 && hoveredService !== service.id && (
                        <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          +{service.features.length - 2} more specialties
                        </div>
                      )}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">4.9/5</span>
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pain Management Highlight */}
        {(activeCategory === 'all' || activeCategory === 'pain') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary-600 to-plum-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{painManagement.title}</h3>
                    <p className="text-primary-100 text-sm">{painManagement.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-primary-50 leading-relaxed">
                  {painManagement.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{painManagement.stats.successRate}</div>
                    <div className="text-primary-200 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{painManagement.stats.patients}</div>
                    <div className="text-primary-200 text-sm">Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{painManagement.stats.satisfaction}</div>
                    <div className="text-primary-200 text-sm">Satisfaction</div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {painManagement.treatments.map((treatment, idx) => (
                    <div key={idx} className="flex items-center text-primary-50">
                      <CheckCircle className="w-4 h-4 text-lavender-300 mr-3 flex-shrink-0" />
                      {treatment}
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
                >
                  Schedule Pain Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Advanced pain management therapy session"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-700 mb-1">95%</div>
                    <div className="text-sm text-gray-600">Pain Reduction</div>
                    <div className="flex items-center justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
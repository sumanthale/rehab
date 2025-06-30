import { motion } from 'framer-motion';
import { Check, X, Star, Award, Users, Clock, Heart, Shield, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState('advantages');

  const comparison = [
    { 
      feature: 'Medical Leadership', 
      anantha: 'India\'s most qualified pain physician leads your care', 
      others: 'Variable leadership quality',
      ananthaHas: true,
      othersHave: false
    },
    { 
      feature: 'Advanced Pain Technology', 
      anantha: 'Cooled RFA, PRP, Ultrasound-guided procedures', 
      others: 'Limited access to specialized equipment',
      ananthaHas: true,
      othersHave: false
    },
    { 
      feature: 'Hospital-Grade Infrastructure', 
      anantha: '65,000 sq. ft. centre with procedure rooms, diagnostics, and rehab suites', 
      others: 'Typically outpatient setups or shared spaces',
      ananthaHas: true,
      othersHave: false
    },
    { 
      feature: 'Multidisciplinary Team', 
      anantha: 'In-house ortho, physio, psychologist, diet & rehab experts working together', 
      others: 'Services often outsourced or referred externally',
      ananthaHas: true,
      othersHave: false
    },
    { 
      feature: 'Inpatient Pain Programs', 
      anantha: 'For cancer pain, spasticity, stroke, or unmanageable chronic pain', 
      others: 'Rarely available or not structured',
      ananthaHas: true,
      othersHave: false
    },
    { 
      feature: 'Holistic Care Approach', 
      anantha: 'Combines medical, emotional, physical, and lifestyle healing', 
      others: 'Focused primarily on clinical pain blocks or medications',
      ananthaHas: true,
      othersHave: false
    },
    { 
      feature: 'Patient-Centered Culture', 
      anantha: 'Personalized attention, longer consults, collaborative planning', 
      others: 'May rely on standardized protocols or short consults',
      ananthaHas: true,
      othersHave: false
    }
  ];

  const advantages = [
    {
      icon: Star,
      title: 'Clinical Excellence',
      description: 'Evidence-based treatments with proven outcomes and continuous quality improvement protocols',
      stat: '95% Success Rate',
      color: 'from-yellow-400 to-orange-500',
      benefits: ['Proven treatment protocols', 'Continuous quality monitoring', 'Research-backed approaches']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Board-certified specialists with decades of combined experience in rehabilitation medicine',
      stat: '50+ Specialists',
      color: 'from-blue-400 to-indigo-500',
      benefits: ['Board-certified doctors', 'Multidisciplinary approach', 'Ongoing medical education']
    },
    {
      icon: TrendingUp,
      title: 'Rapid Recovery',
      description: 'Accelerated healing protocols that reduce recovery time without compromising quality of care',
      stat: '40% Faster Recovery',
      color: 'from-green-400 to-emerald-500',
      benefits: ['Advanced therapy techniques', 'Personalized recovery plans', 'Progress tracking systems']
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Patient-centered approach with emotional support throughout the entire healing journey',
      stat: '99% Patient Satisfaction',
      color: 'from-pink-400 to-rose-500',
      benefits: ['Emotional support services', 'Family involvement programs', 'Holistic care approach']
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Rigorous safety protocols and infection control measures for complete peace of mind',
      stat: 'Zero Incidents',
      color: 'from-purple-400 to-violet-500',
      benefits: ['NABH accredited facility', 'Strict safety protocols', 'Advanced monitoring systems']
    },
    {
      icon: Award,
      title: 'Accredited Facility',
      description: 'Internationally recognized standards and certifications for quality healthcare delivery',
      stat: 'ISO Certified',
      color: 'from-cyan-400 to-blue-500',
      benefits: ['International standards', 'Quality certifications', 'Regular audits and assessments']
    },
  ];

  const keyDifferentiators = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Latest medical equipment and rehabilitation technologies for optimal outcomes',
      highlight: 'State-of-the-art facility'
    },
    {
      icon: Target,
      title: 'Personalized Care',
      description: 'Customized treatment plans tailored to individual patient needs and goals',
      highlight: 'Individual attention'
    },
    {
      icon: Clock,
      title: 'Comprehensive Support',
      description: '24/7 medical support with seamless care coordination across all departments',
      highlight: 'Round-the-clock care'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-dark-surface dark:via-dark-bg dark:to-primary-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            💡 What Makes Anantha Different?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference that specialized care, advanced technology, 
            and genuine compassion make in your recovery journey.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-dark-bg rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              {[
                { id: 'advantages', label: 'Our Advantages', icon: Star },
                { id: 'comparison', label: 'Comparison', icon: TrendingUp },
                { id: 'differentiators', label: 'Key Features', icon: Zap }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="relative">
          {/* Advantages Grid */}
          {activeTab === 'advantages' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white dark:bg-dark-bg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
                >
                  <div className="relative">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <advantage.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Stat badge */}
                    <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {advantage.stat}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {advantage.description}
                  </p>
                  
                  {/* Benefits list */}
                  <div className="space-y-2">
                    {advantage.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Comparison Table */}
          {activeTab === 'comparison' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-bg rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-plum-700 p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                  Anantha's Integrated Care vs. Other Pain Clinics
                </h3>
                <p className="text-primary-100 text-center">
                  See why we're the preferred choice for comprehensive pain management and rehabilitation
                </p>
              </div>

              {/* Table */}
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                        <th className="text-left py-6 text-gray-900 dark:text-white font-bold text-lg w-1/4">
                          What You Get
                        </th>
                        <th className="text-left py-6 text-primary-600 dark:text-primary-400 font-bold text-lg w-1/2">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 mr-2" />
                            Anantha's Integrated Care
                          </div>
                        </th>
                        <th className="text-left py-6 text-gray-500 dark:text-gray-400 font-bold text-lg w-1/4">
                          Other Pain Clinics
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-surface/50 transition-colors duration-200"
                        >
                          <td className="py-6 text-gray-700 dark:text-gray-300 font-semibold">
                            {item.feature}
                          </td>
                          <td className="py-6">
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                </div>
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {item.anantha}
                              </span>
                            </div>
                          </td>
                          <td className="py-6">
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-1">
                                {item.othersHave ? (
                                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                  </div>
                                ) : (
                                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                                    <X className="w-4 h-4 text-red-600 dark:text-red-400" />
                                  </div>
                                )}
                              </div>
                              <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.others}
                              </span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Summary Box */}
                <div className="mt-8 bg-gradient-to-r from-primary-50 to-lavender-50 dark:from-primary-900/20 dark:to-lavender-900/20 p-6 rounded-2xl border border-primary-200 dark:border-primary-800">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-plum-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        The Anantha Advantage
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Unlike traditional pain clinics that focus solely on procedures, Anantha offers a comprehensive 
                        ecosystem of care. Our integrated approach combines India's most qualified pain physicians, 
                        hospital-grade infrastructure, and a complete multidisciplinary team working together under one roof 
                        to deliver personalized, holistic healing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Key Differentiators */}
          {activeTab === 'differentiators' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {keyDifferentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-dark-bg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-lavender-50 dark:from-primary-900/10 dark:to-lavender-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-plum-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <div className="mb-4">
                        <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold px-3 py-1 rounded-full">
                          {item.highlight}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-plum-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Experience the Anantha Advantage Today
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of patients who have chosen Anantha Rehab for their recovery journey. 
                Discover why we're South India's most trusted rehabilitation center.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
              >
                Schedule Your Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
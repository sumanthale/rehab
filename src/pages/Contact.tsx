import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Send, 
  CheckCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  User,
  MessageSquare,
  Clock,
  ArrowRight,
  Shield,
  Award,
  Users,
  Star,
  Navigation,
  HeadphonesIcon,
  Building2,
  Globe,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import LotusIcon from '../components/LotusIcon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        service: '', 
        message: '',
        preferredDate: '',
        preferredTime: '',
      });
    }, 3000);
  };

  const services = [
    'Neuro Rehabilitation',
    'Orthopedic Rehabilitation', 
    'Pain Management',
    'Cardiac Rehabilitation',
    'Pulmonary Rehabilitation',
    'Pediatric Care',
    'Geriatric Care',
    'Transitional Care',
    'Palliative Care',
    'General Consultation'
  ];

  const faqs = [
    {
      question: 'What documents should I bring for my first visit?',
      answer: 'Please bring a valid ID, insurance cards, previous medical records, current medications list, and any relevant test results or imaging studies. Our team will guide you through the complete process.'
    },
    {
      question: 'Do you accept insurance and what are the payment options?',
      answer: 'Yes, we accept most major insurance plans including government schemes. We also offer flexible payment plans and cashless treatment options. Our billing team will verify your coverage before treatment.'
    },
    {
      question: 'How long is the typical consultation and treatment duration?',
      answer: 'Initial consultations last 60-90 minutes including comprehensive assessment. Treatment duration varies by condition - typically 4-12 weeks for most rehabilitation programs with personalized timelines.'
    },
    {
      question: 'Can family members accompany patients during treatment?',
      answer: 'Absolutely! We encourage family involvement as it\'s crucial for recovery. Family members can attend consultations, therapy sessions, and we provide family education programs.'
    },
    {
      question: 'What are your visiting hours and emergency services?',
      answer: 'Regular hours: Mon-Sat 8AM-8PM, Sun 9AM-5PM. Emergency services available 24/7. We also offer telemedicine consultations for follow-ups and non-urgent concerns.'
    },
    {
      question: 'How do I schedule an appointment and what\'s the waiting time?',
      answer: 'Schedule via phone (+91 98898 85052), online form, or walk-in. Emergency cases seen immediately. Regular appointments typically available within 24-48 hours.'
    },
    {
      question: 'Do you provide transportation and accommodation assistance?',
      answer: 'Yes, we offer ambulance services and can help arrange accommodation for outstation patients. We have partnerships with nearby hotels offering special rates for patient families.'
    },
    {
      question: 'What safety protocols do you follow?',
      answer: 'We maintain highest safety standards with NABH accreditation, regular sanitization, infection control protocols, and trained emergency response teams ensuring patient safety at all times.'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 98898 85052',
      secondary: 'Available 24/7 for emergencies',
      action: 'Call Now',
      actionLink: 'tel:+919889885052',
      gradient: 'from-green-500 to-emerald-600',
      description: 'Immediate assistance for urgent medical needs'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@anantharehab.com',
      secondary: 'Response within 2 hours',
      action: 'Send Email',
      actionLink: 'mailto:info@anantharehab.com',
      gradient: 'from-blue-500 to-cyan-600',
      description: 'For detailed inquiries and documentation'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      primary: 'Quick Chat Support',
      secondary: 'Instant responses during business hours',
      action: 'Chat Now',
      actionLink: 'https://wa.me/919889885052',
      gradient: 'from-purple-500 to-violet-600',
      description: 'Fast support for quick questions'
    }
  ];

  const facilityHighlights = [
    { icon: Building2, label: '65,000 Sq.Ft', description: 'State-of-the-art facility' },
    { icon: Users, label: '75 Beds', description: 'ICU convertible HDUs' },
    { icon: Award, label: 'NABH Certified', description: 'Quality accreditation' },
    { icon: Clock, label: '24/7 Care', description: 'Round-the-clock support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50/20 dark:from-dark-bg dark:via-dark-surface dark:to-primary-900/10 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary-300 to-lavender-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl rounded-full border border-primary-200 dark:border-primary-800 shadow-lg mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3" />
              <span className="text-primary-700 dark:text-primary-300 font-semibold">We're Online & Ready to Help</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Connect with{' '}
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-plum-700 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Your journey to recovery starts with a conversation. Reach out to our expert team 
              for personalized care, advanced treatments, and compassionate support.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {facilityHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 dark:bg-dark-bg/60 backdrop-blur-xl p-4 rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-lg"
                >
                  <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{highlight.label}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{highlight.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your preferred method of communication. We're here to assist you 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-dark-bg rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <method.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                      {method.title}
                    </h3>
                    
                    <div className="text-center mb-6">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {method.primary}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {method.secondary}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {method.description}
                      </p>
                    </div>
                    
                    <motion.a
                      href={method.actionLink}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200`}
                    >
                      {method.action}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-bg rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Address Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-plum-600 rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Visit Our Facility</h3>
                    <p className="text-gray-600 dark:text-gray-400">South India's Premier Rehabilitation Center</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                      ANANTHA MK INSTITUTE OF MEDICAL SCIENCES
                    </h4>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      <p>1-10-44/2, Old Patigadda,</p>
                      <p>Chikoti Gardens, Begumpet,</p>
                      <p>Hyderabad, Telangana 500016</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-lavender-50 dark:from-primary-900/20 dark:to-lavender-900/20 p-4 rounded-xl border border-primary-200 dark:border-primary-800">
                    <div className="flex items-center space-x-3">
                      <Navigation className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <span className="text-primary-700 dark:text-primary-300 font-medium">
                        Easily accessible from all parts of Hyderabad
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-plum-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-plum-800 transition-all duration-200 shadow-lg"
                  >
                    <Navigation className="mr-2 w-5 h-5" />
                    Get Directions
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Visit
                  </motion.button>
                </div>
              </div>
              
              {/* Map */}
              <div className="relative h-96 lg:h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60901.24174994806!2d78.466333!3d17.444027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91888afeba7f%3A0xa9278f5f822a955d!2sAnantha%20Rehab%20Hospital!5e0!3m2!1sen!2sus!4v1751227697723!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                
                {/* Map Overlay */}
                <div className="absolute top-6 left-6 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-plum-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        Anantha Rehab Hospital
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Begumpet, Hyderabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form and FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50/30 dark:from-dark-surface dark:to-primary-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-dark-bg rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <LotusIcon size="xl" className="w-full h-full text-primary-300" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Book Your Consultation
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        Expert care is just one step away
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Available Now
                      </span>
                    </div>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white transition-all duration-200 text-sm"
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white transition-all duration-200 text-sm"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white transition-all duration-200 text-sm"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Service of Interest
                        </label>
                        <div className="relative">
                          <Zap className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white transition-all duration-200 text-sm"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Preferred Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="date"
                              value={formData.preferredDate}
                              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white transition-all duration-200 text-sm"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Preferred Time
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                              value={formData.preferredTime}
                              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white transition-all duration-200 text-sm"
                            >
                              <option value="">Select time</option>
                              <option value="morning">Morning (9 AM - 12 PM)</option>
                              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                              <option value="evening">Evening (4 PM - 7 PM)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Tell us about your condition
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-surface dark:text-white transition-all duration-200 text-sm"
                            placeholder="Describe your symptoms, concerns, or any specific questions you have..."
                          />
                        </div>
                      </div>
                      
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-plum-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:via-purple-700 hover:to-plum-800 transition-all duration-200 shadow-lg text-lg"
                      >
                        <Send className="mr-3 w-5 h-5" />
                        Send Message & Book Consultation
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Thank you for reaching out. Our expert team will contact you within 2 hours during business hours.
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                        <p className="text-green-700 dark:text-green-300 font-semibold">
                          Reference ID: #ANR{Math.random().toString(36).substr(2, 9).toUpperCase()}
                        </p>
                        <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                          Save this reference for faster assistance
                        </p>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      <span>HIPAA Compliant</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      <span>SSL Secured</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Get instant answers to common questions about our services, processes, and facilities.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-900 dark:text-white pr-4">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        {expandedFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-primary-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary-600" />
                        )}
                      </div>
                    </button>
                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="px-6 pb-5"
                      >
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact Card */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-red-200 dark:border-red-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Need Immediate Medical Assistance?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      For medical emergencies or urgent concerns, our 24/7 emergency team is ready to help.
                    </p>
                    <motion.a
                      href="tel:+919889885052"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Emergency: +91 98898 85052
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-purple-600 to-plum-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Your Recovery Journey Starts Here
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Take the First Step Towards Healing
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join thousands of patients who have transformed their lives through our 
              comprehensive rehabilitation programs. Expert care, advanced technology, and compassionate support await you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919889885052"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +91 98898 85052
              </motion.a>
              <motion.a
                href="mailto:info@anantharehab.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
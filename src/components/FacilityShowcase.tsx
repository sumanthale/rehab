import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Building2, 
  Heart, 
  Shield, 
  Users, 
  Stethoscope,
  Activity,
  X,
  Play,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  MapPin,
  Camera,
  Video,
  Download,
  Share2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const FacilityShowcase = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState('photos');
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const facilityFeatures = [
    {
      id: 1,
      title: "ICU-Convertible HDUs",
      description: "State-of-the-art High Dependency Units that can be instantly converted to ICU standards for critical care needs",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      stats: { capacity: "20 Beds", conversion: "< 30 mins", monitoring: "24/7" },
      details: "Our HDUs feature advanced monitoring systems, ventilator support, and can be rapidly converted to full ICU capabilities. Each unit is equipped with central monitoring, emergency response systems, and specialized nursing stations."
    },
    {
      id: 2,
      title: "Positive & Negative Pressure Suites",
      description: "Advanced isolation suites with controlled air pressure systems for infection control and patient safety",
      icon: Shield,
      color: "from-blue-500 to-cyan-600",
      stats: { suites: "8 Units", airChanges: "15/hour", filtration: "HEPA" },
      details: "These specialized suites maintain precise air pressure differentials to prevent cross-contamination. Equipped with HEPA filtration systems and real-time air quality monitoring for maximum patient and staff safety."
    },
    {
      id: 3,
      title: "Advanced Therapy Procedure Rooms",
      description: "Cutting-edge therapy rooms equipped with the latest rehabilitation technology and equipment",
      icon: Activity,
      color: "from-green-500 to-emerald-600",
      stats: { rooms: "12 Rooms", equipment: "Latest Tech", capacity: "50+ patients/day" },
      details: "Each therapy room features robotic rehabilitation equipment, virtual reality systems, and advanced physiotherapy tools. Designed for optimal patient comfort and therapeutic outcomes."
    },
    {
      id: 4,
      title: "Internationally Trained Specialists",
      description: "Expert medical professionals with international certifications and extensive experience",
      icon: Users,
      color: "from-purple-500 to-violet-600",
      stats: { specialists: "50+", experience: "15+ years", certifications: "International" },
      details: "Our team includes specialists trained in leading medical institutions worldwide, bringing cutting-edge knowledge and techniques to provide world-class care across all specialties."
    }
  ];

  const mediaGallery = {
    photos: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Modern ICU Facility",
        description: "State-of-the-art intensive care unit with advanced monitoring systems"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Rehabilitation Center",
        description: "Advanced physiotherapy and rehabilitation equipment"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/7176024/pexels-photo-7176024.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Patient Care Areas",
        description: "Comfortable and modern patient care environments"
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Medical Equipment",
        description: "Latest medical technology and diagnostic equipment"
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Therapy Rooms",
        description: "Specialized therapy and treatment rooms"
      },
      {
        id: 6,
        url: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Emergency Department",
        description: "24/7 emergency care facility"
      }
    ],
    videos: [
      {
        id: 1,
        thumbnail: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Facility Tour",
        duration: "3:45",
        description: "Complete walkthrough of our 65,000 sq ft facility"
      },
      {
        id: 2,
        thumbnail: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Patient Care Excellence",
        duration: "2:30",
        description: "See how we deliver world-class patient care"
      },
      {
        id: 3,
        thumbnail: "https://images.pexels.com/photos/7176024/pexels-photo-7176024.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Advanced Technology",
        duration: "4:15",
        description: "Explore our cutting-edge medical technology"
      }
    ]
  };

  const facilityStats = [
    { icon: Building2, label: "Total Area", value: "65,000", unit: "Sq. Ft." },
    { icon: Heart, label: "Bed Capacity", value: "75", unit: "Beds" },
    { icon: Stethoscope, label: "Specialists", value: "50+", unit: "Experts" },
    { icon: Award, label: "Accreditation", value: "NABH", unit: "Certified" }
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
            <Building2 className="w-4 h-4 mr-2" />
            Our Advanced Facility
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Built for </span>
            <span className="bg-gradient-to-r from-primary-600 to-plum-700 bg-clip-text text-transparent">
              Healing
            </span>
            <span className="text-gray-900 dark:text-white">,</span>
            <br />
            <span className="text-gray-900 dark:text-white">Engineered for </span>
            <span className="bg-gradient-to-r from-plum-600 to-primary-700 bg-clip-text text-transparent">
              Emergencies
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Anantha is South India's most advanced multispecialty rehab facility, designed with 
            world-class infrastructure and cutting-edge technology for optimal patient outcomes.
          </p>
        </motion.div>

        {/* Facility Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {facilityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-plum-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.unit}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Facility Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Advanced Infrastructure Features
              </h3>
              <div className="space-y-6">
                {facilityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedSection(feature.id)}
                  >
                    <div className="bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            {feature.description}
                          </p>
                          
                          {/* Quick Stats */}
                          <div className="flex flex-wrap gap-4 text-xs">
                            {Object.entries(feature.stats).map(([key, value]) => (
                              <div key={key} className="bg-gray-50 dark:bg-dark-surface px-3 py-1 rounded-full">
                                <span className="text-gray-500 dark:text-gray-400 capitalize">{key}: </span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{value}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-3 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                            <span>Click to learn more</span>
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Media Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Video & Photo Gallery of Infrastructure
              </h3>
              
              {/* Gallery Tabs */}
              <div className="flex space-x-2 mb-6">
                {[
                  { id: 'photos', label: 'Photos', icon: Camera },
                  { id: 'videos', label: 'Videos', icon: Video }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGalleryTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeGalleryTab === tab.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Gallery Content */}
              <div className="bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                {activeGalleryTab === 'photos' ? (
                  <div className="grid grid-cols-2 gap-4">
                    {mediaGallery.photos.slice(0, 6).map((photo, index) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group cursor-pointer"
                        onClick={() => setSelectedMedia(photo.id)}
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs font-medium truncate">
                            {photo.title}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {mediaGallery.videos.map((video, index) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-surface rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                      >
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-20 h-16 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                            {video.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {video.description}
                          </p>
                          <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                            {video.duration}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Gallery Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {activeGalleryTab === 'photos' 
                        ? `${mediaGallery.photos.length} Photos Available` 
                        : `${mediaGallery.videos.length} Videos Available`
                      }
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
                Experience Our World-Class Facility
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a visit to see our advanced infrastructure and meet our expert team. 
                Discover why we're South India's premier rehabilitation center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
                >
                  <MapPin className="mr-2 w-5 h-5" />
                  Schedule Facility Tour
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  <Clock className="mr-2 w-5 h-5" />
                  Book Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSection(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-dark-bg rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const feature = facilityFeatures.find(f => f.id === selectedSection);
                if (!feature) return null;

                return (
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Advanced Infrastructure
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedSection(null)}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.details}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(feature.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-gray-50 dark:bg-dark-surface rounded-xl">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="bg-gradient-to-r from-primary-50 to-lavender-50 dark:from-primary-900/20 dark:to-lavender-900/20 p-6 rounded-2xl border border-primary-100 dark:border-primary-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          Experience This Feature
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Schedule a facility tour to see this advanced infrastructure in person.
                        </p>
                        <button className="w-full bg-gradient-to-r from-primary-600 to-plum-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-primary-700 hover:to-plum-800 transition-all duration-200">
                          Schedule Tour
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media Viewer Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const photo = mediaGallery.photos.find(p => p.id === selectedMedia);
                if (!photo) return null;

                return (
                  <div>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => setSelectedMedia(null)}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                      <p className="text-white/80 text-sm">{photo.description}</p>
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

export default FacilityShowcase;
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  Target,
  Heart,
  Play,
  Share2,
  MessageCircle,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import LotusIcon from "../components/LotusIcon";
import LotusPattern from "../components/LotusPattern";
import { servicesData } from "../data/servicesData";
import MedicalPng from "../assets/services/medical.png";
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);
  const [selectedSubService, setSelectedSubService] = useState(0);

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-bg pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-plum-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg ">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-lavender-50/30 dark:from-dark-surface dark:via-dark-bg dark:to-primary-900/10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <LotusPattern count={8} opacity={0.3} />
        </div>
        <div className="absolute top-10 right-10 opacity-10">
          <LotusIcon size="xl" className="w-32 h-32 text-primary-300" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8"
          >
            <Link
              to="/"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Home
            </Link>
            <ArrowRight className="w-4 h-4" />
            <Link
              to="/services"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Services
            </Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              {service.name}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                <LotusIcon size="sm" className="mr-2" />
                {service.shortDescription}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {service.name}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Quick Stats */}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-plum-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-plum-800 transition-all duration-200 shadow-lg"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Consultation
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                >
                  <Share2 className="mr-2 w-5 h-5" />
                  Share
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <img
                  src={MedicalPng}
                  alt={service.name}
                  className="w-full h-[400px] object-contain rounded-3xl"
                />
  
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-bg px-4 py-3 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-plum-600 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-gray-900 dark:text-white">
                        1000+
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Patients Treated
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top-right Stat Card */}
                <div className="absolute -top-4 right-4 bg-white dark:bg-dark-bg px-3 py-2 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="text-xs font-semibold text-gray-900 dark:text-white ml-1">
                      4.9/5
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                    Patient Rating
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Specialized Programs
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our comprehensive {service.name.toLowerCase()} services include
                specialized programs tailored to meet your specific needs and
                recovery goals.
              </p>
            </div>

            {/* Program Selector */}
            <div className="flex justify-center">
              <div className="bg-gray-100 dark:bg-dark-surface rounded-2xl p-2">
                <div className="flex flex-wrap gap-2">
                  {service.subServices.map((subService, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSubService(index)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedSubService === index
                          ? "bg-primary-600 text-white shadow-lg"
                          : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-dark-bg"
                      }`}
                    >
                      {subService.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Program Details */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {service.subServices[selectedSubService].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {service.subServices[selectedSubService].description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Key Features:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.subServices[selectedSubService].features.map(
                      (feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Expected Benefits:
                  </h4>
                  <div className="space-y-3">
                    {service.subServices[selectedSubService].benefits.map(
                      (benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl"
                        >
                          <Target className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={service.subServices[selectedSubService].image}
                  alt={service.subServices[selectedSubService].name}
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-plum-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <LotusPattern count={12} opacity={0.3} />
        </div>
        <div className="absolute top-10 right-10 opacity-10">
          <LotusIcon size="xl" className="w-40 h-40" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Start Your Recovery?
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your {service.name} Journey Today
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to create a personalized treatment plan
              that addresses your specific needs and helps you achieve your
              recovery goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="tel:+91-40-1234-5678"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  View All Services
                </Link>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-200" />
                <span className="text-primary-100">
                  Banjara Hills, Hyderabad
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-primary-200" />
                <span className="text-primary-100">+91 40 1234 5678</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary-200" />
                <span className="text-primary-100">24/7 Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

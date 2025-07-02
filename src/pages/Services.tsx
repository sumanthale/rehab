import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  ArrowRightLeft,
  Heart,
  Activity,
  Zap,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
} from "lucide-react";
import LotusIcon from "../components/LotusIcon";
import LotusPattern from "../components/LotusPattern";
import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary-50 to-lavender-50 dark:from-dark-surface dark:to-dark-bg overflow-hidden">
        <LotusIcon className="absolute top-8 right-8 w-28 h-28 text-primary-300 opacity-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
              <LotusIcon size="sm" className="mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary-600 to-plum-700 bg-clip-text text-transparent">
                Healthcare Solutions
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From rehabilitation to specialized care, our services are tailored
              to restore health, enhance recovery, and improve quality of life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { icon: Sparkles, label: "Service Categories", value: "5+" },
              { icon: Shield, label: "Specialized Programs", value: "25+" },
              { icon: Users, label: "Expert Specialists", value: "50+" },
              { icon: Clock, label: "Years of Excellence", value: "15+" },
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-lavender-100 dark:from-primary-900/30 dark:to-lavender-900/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-10 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link to={`/services/${service.id}`}>
                    <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-dark-surface dark:to-dark-bg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden group-hover:-translate-y-2">
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <LotusPattern count={3} opacity={0.3} />
                      </div>

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <img
                            src={service.icon}
                            className="w-10 h-10 text-white"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {service.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 text-sm">
                          {service.shortDescription}
                        </p>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Sub-services count */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mr-2" />
                            {service.subServices.length} specialized programs
                          </div>

                          <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                            Explore
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect Border */}
                      <div
                        className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors duration-300`}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-8  bg-gradient-to-r from-primary-600 to-plum-700 text-white">
        <LotusIcon className="absolute top-8 right-8 w-32 h-32 opacity-10" />
        {/* <img
          src="https://anantharehab.com/wp-content/uploads/2025/03/purple-bg-pattern.png"
          alt="bgimg"
          className="absolute bottom-0"
        /> */}
        <div className="max-w-3xl mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-base md:text-lg text-primary-100 mb-6">
              Our expert team is here to guide you through personalized
              treatment plans designed for your specific needs and recovery
              goals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {[
                {
                  label: "Schedule Consultation",
                  to: "/contact",
                  external: false,
                  style:
                    "bg-white text-primary-700 hover:bg-primary-50 shadow-lg",
                },
                {
                  label: "Call Now",
                  to: "tel:+91-40-1234-5678",
                  external: true,
                  style: "border-2 border-white text-white hover:bg-white/10",
                },
              ].map(({ label, to, external, style }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {external ? (
                    <a
                      href={to}
                      className={`inline-flex items-center px-6 py-3 font-semibold rounded-xl transition-all duration-200 ${style}`}
                    >
                      {label}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className={`inline-flex items-center px-6 py-3 font-semibold rounded-xl transition-all duration-200 ${style}`}
                    >
                      {label}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Services;

import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Heart, Star, Play, BookOpen, Calendar, Quote } from 'lucide-react';
import { useState } from 'react';

const Leadership = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const achievements = [
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: '25+ years of pioneering healthcare innovation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Compassionate Leadership',
      description: 'Leading a team of 200+ healthcare professionals',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Heart,
      title: 'Patient-Centered Vision',
      description: 'Transforming 50,000+ lives through innovative care',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '50K+', label: 'Lives Transformed' },
    { value: '200+', label: 'Team Members' },
    { value: '15+', label: 'Awards Received' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 via-purple-50 to-lavender-100 dark:from-dark-surface dark:via-purple-900/10 dark:to-lavender-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Visionary Leadership
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Led by Vision.</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Backed by Excellence.
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Under the visionary leadership of{' '}
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Dr. Chandrashekar
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Anantha is India's most comprehensive and compassionate recovery ecosystem — 
                where clinical excellence meets compassionate care.
              </p>
              
              <div className="bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-lg">
                <div className="flex items-start space-x-4">
                  <Quote className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                      "Our mission is to create a healthcare ecosystem where every patient receives 
                      not just treatment, but hope, dignity, and the highest standard of care."
                    </p>
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                      - Dr. Chandrashekar, Founder & Visionary Leader
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book a Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Know More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </div>

          
          </motion.div>

          {/* Media Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-gray-700/50">
              {/* Media Container */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl overflow-hidden mb-6">
                {!isVideoPlaying ? (
                  <>
                    {/* Placeholder for Photo Collage */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                          Photo Collage or Video
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Leadership journey and achievements
                        </p>
                      </div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <motion.button
                      onClick={() => setIsVideoPlaying(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300"
                    >
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-6 h-6 text-purple-600 ml-1" />
                      </div>
                    </motion.button>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                    <p className="text-white">Video Player Would Load Here</p>
                  </div>
                )}
              </div>

              {/* Media Info */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Dr. Chandrashekar's Vision
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Watch the inspiring journey of transforming healthcare in India
                </p>
              </div>
            </div>

            {/* Floating Achievement Cards */}
           

            {/* Bottom Right Achievement */}
      
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
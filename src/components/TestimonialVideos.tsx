import { motion } from 'framer-motion';
import { Play, Star, Quote, Calendar, Users, Award, ArrowRight, Volume2, Maximize2, Share2 } from 'lucide-react';
import { useState } from 'react';

const TestimonialVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      age: 58,
      condition: 'Stroke Recovery',
      thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3:45',
      title: 'From Wheelchair to Walking Again',
      preview: 'After my stroke, I thought my life was over. But the team at Anantha Rehab gave me hope and helped me walk again.',
      rating: 5,
      outcome: 'Regained 90% mobility in 6 months',
      featured: true
    },
    {
      id: 2,
      name: 'Priya Sharma',
      age: 34,
      condition: 'Chronic Pain Management',
      thumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2:30',
      title: 'Pain-Free Life After 3 Years',
      preview: 'Chronic pain controlled my life for years. Now I\'m completely pain-free and back to my normal activities.',
      rating: 5,
      outcome: 'Complete pain relief without surgery'
    },
    {
      id: 3,
      name: 'Mohammed Ali',
      age: 45,
      condition: 'Spinal Cord Injury',
      thumbnail: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4:15',
      title: 'Achieving Independence Again',
      preview: 'The comprehensive care and support helped me regain my independence and confidence.',
      rating: 5,
      outcome: 'Achieved independent living goals'
    },
    {
      id: 4,
      name: 'Lakshmi Devi',
      age: 67,
      condition: 'Hip Replacement Recovery',
      thumbnail: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2:50',
      title: 'Active at 67 After Hip Surgery',
      preview: 'I\'m more active now than before my surgery. The recovery was smooth and encouraging.',
      rating: 5,
      outcome: 'Full recovery in record time'
    },
    {
      id: 5,
      name: 'Arjun Reddy',
      age: 29,
      condition: 'Sports Injury Recovery',
      thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3:20',
      title: 'Back to Professional Sports',
      preview: 'From a career-threatening injury to returning to professional sports - this is my journey.',
      rating: 5,
      outcome: 'Returned to professional athletics'
    },
    {
      id: 6,
      name: 'Sunita Patel',
      age: 52,
      condition: 'Cardiac Rehabilitation',
      thumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3:10',
      title: 'Heart Strong and Healthy',
      preview: 'After my heart attack, I was scared. Now I feel stronger and healthier than ever.',
      rating: 5,
      outcome: 'Improved heart health and fitness'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Video Testimonials' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Calendar, value: '24/7', label: 'Support Available' }
  ];

  const featuredVideo = videoTestimonials.find(video => video.featured);
  const otherVideos = videoTestimonials.filter(video => !video.featured);

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
            <Play className="w-4 h-4 mr-2" />
            Video Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Real Stories of </span>
            <span className="bg-gradient-to-r from-primary-600 to-plum-700 bg-clip-text text-transparent">
              Hope & Healing
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch inspiring recovery journeys from our patients who have transformed their lives 
            through our comprehensive rehabilitation and care programs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
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
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Video */}
        {featuredVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white dark:bg-dark-bg rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video Player */}
                <div className="relative aspect-video lg:aspect-square">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-primary-600 to-plum-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured Story
                    </span>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredVideo.duration}
                  </div>
                  
                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300">
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    </div>
                  </motion.button>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Volume2 className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(featuredVideo.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      ({featuredVideo.rating}/5)
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredVideo.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <span>{featuredVideo.name}</span>
                    <span>•</span>
                    <span>Age {featuredVideo.age}</span>
                    <span>•</span>
                    <span>{featuredVideo.condition}</span>
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200 dark:text-primary-800" />
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6">
                      {featuredVideo.preview}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800 mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="font-semibold text-green-800 dark:text-green-300">Treatment Outcome</span>
                    </div>
                    <p className="text-green-700 dark:text-green-400">{featuredVideo.outcome}</p>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-plum-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-plum-800 transition-all duration-200 shadow-lg"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Full Story
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More Inspiring Stories
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="bg-white dark:bg-dark-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:-translate-y-2">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Duration */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-6 h-6 text-primary-600 ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(video.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {video.title}
                    </h4>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {video.name} • Age {video.age}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                      {video.preview}
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-dark-surface p-3 rounded-xl">
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Outcome:
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {video.outcome}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-plum-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of patients who have transformed their lives through our 
                comprehensive rehabilitation programs. Your journey to recovery starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Start Your Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch More Stories
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
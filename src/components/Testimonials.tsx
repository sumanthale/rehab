import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import {InfiniteMovingCards} from './UI/InfiniteMovingCards'
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      age: 58,
      condition: 'Stroke Recovery',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: "After my stroke, I thought I'd never walk again. The team at Anantha Rehab not only helped me regain my mobility but gave me hope. Dr. Anusha and her team are truly angels. I'm now back to my daily activities and couldn't be more grateful.",
      outcome: "Regained 90% mobility in 6 months",
    },
    {
      name: 'Priya Sharma',
      age: 34,
      condition: 'Chronic Back Pain',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: "Chronic pain had taken over my life for 3 years. I tried everything before coming to Anantha Rehab. Their pain management program was life-changing. I'm now pain-free and back to playing with my children. Thank you for giving me my life back!",
      outcome: "Complete pain relief without surgery",
    },
    {
      name: 'Mohammed Ali',
      age: 45,
      condition: 'Spinal Cord Injury',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: "The comprehensive care I received here was beyond my expectations. From the medical team to the support staff, everyone treated me like family. The facility is world-class, and the results speak for themselves. I highly recommend Anantha Rehab.",
      outcome: "Achieved independent living goals",
    },
    {
      name: 'Lakshmi Devi',
      age: 67,
      condition: 'Hip Replacement Recovery',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: "At 67, I was scared about my hip replacement recovery. The physiotherapy team made it so comfortable and encouraging. Their approach is not just about physical healing but emotional support too. I'm now more active than I was before my surgery!",
      outcome: "Full recovery in record time",
    },
  ];

  const stats = [
    { value: '98%', label: 'Patient Satisfaction' },
    { value: '95%', label: 'Treatment Success Rate' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '1000+', label: 'Success Stories' },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Patient Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real patients, real results. Discover how our comprehensive care 
            has transformed lives and restored hope for thousands of families.
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
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

       
         <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

        {/* Video Testimonials CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-plum-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            See More Success Stories
          </h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Watch video testimonials from our patients and learn about their 
            inspiring recovery journeys at Anantha Rehab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
            >
              Watch Video Stories
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Share Your Story
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
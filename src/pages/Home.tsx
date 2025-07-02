import { motion } from 'framer-motion';
import Hero from '../components/Hero';
// import WhyChoose from '../components/WhyChoose';
// import Team from '../components/Team';
// import Testimonials from '../components/Testimonials';
import TestimonialVideos from '../components/TestimonialVideos';
// import Resources from '../components/Resources';
// import Contact from '../components/Contact';
import RecoveryInfographic from '../components/RecoveryInfographic';
import FacilityShowcase from '../components/FacilityShowcase';
import Leadership from '../components/Leadership';
// import DoctorLeadership from '../components/DoctorLeadership';
import Services from './Services';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      {/* <About /> */}
      <div className='-pt-20'></div>
      <Services />
      {/* <DoctorLeadership /> */}
      <RecoveryInfographic />
      <FacilityShowcase />
      <Leadership />
      {/* <WhyChoose /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <TestimonialVideos />
      {/* <Resources /> */}
      {/* <Contact /> */}
    </motion.main>
  );
};

export default Home;
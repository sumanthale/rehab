import { motion } from "framer-motion";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=919889885052&text=Hi%2C+I+need+assistance.&type=phone_number&app_absent=0";

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {/* Main WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative block w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
        >
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-2000" />

          {/* Icon */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200"
              src="https://img.icons8.com/color/512/whatsapp.png"
              alt="whtasapp"
            />
          </div>

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3, duration: 0.3 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
        </motion.a>

        {/* Floating Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 0 : [0, 1, 1, 0],
            y: isHovered ? 10 : [10, -20, -20, -40],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
          className="absolute -top-7 right-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-lg"
        >
          Need Help? Chat Now!
        </motion.div>
      </motion.div>
    </>
  );
};

export default WhatsAppFloat;

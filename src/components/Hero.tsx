import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-blue-500 text-xl">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">Lingoju Goutham</h1>
            <div className="text-xl sm:text-2xl text-gray-400 h-16">
              <TypeAnimation
                sequence={[
                  'AI Enthusiast',
                  1000,
                  'IoT Developer',
                  1000,
                  'Software Engineer',
                  1000,
                  'Embedded Systems Expert',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          
          <p className="text-gray-400 max-w-lg">
            Passionate about integrating AI, IoT, and embedded systems to create innovative solutions. 
            As a Telugu enthusiast, I'm excited to contribute to VISWAM.ai's mission of promoting linguistic 
            diversity and empowering marginalized communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                View My Work <FiArrowRight />
              </motion.button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-md transition-colors"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="bg-[#0a192f] w-full h-full rounded-full flex items-center justify-center text-center p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">TECH STACK</h3>
                  <p className="text-gray-300">AI • IoT • Python • MERN • Java • C++ • Embedded Systems</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 right-0 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

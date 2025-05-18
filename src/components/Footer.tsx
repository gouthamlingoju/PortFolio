import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#0a192f] border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <h2 className="text-xl font-bold">
              <span className="text-blue-500">Lingoju</span> Goutham
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              AI & IoT Enthusiast | Software Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-blue-500 transition-colors flex items-center gap-2"
            >
              <FiArrowUp />
              <span>Back to Top</span>
            </Link>

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lingoju Goutham. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1a2d54] p-6 rounded-lg shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">Professional Profile</h3>
                <p className="text-gray-300 mb-4">
                  Passionate about integrating AI, IoT, and embedded systems, I aim to leverage my skills in software and
                  hardware development to create innovative solutions. As a Telugu enthusiast, I'm excited to contribute to
                  VISWAM.ai's mission of promoting linguistic diversity and empowering marginalized communities.
                </p>
                <p className="text-gray-300">
                  Seeking an internship to apply my expertise in real-world projects, enhance efficiency, and drive
                  impactful technological solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-[#1a2d54] p-5 rounded-lg shadow-xl flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <FiUser className="text-blue-500 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">Full Name</h3>
                <p className="text-gray-400">Lingoju Goutham</p>
              </div>
            </div>

            <div className="bg-[#1a2d54] p-5 rounded-lg shadow-xl flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <FiMail className="text-blue-500 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-400">gouthamlingoju@gmail.com</p>
              </div>
            </div>

            <div className="bg-[#1a2d54] p-5 rounded-lg shadow-xl flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <FiPhone className="text-blue-500 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-gray-400">+91 7995986908</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors w-full"
              onClick={() => window.open('/PortFolio/resume.pdf', '_blank')}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

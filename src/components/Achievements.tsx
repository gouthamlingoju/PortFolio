import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiStar, FiUsers } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "1st Place in Spark C++ Quiz",
      description: "Awarded first place in the Spark C++ Quiz at Convergence 2k25",
      icon: <FiAward className="text-yellow-400 text-xl" />,
    },
    {
      id: 2,
      title: "Top 10 Coder",
      description: "Ranked 8th among the Top 100 Coders at VNRVJIET",
      icon: <FiTrendingUp className="text-blue-400 text-xl" />,
    },
    {
      id: 3,
      title: "Reliance Foundation Scholar",
      description: "Selected as one of 5000 Scholars for the Reliance Foundation Scholarship (2023)",
      icon: <FiStar className="text-purple-400 text-xl" />,
    },
    {
      id: 4,
      title: "CodeChef Rating",
      description: "Achieved a 2-star rating on CodeChef",
      icon: <FiStar className="text-green-400 text-xl" />,
    },
  ];

  const activities = [
    {
      id: 1,
      title: "Turing Hut Member",
      description: "Peer-to-Peer Learning Program Member, Turing Hut (Programming Club) VNRVJIET",
      icon: <FiUsers className="text-blue-400 text-xl" />,
    },
    {
      id: 2,
      title: "CSI Member",
      description: "Member of CSI VNRVJIET",
      icon: <FiUsers className="text-blue-400 text-xl" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Achievements & Activities</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <FiAward className="text-blue-500" /> Achievements
            </motion.h3>
            
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1a2d54] rounded-lg p-5 flex items-start gap-4"
                >
                  <div className="p-3 bg-gray-800 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <FiUsers className="text-blue-500" /> Extracurricular Activities
            </motion.h3>
            
            <div className="space-y-6">
              {activities.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1a2d54] rounded-lg p-5 flex items-start gap-4"
                >
                  <div className="p-3 bg-gray-800 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 rounded-lg"
            >
              <div className="bg-[#1a2d54] p-6 rounded-lg">
                <h4 className="text-lg font-medium text-white mb-2">Declaration</h4>
                <p className="text-gray-300">
                  I hereby declare that the information furnished in this portfolio is true to the best of my
                  knowledge and I will be responsible for any deviation from the truth of these facts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

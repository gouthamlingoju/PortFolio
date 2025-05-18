import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)",
      degree: "Bachelor's Degree",
      status: "Ongoing",
      score: "CGPA: 9.45",
      icon: <FiBookOpen />,
    },
    {
      id: 2,
      institution: "TS Model School and Jr. College Maripeda",
      degree: "Class 12",
      status: "Completed",
      score: "Percentage: 97.6%",
      icon: <FiBookOpen />,
    },
    {
      id: 3,
      institution: "TS Model School and Jr. College Maripeda",
      degree: "Class 10",
      status: "Completed",
      score: "Percentage: 100%",
      icon: <FiBookOpen />,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30 hidden md:block"></div>

          <div className="space-y-12 relative">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="md:grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`bg-[#1a2d54] p-6 rounded-lg shadow-xl ${index % 2 === 1 ? 'ml-auto md:mr-0' : 'mr-auto md:ml-0'} max-w-md`}>
                    <h3 className="text-xl font-bold text-white mb-2">{item.institution}</h3>
                    <p className="text-blue-400 mb-2">{item.degree} • {item.status}</p>
                    <p className="text-gray-300">{item.score}</p>
                  </div>
                </div>

                {/* Circle marker */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  {item.icon}
                </div>

                {/* Empty div for layout on even items */}
                <div className={`hidden md:block ${index % 2 === 1 ? 'order-1' : ''}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGithub, FiMonitor, FiCpu, FiServer } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "JavaScript", "C++"],
      icon: <FiCode className="text-blue-500 text-2xl" />,
    },
    {
      id: 2,
      title: "Web Technologies",
      skills: ["MERN Stack", "React.js", "Flask", "Streamlit"],
      icon: <FiMonitor className="text-blue-500 text-2xl" />,
    },
    {
      id: 3,
      title: "Embedded Systems",
      skills: ["Arduino", "Raspberry Pi", "GPIO", "Motor Control"],
      icon: <FiCpu className="text-blue-500 text-2xl" />,
    },
    {
      id: 4,
      title: "Version Control",
      skills: ["Git", "GitHub"],
      icon: <FiGithub className="text-blue-500 text-2xl" />,
    },
    {
      id: 5,
      title: "Databases",
      skills: ["SQL", "MySQL", "Firebase"],
      icon: <FiDatabase className="text-blue-500 text-2xl" />,
    },
    {
      id: 6,
      title: "Backend & APIs",
      skills: ["FastAPI", "Google Cloud", "Razorpay API"],
      icon: <FiServer className="text-blue-500 text-2xl" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-[#1a2d54] rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

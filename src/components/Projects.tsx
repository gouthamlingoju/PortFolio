import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCode, FiChevronDown, FiChevronUp, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Campus Automation - Smart Sanitary Napkin Vending Machine",
      description: "Designed an automated vending machine with digital payments and motor-controlled dispensing. Developed a React.js frontend and a Flask backend to manage payments and stock alerts.",
      techStack: ["Raspberry Pi", "React.js", "Flask", "Razorpay API", "Firebase", "Python", "Motor Control (GPIO)", "Touchscreen"],
      status: "Ongoing",
      detailedDescription: "This project focuses on creating an automated vending machine for sanitary napkins with digital payment integration and real-time inventory tracking. The system uses a Raspberry Pi with touchscreen for user interaction, motor controls for dispensing, and a React.js frontend integrated with Razorpay for payments. The Flask backend handles business logic and Firebase manages the database for inventory tracking and alerts. Implementing real-time monitoring and optimization, with a Raspberry Pi touchscreen interface for user interaction and inventory tracking via Firebase."
    },
    {
      id: 2,
      title: "Campus Automation - Student Verification System",
      description: "A web-based system to manage, verify, and extract student document information for institutional use.",
      techStack: ["React (Vite, Tailwind, Context API)", "FastAPI", "Firebase Admin SDK", "Google Cloud (Drive API, Gemini AI)"],
      status: "Ongoing",
      detailedDescription: "Designed a secure document upload interface with automated data extraction using Gemini AI. Built dynamic student profile management and department-specific dashboards using React and FastAPI. Integrated Google Drive API and Firebase Admin SDK for cloud-based storage and authentication. Core modules are deployed with feature expansion and optimization underway."
    },
    {
      id: 3,
      title: "Retail Store Management System (RSMS)",
      description: "Developed an inventory and sales management system using Java Swing for the user interface and JDBC for database connectivity with MySQL.",
      techStack: ["Java Swing", "JDBC", "MySQL"],
      status: "Completed",
      detailedDescription: "The Retail Store Management System enables real-time tracking of stock levels, sales transactions, and inventory updates. It provides features for inventory management, sales processing, and generating detailed reports. The system has a user-friendly interface designed for easy adoption by retail staff with minimal training."
    },
    {
      id: 4,
      title: "Effect of Fertilizer and Water on Crop Yields",
      description: "Developed a data-driven web application using Streamlit for crop yield analysis.",
      techStack: ["Python", "Streamlit", "Pandas", "Scikit-Learn", "Matplotlib", "Linear Regression"],
      status: "Completed",
      detailedDescription: "Analyzed the impact of fertilizer usage, water levels, temperature, and humidity on crop yields using linear regression models. Processed and visualized Kaggle-based agricultural datasets to derive insights for optimizing resource usage. Built an interactive dashboard for farmers and stakeholders to explore predictions and trends."
    },
    {
      id: 5,
      title: "Detecting Brain Tumor using Quantum Computing",
      description: "Research initiative to leverage quantum computing for early detection of brain tumors through medical image analysis.",
      techStack: ["Quantum Computing", "Qiskit", "Classical ML/DL", "Quantum-Classical Hybrid Models"],
      status: "Ongoing",
      detailedDescription: "Exploring quantum-enhanced algorithms for image classification using Qiskit. Designing hybrid quantum-classical models for MRI image processing and tumor detection. Integrating classical machine learning techniques with quantum circuits to optimize performance. Currently in research proposal, presentation, and prototype development phases."
    },
    {
      id: 6,
      title: "Empowering Regional Medium Students in Telangana",
      description: "Educational initiative aimed at bridging the English language gap for regional medium students in backward districts of Telangana.",
      techStack: ["AI/ML", "AR/VR", "NLP", "Chatbot Frameworks"],
      status: "Ongoing",
      detailedDescription: "Developed an AI-driven chatbot to assist students with real-time English language learning. Integrated AR/VR modules to provide interactive, immersive educational content. Employed NLP to personalize conversational feedback and improve language fluency. Currently in solution architecture and prototype refinement stages."
    },
    {
      id: 7,
      title: "Programming Education Platform (Powered by Moodle)",
      description: "A scalable learning platform integrating live code execution with comprehensive student-faculty interaction.",
      techStack: ["Moodle", "Python", "C", "Java", "Custom Backend"],
      status: "Ongoing",
      detailedDescription: "Customized Moodle to support interactive lesson delivery, note sharing, feedback, and assessments. Integrated a backend system for executing Python, C, and Java code in a secure sandbox environment. Optimized system to support up to 1000+ concurrent users for real-time educational engagement. Base integration is complete with scaling and deployment in progress."
    },
    {
      id: 8,
      title: "Smart Traffic Signal Powered by AI",
      description: "A dynamic traffic signal system that adapts signal flow based on real-time road occupancy.",
      techStack: ["Python", "OpenCV", "YOLO"],
      status: "Ongoing",
      detailedDescription: "Utilized OpenCV and YOLO for vehicle detection and real-time lane occupancy analysis. Designed an adaptive algorithm to skip green light timers for empty roads. Developed a Python-based control logic to interface with simulated signal systems. Currently in development and testing of core AI modules."
    },
    {
      id: 9,
      title: "Ledgerly – Offline-First Personal Finance App",
      description: "A fully offline Android ledger app to record, manage, and secure personal transactions with local-first architecture.",
      techStack: ["Flutter"],
      status: "Ongoing",
      detailedDescription: "Built a Flutter-based UI supporting CRUD operations for credits/debits and user-added contacts. Implemented timestamped transaction history and summary generation features. Ensured complete offline functionality with local storage for data persistence and privacy. Core features are functional with UX refinements in development."
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a2d54] rounded-lg shadow-xl overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="px-6 pb-4">
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {expandedId === project.id ? (
                    <>
                      <span>Show Less</span>
                      <FiChevronUp />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <FiChevronDown />
                    </>
                  )}
                </button>
                
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-gray-300 text-sm mb-4">{project.detailedDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                        <FiCode /> View Code
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                        <FiExternalLink /> Live Demo
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2"
          >
            <FiGithub /> View More Projects on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

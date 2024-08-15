// src/components/InteractiveTimeline.js
import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2020',
    title: 'Founding of HarmonyMind',
    description: 'The journey begins with the vision to enhance emotional intelligence worldwide.',
  },
  // Add more milestones here
];

const InteractiveTimeline = () => {
  return (
    <div className="interactive-timeline py-16">
      <h3 className="text-3xl font-bold mb-8">Our Journey</h3>
      <div className="timeline-content flex flex-col md:flex-row justify-between">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="milestone bg-white p-4 rounded-lg shadow-lg mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold">{milestone.year}</h4>
            <p className="text-lg font-medium">{milestone.title}</p>
            <p className="text-gray-600">{milestone.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;

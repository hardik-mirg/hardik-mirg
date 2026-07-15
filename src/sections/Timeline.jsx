import React from 'react';
import { motion } from 'motion/react';
import './styles/pages.css';

const timelineData = [
  {
    year: '2008',
    title: 'Delhi',
    desc: 'The beginning of the educational journey in India\'s capital city.'
  },
  {
    year: '2012-2025',
    title: 'Somerville School',
    desc: 'Years of building foundational knowledge, discovering computer science, electronics, and starting code experiments.'
  },
  {
    year: '2025 - Present',
    title: 'IIT Bombay',
    desc: 'Pursuing higher studies, deep-diving into Aerospace, Robotics, CS, and AI in a top-tier tech ecosystem.'
  },
  {
    year: 'Future?',
    title: 'Cloudy Unknown Mystery!',
    desc: 'A blank canvas waiting to be filled with breakthrough projects and deep tech adventures.'
  }
];

const Timeline = () => {
  return (
    <div className="page-container" style={{ justifyContent: 'flex-start' }}>
      <section className="timeline-section" style={{ marginTop: '2rem' }}>
        <h2 className="timeline-title">Educational Journey</h2>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`timeline-dot ${index === timelineData.length - 1 ? '' : 'active'}`} />
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Timeline;

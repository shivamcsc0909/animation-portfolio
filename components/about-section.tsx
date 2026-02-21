'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Expert in MERN stack with proficiency in building scalable web applications from frontend to backend.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Passionate about implementing AI solutions and ML models to solve real-world problems effectively.',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description:
      'Focused on creating high-performance applications with smooth animations and excellent user experience.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I&apos;m a Full Stack Developer and AI Enthusiast with a passion for building
              scalable, high-performance web applications. My journey in tech started with a
              curiosity about how things work on the web, and it has evolved into a commitment
              to creating innovative solutions that make a real impact.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              With expertise in the MERN stack, modern frontend technologies, and AI/ML
              integration, I thrive on tackling complex challenges. Whether it&apos;s optimizing
              performance, implementing cutting-edge features, or mentoring fellow developers,
              I&apos;m committed to delivering excellence in everything I do.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to
              open-source projects, and sharing knowledge with the developer community. I
              believe in continuous learning and growth, both professionally and personally.
            </motion.p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

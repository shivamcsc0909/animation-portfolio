'use client';

import { motion } from 'framer-motion';
import { experiences, education, certifications } from '@/lib/experience';
import { CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function ExperienceSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
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
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-bold text-foreground">Work Experience</h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1/2 h-4 w-4 -translate-x-2 -translate-y-1/2 rounded-full border-2 border-primary bg-background" />

                <div className="space-y-3">
                  <div className="flex flex-col justify-between sm:flex-row sm:items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{exp.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground">Education</h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium text-sm">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{edu.year}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

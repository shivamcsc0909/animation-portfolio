'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from './contact-modal';

export function CTASection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-muted/50 py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl"
          />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Ready to Build Something{' '}
              <span className="inline-flex items-center gap-2">
                <span className="text-gradient">Amazing</span>
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-8 w-8 text-accent" />
                </motion.span>
              </span>
              ?
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-balance text-lg text-muted-foreground"
          >
            Let&apos;s collaborate on your next project. Whether you need a full-stack
            web application, AI integration, or cutting-edge animations, I&apos;m here
            to help bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => setIsContactOpen(true)}
                className="gap-2 group"
              >
                Start Your Project
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-flex">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent"
                asChild
              >
                <a
                  href="https://wa.me/919554584978"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              { label: '20+', value: 'Projects' },
              { label: '100%', value: 'Satisfaction' },
              { label: '3+', value: 'Years Exp' },
              { label: '5+', value: 'Tech Skills' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileInView={{ scale: [0.8, 1] }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <p className="text-2xl font-bold text-primary">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}

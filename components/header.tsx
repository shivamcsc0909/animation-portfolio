'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/shivamcsc0909',
    label: 'GitHub',
    color: 'hover:text-foreground',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/shivampandey-tech/',
    label: 'LinkedIn',
    color: 'hover:text-blue-600',
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/919554584978',
    label: 'WhatsApp',
    color: 'hover:text-green-500',
  },
  {
    icon: Phone,
    href: 'tel:+919554584978',
    label: 'Call',
    color: 'hover:text-accent',
  },
  {
    icon: Mail,
    href: 'mailto:shivampandeyyuyu@gmail.com',
    label: 'Email',
    color: 'hover:text-red-500',
  },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="text-2xl font-bold text-foreground">
            SP
          </Link>
        </motion.div>

        {/* Center Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons & Theme Toggle */}
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  aria-label={link.label}
                  className={`${link.color} dark:hover:text-white transition-colors`}
                >
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

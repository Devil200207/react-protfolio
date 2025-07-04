import React from 'react';
import { motion } from 'framer-motion';
import { Tabs } from './ui/tabs';
import { BackgroundBeams } from './ui/background-beams';
import { cn } from '../lib/utils';

const About: React.FC = () => {
  const tabs = [
    {
      title: "My Story",
      value: "story",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4">
            Hi! 👋 I'm Chinmay, a 23-year-old CSE graduate who is passionate about Software Development and back-end development.
          </p>
          <p className="mb-4">
            Currently, I'm working as a Full-Stack Developer 👩🏻‍💻 with 3+ years of experience in the Web field. I share my learnings through speaking engagements & write-ups.
          </p>
          <p>
            Software Engineering for me is as much about people as it is about technology which is why I also identify myself as a genius with the power to code.
          </p>
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-blue-700 to-indigo-900">
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-bold mb-1">Full Stack Developer</h3>
              <p className="text-blue-200 text-sm mb-2">Lucid Growth | Remote • July 2024 – Present</p>
              <p className="text-sm text-blue-100">Optimized backend performance for ZenInbox, reducing API response time from 1.5 minutes to milliseconds while handling 6 crore+ records. Developed comprehensive email deliverability platform with Go and React.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-1">Software Developer Intern</h3>
              <p className="text-blue-200 text-sm mb-2">IntelliAssist | Remote • Aug 2023 - Dec 2023</p>
              <p className="text-sm text-blue-100">Collaborated with designers and developers using Angular, improving site performance by 86% and SEO performance from 42% to 92%.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-1">Frontend Developer Intern</h3>
              <p className="text-blue-200 text-sm mb-2">Oniric | Remote • Dec 2022 - Aug 2023</p>
              <p className="text-sm text-blue-100">Developed and maintained front-end applications, collaborating with designers and backend developers for seamless integration.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-1">Frontend Developer Intern</h3>
              <p className="text-blue-200 text-sm mb-2">Grivin | Remote • Oct 2022 - Nov 2022</p>
              <p className="text-sm text-blue-100">Developed foundational website structures using HTML, CSS, and JavaScript, creating dynamic and visually appealing web pages.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-1">Teaching Assistant Intern</h3>
              <p className="text-blue-200 text-sm mb-2">Coding Ninjas • October 2021 - January 2022</p>
              <p className="text-sm text-blue-100">Resolved 650+ programming doubts, mentored 20+ students, and maintained a 4.86/5 rating based on student feedback.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-emerald-700 to-green-900">
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-bold mb-1">Bachelor's Degree in Computer Science & Engineering</h3>
              <p className="text-emerald-200 text-sm mb-2">Guru Gobind Singh Indraprastha University, Delhi • 2020-2024</p>
              <p className="text-sm text-emerald-100">Completed with specialization in Software Development and Web Technologies</p>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="section-padding py-24 relative">
      <BackgroundBeams className="absolute inset-0 z-0 opacity-20" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know my background and journey</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className={cn(
              "relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] rounded-2xl overflow-hidden",
              "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-transparent before:z-10"
            )}>
              <img 
                src="/myimage.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold mb-1">Chinmay Chaturvedi</h3>
                <p className="text-blue-300 mb-3">Full-Stack Developer</p>
                <div className="flex space-x-3">
                  <a href="https://github.com/Devil200207" target="_blank" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/chinmay-chaturvedi/" target="_blank" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/chinmachat" target="_blank" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Tabs tabs={tabs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
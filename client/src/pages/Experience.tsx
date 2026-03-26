import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, BriefcaseBusiness } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer (Node.js) - The Nexus Solution",
      duration: "Nov 2025 – Feb 2026",
      points: [
        "Develop and maintain backend services using Node.js, Express, and MongoDB for production systems.",
        "Optimize database performance through query tuning, indexing, and schema design.",
        "Implement secure authentication and authorization using JWT and role-based access control."
      ]
    },
    {
      title: "MERN Stack Developer (Intern)",
      duration: "6 Months",
      points: [
        "Built backend modules using Node.js and MongoDB, supporting full-stack web applications.",
        "Assisted in database optimization and real-time features using WebSockets.",
        "Contributed to debugging, performance improvements, and feature development in a collaborative team environment."
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="py-16 md:py-24 bg-muted/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Work Experience
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex-1"
            >
              <div className="flex bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                
                {/* Timeline Icon */}
                <div className="flex items-start justify-center mr-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mt-1">
                    <BriefcaseBusiness className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-l font-semibold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

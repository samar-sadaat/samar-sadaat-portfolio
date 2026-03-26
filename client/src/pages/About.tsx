import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Experience", value: 8, suffix: " Months" },
    { label: "Major Projects", value: 4 },
    { label: "Technologies", value: 7, suffix: "+" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 1));
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Trigger animation when stats card is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) setHasAnimated(true);
    }, { threshold: 0.5 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, [hasAnimated]);

  // Animate counters
  useEffect(() => {
    if (!hasAnimated) return;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 50; // ~1s duration
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) newCounters[index] = Math.min(newCounters[index] + increment, stat.value);
          return newCounters;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, [hasAnimated]);

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* About Me Text */}
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-justify">
            I’m a MERN Stack Developer who enjoys turning ideas into fast, reliable web applications using
            MongoDB, Express, React, and Node.js. I enjoy building scalable, high performance web applications that deliver smooth, intuitive
            user experiences and solve real world problems.
            <br /><br />
            I work across the full stack, creating engaging frontend interfaces, building clean RESTful APIs,
            and designing efficient databases. I care about writing clear, maintainable code and constantly
            improving how things are built.
            <br /><br />
            I’m always learning and exploring new tools and best practices to create modern, thoughtful web
            solutions that make a real difference.
          </p>
        </div>

        {/* Quick Stats */}
        <Card ref={cardRef} className="p-6 hover-elevate">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Stats</h3>
          <div className="space-y-4">
            {stats.map((stat, idx) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary">
                  {Math.floor(counters[idx])}{stat.suffix || ""}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </motion.section>
  );
}

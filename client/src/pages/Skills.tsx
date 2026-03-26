import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Wrench, SlidersHorizontal, Users, BookOpen, UserCog, Lightbulb, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const technicalSkills = [
    { category: "Frontend", icon: Code2, skills: ["JavaScript (ES6+)", "ReactJS", "HTML5", "Tailwind CSS"] },
    { category: "Backend", icon: Server, skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "Role-Based Access Control (RBAC)"] },
    { category: "Database & ODM", icon: Database, skills: ["MongoDB", "Mongoose", "PostgreSQL"] },
    { category: "Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"] },
    { category: "Other", icon: SlidersHorizontal, skills: ["JWT Authentication", "API Integration", "Responsive Design"] },
  ];

  const softSkills = [
    { name: "Team Collaboration", icon: Users },
    { name: "Continuous Learning", icon: BookOpen },
    { name: "Leadership", icon: UserCog },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Time Management", icon: Clock },
    { name: "Creativity", icon: Sparkles },
  ];

  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Technical Skills */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {technicalSkills.map(group => (
            <Card key={group.category} className="p-6 hover-elevate">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <group.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Soft Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {softSkills.map(skill => (
            <Card key={skill.name} className="p-6 text-center hover-elevate">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

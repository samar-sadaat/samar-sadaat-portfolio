import { Mail, Phone, MapPin, Github, ExternalLink, CheckCircle2, Code2, Server, Database, Users, Lightbulb, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const handleDownloadCV = () => {
    window.open("/Muhammad Samar Sadaat_1761426776568.pdf", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/samar-sadaat", "_blank");
  };

  const technicalSkills = [
    { category: "Frontend", icon: Code2, skills: ["ReactJS", "JavaScript (ES6+)", "HTML5", "CSS"] },
    { category: "Backend", icon: Server, skills: ["Node.js", "Express.js"] },
    { category: "Database", icon: Database, skills: ["MongoDB"] },
  ];

  const softSkills = [
    { name: "Team Collaboration", icon: Users },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Time Management", icon: Clock },
  ];

  const projects = [
    {
      title: "Student LMS",
      subtitle: "Learning Management System",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Built a comprehensive learning management system for students and teachers, covering course management",
        "Implemented secure authentication and role-based access control",
        "Developed RESTful APIs to ensure smooth communication between frontend and backend systems"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Social Media App",
      subtitle: "Real-time Social Platform",
      tech: ["React", "Node.js", "WebSockets", "MongoDB"],
      features: [
        "Built a real-time social media application featuring live posts, comments, and notifications",
        "Integrated WebSockets for instant, real-time data synchronization between users",
        "Developed dynamic frontend components in React and a Node.js/Express.js backend with MongoDB"
      ],
      gradient: "from-orange-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700" />
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white shadow-2xl flex items-center justify-center">
                <span className="text-6xl font-bold text-white">MS</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Muhammad Samar Sadaat
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fresh Computer Science graduate passionate about building scalable web applications with modern technologies
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 text-white/90">
            <a href="mailto:sammarsadaat@gmail.com" className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-lg transition-all" data-testid="link-email">
              <Mail className="w-5 h-5" />
              <span className="text-sm md:text-base">sammarsadaat@gmail.com</span>
            </a>
            <a href="tel:+923187646305" className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-lg transition-all" data-testid="link-phone">
              <Phone className="w-5 h-5" />
              <span className="text-sm md:text-base">+92 318 7646305</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2" data-testid="text-location">
              <MapPin className="w-5 h-5" />
              <span className="text-sm md:text-base">Islampura, Lahore</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handleDownloadCV}
              className="bg-white/20 backdrop-blur-md text-white border-2 border-white shadow-xl"
              data-testid="button-download-cv"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View CV
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleGithubClick}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/50"
              data-testid="button-github"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub Profile
            </Button>
          </div>

          {/* Floating Tech Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {["React", "Node.js", "MongoDB", "Express.js"].map((tech) => (
              <Badge 
                key={tech} 
                className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 text-sm font-medium hover-elevate"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/\./g, '')}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-summary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Summary Text */}
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Professional Summary</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Fresh Computer Science graduate with hands-on experience in ReactJS, Node.js, Express.js,
                and MongoDB through academic and personal projects. Passionate about building scalable
                web applications, eager to learn in collaborative environments, and driven to grow as a
                MERN Stack Developer.
              </p>
            </div>

            {/* Quick Stats */}
            <Card className="p-6 hover-elevate" data-testid="card-stats">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary">6 Months</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-education">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Education</h2>
          <Card className="p-8 max-w-3xl mx-auto hover-elevate" data-testid="card-education">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">BS</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-lg text-muted-foreground">Lahore Leads University – Lahore, Pakistan</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-skills">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {technicalSkills.map((skillGroup) => (
              <Card key={skillGroup.category} className="p-6 hover-elevate" data-testid={`card-skill-${skillGroup.category.toLowerCase()}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <skillGroup.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1" data-testid={`badge-skill-${skill.toLowerCase().replace(/[()+ ]/g, '-')}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Soft Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <Card key={skill.name} className="p-6 text-center hover-elevate" data-testid={`card-soft-skill-${skill.name.toLowerCase().replace(/ /g, '-')}`}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-experience">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Work Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
              
              <Card className="p-8 hover-elevate relative" data-testid="card-experience">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="ml-24">
                  <Badge className="mb-3" data-testid="badge-duration">6 months</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">MERN Stack Developer</h3>
                  <p className="text-lg text-muted-foreground mb-4">Full-Stack Web Development</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">Gained hands-on experience in full-stack web application development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">Assisted in developing and maintaining web modules and optimizing MongoDB queries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">Collaborated in a team to build scalable applications and integrate real-time features using WebSockets</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-projects">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden hover-elevate transition-all" data-testid={`card-project-${index}`}>
                {/* Project Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-project-tech-${tech.toLowerCase().replace(/\./g, '')}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 text-white" data-testid="section-contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={handleGithubClick}
              className="bg-white/20 backdrop-blur-md text-white border-2 border-white"
              data-testid="button-github-footer"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              size="lg"
              onClick={handleDownloadCV}
              variant="outline"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/50"
              data-testid="button-cv-footer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Muhammad Samar Sadaat. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Mail, Phone, MapPin, Radio, Facebook, Instagram, Github, ExternalLink, CheckCircle2, Code2, Server, Database, Users, Lightbulb, Clock, Linkedin, ArrowDown, Wrench, SlidersHorizontal, Sparkles, BookOpen, UserCog, BriefcaseBusiness } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import workspaceImage from "@assets/generated_images/Developer_workspace_hero_image_e939cb41.png";
import Navbar from "./Navbar";

export default function Portfolio() {
  const handleDownloadCV = () => {
    window.open("/Muhammad Samar Sadaat.pdf", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/samar-sadaat", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/share/1BQzefRCy4/", "_blank");
  };

  const handleInstaClick = () => {
    window.open("https://www.instagram.com/samar._.sadaat?igsh=MXd6cjdlNm90b20xbw== ", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/", "_blank");
  };

  const technicalSkills = [
    { category: "Frontend", icon: Code2, skills: ["JavaScript (ES6+)", "ReactJS", "HTML5", "Tailwind CSS"] },
    { category: "Backend", icon: Server, skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets"] },
    { category: "Database & ODM", icon: Database, skills: ["MongoDB", "Mongoose"] },
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

  const projects = [
    {
      title: "Student LMS",
      subtitle: "Learning Management System",
      liveUrl: "https://school-lms-five.vercel.app",
      tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
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
      liveUrl: "https://social-media-two-steel.vercel.app",
      tech: ["React", "NodeJs", "WebSockets", "MongoDB"],
      features: [
        "Built a real-time social media application featuring live posts, comments, and notifications",
        "Integrated WebSockets for instant, real-time data synchronization between users",
        "Developed dynamic frontend components in React and a Node.js/Express.js backend with MongoDB"
      ],
      gradient: "from-orange-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-8">
      {/* Top Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Name & Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
                Hi, I'm
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
                Muhammad Samar Sadaat
              </h1>
              <div className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
                MERN Stack Developer
              </div>

              {/* Tagline */}
              <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
                Crafting scalable, high-performance web applications with modern technologies. Passionate about clean code, intuitive UX, and delivering exceptional digital experiences.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Button
                  size="lg"
                  variant="default"
                  onClick={() => {
                    const projectsSection = document.querySelector('[data-testid="section-projects"]');
                    projectsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-testid="button-view-projects"
                >
                  View Projects
                  <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadCV}
                  data-testid="button-download-cv"
                >
                  Resume
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleGithubClick}
                  data-testid="button-github-icon"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => window.open("https://wa.me/923187646305?text=Hello!", "_blank")}
                  data-testid="button-whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => window.location.href = "mailto:sammarsadaat@gmail.com"}
                  data-testid="button-email-icon"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Column - Workspace Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={workspaceImage}
                  alt="Developer"
                  className="w-full h-auto object-cover"
                  data-testid="img-workspace"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 md:py-24 bg-background" data-testid="section-summary">
        {/* <section className="py-16 md:py-24 bg-background" data-testid="section-summary"> */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Me Text */}
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-lg text-foreground/80 leading-relaxed text-justify">
                I’m a passionate MERN Stack Developer with hands-on experience in MongoDB,
                Express.js, React.js, and Node.js. I love building scalable, high-performance
                web applications that deliver seamless user experiences and solve real-world problems.
                <br />
                <br />
                My experience includes developing dynamic front-end interfaces, designing RESTful
                APIs, and working with databases to create efficient full-stack solutions. I’m driven
                by clean code, continuous learning, and innovation, and I thrive in collaborative
                environments that challenge me to grow and create impact.
                <br />
                <br />
                I’m always exploring new technologies and best practices to craft modern, reliable,
                and elegant web solutions that make a difference.
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
                  <div className="text-3xl font-bold text-primary">3</div>
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
      {/* <section className="py-16 md:py-24 bg-muted/30" data-testid="section-education">
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
      </section> */}

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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <Card
                  key={skill.name}
                  className="p-6 text-center hover-elevate"
                  data-testid={`card-soft-skill-${skill.name.toLowerCase().replace(/ /g, '-')}`}
                >
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

              <Card
                className="p-8 relative flex flex-col sm:flex-row sm:items-start sm:gap-6 hover:shadow-lg transition-all duration-300"
                data-testid="card-experience"
              >
                {/* Timeline Icon */}
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 sm:mb-0 sm:mt-4">
                    <BriefcaseBusiness className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">MERN Stack Developer</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Gained extensive hands-on experience in full-stack web application development.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-justify">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">
                        Contributed to the development and maintenance of dynamic web modules with a focus on performance and scalability.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-justify">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">
                        Collaborated within a cross-functional team to design, develop, and deploy real-time features using WebSockets.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-justify">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">
                        Optimized MongoDB queries to improve data retrieval efficiency and overall backend performance.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-justify">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">
                        Participated in code reviews, debugging, and version control using Git & GitHub.
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-background" data-testid="section-projects">
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
                  <Button
                    size="lg"
                    variant="default"
                    className="mt-4 flex items-center gap-2"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <Radio style={{ width: "25px", height: "25px", color: "white" }} />
                    Live
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 text-white" data-testid="section-contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 text-white/90">
            <a
              href="mailto:sammarsadaat@gmail.com"
              className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-lg transition-all"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm md:text-base">sammarsadaat@gmail.com</span>
            </a>

            <a
              href="tel:+923187646305"
              className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-lg transition-all"
              data-testid="link-phone"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm md:text-base">+92 318 7646305</span>
            </a>

            <div
              className="flex items-center gap-2 px-4 py-2"
              data-testid="text-location"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm md:text-base">Lahore</span>
            </div>
          </div>
          {/* Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="icon"
              variant="outline"
              onClick={handleGithubClick}
              data-testid="button-github-icon"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              onClick={handleLinkedinClick}
              variant="outline"
              data-testid="button-linkedin-footer"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => window.open("https://wa.me/923187646305?text=Hello!", "_blank")}
              data-testid="button-whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              onClick={handleFacebookClick}
              variant="outline"
              data-testid="button-facebook-footer"

            >
              <Facebook className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              data-testid="button-insta-footer"
              onClick={handleInstaClick}
            >
              <Instagram className="w-5 h-5" />
            </Button>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Muhammad Samar Sadaat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

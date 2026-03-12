import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import workspaceImage from "@assets/generated_images/Developer_workspace_hero_image_e939cb41.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const yMotion = useTransform(scrollY, [0, 300], [0, 20]);

  const handleDownloadCV = () => window.open("/muhammad-samar-sadaat", "_blank");
  const handleGithubClick = () => window.open("https://github.com/samar-sadaat", "_blank");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text */}
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight"
            >
              Hi, I'm
            </motion.h1>

            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight"
            >
              Muhammad Samar Sadaat
            </motion.h1>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
            >
              MERN Stack Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl"
            >
              Crafting scalable, high performance web applications with modern technologies. Passionate about clean code, intuitive UX, and delivering exceptional digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Button
                size="lg"
                variant="default"
                onClick={() => {
                  const projectsSection = document.querySelector('[data-testid="section-projects"]');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleDownloadCV}>
                Resume
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <Button size="icon" variant="outline" onClick={handleGithubClick}>
                <Github className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => window.open("https://wa.me/923187646305?text=Hello!", "_blank")}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => (window.location.href = "mailto:sammarsadaat@gmail.com")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Workspace Image with parallax */}
          <motion.div
            style={{ y: yMotion }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={workspaceImage}
                alt="Developer Workspace"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

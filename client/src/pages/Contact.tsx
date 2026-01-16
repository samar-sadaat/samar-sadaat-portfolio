import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

export default function Contact() {
  const handleGithubClick = () => window.open("https://github.com/samar-sadaat", "_blank");
  const handleLinkedinClick = () => window.open("https://www.linkedin.com/", "_blank");
  const handleFacebookClick = () => window.open("https://www.facebook.com/share/1BQzefRCy4/", "_blank");
  const handleInstaClick = () => window.open("https://www.instagram.com/samar._.sadaat", "_blank");

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 text-white/90">
          <a href="mailto:sammarsadaat@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg hover-elevate">
            <Mail className="w-5 h-5"/> sammarsadaat@gmail.com
          </a>
          <a href="tel:+923187646305" className="flex items-center gap-2 px-4 py-2 rounded-lg hover-elevate">
            <Phone className="w-5 h-5"/> +92 318 7646305
          </a>
          <div className="flex items-center gap-2 px-4 py-2">
            <MapPin className="w-5 h-5"/> Lahore
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button size="icon" variant="outline" onClick={handleGithubClick}><Github className="w-5 h-5"/></Button>
          <Button size="icon" variant="outline" onClick={handleLinkedinClick}><Linkedin className="w-5 h-5"/></Button>
          <Button size="icon" variant="outline" onClick={() => window.open("https://wa.me/923187646305?text=Hello!", "_blank")}>
            <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5"/>
          </Button>
          <Button size="icon" variant="outline" onClick={handleFacebookClick}><Facebook className="w-5 h-5"/></Button>
          <Button size="icon" variant="outline" onClick={handleInstaClick}><Instagram className="w-5 h-5"/></Button>
        </div>

        <div className="pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Muhammad Samar Sadaat.</p>
        </div>
      </div>
    </motion.section>
  );
}

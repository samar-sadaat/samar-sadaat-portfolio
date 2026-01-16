import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  features: string[];
  gradient: string;
  liveUrl: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Hospital Management System",
      subtitle: "Advanced Healthcare Management Platform",
      liveUrl: "https://your-hospital-app.vercel.app",
      tech: ["ReactJs", "NodeJs", "AI Integration", "Stripe"],
      features: [
        "Secure online payments",
        "Pharmacy inventory management",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Student LMS",
      subtitle: "Learning Management System",
      liveUrl: "https://school-lms-five.vercel.app",
      tech: ["ReactJs", "NodeJs", "MongoDB"],
      features: [
        "Student & teacher portal",
        "Role-based authentication",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Social Media App",
      subtitle: "Real-time Social Platform",
      liveUrl: "https://social-media-two-steel.vercel.app",
      tech: ["React", "NodeJs", "WebSockets"],
      features: [
        "Live posts & notifications",
        "Secure authentication",
      ],
      gradient: "from-orange-500 to-pink-600",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Projects
        </h2>

        {/* Slider container */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, A11y]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            loop={false}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1.05,     // standard mobile portrait
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.35,     // mobile landscape
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 1.6,      // small tablets
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 2,        // tablets
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 2.2,      // desktop (slightly wider cards)
                spaceBetween: 20,
              },
            }}
            
          >

            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <Card className="overflow-hidden w-[300px] md:w-[350px] mx-auto">
                <div className={`h-16 sm:h-20 bg-gradient-to-br ${project.gradient}`} />
                  <div className="p-2 sm:p-3">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-[9px]">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <ul className="space-y-1 mb-2">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex gap-1 text-xs">
                          <CheckCircle2 className="w-3 h-3 text-primary mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <Radio className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center">
            ‹
          </button>

          {/* Right Arrow */}
          <button className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center">
            ›
          </button>

        </div>
      </div>
    </motion.section>
  );
}

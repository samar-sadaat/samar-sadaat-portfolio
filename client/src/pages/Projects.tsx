import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  features: string[];
  gradient: string;
  liveUrl: string;
}

export default function Projects() {
  const swiperRef = useRef<SwiperType | null>(null);

  const projects: Project[] = [
    {
      title: "Hospital Management System",
      subtitle: "Healthcare Management Platform",
      liveUrl: "https://your-hospital-app.vercel.app",
      tech: ["React", "Node.js", "AI", "Stripe"],
      features: [
        "Secure online payments",
        "Pharmacy inventory management",
      ],
      gradient: "from-emerald-500 via-green-500 to-teal-600",
    },
    {
      title: "Student LMS",
      subtitle: "Learning Management System",
      liveUrl: "https://school-lms-five.vercel.app",
      tech: ["React", "Node.js", "MongoDB"],
      features: [
        "Student & teacher portal",
        "Role-based authentication",
      ],
      gradient: "from-sky-500 via-blue-500 to-violet-600",
    },
    {
      title: "Social Media App",
      subtitle: "Real-time Social Platform",
      liveUrl: "https://social-media-two-steel.vercel.app",
      tech: ["React", "Node.js", "WebSockets"],
      features: [
        "Live posts & notifications",
        "Secure authentication",
      ],
      gradient: "from-orange-500 via-rose-500 to-pink-600",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Pagination, EffectCoverflow]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect="coverflow"
            grabCursor
            centeredSlides={true}
            loop={false}
            speed={700}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 1.4,
              scale: 0.95,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 2.05,
                spaceBetween: 26,
              },
            }}
            className="!px-1 !pb-14"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.title} className="!h-auto pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="h-full"
                >
                  <Card className="group relative h-full w-full overflow-hidden rounded-3xl border border-border/60 bg-background shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30">
                    <div
                      className={`relative h-32 bg-gradient-to-br ${project.gradient}`}
                    >
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />

                      {/* <div className="absolute top-4 right-4">
                        <div className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                          Featured Project
                        </div>
                      </div> */}
                    </div>

                    <CardContent className="pt-5 pb-6 px-5 sm:px-6">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1.5">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full sm:w-auto rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-[-8px] sm:left-[-4px] top-[42%] z-10 flex max-[900px]:hidden h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-[-8px] sm:right-[-4px] top-[42%] z-10 flex max-[900px]:hidden h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
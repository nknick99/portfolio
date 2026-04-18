import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DevStatsSection } from "@/components/dev-stats-section"
import { ServicesSection } from "@/components/services-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
// import { DevSetupSection } from "@/components/dev-setup-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DevStatsSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        {/* <DevSetupSection /> */}
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

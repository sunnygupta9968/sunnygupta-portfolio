import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { DeveloperJourney } from "@/components/sections/developer-journey";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { CodingStats } from "@/components/sections/coding-stats";
import { ResumeHighlights } from "@/components/sections/resume-highlights"
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.personal.name,
    jobTitle: profile.personal.title,
    description: profile.personal.bio,
    url: profile.site.url,
    image: `${profile.site.url}${profile.personal.image}`,
    email: profile.personal.email,
    telephone: profile.personal.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.personal.location,
    },
    sameAs: Object.values(profile.socials).filter(Boolean),
    alumniOf: profile.education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution,
    })),
    knowsAbout: profile.skills.flatMap((group) => group.skills),
  };

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <DeveloperJourney />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <CodingStats />
        <ResumeHighlights />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

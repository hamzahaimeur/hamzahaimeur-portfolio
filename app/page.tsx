import { Footer } from '@/components/home/Footer'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Hero } from '@/components/home/Hero'
import { Navbar } from '@/components/home/Navbar'
import { Stats } from '@/components/home/Stats'
import { TechStack } from '@/components/home/TechStack'
import { WhatIDo } from '@/components/home/WhatIDo'
import { ContactCTA } from '@/components/home/ContactCTA'
import { BackToTop } from '@/components/home/BackToTop'

export default function Page() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <TechStack />
      <Stats />
      <ContactCTA />
      <Footer />
      <BackToTop />
    </main>
  )
}

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import LearningManagementSection from '@/components/LearningManagementSection'
import CorporateTrainingsSection from '@/components/CorporateTrainingsSection'
import PersonalisedTrainingSection from '@/components/PersonalisedTrainingSection'
import CapacityDevelopmentSection from '@/components/CapacityDevelopmentSection'
import ManagementDevelopmentSection from '@/components/ManagementDevelopmentSection'
import TransformationHubSection from '@/components/TransformationHubSection'
import TrainingConsultantSection from '@/components/TrainingConsultantSection'
import CTABanner from '@/components/CTABanner'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTABanner2 from '@/components/CTABanner2'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LearningManagementSection />
        <CorporateTrainingsSection />
        <PersonalisedTrainingSection />
        <CapacityDevelopmentSection />
        <ManagementDevelopmentSection />
        <TransformationHubSection />
        <TrainingConsultantSection />
        <CTABanner />
        <TestimonialsSection />
        <CTABanner2 />
      </main>
      <Footer />
    </>
  )
}

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TieredSystemSection from '@/components/TieredSystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TieredSystemSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}

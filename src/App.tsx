import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { HowItWorksFull } from './components/HowItWorksFull';
import { GlobalHiring } from './components/GlobalHiring';
import { HireFromAnywhere } from './components/HireFromAnywhere';
import { TestimonialsNew } from './components/TestimonialsNew';
import { FAQNew } from './components/FAQNew';
import { FinalCTANew } from './components/FinalCTANew';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <HowItWorksFull />
      <BentoFeatures />
      <HireFromAnywhere />
      <GlobalHiring />
      <TestimonialsNew />
      <FAQNew />
      <FinalCTANew />
      <Footer />
    </div>
  );
}

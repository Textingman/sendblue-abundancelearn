import Link from 'next/link';
import { Sparkles, Heart, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#F0F7F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#D1FAE5', color: '#113627' }}>
              <Sparkles className="w-4 h-4" />
              Life Lessons — 100% Free
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              Abundance Is a Way of Living,<br />Not Just a Goal
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Abundancelearn is a platform dedicated to helping people discover the life lessons that lead to true abundance — in health, relationships, purpose, and joy. We believe everyone deserves to live fully.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Most people think abundance means having more money. But real abundance is about living a life rich in meaning, connection, health, and joy.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              We built Abundancelearn to share the timeless life lessons that the most fulfilled people have discovered — lessons about mindset, gratitude, purpose, relationships, and resilience.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Whether you're navigating a major life transition or simply looking to grow, our guidance helps you find the wisdom that applies to your unique journey.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Sparkles className="w-5 h-5" style={{ color: '#113627' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Timeless Life Lessons</h3>
                  <p style={{ color: '#6B7280' }}>Curated wisdom from philosophy, psychology, and lived experience — distilled into practical guidance you can apply today.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Heart className="w-5 h-5" style={{ color: '#113627' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Whole-Life Abundance</h3>
                  <p style={{ color: '#6B7280' }}>We focus on all dimensions of a fulfilling life — not just finances, but health, relationships, purpose, and inner peace.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <BookOpen className="w-5 h-5" style={{ color: '#113627' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Learn at Your Own Pace</h3>
                  <p style={{ color: '#6B7280' }}>Your journey to abundance is personal. Our guidance meets you where you are and helps you grow at the pace that works for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

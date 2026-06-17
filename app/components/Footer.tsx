import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#0A2218' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FFFFFF' }}>Abundancelearn</h3>
            <p style={{ color: '#FFFFFF' }}>
              Timeless life lessons to help you discover true abundance in every area of your life.
            </p>
            <div className="flex items-center gap-4 mt-4">


            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/about" style={{ color: '#FFFFFF' }} className="hover:opacity-80">About</Link></li>
              <li><Link href="/signup" style={{ color: '#FFFFFF' }} className="hover:opacity-80">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" style={{ color: '#FFFFFF' }} className="hover:opacity-80">Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: '#FFFFFF' }} className="hover:opacity-80">Terms of Service</Link></li>
              <li><Link href="/contact" style={{ color: '#FFFFFF' }} className="hover:opacity-80">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>Contact</h4>
            <p style={{ color: '#FFFFFF' }}>support@abundancelearn.com</p>
            <p className="mt-2" style={{ color: '#FFFFFF' }}>1112 17th St<br />Santa Monica, CA 90403</p>
            <p className="mt-2 text-sm" style={{ color: '#FFFFFF' }}>Reply STOP to opt out of SMS. Reply HELP for help.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #113627', color: '#FFFFFF' }}>
          <p>&copy; 2026 Abundancelearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

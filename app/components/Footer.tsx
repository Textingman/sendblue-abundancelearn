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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" />
                </svg>
              </a>
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
            <p className="mt-2" style={{ color: '#FFFFFF' }}>8 The Green, Ste A<br />Dover, DE 19901</p>
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

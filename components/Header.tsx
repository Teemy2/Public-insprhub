import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/group_14.png"
            alt="inspr"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-black hover:text-dark-green transition-colors text-sm">
            Become a partner
          </a>
          <a href="#" className="text-black hover:text-dark-green transition-colors text-sm">
            About
          </a>
          <a href="#waitlist">
            <Button className="bg-black hover:bg-black/90 text-white">
            Join the waitlist
          </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}

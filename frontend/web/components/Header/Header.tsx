// src/components/Header/Header.tsx

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"


export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="cursor-pointer">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Brilliant Logo" 
            width={120} 
            height={40} 
          />
        </Link>
      </div>
      <nav>
        {/* <Link 
          href="/login" 
          className="px-4 py-2 border border-black rounded-md text-black font-medium transition-colors hover:bg-gray-100"
        >
          Log in
        </Link> */}
        <Button variant="outline">Button</Button>

      </nav>
    </header>
  )
}
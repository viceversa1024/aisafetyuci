import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-[#00386c] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-indigo-200 transition-colors">
            AI Safety at UCI
          </Link>
          <div className="flex space-x-8">
            <Link href="/about" className="text-indigo-100 hover:text-indigo-200 transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="text-indigo-100 hover:text-indigo-200 transition-colors font-medium">
              Programs
            </Link>
            <Link href="/resources" className="text-indigo-100 hover:text-indigo-200 transition-colors font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-indigo-100 hover:text-indigo-200 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

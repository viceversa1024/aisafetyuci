import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#00386c] text-indigo-100">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} AI Safety at UCI</div>
        <div className="flex items-center space-x-4 text-sm mt-3 md:mt-0">
          <Link href="/contact" className="hover:text-indigo-200">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

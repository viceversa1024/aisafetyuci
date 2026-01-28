import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#00386c] text-indigo-100">
      <div className="container mx-auto px-4 pt-5 pb-2 text-center">
        <a href="https://calendly.com/helenatran9305" target="_blank" rel="noopener noreferrer" className="inline-block text-sm bg-indigo-100 text-[#00386c] font-semibold px-4 py-2 rounded-full hover:bg-white transition-colors">
          Curious about AI safety? Let us buy you coffee!
        </a>
      </div>
      <div className="container mx-auto px-4 pb-5 pt-3 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} AI Safety at UCI</div>
        <div className="flex items-center space-x-4 text-sm mt-3 md:mt-0">
          <Link href="/contact" className="hover:text-indigo-200">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

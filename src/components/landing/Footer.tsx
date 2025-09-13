import Link from 'next/link'
import { Printer, Mail, Phone, MapPin, FileText } from 'lucide-react'
import { COMPANY_DETAILS } from '@/lib/contants'


export default function Footer() {
  const {
    name,
    addressLine1,
    addressLine2,
    addressLine3,
    phone,
    email,
    gstin,
  } = COMPANY_DETAILS

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Short Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label={`${name} Home`}>
              <Printer className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">{name}</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Your partner for premium printing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold tracking-tight">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold tracking-tight">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <p>{addressLine1}</p>
                  <p>{addressLine2}</p>
                  <p>{addressLine3}</p>
                </div>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="h-4 w-4" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FileText className="h-4 w-4" />
                <span>GSTIN: {gstin}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

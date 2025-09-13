import { MapPin, Phone, Mail, FileText } from "lucide-react";

export const COMPANY_DETAILS = {
  name: 'Screen Studio',
  addressLine1: '#88, Behind Rama Mandira, Hosakerehalli ',
  addressLine2: 'Main Road, Hosakerehalli, BSK 3rd Stage ',
  addressLine3: 'Bengaluru - 85',
  phone: '+91 94480 69572 / +91 96863 77401',
  email: 'contact@screenstudio.com',
  gstin: '29AKSPS1310D1Z5', 
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124437.03329809621!2d77.39800601640624!3d12.929734500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f1b5ae41179%3A0x57823b90e5eb8124!2sSCREEN%20STUDIO!5e0!3m2!1sen!2sin!4v1757263960925!5m2!1sen!2sin', 
  icons: {
    address: MapPin,
    phone: Phone,
    email: Mail,
    gstin: FileText,
  },
};
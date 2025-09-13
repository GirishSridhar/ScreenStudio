import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { COMPANY_DETAILS } from "@/lib/contants";
import { Mail, Phone } from "lucide-react";
export default function Contact() {
  const { phone, email } = COMPANY_DETAILS;

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionWrapper>
          <Card className="max-w-2xl mx-auto bg-card border-border shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
                Contact Us
              </CardTitle>
              <CardDescription className="text-lg text-gray-300 pt-2">
                Please send us a message at:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center text-muted-foreground text-lg">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </CardContent>
          </Card>
        </SectionWrapper>
      </div>
    </section>
  );
}
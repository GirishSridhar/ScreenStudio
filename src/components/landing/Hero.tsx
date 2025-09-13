import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionWrapper from './SectionWrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10" />
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              High Quality Printing Solutions
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-gray-200">
              From business cards to custom labels, Screen Studio delivers premium printing services tailored to your brand's needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="font-bold text-lg bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold text-lg px-8">
                <Link href="#products">Our Products</Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

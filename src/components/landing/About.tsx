import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about');

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionWrapper>
          <div className="grid  gap-12 lg:gap-24 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
                About Screen Studio
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Screen Studio was established as a proprietorship firm in 1995 by Sri N. R. Sridhara in Bengaluru, India. With over 15 years of experience in the garment industry, the company started a small screen printing unit to supply screen-printed labels, hang tags, and stickers tailored to client requirements.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The company supplies brand labels, wash care labels, traceability labels, brand hang tags, barcode stickers, MRP stickers, and more to esteemed clients who have established their brands in both domestic and international markets. Equipped with in-house designing, rotary printing machines, heat or cold seal and ultrasonic cutting machines, barcode printing machines for variable data printing, skilled operators, and power backup, we aim to serve clients with the best quality goods and services, adhering to high standards, norms, and eco-friendly practices.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We purchase raw materials with OEKO-TEX® certification and follow OEKO-TEX® standards in our production practices, nearly ready to obtain OEKO-TEX® certification for our processes. Our strength lies in our team of 6 dedicated and skilled employees who handle their jobs with ease, contributing to client satisfaction through reasonable pricing, quality, and service orientation. We challenge ourselves and others to reach higher and think bigger to improve the quality of life, embracing the practice of continuous improvement.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Screen Studio has collaborated with brands such as CWF, ERGOBABY, AIGLE INTERNATIONAL, BONPOINT, DEGRE7, PAULBOYE, and others. We are located in Bengaluru, South India, a city known as the heart of information technology, garden city, silicon valley, and by many other names.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
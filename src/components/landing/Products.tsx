import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tag, Sticker, Contact as ContactIcon, Shirt } from 'lucide-react';

const productsData = [
    {
      id: 'labels',
      title: 'Labels',
      icon: <Shirt className="h-8 w-8 text-primary" />,
      imageUrl: 'ScreenStudio/images/WC.jpg',
      summary: 'Durable and versatile labels for various applications, including wash care, coding, tracking, warnings, and bellybands. Available in multiple materials to suit your needs.',
      types: ['Wash Care Labels', 'Code Labels', 'Tracking Labels', 'Warning Labels', 'Bellyband'],
      materials: [
          { name: 'Satin', description: 'Smooth, glossy finish, ideal for high-end apparel and soft-touch applications. Offers excellent print quality.' },
          { name: 'Taffeta', description: 'Crisp, durable, and cost-effective. Commonly used for care labels and general product information.' },
          { name: 'Tyvek', description: 'Waterproof, tear-resistant, and lightweight. Suitable for outdoor gear, industrial products, and items requiring high durability.' },
          { name: 'Cotton Tape', description: 'Soft, natural feel, perfect for eco-friendly brands and delicate items. Provides a rustic or premium aesthetic.' },
      ],
    },
    {
      id: 'stickers',
      title: 'Stickers',
      icon: <Sticker className="h-8 w-8 text-primary" />,
      imageUrl: 'ScreenStudio/images/barcode-sticker.jpg',
      summary: 'High-quality adhesive stickers perfect for barcodes, pricing, QR codes, and general product information. Choose from a range of finishes and materials.',
      types: ['Barcode Stickers', 'Price Stickers', 'Code Stickers', 'QR Code Stickers'],
      materials: [
          { name: 'Plain Sticker (White)', description: 'Versatile and cost-effective, suitable for general purpose labeling with good printability.' },
          { name: 'Tinted Sticker', description: 'Stickers with a colored background, enhancing visual appeal and brand consistency.' },
          { name: 'Transparent Sticker', description: 'Clear material that allows the product surface to show through, ideal for a "no-label" look.' },
          { name: 'Vinyl Sticker', description: 'Durable, weather-resistant, and flexible. Great for outdoor use, product branding, and promotional items.' },
          { name: 'Mirror Coated Sticker', description: 'High-gloss, reflective sticker material often used for premium product labeling and achieving a metallic look.' },
      ],
    },
    {
      id: 'hang-tags',
      title: 'Hang Tags',
      icon: <Tag className="h-8 w-8 text-primary" />,
       imageUrl: 'ScreenStudio/images/hangtag.jpg',
      summary: 'Premium hang tags to enhance your product presentation. Available in various board types with multiple finishing options like UV coating and foiling.',
      types: ['Product Tags', 'Brand Tags', 'Promotional Tags', 'Information Tags'],
      boardTypes: [
          { name: 'Art Board', description: 'Sturdy and smooth, offering excellent print quality. A popular choice for high-quality hang tags.' },
          { name: 'Ivory Board', description: 'Premium board with a smooth, high-white surface, providing a luxurious feel and excellent print reproduction.' },
          { name: 'Texture Board', description: 'Board with a distinct texture, adding a unique tactile element and visual interest to hang tags.' },
      ],
      finishes: [
          { name: 'UV Coating', description: 'A high-gloss coating that enhances vibrancy and provides protection against scratches and moisture.' },
          { name: 'Foiling', description: 'Metallic foil (e.g., gold, silver) applied to create elegant, eye-catching accents and text.' },
          { name: 'Gloss Lamination', description: 'A shiny, protective film that enhances colors and provides a durable, high-gloss finish.' },
          { name: 'Matte Lamination', description: 'A non-reflective, protective film that offers a sophisticated, soft-touch finish and reduces glare.' },
      ],
    },
    {
      id: 'business-cards',
      title: 'Business Cards',
      icon: <ContactIcon className="h-8 w-8 text-primary" />,
       imageUrl: 'ScreenStudio/images/business-card.jpg',
      summary: 'Professionally designed and printed business cards that make a lasting impression. Choose from various board types and finishing options.',
      types: ['Standard Business Cards', 'Premium Business Cards', 'Custom Shaped Cards'],
      boardTypes: [
          { name: 'Art Board', description: 'Standard, reliable choice for business cards, offering good stiffness and print quality.' },
          { name: 'Ivory Board', description: 'A premium option for a smoother, brighter white card, conveying quality and professionalism.' },
          { name: 'Texture Board', description: 'Adds a unique tactile dimension to business cards, making them stand out.' },
      ],
      finishes: [
          { name: 'UV Coating (Spot or Full)', description: 'Adds a glossy, protective layer to specific areas or the entire card for visual pop.' },
          { name: 'Foiling', description: 'Ideal for logos or text, adding a touch of luxury with metallic finishes.' },
          { name: 'Gloss Lamination', description: 'Provides a shiny, durable finish that makes colors appear more vibrant.' },
          { name: 'Matte Lamination', description: 'Offers a smooth, non-reflective, and elegant finish, often preferred for a modern look.' },
      ],
    },
];

export default function Products() {
  return (
    <section id="products" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <SectionWrapper>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
              Our Products
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              We offer a wide range of printing services to meet your needs. Explore our main product categories below for detailed information on materials and finishes.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {productsData.map((product) => {
                return (
                  <AccordionItem value={product.id} key={product.id} className="bg-background border-border rounded-lg shadow-lg hover:border-primary transition-all duration-300">
                    <AccordionTrigger className="p-6 text-left no-underline hover:no-underline">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0">{product.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl">{product.title}</h3>
                          <p className="text-muted-foreground mt-1 text-base">{product.summary}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-6 pt-0">
                        <div className="grid md:grid-cols-5 gap-8">
                          <div className="md:col-span-2 relative aspect-video rounded-md overflow-hidden">

                              <Image
                                src={product.imageUrl}
                                alt={product.id}
                                fill
                                className="object-cover"
                              />
                           
                          </div>
                          <div className="md:col-span-3 space-y-6">
                            <div>
                              <h4 className="font-semibold text-lg text-primary mb-2">Common Types</h4>
                              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                {product.types.map(t => <li key={t}>{t}</li>)}
                              </ul>
                            </div>
                            
                            {product.materials && (
                              <div>
                                <h4 className="font-semibold text-lg text-primary mb-2">
                                  {product.id === 'labels' || product.id === 'stickers' ? 'Available Materials' : 'Common Materials'}
                                </h4>
                                <div className="space-y-2">
                                  {product.materials.map(m => (
                                    <div key={m.name}>
                                      <p className="font-medium text-foreground">{m.name}</p>
                                      <p className="text-muted-foreground">{m.description}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {product.boardTypes && (
                              <div>
                                <h4 className="font-semibold text-lg text-primary mb-2">Available Board Types</h4>
                                <div className="space-y-2">
                                  {product.boardTypes.map(b => (
                                    <div key={b.name}>
                                      <p className="font-medium text-foreground">{b.name}</p>
                                      <p className="text-muted-foreground">{b.description}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {product.finishes && (
                              <div>
                                <h4 className="font-semibold text-lg text-primary mb-2">Popular Finishing Options</h4>
                                <div className="space-y-2">
                                  {product.finishes.map(f => (
                                    <div key={f.name}>
                                      <p className="font-medium text-foreground">{f.name}</p>
                                      <p className="text-muted-foreground">{f.description}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

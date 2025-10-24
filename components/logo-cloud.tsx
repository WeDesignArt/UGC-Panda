import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from "next/image"

export default function LogoCloud() {
  const logos = [
    { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia", height: 20 },
    { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column", height: 16 },
    { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub", height: 16 },
    { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike", height: 20 },
    { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy", height: 20 },
    { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel", height: 16 },
    { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly", height: 28 },
    { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI", height: 24 },
  ]

  // repeat array twice for smooth looping
  const repeatedLogos = [...logos, ...logos]

  return (
    <section className="bg-background overflow-hidden py-16 w-full">
      <div className="group relative">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative py-6 w-full">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {repeatedLogos.map((logo, index) => (
                <div key={index} className="flex">
                  <Image
                    className="mx-auto w-fit dark:invert"
                    src={logo.src}
                    alt={`${logo.alt} Logo`}
                    height={logo.height}
                    width={100}
                    style={{ height: `${logo.height}px`, width: 'auto' }}
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Edge blur effects */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

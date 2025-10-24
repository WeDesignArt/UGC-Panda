import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ReusableSectionProps {
  tag?: string;
  title: string;
  title2?: string;
  highlight?: React.ReactNode;
  highlight1?: React.ReactNode;
  highlight2?: React.ReactNode;
  description: string;
  description1?: string; // 👈 optional bana diya
  description2?: string; // 👈 optional bana diya
  listItems?: string[];
  extraText?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;

  // optional blur effects
  blurTopLeft?: boolean;
  blurTopRight?: boolean;
  blurBottomLeft?: boolean;
  blurBottomRight?: boolean;
}

export default function ReusableSection({
  tag,
  title,
  title2,
  highlight,
  highlight1,
  highlight2,
  description,
  description1,
  description2,
  listItems,
  extraText,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  reverse = false,
  blurTopLeft,
  blurTopRight,
  blurBottomLeft,
  blurBottomRight,
}: ReusableSectionProps) {
  return (
    <section className="relative w-full lg:pt-28">
      <div className="container mx-auto">
        <div
          className={`section-wrapper flex flex-col md:flex-row items-center md:px-0 px-4 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full lg:pr-8 text-black relative z-10">
            {tag && (
              <Link href="/" className="btn-pill ">
                {tag}
              </Link>
            )}

            <h2 className="section-title mb-4">
              {highlight1 && (
                <span className="text-gradient">{highlight1}</span>
              )}
              {title}{" "}
              {highlight && <span className="text-gradient">{highlight}</span>}
              {title2 && " " + title2}
              {highlight2 && (
                <span className="text-gradient"> {highlight2}</span>
              )}
            </h2>

            <p className="mb-4">{description}</p>
            {description1 && <p className="mb-4">{description1}</p>}
            {description2 && <p className="mb-4">{description2}</p>}

            {/* ✅ Optional unordered list */}
            {(listItems?.length ?? 0) > 0 && (
              <ul className="list-disc pl-5 mb-4">
                {(listItems ?? []).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {extraText && <p className="font-bold">{extraText}</p>}

            {/* Button only if props exist */}
            {buttonText && buttonLink && (
              <Button
                className="btn-fill gradient-main px-5 py-1 md:px-10 md:py-2 rounded-full text-white hover:opacity-90 transition-[opacity] text-xs md:text-sm mt-6"
                asChild
              >
                <Link href={buttonLink}>{buttonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Blur effects - optional */}
      {blurTopLeft && (
        <div className="absolute left-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>
      )}
      {blurTopRight && (
        <div className="absolute right-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>
      )}
      {blurBottomLeft && (
        <div className="absolute left-0 bottom-0 inline-flex radial-blur lg:size-80 z-0"></div>
      )}
      {blurBottomRight && (
        <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 z-0"></div>
      )}
    </section>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContentCard() {
  return (
    <>
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">

          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-12/12 w-full text-center">


              <h2 className="section-title mb-4">
                Data-backed <span className="text-gradient">creator ads</span> for every business{" "}
              </h2>

              <p className="mb-4 px-28 text-center">
                Flexible video creation that scales with your needs, no matter your size or industry.
              </p>
            </div>

          </div>
          <section className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 py-18 md:gap-[5%] gap-8 md:px-0 px-4">

            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/icon-app.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-15 w-15 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-3xl r w-full text-center font-roboto-condensed">
                      For eCom brands
                    </CardTitle>
                    <CardDescription className="text-black text-md font-lato max-w-xs text-center">
                      Selling products online? Access UGC Panda's vast network of creators
                      and quickly create high-performing video ads that showcase your
                      products and drive results.
                    </CardDescription>
                  </CardHeader>

             
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="btn-fill gradient-main px-8 py-3 rounded-full  text-white hover:opacity-90 transition-opacity text-sm mt-6"
                    >
                      Learn More

                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gradient"
                      ></Link>
                    </Button>
                  </div>
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-6 rotate-12 opacity-4 z-[0] inline-block w-[110%] lg:w-7/12"
                />
              </div>
            </Card>

            <Card className="relative p-[1.2px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/icon-ecommerce.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-15 w-15 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-3xl r w-full text-center font-roboto-condensed">
                      For apps
                    </CardTitle>
                    <CardDescription className="text-black text-md font-lato max-w-xs text-center">
                      Selling products online? Access UGC Panda's vast network of creators
                      and quickly create high-performing video ads that showcase your
                      products and drive results.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein */}
                  <div className="flex justify-center">

                    <Button
                      type="submit"
                      className="btn-fill gradient-main px-8 py-3 rounded-full  text-white hover:opacity-90 transition-opacity text-sm mt-6"
                    >
                      Learn More

                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gradient"
                      ></Link>
                    </Button>

                  </div>
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-6 rotate-12 opacity-4 z-[0] inline-block w-[110%] lg:w-7/12"
                />
              </div>
            </Card>

          </section>
        </div>
      </section>
    </>
  );
}

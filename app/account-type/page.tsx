"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function AccountType() {
  const [selected, setSelected] = useState<"influencer" | "brand" | null>(null);
  const handleSelect = (type: "influencer" | "brand") => setSelected(type);
  const handleNext = (e: React.MouseEvent) => {
    if (!selected) {
      e.preventDefault();
      alert("Please select an account type.");
    }
  };
  return (
    <main className="flex items-center justify-center min-w-screen min-h-screen p-10 lg:p-0 bg-black">
      <section className="container rounded-2xl bg-white p-4 lg:p-14 text-center">
        <section className="text-center">
          <h1 className="uppercase font-extrabold text-5xl">
            Choose an account type
          </h1>
          <p>Are you a Influencer or Brand? Select below For Log In:</p>
        </section>

        <section className="flex flex-col lg:flex-row justify-center w-full lg:w-3/4 lg:mx-auto mt-12 gap-5">
          <Card
            className={`relative lg:w-sm bg-primary text-white justify-center items-center overflow-hidden cursor-pointer border-4 transition-all ${
              selected === "influencer"
                ? "border-yellow-400"
                : "border-transparent"
            }`}
            onClick={() => handleSelect("influencer")}
            tabIndex={0}
            aria-pressed={selected === "influencer"}
          >
            <div className="p-4">
              <CardContent className="relative z-[2] min-h-52 justify-center flex-col flex items-center">
                <Image
                  src="/icon-influ.png"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-24 inline-block"
                />
                <p className="mt-4 text-2xl">I&apos;m an Influencer</p>
              </CardContent>
              <Image
                src={"/logo-panda-black.svg"}
                alt="logo"
                width="0"
                height="0"
                sizes="100vw"
                className="absolute -right-7 -bottom-7 rotate-12 opacity-5 z-[0] inline-block w-[110%] lg:w-2/3"
              />
            </div>
          </Card>

          <span className="items-center justify-center flex text-xl uppercase">
            OR
          </span>

          <Card
            className={`relative lg:w-sm bg-secondary text-white justify-center items-center overflow-hidden cursor-pointer border-4 transition-all ${
              selected === "brand" ? "border-yellow-400" : "border-transparent"
            }`}
            onClick={() => handleSelect("brand")}
            tabIndex={0}
            aria-pressed={selected === "brand"}
          >
            <div className="p-4">
              <CardContent className="relative z-[2] min-h-52 justify-center flex-col flex items-center">
                <Image
                  src="/icon-brand.png"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-24 inline-block"
                />
                <p className="mt-4 text-2xl">I&apos;m a brand</p>
              </CardContent>
              <Image
                src={"/logo-panda-black.svg"}
                alt="logo"
                width="0"
                height="0"
                sizes="100vw"
                className="absolute -right-7 -bottom-7 rotate-12 opacity-5 z-[0] inline-block w-[110%] lg:w-2/3"
              />
            </div>
          </Card>
        </section>

        <section className="text-center py-5 mt-10">
          <Button
            asChild
            className="rounded-full gradient-main w-1/2 lg:w-1/4 py-6 text-2xl font-semibold"
            disabled={!selected}
          >
            <Link
              href={selected ? `/login?type=${selected}` : "#"}
              onClick={handleNext}
            >
              Next
            </Link>
          </Button>
        </section>
      </section>
    </main>
  );
}

export default AccountType;

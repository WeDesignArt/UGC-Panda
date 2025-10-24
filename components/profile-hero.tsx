"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RiInstagramFill, RiTiktokFill, RiYoutubeFill } from "@remixicon/react";

export default function ProfileHero() {
  const [active, setActive] = useState("Social Coverage");

  const buttons = [
    "Social Coverage",
    "Projects",
    "Creator Network",
    "Audience",
    "Scoring",
  ];

  const renderContent = () => {
    switch (active) {
      case "Social Coverage":
        return (
          <div className="flex flex-col items-center mt-10">
            {/* Social Stats Section */}
            <div className="flex flex-wrap justify-center gap-20 mb-20">
              <div className="flex items-center gap-5">
                <RiInstagramFill className="w-15 h-15 text-primary" />
                <h5 className="text-3xl font-bold">471.2k</h5>
              </div>

              <div className="flex items-center gap-5">
                <RiTiktokFill className="w-15 h-15 text-primary" />
                <h5 className="text-3xl font-bold">230.5k</h5>
              </div>

              <div className="flex items-center gap-5">
                <RiYoutubeFill className="w-15 h-15 text-primary" />
                <h5 className="text-3xl font-bold">512.8k</h5>
              </div>
            </div>

            {/* Profile Overview Section */}
            <div className="text-center max-w-6xl">
              <h1 className="uppercase section-title font-bold font-roboto-condensed tracking-wider">
                Profile Overview
              </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        );

      case "Projects":
        return (
          <div className="text-center max-w-6xl mx-auto mt-10">
            <h1 className="uppercase section-title font-bold font-roboto-condensed tracking-wider">
              Projects Overview
            </h1>
            <p className="mt-5">
              Discover a diverse range of creative and technical projects built
              by talented individuals and teams. Each project highlights unique
              design, innovation, and problem-solving skills. Explore how ideas
              are transformed into interactive digital experiences. From web
              apps to visual concepts, every creation tells a story. Learn about
              the tools, technologies, and strategies behind each success. Join
              the journey of creativity and collaboration that drives every
              project forward.
            </p>
          </div>
        );

      case "Creator Network":
        return (
          <div className="text-center max-w-4xl mx-auto mt-10">
            <h1 className="uppercase section-title font-bold font-roboto-condensed tracking-wider">
              Creator Network
            </h1>
            <p className="mt-5">
              A space where creators from all fields come together to share
              their vision. Build meaningful connections with designers,
              developers, and storytellers. Exchange ideas, collaborate on new
              ventures, and grow your creative circle. Find inspiration from
              others and contribute to projects that match your passion. Empower
              your work through shared resources and real community support.
              Together, we shape a vibrant network built on creativity and
              innovation.
            </p>
          </div>
        );

      case "Audience":
        return (
          <div className="text-center max-w-4xl mx-auto mt-10">
            <h1 className="uppercase section-title font-bold font-roboto-condensed tracking-wider">
              Audience Insights
            </h1>
            <p className="mt-5">
              Our audience is at the heart of everything we do. Discover
              engaging content tailored to your interests and curiosity. Join
              conversations, share feedback, and influence future creations.
              Experience a world where interaction and storytelling meet. Every
              click, view, and comment helps shape better digital experiences.
              Be part of a growing global community that values connection and
              creativity.
            </p>
          </div>
        );

      case "Scoring":
        return (
          <div className="text-center max-w-4xl mx-auto mt-10">
            <h1 className="uppercase section-title font-bold font-roboto-condensed tracking-wider">
              Performance Scoring
            </h1>
            <p className="mt-5">
              Measure creativity and performance with a transparent scoring
              system. Track engagement, feedback, and audience response in real
              time. See which projects and creators are making the biggest
              impact. Our scoring helps highlight quality, consistency, and
              innovation. Use insights to improve your future work and
              strategies. Celebrate growth with data-driven results and
              meaningful recognition.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full py-10 px-4 flex flex-col items-center bg-white">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:gap-8 md:gap-3 gap-2 py-10 max-w-5xl">
        {buttons.map((label) => (
          <div key={label} className="rounded-full p-[1px] gradient-main">
            <Button
              onClick={() => setActive(label)}
              className={`rounded-full cursor-pointer px-5 py-1 md:px-8 md:py-2 transition-all text-xs md:text-sm ${
                active === label
                  ? "gradient-main text-white"
                  : "bg-white text-black gradient-main-hover hover:text-white"
              }`}
            >
              {label}
            </Button>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-10 w-full flex justify-center">{renderContent()}</div>
    </section>
  );
}



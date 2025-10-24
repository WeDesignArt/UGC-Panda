"use client";

import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Divider from "@/components/Divider";
import { Button } from "@/components/ui/button";
import TagsSection from "./components/tagsection";
import Link from "next/link";

const BLOG_DETAIL = {
  id: 1,
  title: "Life won't one Beast air Over above all",
  author: "Marry Biden",
  date: "14/03/2024",
  image: "/post1.jpg",
};

export default function BlogDetailPage() {
  return (
    <>
      {/* Divider */}
      <Divider
        title="Blogs &amp; Resources"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/blogs">Blogs</Link>
          </>
        }
      />

      <div className="container mx-auto px-4">
        {/* Layout */}
        <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Content */}
          <section className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="relative w-full md:h-150 h-88 rounded-2xl overflow-hidden">
              <Image
                src={BLOG_DETAIL.image}
                alt={BLOG_DETAIL.title}
                width={0}
                height={0}
                sizes="100vw"
                className="img-full"
              />
            </div>

            {/* Blog Header */}
            <div className="flex items-center text-sm gap-2">
              <span className="gradient-main-text">Written by :</span>
              <span className="text-gray-500">{BLOG_DETAIL.author}</span>
              <div className="w-2 h-2 rounded-full gradient-main mx-8"></div>
              <span>{BLOG_DETAIL.date}</span>
            </div>

            <h1 className="text-3xl font-roboto-condensed font-bold text-gray-900">
              {" "}
              {BLOG_DETAIL.title}{" "}
            </h1>
            {/* Blog Content */}
            <p className="font-lato text-gray-500">
              {" "}
              Consectetur adipisicing elit, sed do eiusmod tempor is incididunt
              ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made
              of owl the quis nostrud exercitation ullamco laboris nisi.{" "}
            </p>
            <p className="font-lato text-gray-500">
              {" "}
              Vivamus condimentum a sem nec vehicula. In congue feugiat
              molestie. Aliquam nec nulla neque. Donec ac ipsum in neque
              efficitur pulvinar vitae sagittis tortor. Mauris ut fringilla
              quam, sit amet tempus lacus. Aliquam vitae tellus auctor, laoreet
              turpis commodo, condimentum neque. Maecenas congue accumsan eros
              non faucibus. Fusce dignissim mi eget magna ornare porttitor.
              Donec velit ligula, dignissim ut tortor vitae, viverra blandit
              turpis. Nunc vel dictum massa. Nam ut massa at metus placerat
              sagittis a semper elit.{" "}
            </p>
            <ul className="font-lato space-y-2">
              <li className="font-lato flex items-start gap-2">
                <Image
                  src="/icon-tick.png"
                  alt="Icon"
                  width={14}
                  height={14}
                  className="pt-1"
                />
                <span>
                  {" "}
                  Technology Support Allows Erie non-profit to Serve.{" "}
                </span>
              </li>
              <li className="font-lato flex items-start gap-2">
                <Image
                  src="/icon-tick.png"
                  alt="Icon"
                  width={14}
                  height={14}
                  className="pt-1"
                />
                <span>Web design done Delightful Visualization</span>{" "}
              </li>
              <li className="font-lato flex items-start gap-2">
                <Image
                  src="/icon-tick.png"
                  alt="Icon"
                  width={14}
                  height={14}
                  className="pt-1"
                />
                <span>
                  {" "}
                  Software Makes Your Profit Double if You Scale Properly.{" "}
                </span>
              </li>
            </ul>
            <p className="font-lato text-gray-500">
              {" "}
              Consectetur adipisicing elit, sed do eiusmod tempor is incididunt
              ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made
              of owl the quis nostrud exercitation ullamco laboris nisi.{" "}
            </p>
            <div className="flex flex-col md:flex-row gap-10">
              <Image
                src="/post-inner-1.jpg"
                alt="Icon"
                width={400}
                height={250}
              />
              <Image
                src="/post-inner-2.jpg"
                alt="Icon"
                width={400}
                height={250}
              />
            </div>
            <p className="font-lato text-gray-500">
              {" "}
              The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
              eleifend porta arcu In hac habitasse the is platea augue thelorem
              turpoi dictumst. In lacus libero faucibus at malesuada sagittis
              placerat eros sed istincidunt augue ac ante rutrum sed the is
              sodales augue consequat.{" "}
            </p>
            {/* Quote */}
            <div className="relative bg-pink-200 border-l-5 border-l-pink-500 p-6">
              <p className="text-lg leading-relaxed italic">
                {" "}
                Pellentesque sollicitudin congue dolor non aliquam. Morbi
                volutpat, nisi vel ultricies urna condimentum, sapien neque
                lobortis tortor, quis efficitur mi ipsum eu metus. Praesent
                eleifend orci sit amet est vehicula.
              </p>
              <Image
                src="/icon-quotation.png"
                alt="Icon"
                width={24}
                height={24}
                className="absolute bottom-2 right-2 opacity-70"
              />
            </div>
            <p className="font-lato text-gray-500">
              {" "}
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore of magna aliqua. Ut enim ad minim veniam, made of
              owl the quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea dolor commodo consequat. Duis aute irure and dolor in
              reprehenderit.
            </p>

            <TagsSection />

            {/* ✅ Comments and Leave a Comment */}
            <div className="pt-12 space-y-12">
              {/* Existing Comments */}
              <div>
                <h2 className="text-2xl font-bold mb-6">02 Comments</h2>
                <div className="space-y-8">
                  <div className="space-y-8">
                    {/* Comment 1 */}
                    <div className="flex gap-4 border-b pb-6">
                      <Image
                        src="/user-1.png"
                        alt="user1"
                        width={60}
                        height={60}
                        className="rounded-full object-contain"
                      />
                      <div>
                        <h3 className="font-bold">Ralph Edwards</h3>
                        <p className="text-sm text-gray-500">
                          March 20, 2023 at 2:37 pm
                        </p>
                        <p className="mt-2 text-gray-600 leading-relaxed">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                        <Button className="bg-pink-300 text-pink-600 rounded-full font-lato mt-5">
                          {" "}
                          Reply
                        </Button>
                      </div>
                    </div>

                    {/* Comment 2 */}
                    <div className="flex gap-4 border-b pb-6">
                      <Image
                        src="/user-2.png"
                        alt="user2"
                        width={60}
                        height={60}
                        className="rounded-full object-contain"
                      />
                      <div>
                        <h3 className="font-bold">Joe Cooper</h3>
                        <p className="text-sm text-gray-500">
                          March 22, 2023 at 5:15 pm
                        </p>
                        <p className="mt-2 text-gray-600 leading-relaxed">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                        <Button className="bg-pink-300 text-pink-600 rounded-full font-lato mt-5">
                          {" "}
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leave a Comment */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Leave a Comment</h2>
                <form className="space-y-6">
                  {/* Name + Email */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="font-medium font-lato">
                        Your Name*
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-pink-500 rounded-md px-4 py-3"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="font-medium font-lato">
                        Your Email*
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-pink-500 rounded-md px-4 py-3"
                      />
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="comment" className="font-medium font-lato">
                      Write Comment*
                    </label>
                    <textarea
                      id="comment"
                      placeholder="Write Comment"
                      rows={5}
                      className="w-full border border-pink-500 rounded-md px-4 py-3"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="px-6 py-3 font-lato gradient-main-reverse rounded-full text-white"
                  >
                    Post Comment →
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Sidebar popular={[BLOG_DETAIL]} />
          </aside>
        </main>
      </div>
    </>
  );
}

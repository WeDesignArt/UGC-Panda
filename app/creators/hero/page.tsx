import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>
      <div className="container mx-auto text-center   px-4 mt-10"> {/* Removed stray = */}
        <div className="uppercase">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            CREATE
            {/* Using custom gradients defined earlier or Tailwind's utility class */}
            <span className='gradient-main bg-clip-text text-transparent'> CONTENT. </span>
            BUILD

            <span className='gradient-main-reverse bg-clip-text text-transparent'> CONNECTIONS. </span>
            EARN
            <span className='gradient-main-reverse bg-clip-text text-transparent'> Income</span>
          </h1>
        </div>

        <div className="mt-10">
          <p className=" text-sm mb-2 max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
            You bring the creativity, we bring the brands. At UGC Panda, creators across the Middle East can turn their passion for content into steady income by producing videos, photos, and stories for leading regional and global brands.
          </p>
          <p className=" text-sm max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
            Whatever your niche — beauty, gaming, food, lifestyle, or tech — you’ll find briefs that match your style. You’re in control: choose the projects you like, and keep your creative voice. From Riyadh to Cairo to Amman to Dubai, your content can reach audiences worldwide.
          </p>
        </div>

        <div className="relative mt-8 w-full h-72 md:h-120 rounded-xl overflow-hidden">
          <Image src="/creator.jpg" alt="Creator" fill className="object-cover" />
        </div>


      </div>

    </section>


  );
}
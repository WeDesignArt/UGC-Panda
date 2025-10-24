import { ReactNode } from "react";

export type DividerProps = {
  title: string;
  breadcrumb: ReactNode;
};

export default function Divider({ title, breadcrumb }: DividerProps) {
  return (
    <section className="relative w-full h-[350px] bg-[#FE0181] bg-[url('/contact-divider-2.png')] bg-repeat-x bg-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="uppercase text-4xl font-bold font-roboto-condensed tracking-wider">
          {title}
        </h1>
        <h6 className="text-xl mt-2 font-lato">{breadcrumb}</h6>
      </div>
    </section>
  );
}

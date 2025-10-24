import ProfileDivider from "@/components/profile-divider";
import ProfileHero from "@/components/profile-hero";
import ProfileCard from "@/components/profile-card";
import ProfileTestimonial from "../../components/profile-testimonials";
import ProfilePortfolio from "@/components/profile-portfolio";
import ProfileCategory from "@/components/profile-category";

export default function Profile() {
  return (
    <>
      <section className="relative">
        <div className="absolute left-0 -bottom-111 inline-flex radial-blur lg:size-80 z-0"></div>

        <ProfileDivider
          title="Jane Doe"
          breadcrumb="DIGITAL CREATOR"
          profileImage="/creators/creator-6.jpg"
        />
      </section>

      <ProfileHero />

      <section className="relative">
        <div className="absolute right-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>

        <ProfileCard />
      </section>

      <section className="relative">
        <div className="absolute left-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>

        <ProfileCategory />
      </section>

      <ProfilePortfolio />

      <ProfileTestimonial />
    </>
  );
}

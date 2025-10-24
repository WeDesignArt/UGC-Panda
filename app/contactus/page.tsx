import ContactDivider from "./form/contact-form-section";
import Link from "next/link";
import Divider from "@/components/Divider";
// import ContactCardsSection from "./card/contact-cards";

export default function ContactUs() {
  return (
    <>
      <Divider
        title="Contact Us"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/contact">Contact Us</Link>
          </>
        }
      />

      {/* <ContactCardsSection /> */}

      <ContactDivider />
    </>
  );
}

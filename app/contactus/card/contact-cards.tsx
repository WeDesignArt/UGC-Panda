import Image from "next/image";

export default function ContactCardsSection() {
  return (
    <div className="flex justify-center w-full mt-20 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="border border-[#FF0080] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
          <Image
            src="/icon-address.png"
            alt="Icon"
            width={70}
            height={70}
            className="mb-4"
          />
          <h2 className="text-xl font-bold font-roboto-condensed mb-2">
            Our Address
          </h2>
          <p className="text-gray-600 font-lato">Block #04, Street 5, 39495</p>
        </div>

        {/* Card 2 */}
        <div className="border border-[#FF0080] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
          <Image
            src="/icon-email.png"
            alt="Icon"
            width={70}
            height={70}
            className="mb-4"
          />
          <h2 className="text-xl font-bold font-roboto-condensed mb-2">
            info@example.com
          </h2>
          <p className="text-gray-600 font-lato">
            Email us anytime for any kind of inquiry
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-[#FF0080] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
          <Image
            src="/icon-phone.png"
            alt="Icon"
            width={70}
            height={70}
            className="mb-4"
          />
          <h2 className="text-xl font-bold font-roboto-condensed mb-2">
            +208-666-01112
          </h2>
          <p className="text-gray-600 font-lato">
            24/7/365 priority Live Chat and ticketing support.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-[#FF0080] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
          <Image
            src="/icon-time.png"
            alt="Icon"
            width={70}
            height={70}
            className="mb-4"
          />
          <h2 className="text-xl font-bold font-roboto-condensed mb-2">
            Opening Hour
          </h2>
          <p className="text-gray-600 font-lato">Sunday-Fri: 9 AM - 6 PM</p>
          <p className="text-gray-600 font-lato">Saturday: 9 AM - 4 PM</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import React from "react";

function WebLogo() {
  return (
    <div className="flex justify-center md:justify-start">
      <Link href="/">
        <Image src="/logo-web.svg" alt="logo" width={170} height={75} />
      </Link>
    </div>
  );
}

export default WebLogo;

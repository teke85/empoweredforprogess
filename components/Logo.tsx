import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="/images/logo2.jpeg"
      width={180}
      height={180}
      alt="Empowered for Progress Logo"
      className="object-cover rounded-full p-2"
      priority
    />
  );
}

export default Logo;

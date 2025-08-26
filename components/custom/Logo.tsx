"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logoSrc =
    resolvedTheme === "dark" ? "/angalawhite.svg" : "/angalablack.svg";

  return (
    <div className="w-20 h-20 flex items-center justify-center">
      <Image
        src={logoSrc}
        alt="Logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;

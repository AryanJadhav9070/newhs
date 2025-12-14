"use client";

import { getImgPath } from "@/utils/imagePath";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { sections } from "../../../app/api/data";

const footerTitles = {
  features: "Features",
  resources: "Resources",
  platform: "Platform",
};

const Footer: FC = () => {
  const pathname = usePathname();
  const bgImagePath = getImgPath("/images/footer/ftr-bg.png");

  return (
    <footer
      className={`relative dark:bg-darkmode bg-cover bg-no-repeat w-full h-full ${
        pathname === "/" ? "pt-72 z-3" : "pt-32"
      }`}
      style={{ backgroundImage: `url(${bgImagePath})` }}
    >
      <div className="bg-secondary md:pb-20 pb-8">
        <div className="container mx-auto px-4">
          {/* top: logo + socials */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-10 md:pb-16 border-b border-dark_border border-solid">
            <Link href="/">
              <Image
                src={getImgPath("/images/footer/apple-touch-icon.png")}
                alt="Website development india"
                width={60}
                height={20}
                className="h-auto w-15"
                quality={100}
              />
            </Link>

            <div>
              <ul className="flex items-center gap-5">
                <li>
                  <Link href="/" aria-label="Facebook">
                    <svg
                      width="26"
                      height="27"
                      fill="white"
                      viewBox="0 0 26 27"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="Twitter">
                    <svg
                      width="26"
                      height="27"
                      viewBox="0 0 26 27"
                      fill="#fff"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="LinkedIn">
                    <svg
                      width="26"
                      height="28"
                      viewBox="0 0 26 28"
                      fill="#fff"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom: links + copyright */}
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 pt-10 md:grid-cols-12">
            {Object.entries(sections).map(([sectionKey, items]) => (
              <div key={sectionKey} className="md:col-span-3">
                <p className="text-lg font-medium text-white pb-4">
                  {footerTitles[sectionKey as keyof typeof footerTitles]}
                </p>
                <ul>
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="text-base font-normal text-SlateBlue leading-8 hover:text-white"
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="md:col-span-3">
              <p className="text-base font-normal text-SlateBlue pt-3 md:pt-0 md:max-w-[310px]">
                © Copyright 2025. All rights reserved by{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://hostcraftstudios.com/"
                  className="hover:text-primary"
                >
                  Hostcraft Studios.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="pb-4">
        <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
          {/* <ul className="Footer_nav__2rFid text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
            <li className="space-y-5 row-span-2">
              <h2 className="text-sm tracking-wide text-gray-900 uppercase font-bold">
                Company
              </h2>
              <ul className="space-y-4 text-md">
                <li>
                  <Link
                    className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                    href="/"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                    href="/"
                  >
                    Merch
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                    href="/"
                  >
                    Brand
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                    href="/"
                  >
                    Meetups
                  </Link>
                </li>
              </ul>
            </li>
          </ul> */}
          <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
            <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <Link
                  href="/PrivacyPolicy"
                  className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <Link
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
              >
                © {new Date().getFullYear()} Pierre IDÉ
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

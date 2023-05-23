import Head from "next/head";
import { NextSeo } from "next-seo";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Icon, Image, Spacer } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="text-black">
        <NextSeo
          title="Home: Kitchennette"
          description="Welcome to Kitchennette's homepage."
          canonical="https://kitchennette.piarre.dev/"
          openGraph={{
            url: "https://kitchennette.piarre.dev/",
          }}
        />
        <Head>
          <title>Kitchennette</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <section className="text-gray-600 body-font">
          <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
              <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
                The app that helps you cook
              </h1>
              <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
                Kitchennette is a recipe app that helps you cook.
                <Spacer />
                It&apos;s simple, easy to use, free and open source.
              </p>
              <div className="flex hover:scale-110 justify-center transition-all duration-300 ease-in-out ">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 font-medium text-gray transition hover:shadow-orange-400 hover:shadow-xl shadow-lg duration-500 ease-in-out transform bg-transparent border hover:border-orange-600 rounded-lg"
                  href="https://testflight.apple.com/join/o0FVrjCx"
                >
                  Try it on Test Flight
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex ml-3"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                  <Image
                    src="/images/testflight.png"
                    alt="Test Flight Icon"
                    className="ml-3.5"
                  />
                </a>
              </div>
            </div>
            <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
              <Image
                className="w-80 md:ml-1 ml-24"
                alt="iPhone-12"
                src="/images/iPhone-14-PM-Mockup.png"
              ></Image>
            </div>
          </div>
          <section className="mx-auto">
            <div className="container px-5 mx-auto lg:px-24 ">
              <div className="flex flex-col w-full mb-4 text-left lg:text-center">
                <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
                  The app use them
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-2">
                <div className="flex items-center justify-center">
                  <Image
                    src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"
                    alt="Google Logo"
                    className="block object-contain h-20"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg"
                    alt="Shopify Logo"
                    className="block object-contain h-20"
                  ></Image>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </>
  );
}

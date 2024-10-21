'use client'

import Button from "@/components/button/button";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";
import Image from "next/image";

export default function Home() {
  
  return (
    <main>
      <header className="flex flex-col gap-6 md:px-[8%] px-8 pt-[60px] min-h-[650px] justify-center items-center bg-cover bg-center bg-[url('/bg.png')]">

        <div className="md:w-[90%] flex flex-col gap-6 items-center">
          <h1 className="md:text-[64px] sm:text-[48px] text-[32px] font-bold">Your Resume, Simplified</h1>
          <p className="md:text-[20px]">Create, manage and organize your resume with ease</p>
          <Button className="bg-primary">Get started for free</Button>
          <p className="text-[13px]">V 1.0.1 - FREE 12+</p>
        </div>

        <div className="relative">
          <Image src="/hero-img.png" alt="hero-img" width={1000} height={498} className="object-fit "/>
        </div>
      </header>

      <section className="flex flex-col items-center gap-6 md:px-[8%] px-8 pb-[60px]">
        <h1 className="md:text-[20px] text-center">Trusted by over 10,000 designers and developers</h1>

        <div className="relative">
          <Image src="/clients.png" alt="clients" width={160} height={40} className="object-fit "/>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 md:px-[8%] px-8 py-[60px]">
        <Button className="text-primary">HOW IT WORKS</Button>
        <h1 className="md:text-[48px] sm:text-[32px] text-[28px] font-bold md:w-[50%] w-[75%] text-center leading-[120%]">Three simple steps to build your resume</h1>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="relative">
            <Image src="/connect.png" alt="clients" width={350} height={350} className="object-fit "/>
          </div>
          <div className="relative">
            <Image src="/edit.png" alt="clients" width={350} height={350} className="object-fit "/>
          </div>
          <div className="relative">
            <Image src="/download.png" alt="clients" width={350} height={350} className="object-fit "/>
          </div>
        </div>
      </section>
      
      <section className="flex flex-col items-center gap-6 md:px-[8%] px-8 py-[60px]">
        <Button className="text-primary">TESTIMONIALS</Button>

        <div className="flex flex-col gap-6 p-8 py-[10%] h-[418px] w-full justify-between items-center bg-cover bg-center bg-[url('/testimonials-bg.png')]">
          <div className="grid md:grid-cols-3 gap-6">
            <Button className="gap-2 rounded-lg border-gray-500/[0.2]">
              <div className="relative">
                <Image src="/avatar-1.png" alt="clients" width={40} height={40} className="object-fit "/>
              </div>
              <div className="text-start">
                <h2>Femi</h2>
                <p className="text-[12px]">@Olufemi_O</p>
              </div>
              <div className="relative">
                <Image src="/circle.png" alt="clients" width={40} height={40} className="object-fit "/>
              </div>
            </Button>
            <Button className="gap-2 rounded-lg border-gray-500/[0.2] bg-primary">
              <div className="relative">
                <Image src="/avatar-1.png" alt="clients" width={40} height={40} className="object-fit "/>
              </div>
              <div className="text-start">
                <h2>Femi</h2>
                <p className="text-[12px]">@Olufemi_O</p>
              </div>
              <div className="relative">
                <Image src="/circle.png" alt="clients" width={40} height={40} className="object-fit "/>
              </div>
            </Button>
            <Button className="gap-2 rounded-lg border-gray-500/[0.2]">
              <div className="relative">
                <Image src="/avatar-1.png" alt="clients" width={40} height={40} className="object-fit "/>
              </div>
              <div className="text-start">
                <h2>Femi</h2>
                <p className="text-[12px]">@Olufemi_O</p>
              </div>
              <div className="relative">
                <Image src="/circle.png" alt="clients" width={40} height={40} className="object-fit "/>
              </div>
            </Button>
          </div>
          <p>Building my resume with Resumio helped increase my efficiency and productivity</p>
        </div>

        <Button className="gap-2 px-0 border-gray-500/[0.2]">
          <ArrowLeft01Icon />
          <span className="h-2 w-2 bg-gray-500/[0.2] rounded-full"></span>
          <span className="h-2 w-2 bg-gray-500/[0.2] rounded-full"></span>
          <span className="h-2 w-2 bg-gray-500/[0.2] rounded-full"></span>
          <span className="h-2 w-2 bg-gray-500/[0.2] rounded-full"></span>
          <ArrowRight01Icon />
        </Button>

      </section>

      <section className="flex flex-col items-center gap-6 md:px-[8%] px-8 py-[60px]">
        <Button className="text-primary">RESUME DESIGNS</Button>
        <h1 className="md:text-[48px] sm:text-[32px] text-[28px] font-bold md:w-[50%] w-[75%] text-center leading-[120%]">Professional and Modern Resume Designs</h1>

      </section>
      
    </main>
  );
}

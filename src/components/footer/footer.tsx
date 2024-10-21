'use client'
import { Facebook01Icon, InstagramIcon, TwitterIcon } from "hugeicons-react";


function Footer() {
    return (
        <footer className="text-[#D9D9F2] mt-8">
            <div className="bg-[#000]/[0.2] flex flex-col items-center gap-[30px] py-[30px] md:px-[9%] px-[3%] pt-[60px] border border-transparent border-t-gray-700/[0.09] dark:border-t-gray-100/[0.09]">
                <h1 className="text-[28px]">Resumio</h1>
                <ul className="w-full">
                    <div className="flex flex-wrap gap-4 py-2 mb-4 justify-center">
                        <a href="https://facebook.com/" className="p-4 border border-gray-500/[0.4] rounded-full"><Facebook01Icon /></a>
                        <a href="https://twitter.com/" className="p-4 border border-gray-500/[0.4] rounded-full"><TwitterIcon /></a>
                        <a href="https://instagram.com/" className="p-4 border border-gray-500/[0.4] rounded-full"><InstagramIcon /></a>
                    </div>
                </ul>
            </div>
            <div className="bg-[#000] text-center">
                <p className="px-[3%] py-10 flex items-center gap-2 justify-center">Resumio &copy; Copyright  {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;
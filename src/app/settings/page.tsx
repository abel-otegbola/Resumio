'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocalStorage } from "@/customHooks/useLocaStorage";
import { CheckmarkCircle01Icon } from "hugeicons-react";

interface Theme {
    id: string | number, img: string, title: string
}

type Themes = Array<Theme>


function Settings() {
    const [theme, setTheme] = useState("light")
    const [fontSize, setFontSize] = useLocalStorage("size", "14px")

    const themes: Themes = [
        { id: 0, img: "/system.png", title: "System" },
        { id: 1, img: "/light.png", title: "light" },
        { id: 2, img: "/dark.png", title: "dark" },
    ]

    useEffect(() => {
        if(theme === 'light') {
            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'
        }
        else if(theme === 'dark') {
            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'
        }  
        else {
            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
        }  
    }, [theme])
    
    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        if(!localStorage.theme) {
            setTheme("System")
        }
    }, [theme])

    return (
        <>
        <div className="md:flex items-start md:px-[9%] px-[3%]">
            
            <div className="md:m-2 flex-1 pt-[60px]">
                <h2 className="flex items-center gap-3 text-[32px] font-bold pb-3">Settings</h2>

                <div className="p-8 rounded-lg border border-gray-500/[0.2] bg-gray-100/[0.08] mb-6">
                    <div className="mb-4 pb-2 border-b border-gray-500/[0.2]">
                        <h3 id="appearance" className="py-2 text-[20px] font-semibold">Appearance</h3>
                        <p className="">Select or customize your ui theme</p>
                    </div>
                    <div className="md:w-[40%] grid grid-cols-3 gap-4 py-2">
                        {
                            themes.map(item => {
                                return (
                                    <div key={item.id} className={`${item.title === theme ? "text-primary" : "hover:text-primary"}`} aria-label={"Theme setting changed to "+ theme} onClick={() => setTheme(item.title)}>
                                        <div className={`relative w-full bg-gray-200 dark:bg-slate-200/[0.08] cursor-pointer rounded border ${theme === item.title ? "border-primary/[0.5] outline outline-primary/[0.2] outline-offset-2" : "border-transparent hover:border-primary/[0.5]"}`}>
                                            { theme === item.title ? <CheckmarkCircle01Icon className="absolute bottom-1 left-1 text-lg text-primary" /> : "" }
                                            <Image src={item.img} alt="theme" width={300} height={300} className="w-full rounded" />
                                        </div>
                                        <h2 className="p-2 capitalize">{item.title}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="p-8 rounded-lg border border-gray-500/[0.2] bg-gray-100/[0.08]">
                    <div className="mb-4 pb-2 border-b border-gray-500/[0.2]">
                        <h3 id="appearance" className="py-2 text-[20px] font-semibold">Preferences</h3>
                        <p className="">Select the font-size for your app</p>
                    </div>

                    <div className="flex gap-6">
                        <select className="w-[200px] p-4 rounded border border-gray-600/[0.2]" aria-label={"Font size changed to "+ fontSize} onChange={(e) => setFontSize(e.target.value)} defaultValue={fontSize}>
                        {
                            ["10px", "12px", "14px", "16px", "18px", "20px"].map((item, i) => (
                                <option key={i} className="bg-black text-white">{item}</option>
                            ))
                        }
                        </select>
                        <p style={{ fontSize: fontSize }} className="p-3 px-4 w-fit">A cat inside a bag</p>
                    </div>
                </div>
                
            </div>

        </div>
        </>
    )
}

export default Settings;
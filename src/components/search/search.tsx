'use client'
import { Search01Icon } from "hugeicons-react";
import { ReactNode, useState } from "react";

interface dropdownProps {
    className?: string;
    value?: string;
    onChange?: (aug0: string) => void;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    leftIcon?: ReactNode;
}

export default function Search({ value, onChange, className, disabled, placeholder }: dropdownProps) {
    const [focus, setFocus] = useState(false)

    return (
        <div className="relative flex flex-col w-full gap-1">

            <div className={`flex items-center gap-1 relative rounded-lg bg-white dark:bg-primary/[0.04] dark:text-gray w-full p-2 px-4 border duration-500 
                ${focus ? "border-primary shadow-input-active" : "border-black/[0.2] "}
                ${className}
            `}>
                <span className="opacity-[0.5]"><Search01Icon /></span>
                <input 
                    className={` p-2 w-full outline-none bg-transparent
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    value={value}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={(e) => onChange ? onChange(e.target.value): ""}
                />
            </div>
        </div>
    )
}
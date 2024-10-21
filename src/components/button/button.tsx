import { ReactNode, ButtonHTMLAttributes } from "react";

export interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tetiary";
    className?: string;
    href?: string;
    size?: "full";
    disabled?: boolean,
    onClick?: () => void,
    children?: ReactNode
}

export default function Button({ variant, className, href, size, disabled, onClick, children, ...props }: buttonProps) {
    const variants = {
        primary: "hover:bg-dark/[0.8] bg-dark dark:bg-[#000]/[0.2] dark:border-none",
        secondary: "hover:bg-black hover:text-white border border-black dark:border-white/[0.1]",
        tetiary: ""
    }

    return (
        <button className={`duration-500 rounded-full shadow-button
            ${variants[variant || "primary"]}
            ${disabled ? "opacity-[0.25]" : ""}
            ${size === "full" ? "w-full" : "w-fit"}
            ${className} 
        `}
        {...props}
        name="Button"
        role="button"
        disabled={disabled}
        onClick={onClick}
        >
            { 
            href ? 
                <a href={href} className="flex items-center justify-center md:gap-3 gap-2 py-3 px-8"> 
                    { children }
                </a>
                :
                <p className="flex items-center justify-center md:gap-3 gap-2 py-3 px-8">{ children }</p>
            }
        </button>
    )
}
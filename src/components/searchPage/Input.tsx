import React from "react";
import { Search } from "lucide-react";
import { Input as ShadcnInput } from "../ui/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="h-5 h-5 text-gray-400" />
                </div>
                <ShadcnInput
                    type={type}
                    className={`w-full bg-[#F5F7FA] border-none rounded-2xl py-7 pl-12 pr-4 text-[#1E293B] placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-blue-400/50 shadow-sm transition-all duration-200 ${className}`}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);

Input.displayName = "SearchInput";

export default Input;

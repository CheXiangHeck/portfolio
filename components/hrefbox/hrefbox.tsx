import * as React from "react";

import { cn } from "@/lib/utils";

const HrefBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("hover:scale-105 hover:text-[#00FC82] relative", className)}
    {...props}
  />
));
HrefBox.displayName = "LinkBox";

const TextContainer = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div 
        ref={ref}
        className={cn("absolute w-full p-3", className)}
        {...props}
    />
));
TextContainer.displayName = "LinkTextContainer"

const HrefTitle = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
 <div
    ref={ref}
    className={cn("font-Oswald text-4xl", className)}
    {...props}
 />
));
HrefTitle.displayName = "LinkTitle";

const HrefDescription = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("font-Kanit text-xl", className)}
        {...props}
    />
));
HrefDescription.displayName = "LinkDescription";

const HrefDate = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div 
        ref={ref}
        className={cn("font-Kanit text-xl absolute right-0", className)}
        {...props}
    />
))
HrefDate
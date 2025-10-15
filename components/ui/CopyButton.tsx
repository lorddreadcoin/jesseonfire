"use client";

import { useState, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CopyButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className, ...props }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      // Try using the modern clipboard API first
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
      } else {
        // Fallback for older browsers and mobile Safari
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Make it invisible but keep it in the document flow
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        textArea.setAttribute("readonly", "");
        
        document.body.appendChild(textArea);
        
        // For iOS Safari
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
          textArea.setSelectionRange(0, 999999);
        } else {
          textArea.select();
        }
        
        try {
          const successful = document.execCommand("copy");
          if (successful) {
            setIsCopied(true);
          } else {
            throw new Error("Copy command failed");
          }
        } finally {
          document.body.removeChild(textArea);
        }
      }

      // Reset the copied state after 2 seconds
      if (isCopied === false) {
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Failed to copy text:", error);
      
      // Fallback: Try using a prompt
      try {
        prompt("Copy this code:", text);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (promptError) {
        console.error("All copy methods failed:", promptError);
      }
    }
  };

  const baseStyles = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900";
  const variantStyles = "border border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95";
  const copiedStyles = isCopied ? "bg-green-600 border-green-600 text-white hover:bg-green-600" : "";

  return (
    <button
      className={cn(baseStyles, variantStyles, copiedStyles, className)}
      onClick={copyToClipboard}
      aria-label={isCopied ? "Code copied!" : "Copy code"}
      {...props}
    >
      {isCopied ? (
        <>
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Copied!
        </>
      ) : (
        "Copy Code"
      )}
    </button>
  );
};

export default CopyButton;

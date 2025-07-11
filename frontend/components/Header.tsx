"use client";

import { useState } from "react";

type Props = {
    onSubmit: (prompt: string) => void;
}

export default function Header({ onSubmit }: Props) {
    const [prompt, setPrompt] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && prompt.trim() !== "") {
        onSubmit(prompt.trim());
        }
    };

    return (
        <header className="flex bg-dark w-screen h-20 items-center justify-between px-4 border-b border-black">
            <img src="/fgf.png" alt="FGF Logo" className="h-10 w-10" />
            <div className="flex items-center justify-center w-full">
                <input
                    type="text"
                    placeholder="ex. Summer seasonal item targeted to Millenials and Gen Z customers"
                    className="p-3 rounded-2xl bg-[#272F20] w-4/6 font-medium text-white"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className="flex items-center justify-center ml-6 p-2 rounded-full cursor-pointer bg-fgf hover:opacity-70" onClick={() => onSubmit(prompt.trim())}>
                    <img src="/idea.png" alt="Generate" className="h-7 w-auto" />
                </div>
            </div>
        </header>
    );
}
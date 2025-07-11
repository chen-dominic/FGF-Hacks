"use client";

import Header from "@/components/Header";
import Results from "@/components/Results";
import Image from "next/image";

export default function Home() {

    const handlePromptSubmit = async (prompt: string) => {
      console.log("Prompt submitted:", prompt);
    };

  return (
    <div className="bg-dark w-screen">
      <Header onSubmit={handlePromptSubmit} />
      <Results data={null} />
    </div>
  );
}

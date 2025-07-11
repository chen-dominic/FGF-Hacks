"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Results from "@/components/Results";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

const handlePromptSubmit = async (prompt: string) => {
  try {
    console.log("Submitting prompt:", prompt);
    setLoading(true);
    setError(false); // reset error on new submit

    const response = await fetch("http://10.35.61.29:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: prompt }),
    });

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const result = await response.json();
    let parsedReply = result.reply;

    // Try parsing if it's a stringified JSON
    if (typeof parsedReply === "string") {
      try {
        parsedReply = JSON.parse(parsedReply);
      } catch (parseError) {
        console.error("Reply JSON parse error:", parseError);
        throw new Error("Failed to parse reply JSON. The format is invalid.");
      }
    }

    setData(parsedReply);
    setLoading(false);
    console.log("Received parsed reply:", parsedReply);
  } catch (error) {
    console.error("Error:", error);
    setLoading(false);
    setError(true);
  }
};

  return (
    <div className="bg-dark w-screen">
      <Header onSubmit={handlePromptSubmit} />
      <Results data={data} loading={loading} />
      {error && (
        <div className="text-red-500 text-center p-4">
          Oops! Something went wrong parsing the response. Please try again!😬
        </div>
      )}
    </div>
  );
}
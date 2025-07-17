"use client";

import { useState, useEffect } from "react";
import ProductConcept from "./ProductConcept";
import MarketAnalysis from "./MarketAnalysis";
import PositioningStrategy from "./PositioningStrategy";
import SuccessMetrics from "./SuccessMetrics";
import RisksAndOpportunities from "./RiskAndOpportunities";

type Props = {
  data: any;
  loading: boolean;
};

export default function Results({ data, loading }: Props) {
  const loadingMessages = [
    "Processing your data...",
    "Researching products...",
    "Analyzing market trends...",
    "Generating insights..."
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="w-2/5 mx-auto mt-4">
        <div className="flex flex-col items-center justify-center gap-4">
            <img src="/FGF-Loader.gif" alt="" className="w-60 h-60" />
          <p key={currentMessageIndex} className="text-white font-medium text-3xl message">
            {loadingMessages[currentMessageIndex]}
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-2/5 mx-auto mt-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="idea-color.png"
            alt="lightbulb"
            className="h-32 w-32 opacity-40 grayscale"
          />
          <p className="text-white font-medium opacity-30">
            Turn your business data into bold product ideas.
          </p>
        </div>
        <div className="text-white opacity-30 mt-10 bg-[#272F20] p-4 rounded-xl">
          <h2 className="font-semibold">To get started:</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <span className="font-bold">Upload your data</span>
              <br />
              <span className="text-sm text-gray-200">
                Add files like sales reports, customer reviews, competitor info, or market trends.
              </span>
            </li>
            <li>
              <span className="font-bold">Describe your focus</span>
              <br />
              <span className="text-sm text-gray-200">
                e.g., “Launch a Gen Z summer snack line” or “Innovate in sustainable packaging”
              </span>
            </li>
            <li>
              <span className="font-bold">Let the agents cook</span>
              <br />
              <span className="text-sm text-gray-200">
                Our AI squad analyzes your input and delivers:
              </span>
              <ul className="list-disc list-inside mt-2 pl-4 text-sm text-gray-200 space-y-1">
                <li>🍿 New product ideas</li>
                <li>🧠 Launch strategy</li>
                <li>🎯 Target demographics</li>
                <li>🧾 Cost and supplier insights</li>
              </ul>
            </li>
          </ol>
        </div>
        <h1 className="text-white text-4xl text-center font-semibold mt-10 opacity-50">DashAI</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 py-4 px-6 max-w-7xl mx-auto">
      <ProductConcept data={data.product_concept} />
      <MarketAnalysis data={data.market_analysis} />
      <PositioningStrategy data={data.positioning_strategy} />
      <SuccessMetrics data={data.success_metrics} />
      <RisksAndOpportunities data={data.risks_opportunities} />
    </div>
  );
}
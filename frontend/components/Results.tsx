"use client";

import { useState } from "react";
import ProductConcept from "./ProductConcept";
import MarketAnalysis from "./MarketAnalysis";
import PositioningStrategy from "./PositioningStrategy";
import SuccessMetrics from "./SuccessMetrics";
import RisksAndOpportunities from "./RiskAndOpportunities";

type Props = {
    data: any;
}

export default function Results({ data }: Props) {
    data =
    {
        "product_concept": {
            "name": "Maple Chai Spice Sourdough",
            "tagline": "Where cozy comfort meets artisanal craft",
            "description": "A revolutionary fusion sourdough combining aromatic chai spices with pure maple sweetness, creating complex layers of flavor in every slice. The natural fermentation process enhances the warming spices while maintaining the bread's artisanal character.",
            "category": "bread",
            "price": 9.99,
            "target_audience": "Urban professionals and food enthusiasts aged 25-45",
            "key_ingredients": ["organic sourdough starter", "premium maple syrup", "chai spice blend", "unbleached flour", "Himalayan salt"],
            "unique_selling_points": [
                "Proprietary chai spice blend",
                "Real maple syrup integration",
                "24-hour fermentation process"
            ],
            "flavor_profile": "Warm chai spices with subtle maple sweetness, balanced by classic sourdough tanginess",
            "visual_appeal": "Golden-brown crust with visible spice flecks and characteristic sourdough scoring pattern"
        },
        "market_analysis": {
            "opportunity_score": 88,
            "market_size": "Large",
            "growth_trend": "Rising",
            "seasonality": "Fall/Winter",
            "competition_level": "Medium",
            "target_demographics": [
                "Health-conscious millennials",
                "Artisanal food enthusiasts",
                "Breakfast/brunch lovers"
            ],
            "market_insights": [
                "Growing demand for unique artisanal breads",
                "Increasing interest in fusion flavors",
                "Strong consumer preference for natural ingredients"
            ],
            "trend_data": {
                "search_volume": 2800,
                "growth_rate": "22%",
                "peak_months": ["September", "October", "November"]
            }
        },
        "positioning_strategy": {
            "price_tier": "Premium",
            "positioning_statement": "The perfect fusion of traditional sourdough craftsmanship with contemporary flavor innovation",
            "competitive_advantage": "Unique flavor combination not currently available in market",
            "marketing_channels": [
                "Instagram/Social Media",
                "Food blogger partnerships",
                "Local food festivals",
                "In-store sampling"
            ],
            "launch_strategy": "Limited edition fall release with potential for permanent menu addition"
        },
        "success_metrics": {
            "target_daily_sales": 50,
            "break_even_units": 35,
            "projected_monthly_revenue": 14985,
            "customer_acquisition_target": 200
        },
        "risks_opportunities": {
            "opportunities": [
                "Potential for seasonal flavor variations",
                "Wholesale partnerships with cafes",
                "Recipe adaptation for retail packaged spice blend"
            ],
            "risks": [
                "Higher ingredient costs affecting margins",
                "Consistency in spice blend production",
                "Market saturation in premium bread category"
            ],
            "mitigation_strategies": [
                "Bulk purchasing agreements for specialty ingredients",
                "Standardized production processes",
                "Regular market analysis and flavor innovation"
            ]
        }
    }
    if(!data) {
        return (
            <div className="w-2/5 mx-auto mt-4">
                <div className="flex flex-col items-center justify-center gap-4">
                    <img src="idea-color.png" alt="lightbulb" className="h-32 w-32 opacity-15 grayscale" />
                    <p className="text- font-medium text-white opacity-30">Turn your business data into bold product ideas.</p>
                </div>
                <div className="text-white opacity-30 mt-10 bg-[#272F20] p-4 rounded-xl">
                    <h2 className="font-semibold">To get started:</h2>

                    <ol className="list-decimal list-inside space-y-2">
                        <li>
                        <span className="font-bold">Upload your data</span><br />
                        <span className="text-sm text-gray-400">
                            Add files like sales reports, customer reviews, competitor info, or market trends.
                        </span>
                        </li>
                        <li>
                        <span className="font-bold">Describe your focus</span><br />
                        <span className="text-sm text-gray-400">
                            e.g., “Launch a Gen Z summer snack line” or “Innovate in sustainable packaging”
                        </span>
                        </li>
                        <li>
                        <span className="font-bold">Let the agents cook</span><br />
                        <span className="text-sm text-gray-400">
                            Our AI squad analyzes your input and delivers:
                        </span>
                        <ul className="list-disc list-inside mt-2 pl-4 text-sm text-gray-400 space-y-1">
                            <li>🍿 New product ideas</li>
                            <li>🧠 Launch strategy</li>
                            <li>🎯 Target demographics</li>
                            <li>🧾 Cost and supplier insights</li>
                        </ul>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <ProductConcept data={data.product_concept} />
                <MarketAnalysis data={data.market_analysis} />
                <PositioningStrategy data={data.positioning_strategy} />
                <SuccessMetrics data={data.success_metrics} />
                <RisksAndOpportunities data={data.risks_opportunities} />
            </div>
        </div>
    )
}
# Dataset CSV Files README

This README describes the structure and contents of each CSV dataset used by the FGF Bakery Chat API. Place these files in the project root (one level above the `backend/` folder) so that the loader can discover and load them.

---

## 1. `fgf_sales.csv`

**Category:** Sales Data

| Column       | Type    | Description                                          |
| ------------ | ------- | ---------------------------------------------------- |
| `date`       | string  | Date of sale (e.g., `1/15/2024` or `YYYY-MM` format) |
| `item_name`  | string  | Name of the bakery item sold                         |
| `location`   | string  | Store or location of sale                            |
| `units_sold` | integer | Number of units sold                                 |
| `revenue`    | float   | Total revenue generated                              |
| `price`      | float   | Unit selling price                                   |
| `food_cost`  | float   | Ingredient cost per unit                             |
| `season`     | string  | Season during sale (`Winter`, `Spring`, etc.)        |
| `is_weekend` | boolean | `true` if sale occurred on weekend                   |
| `year`       | integer | Year of the sale                                     |

---

## 2. `customer_reviews.csv`

**Category:** Customer Reviews

| Column       | Type    | Description                                 |
| ------------ | ------- | ------------------------------------------- |
| `date`       | string  | Date of review                              |
| `item_name`  | string  | Name of the bakery item reviewed            |
| `location`   | string  | Location where item was reviewed            |
| `units_sold` | integer | Units sold at review time                   |
| `revenue`    | float   | Revenue at review time (if applicable)      |
| `price`      | float   | Price at review time                        |
| `food_cost`  | float   | Cost per unit at review time                |
| `season`     | string  | Season during review                        |
| `is_weekend` | boolean | `true` if review occurred on weekend        |
| `year`       | integer | Year of the review                          |
| `sentiment`  | string  | (Optional) Sentiment label if pre-processed |

---

## 3. `market_trends.csv`

**Category:** Market Trends

| Column          | Type    | Description                               |
| --------------- | ------- | ----------------------------------------- |
| `date`          | string  | Date of trend data (`YYYY-MM-DD`)         |
| `trend_keyword` | string  | Keyword or topic being tracked            |
| `search_volume` | integer | Monthly search volume                     |
| `region`        | string  | Geographic region (e.g., `United States`) |
| `category`      | string  | Product category (e.g., `Bakery & Bread`) |
| `growth_rate`   | integer | Percentage growth over previous period    |
| `week_number`   | integer | Week number of the year                   |
| `year`          | integer | Year of trend data                        |

---

## 4. `competitor_analysis.csv`

**Category:** Competitor Data

| Column             | Type    | Description                               |
| ------------------ | ------- | ----------------------------------------- |
| `date`             | string  | Date snapshot (`YYYY-MM` or `YYYY-MM-DD`) |
| `competitor`       | string  | Competitor name                           |
| `item_name`        | string  | Item offered by competitor                |
| `price`            | float   | Competitor’s price                        |
| `market_share`     | float   | Market share percentage                   |
| `customer_rating`  | float   | Average customer rating (1–5)             |
| `promotion_active` | boolean | `true` if competitor ran a promotion      |
| `social_mentions`  | integer | Number of social media mentions           |
| `year`             | integer | Year of data                              |

---

## 5. `supplier_costs.csv`

**Category:** Supplier Data

| Column            | Type    | Description                                            |
| ----------------- | ------- | ------------------------------------------------------ |
| `date`            | string  | Date of cost data (`YYYY-MM-DD`)                       |
| `supplier`        | string  | Supplier name                                          |
| `ingredient_name` | string  | Name of ingredient                                     |
| `category`        | string  | Ingredient category (e.g., `Flour & Grains`)           |
| `cost_per_unit`   | float   | Cost per unit (matching `unit`)                        |
| `unit`            | string  | Unit measure (e.g., `lb`, `kg`)                        |
| `availability`    | string  | Availability status (e.g., `Available`, `Backordered`) |
| `quality_score`   | float   | Supplier’s quality rating (1–5)                        |
| `lead_time_days`  | integer | Average lead time in days                              |
| `minimum_order`   | integer | Minimum order quantity                                 |

---

### Usage

* Ensure all CSV files are placed in the project root (beside `backend/`).
* The FastAPI loader will automatically discover and load them into Pandas DataFrames.
* Column names and data types must match exactly for proper categorization.

---

For questions or data issues, reach out to the data engineering team.

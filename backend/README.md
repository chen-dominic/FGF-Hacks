# FGF Bakery Chat API

A Python FastAPI service that wraps a conversational bakery consultancy powered by LangChain, LangGraph, and Anthropic/Google Generative AI LLMs. It loads real FGF CSV datasets, orchestrates strategic, validation, and synthesis agents, and exposes a `/chat` endpoint for front-end integration.

---

## 🔍 Features

* **Data Loading**: Automatically discovers and loads CSV files (`sales`, `reviews`, `trends`, `competitors`, `suppliers`) from the project root.
* **LLM Orchestration**: Three-agent pipeline:

  1. **Strategic Agent** (Claude or Gemini) for product concept & market analysis
  2. **Validation Agent** (Gemini Flash) for financial & operational feasibility
  3. **Synthesis Agent** (Gemini Supervisor) for executive summary & dashboard metrics
* **FastAPI Endpoints**:

  * `GET /` — Health check
  * `POST /chat` — Send a user message, receive the agent reply
* **Modular**: Clean separation of data loading, LLM initialization, agent logic, and API wrapper.

---

## 🚀 Getting Started

### Prerequisites

* Python 3.10+ installed
* Git (to clone this repo)
* API keys for:

  * [Anthropic Claude™](https://www.anthropic.com/) (optional)
  * [Google Generative AI (Gemini)](https://developers.generativeai.google/) (required)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-org>/fgf-bakery-chat.git
   cd fgf-bakery-chat/backend
   ```

2. **Create and activate a virtual environment**

   ```bash
   python -m venv .venv
   # Windows PowerShell
   .\.venv\Scripts\Activate.ps1
   # macOS/Linux
   source .venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

4. **Configure API keys**
   In `backend/app_logic.py`, replace the placeholder keys:

   ```python
   ANTHROPIC_API_KEY = "your_claude_api_key_here"  # or None
   GOOGLE_API_KEY    = "your_gemini_api_key_here"
   ```

5. **Place your CSV data**
   Copy `*.csv` files (`fgf_sales.csv`, `customer_reviews.csv`, etc.) into the project root (one level above `backend/`).

---

## 🏃‍♂️ Running the Service

From the `backend/` directory with your venv activated:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

* The server will start on **[http://localhost:8000](http://localhost:8000)**.
* Visit **[http://localhost:8000/docs](http://localhost:8000/docs)** for interactive Swagger UI.

---

## 📡 API Endpoints

### Health Check

```http
GET / HTTP/1.1
Host: localhost:8000
```

**Response**

```json
{ "status": "ok" }
```

### Chat

```http
POST /chat HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{ "message": "new bread flavour idea" }
```

**Response**

```json
{ "reply": "<LLM-generated JSON or text>" }
```

---

## 📁 Folder Structure

```
fgf-bakery-chat/
├─ backend/
│  ├─ .venv/                  # Python virtual environment
│  ├─ app_logic.py            # Core data+LLM logic
│  ├─ main.py                 # FastAPI application
│  ├─ schemas.py              # Pydantic models
│  ├─ requirements.txt
│  └─ Dockerfile              # Optional containerization
└─ frontend/                  # React-based UI (separate)
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "feat: add ..."`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

# File: main.py (CLEAN FIXED VERSION)
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
import uuid
from datetime import datetime
import asyncio
import json

from schemas import ChatRequest, ChatResponse, AnalysisRequest, AnalysisResponse, AnalysisStatus
import app_logic

app = FastAPI(title="FGF Bakery AI Assistant", version="1.0.0")

# Allow your React dev server to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for analysis sessions (use Redis/DB for production)
analysis_sessions = {}

@app.on_event("startup")
def startup_event():
    """Load data and initialize LLMs once at server startup"""
    print("🚀 Starting FGF Bakery AI Assistant...")
    
    # Load datasets
    app_logic.fgf_datasets = app_logic.load_real_fgf_data()
    print(f"✅ Loaded {len(app_logic.fgf_datasets)} datasets")
    
    # Initialize LLMs
    app_logic.supervisor_llm, app_logic.strategic_llm, app_logic.validation_llm = \
        app_logic.initialize_llms(app_logic.GOOGLE_API_KEY, app_logic.ANTHROPIC_API_KEY)
    print("✅ LLMs initialized")
    
    print("🎯 FGF Bakery AI Ready!")

@app.get("/", tags=["Health"])
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "FGF Bakery AI Assistant",
        "datasets_loaded": len(getattr(app_logic, 'fgf_datasets', {})),
        "version": "1.0.0"
    }

@app.post("/chat", response_model=ChatResponse, tags=["Chat"])
async def chat_endpoint(req: ChatRequest):
    """Simple chat interface for quick queries"""
    try:
        # Create a fresh state for each chat (simple mode)
        initial_state = {
            "history": [],
            "next_agent": "strategic"
        }
        
        # Get response from your multi-agent system
        reply = app_logic.chat_with_bakery(
            initial_state,
            app_logic.fgf_datasets,
            req.message
        )
        
        # Parse the JSON string to return clean JSON object
        try:
            parsed_reply = json.loads(reply)
            return ChatResponse(reply=parsed_reply)
        except json.JSONDecodeError:
            # If it's not valid JSON, return as string
            return ChatResponse(reply=reply)
        
    except Exception as e:
        print(f"❌ Chat error: {e}")
        raise HTTPException(status_code=500, detail=f"Chat processing failed: {str(e)}")

@app.post("/analyze", response_model=AnalysisResponse, tags=["Analysis"])
async def start_analysis(req: AnalysisRequest, background_tasks: BackgroundTasks):
    """Start a comprehensive multi-agent analysis"""
    try:
        # Generate unique session ID
        session_id = str(uuid.uuid4())
        
        # Create analysis state
        analysis_state = {
            "session_id": session_id,
            "query": req.message,
            "status": "processing",
            "progress": 0,
            "current_step": "initializing",
            "started_at": datetime.now(),
            "bakery_state": {
                "history": [{"role": "user", "content": req.message}],
                "next_agent": "strategic"
            },
            "results": {
                "strategic_result": None,
                "validation_result": None,
                "final_recommendation": None
            }
        }
        
        # Store session
        analysis_sessions[session_id] = analysis_state
        
        # Start background processing
        background_tasks.add_task(run_full_analysis, session_id)
        
        return AnalysisResponse(
            session_id=session_id,
            status="started",
            message=f"Analysis started for: {req.message}"
        )
        
    except Exception as e:
        print(f"❌ Analysis start error: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to start analysis: {str(e)}")

@app.get("/analysis/{session_id}", response_model=AnalysisStatus, tags=["Analysis"])
async def get_analysis_status(session_id: str):
    """Get the current status of an analysis"""
    if session_id not in analysis_sessions:
        raise HTTPException(status_code=404, detail="Analysis session not found")
    
    session = analysis_sessions[session_id]
    
    return AnalysisStatus(
        session_id=session_id,
        status=session["status"],
        progress=session["progress"],
        current_step=session["current_step"],
        started_at=session["started_at"],
        results=session["results"],
        error=session.get("error")
    )

@app.get("/suggestions", tags=["Suggestions"])
async def get_product_suggestions():
    """Get trending product suggestions"""
    suggestions = [
        "Korean BBQ fusion bowls",
        "Plant-based protein croissants", 
        "Matcha white chocolate pastries",
        "Seasonal pumpkin spice everything",
        "Mediterranean olive focaccia",
        "Vegan chocolate avocado mousse",
        "Artisan sourdough pizza bases",
        "Thai curry bread bowls",
        "Protein-packed breakfast muffins",
        "Gluten-free almond croissants"
    ]
    
    return {"suggestions": suggestions}

# Background task for full analysis
async def run_full_analysis(session_id: str):
    """Run the complete multi-agent analysis workflow"""
    session = analysis_sessions[session_id]
    
    try:
        # Step 1: Strategic Analysis
        session["current_step"] = "Strategic Analysis"
        session["progress"] = 20
        
        state = app_logic.run_strategic(
            session["bakery_state"],
            app_logic.fgf_datasets
        )
        session["bakery_state"] = state
        session["results"]["strategic_result"] = state.get("strategic_result")
        
        # Step 2: Validation Analysis  
        session["current_step"] = "Validation Analysis"
        session["progress"] = 60
        
        state = app_logic.run_validation(
            session["bakery_state"],
            app_logic.fgf_datasets
        )
        session["bakery_state"] = state
        session["results"]["validation_result"] = state.get("validation_result")
        
        # Step 3: Final Synthesis
        session["current_step"] = "Creating Recommendations"
        session["progress"] = 80
        
        state = app_logic.run_synthesis(session["bakery_state"])
        session["bakery_state"] = state
        session["results"]["final_recommendation"] = state.get("final_recommendation")
        
        # Complete
        session["status"] = "completed"
        session["progress"] = 100
        session["current_step"] = "Analysis Complete"
        session["completed_at"] = datetime.now()
        
        print(f"✅ Analysis {session_id} completed successfully")
        
    except Exception as e:
        session["status"] = "failed"
        session["error"] = str(e)
        session["current_step"] = "Error occurred"
        print(f"❌ Analysis {session_id} failed: {e}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
# File: schemas.py (UPDATED)
from pydantic import BaseModel
from typing import Optional, Dict, Any
from datetime import datetime

class ChatRequest(BaseModel):
    """
    Incoming payload for simple chat.
    """
    message: str

from typing import Union, Dict, Any

class ChatResponse(BaseModel):
    """
    Outgoing payload for simple chat.
    """
    reply: Union[str, Dict[str, Any]]  # Accept both string and dict

class AnalysisRequest(BaseModel):
    """
    Request for comprehensive multi-agent analysis.
    """
    message: str
    user_id: Optional[str] = None

class AnalysisResponse(BaseModel):
    """
    Response when starting an analysis.
    """
    session_id: str
    status: str
    message: str

class AnalysisResults(BaseModel):
    """
    Container for analysis results.
    """
    strategic_result: Optional[Dict[str, Any]] = None
    validation_result: Optional[Dict[str, Any]] = None
    final_recommendation: Optional[str] = None

class AnalysisStatus(BaseModel):
    """
    Status of an ongoing analysis.
    """
    session_id: str
    status: str  # "processing", "completed", "failed"
    progress: int  # 0-100
    current_step: str
    started_at: datetime
    completed_at: Optional[datetime] = None
    results: AnalysisResults
    error: Optional[str] = None
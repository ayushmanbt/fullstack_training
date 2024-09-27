from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Body(BaseModel):
    name: str

@app.get("/")
def hello():
    return {"Hello": "World"}

@app.post("/")
async def hello_post(body: Body):
    return body
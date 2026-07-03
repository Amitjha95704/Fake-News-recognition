# TruthLens

A web application that takes a news article and checks it against multiple fact-checking APIs, then uses Gemini AI to classify its credibility and summarise the findings — all in real time.

## What it does

- Accepts a news article URL or raw text as input
- Cross-references the content against multiple fact-checking APIs
- Uses Gemini AI to analyse, classify credibility, and summarise findings
- Displays a clean verification result on a React.js dashboard
- Helps users quickly identify misinformation before sharing

## Tech Stack

**Backend**
- Java, Spring Boot
- REST APIs
- Fact-checking API integrations

**Frontend**
- React.js

**AI**
- Gemini AI for credibility classification and summarisation

## How it works

1. User submits a news article URL or text
2. Backend ingests the article and sends it through the data pipeline
3. Content is cross-referenced against fact-checking APIs
4. Gemini AI analyses the results and classifies credibility
5. Summary and verdict are displayed on the dashboard

## Getting Started

### Prerequisites
- Java 17+
- Node.js 18+

### Backend Setup
```bash
git clone https://github.com/Amitjha95704/Fake-News-recognition
cd Fake-News-recognition
# Add your API keys in application.properties
./mvnw spring-boot:run
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Environment Variables
```
GEMINI_API_KEY=your_gemini_key
FACT_CHECK_API_KEY=your_fact_check_key
```

## Features

- Full article ingestion and processing pipeline
- Multi-source fact-checking API orchestration
- Gemini AI powered credibility classification
- Real-time results on a clean React.js dashboard
- Article summarisation with source verification

## Author

**Amit Kumar Jha**  
[LinkedIn](https://linkedin.com/in/amit-jha-0a9a71284) • [GitHub](https://github.com/Amitjha95704)

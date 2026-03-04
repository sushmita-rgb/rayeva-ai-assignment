# AI Product Analysis API

An AI-powered backend API built using Node.js, Express, MongoDB, and OpenAI.  
This project allows users to analyze product descriptions using AI and store the results in MongoDB.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- OpenAI API
- dotenv

---

## Features

- Create and store products in MongoDB
- Analyze product description using AI
- Store AI analysis result in database
- RESTful API structure
- Secure environment variable handling (.env)

---

## Project Structure

```
ai-assignment/
│── config/
│   └── db.js
│── models/
│   └── Product.js
│── routes/
│   ├── productRoutes.js
│   └── aiRoutes.js
│── server.js
│── .gitignore
│── package.json
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/sushmita-rgb/rayeva-ai-assignment.git
cd rayeva-ai-assignment
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Create a `.env` file in root directory

```
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

4️⃣ Start the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## API Endpoints

### Create Product

**POST** `/api/products`

Request Body:

```json
{
  "name": "iPhone 15",
  "description": "Latest Apple smartphone with advanced features"
}
```

---

### Analyze Product (AI)

**POST** `/api/ai/analyze/:id`

This endpoint:

- Fetches product by ID
- Sends description to OpenAI
- Stores AI analysis result in database

---

## Security

- API keys are stored securely using environment variables
- `.env` is excluded using `.gitignore`
- Secret push protection handled

---

## Future Improvements

- Add authentication (JWT)
- Add frontend UI
- Deploy to cloud (Render/Railway)
- Add product rating system

---

## Author

Sushmita Singh  
Full Stack Developer (MERN)

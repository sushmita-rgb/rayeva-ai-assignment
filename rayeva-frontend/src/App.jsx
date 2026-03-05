import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeProduct = async () => {
    if (!name || !description) {
      alert("Enter product name and description");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-xl w-96 text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Eco Product Analyzer
        </h1>

        <input
          type="text"
          placeholder="Product Name"
          className="w-full p-3 mb-4 rounded bg-slate-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Product Description"
          className="w-full p-3 mb-4 rounded bg-slate-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={analyzeProduct}
          className="w-full bg-green-600 py-2 rounded hover:bg-green-700"
        >
          {loading ? "Analyzing..." : "Analyze Product"}
        </button>

        {result && (
          <div className="mt-6 border border-gray-600 p-4 rounded">
            <p>Category: {result.category}</p>
            <p>Eco Score: {result.ecoScore}</p>
            <p>Sustainability: {result.sustainabilityLevel}</p>
            <p className="mt-2">{result.summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

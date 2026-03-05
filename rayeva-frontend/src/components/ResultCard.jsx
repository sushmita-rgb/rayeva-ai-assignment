const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result">
      <h3>{result.productName}</h3>
      <p>Category: {result.category}</p>
      <p>Eco Score: {result.ecoScore}</p>
      <p>Sustainability: {result.sustainabilityLevel}</p>
      <p>{result.summary}</p>
    </div>
  );
};

export default ResultCard;

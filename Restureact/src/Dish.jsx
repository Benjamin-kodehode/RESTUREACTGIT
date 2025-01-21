import "./Dish.css";
export default function Dish({
  data: { tittel, kategori, ingredienser, pris },
}) {
  const productName = {
    padding: "20px",
  };
  return (
    <div className="meny">
      <h3 style={productName}>{tittel}</h3>
      <p>{kategori}</p>
      <p>{ingredienser}</p>
      <h4>{pris}</h4>
    </div>
  );
}

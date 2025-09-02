// src/components/ProductCard.jsx

// This component takes product data as props
function ProductCard({ product }) {
  return (
    // Main card container
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{product.name}</div>
        <p className="text-gray-600 text-base">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
          ${product.price}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;

// src/App.jsx
import ProductCard from './components/ProductCard'; // Import the new component
import './App.css';

// Mock data for our products
const products = [
  {
    id: 1,
    name: 'React Pro Course',
    description: 'A complete guide to mastering React, from basics to advanced concepts.',
    price: 99.99,
    imageUrl: 'https://via.placeholder.com/400x250/0000FF/FFFFFF?text=React',
  },
  {
    id: 2,
    name: 'Node.js Masterclass',
    description: 'Learn to build scalable backend services and APIs with Node.js and Express.',
    price: 89.99,
    imageUrl: 'https://via.placeholder.com/400x250/333333/FFFFFF?text=Node.js',
  },
  {
    id: 3,
    name: 'Tailwind CSS Essentials',
    description: 'Style your applications faster than ever with utility-first CSS.',
    price: 49.99,
    imageUrl: 'https://via.placeholder.com/400x250/38B2AC/FFFFFF?text=Tailwind',
  },
];


function App() {
  return (
    // Added a gray background to the whole app for contrast
    <div className="App bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Learning Marketplace
      </h1>
      
      {/* Product list container */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

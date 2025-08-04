import { useState } from 'react';


interface RandomProps {
  items: string[];
}

export function Random({ items }: RandomProps) {

  const [randomItem, setRandomItem] = useState<string | null>(null);

  const generateRandomItem = () => {

    const randomIndex = Math.floor(Math.random() * items.length);

    const selectedItem = items[randomIndex];

    setRandomItem(selectedItem);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-medium text-gray-800">
        {randomItem !== null ? `A cor sorteada é: ${randomItem}` : 'Clique no botão para sortear!'}
      </h2>

      <button
        onClick={generateRandomItem}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition-colors"
      >
        Sortear Item
      </button>
    </div>
  );
}
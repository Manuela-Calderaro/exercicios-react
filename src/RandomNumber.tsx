import { useState } from 'react';

export function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 101);
    setRandomNumber(newNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-medium text-gray-800">
        {randomNumber !== null ? `O número sorteado é: ${randomNumber}` : 'Clique no botão para sortear!'}
      </h2>

      <button
        onClick={generateRandomNumber}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition-colors"
      >
        Sortear
      </button>
    </div>
  );
}
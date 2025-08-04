import { useState } from 'react';

export function Countdown() {

  const [count, setCount] = useState(10);


  const handleDecrement = () => {

    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      console.log(`O valor atual do contador é: ${newCount}`);
    }
  };


  const isButtonDisabled = count === 0;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-red-500">
        {count}
      </h2>

      <button
        onClick={handleDecrement}
        disabled={isButtonDisabled}
        className={`font-bold py-2 px-4 rounded-full shadow-md transition-colors ${
          isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
      >
        Diminuir
      </button>
    </div>
  );
}
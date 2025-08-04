import { useState } from 'react';

export function ToggleText() {
 
  const [isToggled, setIsToggled] = useState(false);

  
  const handleClick = () => {
    
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-gray-100 rounded-lg shadow-lg">
      { }
      <p className="text-xl font-medium text-gray-800">
        {isToggled ? 'Tchau' : 'Olá'}
      </p>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition-colors"
      >
        Alternar Texto
      </button>
    </div>
  );
}
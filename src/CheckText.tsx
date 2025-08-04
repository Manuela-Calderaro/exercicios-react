import { useState } from 'react';

export function CheckText() {

  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxChange = () => {

    setIsChecked(!isChecked);
  };


  const textClasses = isChecked ? 'line-through text-gray-500' : 'text-gray-800';

  return (
    <div className="flex items-center space-x-4 p-8 bg-gray-100 rounded-lg shadow-lg">
      { }
      <input
        type="checkbox"
        checked={isChecked} 
        onChange={handleCheckboxChange}
        className="h-6 w-6 text-blue-600 rounded"
      />

      { }
      <p className={`text-xl ${textClasses}`}>
        Bebi 2L de água hoje!
      </p>
    </div>
  );
}
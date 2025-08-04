// Versão A: Componente com function

interface GreetingFunction {
  name: string;
  age: number;
}

export function GreetingFunction() {
  const style = {
    color: '#3629aaff',
    fontSize: '2em',
    fontFamily: 'Comfortaa, sans-serif'
  };

  return (
    <h1 style={style}>Olá, Machiner! Bem-vindo ao react com function</h1>
  );
}

// ---------------------------------------------


// Versão B: Componente com arrow function

interface GreetingArrow {
  name: string;
  age: number;
}

export const GreetingArrow = () => {
  const style = {
    color: '#b42c59ff', 
    fontSize: '2em',
    fontFamily: 'Comfortaa, sans-serif'
  };

  return (
    <h1 style={style}>Olá, Machiner! Bem-vindo ao react com arrow function</h1>
  );
};

//normalmente só se utiliza um deles, mas como o exercício pediu ambos, fiz ambos no mesmo código
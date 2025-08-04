
interface GreetingWithProps {
  name: string;
  age: number;
}

// adicionar name e age
export const GreetingWithProps = (props: GreetingWithProps) => {
  const style = {
    color: '#28a745',
    fontSize: '2em',
    fontFamily: 'Comfortaa, sans-serif'
  };

  return (
    <h1 style={style}>Olá, {props.name}! Você tem {props.age} anos.</h1>
  );
};
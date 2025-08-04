import { GreetingWithProps } from "./Greeting_com_props";
import { ListContainer } from './ListContainer';
import { ToggleText } from './ToggleText';
import { Random } from './Random';
import { RandomNumber } from './RandomNumber';
import { CheckText } from './CheckText';
import { Countdown } from './Countdown';
import { GreetingFunction } from "./Greeting";
import { GreetingArrow } from "./Greeting";



export interface Subject {
  name: string;
  time: number; 
}


const myRandomList: string[] = [
  "Rosa",
  "Roxo",
  "Azul",
  "Amarelo",
  "Verde",
  "Vermelho"
];


const mySubjects: Subject[] = [
  { name: "Educação Financeira", time: 13 },
  { name: "Modelagem e Prototipagem", time: 16 },
  { name: "Química Geral", time: 8 },
  { name: "Fundamentos da Programação", time: 15 },
  { name: "Economia e Cultura", time: 10 },
  { name: "História do Design", time: 8 },
];

function App() {
  const userName = "Machiner";
  const userAge = 19;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <GreetingFunction />
         <GreetingArrow />
      <GreetingWithProps name={userName} age={userAge} />
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Minha Lista de Matérias</h1>
      <ListContainer items={mySubjects} />
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Exercício ToggleText</h1>
      <ToggleText />
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Exercício Sorteio de Item</h1>
      <Random items={myRandomList} />
      <RandomNumber />
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Exercício CheckText</h1>
      <CheckText />
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Exercício Countdown</h1>
      <Countdown />
    </div>
  );
}

export default App;
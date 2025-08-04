import type {Subject} from './App';

interface ItensDaListaProps {
  index: number;
  item: Subject;
}

export function ItensDaLista({ index, item }: ItensDaListaProps) {
  return (
    <li className="bg-gray-100 p-2 m-2 rounded-md shadow-sm">
      <span className="font-bold text-gray-700">{index + 1}</span> - {item.name} (Horário: {item.time})
    </li>
  );
}
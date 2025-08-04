import { ItensDaLista } from "./ListItem";
import type { Subject } from './App';

// A interface agora espera um array de objetos 'Subject'
interface ListContainerProps {
  items: Subject[];
}

export function ListContainer({ items }: ListContainerProps) {
  return (
    <ul className="list-none p-4 bg-white rounded-lg shadow-lg">
      {items.map((item, index) => (
        <ItensDaLista key={index} index={index} item={item} />
      ))}
    </ul>
  );
}
import { ItensDaLista } from "./ListContainer"; 

interface ListContainerProps {
  items: string[];
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
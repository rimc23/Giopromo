interface Props {
  title: string;
  data: Item[];
  color: boolean;
}

interface Item {
  id: string
  nombre: string;
}

export default function FiltersInput({ title, data, color = false }: Props) {
  return (
    <div>
      <span className="border-b-2 border-gray-500">{title}</span>
      <div className="flex flex-col pt-4">
        {data.map((item) => (
          <div key={item.id} className=" text-gray-700">
            <label htmlFor={item.id} className="flex gap-2 items-center">
            {
                color ? <input type="radio" id={item.id} className={`appearance-none rounded-full border border-gray-300 w-4 h-4 ${item.nombre} cursor-pointer`}/> : <input type="radio" id={item.id} className="appearance-none w-4 h-4 border border-gray-400 rounded-none cursor-pointer"/>
            }
            <span>{item.id}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

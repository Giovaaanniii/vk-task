import type { Data } from "../types/types";
import './styles/Table.css'

interface TableProps {
  data: Data[];
}

function Table({ data }: TableProps) {
  if (!data?.length) return <div>Нет данных</div>;

  const columns = ['id', 'names', 'surname', 'age', 'email', 'telephone'];

  return (
    <div className="tableWrapper">
        <table >
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={`${item.id}-${column}`}>
                {item[column as keyof Data]?.toString() || '-'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
}

export default Table;
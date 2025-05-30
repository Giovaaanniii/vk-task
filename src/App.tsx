import axios from "axios";
import TablePage from "./pages/TablePage";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = `http://localhost:3000`;

type Data = {
  id: string;
  title: string;
  views: string;
};
const getData = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response;
};
console.log(getData());
function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["record"],
    queryFn: getData,
  });

  if (isLoading) {
    return <div>isLoading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <TablePage />
      <div>
        {data?.data.map((item: Data) => (
          <div key={item.id}>
            {item.title} - {item.views}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

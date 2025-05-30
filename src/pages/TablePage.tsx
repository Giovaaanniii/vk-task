import { useMutation, useQuery } from "@tanstack/react-query";
import Table from "../components/Table";
import { getData, postData } from "../components/ApiService";
import type { Data } from "../types/types";
import CreateForm from "../components/CreateForm ";

function TablePage() {
  const { data, error, isPending } = useQuery({
    queryKey: ["record"],
    queryFn: getData,
  });

  const {mutate} = useMutation({
    mutationKey:['add post'],
    mutationFn: postData
    
  })



  if (isPending) {
    return <div>isLoading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <CreateForm />
      <Table />
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

export default TablePage;

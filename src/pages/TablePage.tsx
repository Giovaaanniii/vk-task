import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Table from "../components/Table";
import { getData, postData } from "../components/ApiService";
import CreateForm from "../components/CreateForm ";
import { LoadMore } from "../components/LoadMore";

function TablePage() {
  const queryClient = useQueryClient();

  

  const { mutate } = useMutation({
    mutationKey: ["add post"],
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["records"] });
    },
  });
  const {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["records"],
    queryFn: ({ pageParam = 1 }) => getData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
  });

  const allPosts = data?.pages?.length ? data?.pages.flatMap((page) => page.data) : [];
  return (
    <div>
      <CreateForm onSubmit={mutate} />
      <Table data={allPosts} />
      <LoadMore  
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isPending={isPending}
        error={error}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}

export default TablePage;

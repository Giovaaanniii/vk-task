import { useInfiniteQuery } from "@tanstack/react-query";
import Table from "../components/Table";
import { getData } from "../components/ApiService";
import type { Data } from "../types/types";
import CreateForm from "../components/CreateForm ";
// const {mutate} = useMutation({
//   mutationKey:['add post'],
//   mutationFn: postData

function TablePage() {
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
      return lastPage.hasMore ? lastPage.nextPage : undefined;
    },
  });

  // })
  const content = data?.pages?.flatMap(
    (page) =>
      page.posts?.map((post: Data) => (
        <div key={post.id}>
          <div>{post.title || "Нет заголовка"}</div>
          <div>{post.views || "Нет просмотров"}</div>
        </div>
      )) || []
  );

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

      {content}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {hasNextPage ? (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Загрузка..." : "Загрузить еще"}
          </button>
        ) : (
          <div style={{ color: "#666", marginTop: "10px" }}>
            Вы достигли конца списка
          </div>
        )}
      </div>
    </>
  );
}

export default TablePage;

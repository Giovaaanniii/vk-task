import type { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query";

interface LoadMoreProps {
    isPending: boolean,
    error: Error | null
     fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<
     InfiniteData<{
            data: any;
            first: number,
            prev: number | null,
            next: number,
            last: number, 
            pages: number,
            items: number,
        }, unknown>, Error>
    >,
    hasNextPage: boolean
    isFetchingNextPage: boolean
}
export function LoadMore(props: LoadMoreProps) {

  if (props.isPending) {
    return <div>Загрузка...</div>;
  }

  if (props.error) {
    return <div>Ошибка: {props.error.message}</div>;
  }


  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      {props.hasNextPage ? (
        <button onClick={() => props.fetchNextPage()} disabled={props.isFetchingNextPage}>
          {props.isFetchingNextPage ? "Загрузка..." : "Загрузить еще"}
        </button>
      ) : (
        <div style={{ color: "#666", marginTop: "10px" }}>
          Вы достигли конца списка
        </div>
      )}
    </div>
  );
}

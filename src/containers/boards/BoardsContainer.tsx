"use client";

import List from "@/components/board/List";
import ListLoading from "@/components/board/ListLoading";
import TagsBox from "@/components/board/TagsBox";
import Title from "@/components/common/Title";
import { InGetLogProps, getListProps } from "@/interfaces/in_Boards";
import client from "@/lib/api/client";
import { getList } from "@/services/boards_service";
import { useState } from "react";
import { useQuery } from "react-query";

interface Props {
  category: string;
  tag: string | undefined;
  tags: Array<string>;
}

export default function BoardsContainer({ category, tag, tags }: Props) {
  const [contents, setContents] = useState<Array<InGetLogProps>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const getBoardsKey = ["boardsList", category, tag, page];

  const { isLoading: loading } = useQuery(
    getBoardsKey,
    async () => await getList(category, page, tag),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setTotalPage(data.totalPages);
        if (page === 1) {
          setContents([...data.contents]);
          return;
        }
        setContents((prev) => [...prev, ...data.contents]);
      },
    }
  );

  return (
    <>
      <div className="order-2 flex-[3] w-full md:w-auto md:order-1">
        <Title title={`${category} Logs`} />
        <List list={contents} />
        {loading && <ListLoading />}
        {page < totalPage && (
          <div className="flex items-center justify-center w-full py-2">
            <button
              className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-300"
              onClick={() => setPage(page + 1)}
            >
              더보기
            </button>
          </div>
        )}
      </div>
      <TagsBox allTags={tags} cate={category} tag={tag} />
    </>
  );
}

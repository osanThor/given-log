"use client";

import List from "@/components/board/List";
import TagsBox from "@/components/board/TagsBox";
import Title from "@/components/common/Title";
import { InGetLogProps } from "@/interfaces/in_Boards";
import client from "@/lib/api/client";
import { useState } from "react";
import { useQuery } from "react-query";

interface Props {
  category: string;
  tag: string | undefined;
}

interface getListProps {
  allTags: Array<string>;
  contents: Array<InGetLogProps>;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export default function BoardsContainer({ category, tag }: Props) {
  const [contents, setContents] = useState<Array<InGetLogProps>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [tags, setTags] = useState<Array<string>>([]);
  const getBoardsKey = ["boardsList", category, tag];

  useQuery(
    getBoardsKey,
    async () =>
      await client.get<getListProps>(
        `/api/boards/getList?cate=${category}&page=${page}${
          tag ? `&tag=${tag}` : ""
        }`
      ),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setTags(data.data.allTags);
        setTotalPage(data.data.totalPages);
        if (page === 1) {
          setContents([...data.data.contents]);
          return;
        }
        setContents((prev) => [...prev, ...data.data.contents]);
      },
    }
  );

  return (
    <>
      <div className="order-2 flex-[3] md:order-1">
        <Title title={`${category} Logs`} />
        <List list={contents} />
      </div>
      <TagsBox allTags={tags} cate={category} tag={tag} />
    </>
  );
}

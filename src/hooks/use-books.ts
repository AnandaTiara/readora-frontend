// @ts-ignore
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getBookById,
  getBookByIdRead,
  getBooks,
  getHighlightAI,
} from "../../src/api/books";
import { Book, HighlightPayload, HighlightResponse } from "../types/books";

export const useGetBooks = () => {
  return useQuery<{
    data: {
      books: Book[];
    };
    message: string;
  }>({
    queryKey: ["books"],
    queryFn: getBooks,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetBook = (id: string) => {
  return useQuery<{
    data: Book;
    message: string;
  }>({
    queryKey: ["books/" + id],
    queryFn: () => getBookById(id),
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetBookRead = (id: string) => {
  return useQuery<{
    data: Book;
    message: string;
  }>({
    queryKey: ["books/" + id + "/read"],
    queryFn: () => getBookByIdRead(id),
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useHighlight = () => {
  return useMutation<HighlightResponse, unknown, HighlightPayload>({
    mutationKey: ["highlight"],
    mutationFn: getHighlightAI,
  });
};

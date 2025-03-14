import { useMutation, useQuery } from "@tanstack/react-query";
import { getBookById, getBookByIdRead, getBooks, getHighlightAI } from "../api/books";
import { Book } from "../types/books";

export const useGetBooks = () => {
    return useQuery<{
      data: {
        books: Book[]
      }
      message: string
    }>({
      queryKey: ["books"],
      queryFn: getBooks,
      retry: false,
      refetchOnWindowFocus: false,
    });
  };

export const useGetBook = (id: string) => {
    return useQuery<{
      data: Book
      message: string
    }>({
      queryKey: ["books/" + id],
      queryFn: () => getBookById(id),
      retry: false,
      refetchOnWindowFocus: false,
    });
  };

export const useGetBookRead = (id: string) => {
    return useQuery<{
      data: Book
      message: string
    }>({
      queryKey: ["books/" + id + "/read"],
      queryFn: () => getBookByIdRead(id),
      retry: false,
      refetchOnWindowFocus: false,
    });
  };

export const useHihglight = () => {
  return useMutation({
    mutationKey: ["highlight"],
    mutationFn: getHighlightAI,
  });
};
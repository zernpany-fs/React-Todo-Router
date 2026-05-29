import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todo";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    staleTime: 2000,
  });
}
//! CUSTOM HOOK !!

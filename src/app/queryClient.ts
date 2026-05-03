import { QueryClient } from "@tanstack/react-query";
import { experimental_createQueryPersister } from "@tanstack/react-query-persist-client";

const storage = {
  getItem: (key: string) => localStorage.getItem(key),
  setItem: (key: string, value: string) => localStorage.setItem(key, value),
  removeItem: (key: string) => localStorage.removeItem(key),
  entries: (): Array<[string, string]> =>
    Object.keys(localStorage).map((key) => [key, localStorage.getItem(key)!]),
};

export const persister = experimental_createQueryPersister({
  storage,
  maxAge: 60 * 1000,
  filters: { queryKey: ["character"] },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      persister: persister.persisterFn,
    },
  },
});

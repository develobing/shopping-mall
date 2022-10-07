import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
// import { getTodos, postTodo } from '../my-api';

type anyOBJ = { [key: string]: any };

const BASE_URL = 'https://fakestoreapi.com';

// Create a client
export const getQueryClient = (() => {
  let client: QueryClient | null = null;

  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
            staleTime: 1000 * 60, // 1 minute
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    }
    return client;
  };
})();

export const fetcher = async ({
  path,
  method,
  body,
  params,
}: {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: anyOBJ;
  params?: anyOBJ;
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
    };

    if (params) {
      const searchParams = new URLSearchParams(params);
      url += '?' + searchParams.toString();
    }

    if (body) fetchOptions.body = JSON.stringify(body);

    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log('fetcher() - error', error);
  }
};

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
};

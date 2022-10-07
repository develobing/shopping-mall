import React from 'react';
import { useRoutes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { routes } from './routes';
import { getQueryClient } from './queryClient';
import Gnb from './components/gnb';

const App = () => {
  const element = useRoutes(routes);
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />

      {element}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

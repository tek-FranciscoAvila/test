import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { store } from '@/store';
import { theme } from '@/configs';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <h1>
          Hello world!
        </h1>
      </MantineProvider>
    </Provider>
  );
};

export default App;

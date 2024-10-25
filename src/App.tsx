// import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/configs';

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <h1>
        Hello world!
      </h1>
    </MantineProvider>
  );
};

export default App;

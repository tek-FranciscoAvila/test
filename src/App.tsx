import { HomeView } from "@/views/home";
import { MantineProviderBase } from "./context/MantineProvider";

const App: React.FC = () => {
  return (
    <MantineProviderBase>
      <HomeView />
    </MantineProviderBase>
  );
};

export default App;

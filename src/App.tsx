import { Route, Routes } from "react-router-dom";
import FavoritePage from "./components/favorites/FavoritePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
};

export default App;

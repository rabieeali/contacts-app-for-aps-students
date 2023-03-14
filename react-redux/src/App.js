import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/404";
import AddNewContactPage from "./pages/AddNewContactPage";
import GreetingPage from "./pages/GreetingPage";
import HomePage from "./pages/HomePage";
import UpdateContactPage from "./pages/UpdateContactPage";

const App = () => {

  return (
    <>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/greeting' element={<GreetingPage />} />
        <Route path='/add-new-contact' element={<AddNewContactPage />} />
        <Route path='/update-contact/:id' element={<UpdateContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </>
  );
}

export default App;

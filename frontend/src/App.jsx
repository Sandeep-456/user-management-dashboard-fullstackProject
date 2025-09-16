import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import UserDetails from "./components/UserDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserForm />} />
          <Route path="/edit/:id" element={<UserForm />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

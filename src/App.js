
import './App.css';
import {Provider} from "react-redux";
import reduxStore from "./redux/redux-store";
import UsersPage from "./pages/users/usersPage";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserProfile from './pages/userProfile/userProfile';


function App() {
  return (
    <BrowserRouter>
      <Provider store={reduxStore}>
        <div className="container">
       <Routes>
         <Route path="/" element={<UsersPage/>}/>
         <Route path="/users/:id" element={<UserProfile/>}/>
       </Routes>
        </div>
      </Provider>
      </BrowserRouter>

  );
}

export default App;

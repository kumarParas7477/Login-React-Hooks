import React, { useContext } from 'react';
import AuthContext from './Store/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
 const ctx = useContext(AuthContext)
 
  return (
     <React.Fragment>
      {/* <AuthContextProvider value={{isLoggedIn : isLoggedIn ,onLogout : logoutHandler }}> */}
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      {/* </AuthContextProvider> */}
     </React.Fragment>
  );
}

export default App;

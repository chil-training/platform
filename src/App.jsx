import { Route, Routes } from 'react-router'
import { useState, createContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebase_config'
import { getDoc, doc } from 'firebase/firestore'

import AuthLayout from './layouts/AuthLayout';
import Dashboard from './routes/Dashboard';
import Theme from './routes/Theme';
import Guide from './routes/Guide';
import Login from './routes/Login';
import Register from './routes/Register';



export const AuthContext = createContext();

function App() {

  const [user, setUser] = useState(null);
  const [userMeta, setUserMeta] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUserMetadata(currentUser.uid);
      }
    })
  }, []);

  const fetchUserMetadata = async (uid) => {
    const userRef = await getDoc(doc(db, "users", uid));
    if (userRef.exists()) {
      setUserMeta(userRef.data());
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, userMeta, setUserMeta }}>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='theme/:themeId' element={<Theme />} />
        <Route path='guide/:guideId' element={<Guide />} />

        {/* Auth routes */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { SettingsPage } from './components/SettingsPage/SettingsPage';
import { SignInPage } from './components/SingInPage/SignInPage';
import { InfoPage } from './components/InfoPage/InfoPage';
import { MainPage } from './components/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { LeaderBoard } from './components/LeaderBoard/LeaderBoard';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/SignInPage" element={<SignInPage />}/>
        <Route path="/SettingsPage" element={<SettingsPage />}/>
        <Route path="/InfoPage" element={<InfoPage />}/>
        <Route path="/Leaders" element={<LeaderBoard />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { SettingsPage } from './components/SettingsPage/SettingsPage';
import { SignInPage } from './components/SingInPage/SignInPage';
import { InfoPage } from './components/InfoPage/InfoPage';
import { MainPage } from './components/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { LeaderBoard } from './components/LeaderBoard/LeaderBoard';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {
  const font = useSelector((state: RootState) => state.settings.font)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka', 'Atkinson Hyperligible', 'Comfortoa', 'Courier', 'Montserrat', 'Ubuntu', 'Inconsolata']
      }
    });
  }, []);
  console.log('render')
  return (
    <BrowserRouter>
      <div style={{ fontFamily: font }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/SettingsPage" element={<SettingsPage />} />
          <Route path="/InfoPage" element={<InfoPage />} />
          <Route path="/Leaders" element={<LeaderBoard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

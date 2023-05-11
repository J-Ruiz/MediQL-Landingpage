import { Inter } from 'next/font/google';
import Header from './components/Header';
import SplashMain from './components/SplashMain';
import KeyFeatures from './components/KeyFeatures';
import MeetTheTeam from './components/MeetTheTeam';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <SplashMain />
      <KeyFeatures />
      <MeetTheTeam />
    </>
  );
}

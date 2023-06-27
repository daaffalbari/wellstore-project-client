import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../../components/organisms/Navbar';
import MainBanner from '../../components/organisms/MainBanner';
import TransactionSteps from '../../components/organisms/TransactionSteps';
import FeaturedGame from '../../components/organisms/Featuredgame';
import Reached from '../../components/organisms/Reached';
import Story from '../../components/organisms/Story';
import Footer from '../../components/organisms/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionSteps />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}

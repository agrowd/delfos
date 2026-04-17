import Hero from '@/components/Hero';
import NuestroEspacio from '@/components/NuestroEspacio';
import Servicios from '@/components/Servicios';
import Enfoques from '@/components/Enfoques';
import Juegoteca from '@/components/Juegoteca';
import Contacto from '@/components/TrabajaConNosotros';
import BlogPreview from '@/components/BlogPreview';
import Navbar from '@/components/layout/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      
      <main>
        <Hero />
        <NuestroEspacio />
        <Gallery />
        <Servicios />
        <Enfoques />
        <Juegoteca />
        <Contacto />
        <BlogPreview />
        <Location />
      </main>

      <Footer />
    </>
  );
}

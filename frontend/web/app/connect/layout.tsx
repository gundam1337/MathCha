import Navbar from '@/components/NavBar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        {children}
      </main>
      <Footer/>
    </div>
  );
}
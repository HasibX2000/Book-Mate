import Header from './Components/Header';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './Components/Footer';
export default function App() {
  return (
    <div className="bg-white dark:bg-gray-800 relative">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

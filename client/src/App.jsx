import { Navbar, Payment, Services, Transactions, Footer, Welcome} from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
      <Payment />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
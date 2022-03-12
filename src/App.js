import './scss/App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div className='mainApp'>
        <Header />
        <Main />
        <Footer />
      </div>
    </main>


  );
}

export default App;

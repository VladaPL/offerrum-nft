import "./App.scss";
import Header from "./components/header/header";
import FirstSection from "./components/first-section/first-section";
import SecondSection from "./components/second-section/second-section";

function App() {
    return (
        <div className="App">
                <Header/>
                <main>
                    <FirstSection />
                    <SecondSection />
                </main>
        </div>
    );
}

export default App;

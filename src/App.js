import "./App.scss";
import Header from "./components/header/header";
import FirstSection from "./components/first-section/first-section";

function App() {
    return (
        <div className="App">
                <Header/>
                <main>
                    <FirstSection />
                </main>
        </div>
    );
}

export default App;

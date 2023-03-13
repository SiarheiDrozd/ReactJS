import './App.css';
import Counter from "./components/counter";

function App() {
    let initialCounterValue = 1;

    return (
        <div>
            <Counter value={initialCounterValue}></Counter>
        </div>
    )
}

export default App;

import './App.scss';

import Counter from "./components/counter";
import SearchForm from "./components/search-form";

function App() {
    let initialCounterValue = 1;

    return (
        <div>
            <Counter value={initialCounterValue}></Counter>
            <SearchForm></SearchForm>
        </div>
    )
}

export default App;

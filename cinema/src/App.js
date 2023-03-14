import './App.scss';

import Counter from "./components/counter/counter";
import SearchForm from "./components/search-form/search-form";

function App() {
    let initialCounterValue = 1;

    return (
        <main>
            <Counter value={initialCounterValue}></Counter>
            <SearchForm></SearchForm>
        </main>
    )
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
imp
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/home' element={<home>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

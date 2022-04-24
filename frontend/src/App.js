import Home from "./components/Home"
import { MessageList, MessageEdit } from "./components"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/messages' exact={true} element={<MessageList />} />
        <Route path='/messages/:id' element={<MessageEdit /> }/>
      </Routes>
    </div>
  );
}

export default App;

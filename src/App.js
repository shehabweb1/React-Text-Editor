import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextEditor" aboutText="About Us" />
      <TextForm heading="This is React Text Editor" />
    </>
  );
}

export default App;

import './App.css';
import {Button} from '@material-ui/core'; //importing material ui component
import {TextField} from '@material-ui/core';
import SomeHeader from './NavBar.js';

function App() {
  return (
    <div className="App">
      <SomeHeader/>
      <TextField id="name" label="Name" variant="outlined" />
      <Button color="primary" variant="contained"> Press me </Button>
    </div>
  );
}

export default App;
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from 'react'

function App() {

  let items = [
    'Chennai',
    'Madurai',
    'Salem',
    'Erode',
    'Pondicherry'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert && <Alert onClose={() => {setAlert(false)}}>
        My Alert
      </Alert> }
      
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Button color='secondary' onClick={() => {setAlert(true)}}>
        My Button
      </Button>

    </>
  );
}

export default App;
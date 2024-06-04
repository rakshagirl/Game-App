import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

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

  return (
    <>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />

    </>
  );
}

export default App;
import ListGroup from "./components/ListGroup";

function App() {

  let items = [
    'Chennai',
    'Madurai',
    'Salem',
    'Erode',
    'Pondicherry'
  ];

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;
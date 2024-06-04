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
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </>
  );
}

export default App;
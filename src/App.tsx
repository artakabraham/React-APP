import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {

  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      </div>
      <Button
        buttonClass="btn btn-primary"
        onClick={() => console.log('Clicked')}
      >Knopka</Button>
    </>)

}

export default App;
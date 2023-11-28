import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [isAlertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      {isAlertVisible && <Alert onClose={() => setAlertVisibility(false)} />}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        Button
      </Button>
    </>
  );
}

export default App;

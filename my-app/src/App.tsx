import ListGroup from "./components/listGroup";
import Alerts from "./components/Alerts";

function App() {
  const items = ["About", "Inspirations", "Music", "Merch"]; 
  const handleSelectItem = (item: string) => {
    console.log(item); 
  }
  
  return (
  <div>
    <ListGroup items={items} heading="ListOptions" onSelectItem={handleSelectItem} />
    <Alerts>
      Hello <span> World</span>
      </Alerts> 
  </div>
  );
}

export default App;
//steps to make controlled input
//1- define a piece of state
//2- passing this state to input value property to force the input to take this state
//3- update this value by onChange event handler to controll this state.
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    // console.log(item);
  }
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteList() {
    const confirm = window.confirm("Are you sure to clear list?");
    confirm && setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggle={handleToggle}
        handleDeleteList={handleDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

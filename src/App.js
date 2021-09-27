import React from "react";
import "./App.css";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { CurrentDate } from "./components/Date/Date";
import { Item } from "./components/Item/Item";

const initialList = [
  {
    text: "test",
    finished: false,
  },
  {
    text: "test 2",
    finished: true,
  },
];

function App() {
  const [list, setList] = React.useState(initialList);

  function checkItem(targetIndex) {
    const newList = list.map((item, index) => {
      if (index !== targetIndex) {
        return item;
      }
      return {
        ...item,
        finished: !item.finished,
      };
    });

    setList(newList);
  }

  function createNewItem() {
    setList([...list, { text: "", finished: false }]);
  }

  function updateItem(targetIndex, value) {
    const newList = list.map((item, index) => {
      if (index !== targetIndex) {
        return item;
      }
      return {
        ...item,
        text: value,
      };
    });

    setList(newList);
  }

  function remove(targetIndex) {
    const newList = list.filter((item, index) => {
      return index !== targetIndex;
    });

    setList(newList);
  }

  return (
    <div className="root">
      <CurrentDate />
      {list.map((item, index) => (
        <Item
          key={index}
          onChange={updateItem}
          index={index}
          onCheck={checkItem}
          item={item}
          onRemove={remove}
        />
      ))}
      <ButtonAdd onClick={createNewItem} />
    </div>
  );
}

export default App;

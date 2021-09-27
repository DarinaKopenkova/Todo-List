import React from "react";
import "./App.css";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { CurrentDate } from "./components/Date/Date";
import { Item } from "./components/Item/Item";

const initialList = [
  {
    text: "1. Advanced Javascript",
    finished: false,
  },
  {
    text: "2. React.js",
    finished: false,
  },
  {
    text: "3. Redux",
    finished: false,
  },
  {
    text: "4. Internship and get a job in Kuehne+Nagel",
    finished: false,
  },
  {
    text: "Bootstrap",
    finished: true,
  },
  {
    text: "Basic Javascript",
    finished: true,
  },
  {
    text: "CSS",
    finished: true,
  },
  {
    text: "HTML",
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
      {list
        .sort((item) => (item.finished ? 1 : -1))
        .map((item, index) => (
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

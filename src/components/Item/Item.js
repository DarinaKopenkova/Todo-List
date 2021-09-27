import "./Item.css";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import TextareaAutosize from "react-textarea-autosize";

export function Item(props) {
  return (
    <div className={`item ${props.item.finished ? "item_finished" : ""}`}>
      <TextareaAutosize
        onChange={(event) => {
          const value = event.target.value;
          props.onChange(props.index, value);
        }}
        autoFocus={!props.item.text}
        className="item__input"
        value={props.item.text}
      ></TextareaAutosize>

      <div
        className="item__icon"
        onClick={() => {
          props.onCheck(props.index);
        }}
      >
        {props.item.finished && <CheckIcon />}
      </div>

      <button
        className="item__button-remove"
        onClick={() => {
          props.onRemove(props.index);
        }}
      >
        <TrashIcon />
      </button>
    </div>
  );
}

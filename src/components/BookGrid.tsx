import classes from "../css/grid.module.css";
import Book from "./Book";

export default function BookGrid() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index} index={index}></Book>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index + 5} index={index + 5}></Book>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index + 10} index={index + 10}></Book>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index + 15} index={index + 15}></Book>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index + 20} index={index + 20}></Book>
          ))}
        </div>
      </div>
    </>
  );
}

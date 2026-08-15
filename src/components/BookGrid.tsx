import classes from "../css/grid.module.css";
import { useContext } from "react";
import { bingoContext } from "../store/bingoContext";

export default function BookGrid() {
  const ctx = useContext(bingoContext);
  console.log(ctx);

  return (
    <>
      {/* <Box>
        <Grid container columns={5} className={classes.grid}>
          {Array.from(Array(25)).map((_, index) => (
            <div style={{ width: "100px", height: "100px" }}>{`${index}`}</div>
          ))}
        </Grid>
      </Box> */}
      <div className={classes.container}>
        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <div className={`${classes.box}`} key={index + 1}>
              {index + 1}
            </div>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <div className={`${classes.box}`} key={index + 6}>
              {index + 6}
            </div>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <div className={`${classes.box}`} key={index + 11}>
              {index + 11}
            </div>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <div className={`${classes.box}`} key={index + 16}>
              {index + 16}
            </div>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <div className={`${classes.box}`} key={index + 21}>
              {index + 21}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

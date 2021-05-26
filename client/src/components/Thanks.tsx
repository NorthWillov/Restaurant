import React, { FC, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import withStyles, { WithStylesProps } from "react-jss";
import styles from "../styles/thanksStyles";

interface ThanksProps extends WithStylesProps<typeof styles> {}

const Thanks: FC<ThanksProps> = ({ classes }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Spinner animation="grow" />
      ) : (
        <h1>ZAMÓWIENIE ZOSTAŁO ZŁOŻONE POPRAWNIE, DZIĘKUJEMY!</h1>
      )}
    </div>
  );
};

export default withStyles(styles)(Thanks);

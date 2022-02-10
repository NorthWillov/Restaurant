import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner, Button } from "react-bootstrap";
import ArrowIcon from "../icons/ArrowIcon";
import withStyles, { WithStylesProps } from "react-jss";
import styles from "../../styles/pages/thanksPage";

interface ThanksProps extends WithStylesProps<typeof styles> {}

const Thanks: FC<ThanksProps> = ({ classes }) => {
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Spinner animation="grow" />
      ) : (
        <div className={classes.container}>
          <h1>ZAMÓWIENIE ZOSTAŁO ZŁOŻONE POPRAWNIE, DZIĘKUJEMY!</h1>
          <Button
            variant="outline-secondary"
            onClick={() => history.push("/")}
            className="mr-3"
          >
            <ArrowIcon />
            Wroć do sklepu
          </Button>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(Thanks);

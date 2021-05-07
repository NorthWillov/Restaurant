const styles = {
  root: {
    textAlign: "center",
  },
  group: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
  input: {
    position: "absolute",
    opacity: "0",
    zIndex: "-1",
    "&:checked + label": {
      paddingLeft: "1em",
      "&:before": {
        top: "0",
        width: " 100%",
        height: "2em",
        background: "lightgrey",
      },
    },
    "&:disabled + label": {
      color: "lightgrey",
      "&:before": {
        border: "1px solid lightgrey",
      },
    },
  },
  label: {
    position: "relative",
    marginRight: "1em",
    paddingLeft: "2em",
    paddingRight: "1em",
    lineHeight: "2",
    cursor: "pointer",
    zIndex: "1",
    "-webkit-transition": ".25s all ease",
    "-o-transition": ".25s all ease",
    transition: ".25s all ease",
    "&:before": {
      boxSizing: "border-box",
      content: "' '",
      position: "absolute",
      top: "0.3em",
      left: "0",
      display: "block",
      width: "1.4em",
      height: "1.4em",
      border: "1px solid grey",
      borderRadius: "1em",
      zIndex: "-1",
      "-webkit-transition": ".25s all ease",
      "-o-transition": ".25s all ease",
      transition: ".25s all ease",
    },
  },
};

export default styles;

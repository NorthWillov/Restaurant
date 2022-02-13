const styles = {
  root: {
    boxShadow: "0px 0px 10px 3px lightgrey",
    padding: 0,
    marginBottom: "28px !important",
  },
  imgOveflow: {
    overflow: "hidden",
  },
  img: {
    cursor: "pointer",
    transition: "transform .4s ease",
    "&:hover": {
      transform: "scale(110%)",
    },
  },
  title: {
    fontSize: "21px",
    "@media (max-width: 767.98px)": {
      fontSize: "18px",
    },
  },
  subtitle: {
    fontSize: "17px",
    "@media (max-width: 767.98px)": {
      fontSize: "14px",
    },
  },
  checkout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  checkoutPrice: {
    fontSize: "21px",
    margin: "0",
    fontWeight: "700",
    "@media (max-width: 767.98px)": {
      fontSize: "15px",
    },
  },
  CardBody: {
    padding: "15px 5px 10px 10px",
    "@media (min-width: 767.98px)": {
      height: "135px",
    },
  },
  pickBtn: {
    padding: "5px 10px",
    fontSize: "18px",
    "@media (max-width: 767.98px)": {
      fontSize: "12px",
    },
  },
}

export default styles

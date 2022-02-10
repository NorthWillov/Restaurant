const styles = {
  title: {
    fontSize: "23px",
    "@media (max-width: 767.98px)": {
      fontSize: "20px",
    },
  },
  subtitle: {
    fontSize: "19px",
    "@media (max-width: 767.98px)": {
      fontSize: "16px",
    },
  },
  checkout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  checkoutPrice: {
    fontSize: "23px",
    margin: "0",
    fontWeight: "700",
    "@media (max-width: 767.98px)": {
      fontSize: "17px",
    },
  },
  Card: {
    boxShadow: "0px 0px 10px 3px lightgrey",
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

const styles = {
  title: {
    "@media (max-width: 767.98px)": {
      fontSize: "16px",
    },
  },
  subtitle: {
    "@media (max-width: 767.98px)": {
      fontSize: "13px",
    },
  },
  checkout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  checkoutPrice: {
    fontSize: "20px",
    margin: "0",
    fontWeight: "700",
    "@media (max-width: 767.98px)": {
      fontSize: "14px",
    },
  },
  Card: {
    borderRadius: "0.5rem",
  },
  CardBody: {
    padding: "15px 5px 10px 10px",
    "@media (min-width: 767.98px)": {
      height: "135px",
    },
  },
};

export default styles;

const styles = {
  image: {
    borderRadius: "1rem",
    paddingRight: "5px",
    "@media (max-width: 767.98px)": {
      marginBottom: "10px",
    },
  },
  popularCard: {
    cursor: "pointer",
    padding: "10px",
    borderRadius: "1rem",
    boxShadow: "rgba(6, 5, 50, 0.15) 0px 4px 22px -6px",
    marginBottom: "2rem",
    "& p": {
      fontWeight: "700",
    },
  },
  cardBodyPopular: {
    alignSelf: "center",
    padding: "0",
  },
  cardTitlePopular: {
    fontSize: "18px",
    marginBottom: "0.4rem",
    fontWeight: "400",
  },
};

export default styles;

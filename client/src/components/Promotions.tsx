import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import withStyles from "react-jss";
import styles from "../styles/PromotionsStyles";

interface PromotionProps {
  classes: { [key: string]: string };
}

const Promotions: FC<PromotionProps> = ({ classes }) => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const getPromos = async () => {
      try {
        const response = await axios.get("/api/getPromos");
        setPromos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPromos();
  }, []);

  return (
    <div id="promocje" style={{ paddingTop: "120px" }}>
      <h3 className="title pb-4">Promocje:</h3>
      <Carousel>
        {promos.map((promo) => (
          <Carousel.Item key={promo._id} interval={5000}>
            <img
              className="d-block w-100"
              src={promo.image}
              alt={promo.title}
            />
            <Carousel.Caption>
              <h3 className={classes.title}>{promo.title}</h3>
              <p className={classes.subtitle}>{promo.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default withStyles(styles)(Promotions);

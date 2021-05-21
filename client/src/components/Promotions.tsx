import React, { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { Carousel } from "react-bootstrap";
import withStyles, { WithStylesProps } from "react-jss";
import styles from "../styles/PromotionsStyles";

interface PromotionProps extends WithStylesProps<typeof styles> {}

const Promotions: FC<PromotionProps> = ({ classes }) => {
  const promos = useAppSelector((state) => state.promos.promos);

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

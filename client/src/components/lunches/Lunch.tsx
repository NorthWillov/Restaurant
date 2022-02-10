import React, { FC } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { ILunch } from "../../redux/reducers/lunchSlice"
import { openLunchModal } from "../../redux/reducers/lunchModalSlice"
import { formatter } from "../../utils/formatter"
import { Col, Button, Card } from "react-bootstrap"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/productCard"

interface ILunchProps extends WithStylesProps<typeof styles> {
  lunch: ILunch
}

const Lunch: FC<ILunchProps> = ({ classes, lunch }) => {
  const dispatch = useAppDispatch()

  const handleLunchPick = (lunch: ILunch) => {
    dispatch(openLunchModal(lunch))
  }

  return (
    <Col xs={6} md={4} lg={4} xl={3}>
      <Card className={`mb-3 ${classes.Card}`}>
        <Card.Img
          onClick={() => handleLunchPick(lunch)}
          variant="top"
          src={lunch.image}
          alt={lunch.name}
        />
        <Card.Body className={classes.CardBody}>
          <Card.Title className={classes.title}>{lunch.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <div className={classes.checkout}>
            <p className={classes.checkoutPrice}>
              {formatter.format(lunch.price)}zł
            </p>
            <Button
              variant="outline-secondary"
              onClick={() => handleLunchPick(lunch)}
              size="sm"
              className={`ml-1 ${classes.pickBtn}`}
            >
              Wybierz
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default withStyles(styles)(Lunch)

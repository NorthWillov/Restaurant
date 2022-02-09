import React from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { Lunch } from "../redux/reducers/lunchSlice"
import { openLunchModal } from "../redux/reducers/lunchModalSlice"
import { formatter } from "../utils/formatter"
import { Row, Col, Button, Card } from "react-bootstrap"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../styles/lunchesListStyles"

interface ILunchesListProps extends WithStylesProps<typeof styles> {}

const LunchesList: React.FC<ILunchesListProps> = ({ classes }) => {
  const lunches = useAppSelector((state) => state.lunches.lunches)
  const dispatch = useAppDispatch()

  const handleLunchPick = (lunch: Lunch) => {
    dispatch(openLunchModal(lunch))
  }

  return (
    <section id="zestawy">
      <h2 className="title pt-5 mb-4">Zestawy obiadowe:</h2>
      <Row>
        {lunches.map((lunch) => (
          <React.Fragment key={lunch._id}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  onClick={() => handleLunchPick(lunch)}
                  variant="top"
                  src={lunch.image}
                  alt={lunch.name}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title className={classes.title}>
                    {lunch.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
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
          </React.Fragment>
        ))}
      </Row>
    </section>
  )
}

export default withStyles(styles)(LunchesList)

import React, { FC, useEffect, useState } from "react"
import { useAppDispatch } from "../redux/hooks"
import axios from "axios"
import { formatter } from "../utils/formatter"
import { Row, Col, Button, Card } from "react-bootstrap"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../styles/lunchesListStyles"
import { addProductToCart, CartProduct } from "../redux/reducers/cartSlice"

interface Makaron {
  name: string
  type: string
  image: string
  price: number
}

interface IMakaronsList extends WithStylesProps<typeof styles> {}

const MakaronsList: FC<IMakaronsList> = ({ classes }) => {
  const [makarons, setMakarons] = useState([
    { name: "", type: "", image: "", price: 0 },
  ])

  const dispatch = useAppDispatch()

  const handleMakaronPick = (makaron: Makaron) => {
    const newMakaron: CartProduct = {
      name: makaron.name,
      image: makaron.image,
      price: makaron.price,
      productType: makaron.type,
      quantity: 1,
    }
    dispatch(addProductToCart(newMakaron))
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/fetchMakarons")
        setMakarons(res.data)
      } catch (err) {
        throw new Error(err)
      }
    }
    getData()
  }, [])

  return (
    <section id="makarony">
      <h3 className="pt-5 mb-4">Makarony:</h3>
      <Row>
        {makarons.map((makaron) => (
          <React.Fragment key={makaron.name}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src={makaron.image}
                  alt={makaron.name}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title className={classes.title}>
                    {makaron.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(makaron.price)}zł
                    </p>
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleMakaronPick(makaron)}
                      type="button"
                      size="sm"
                      className={`ml-2 ${classes.pickBtn}`}
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

export default withStyles(styles)(MakaronsList)

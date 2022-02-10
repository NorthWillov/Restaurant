import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/pages/adminPage"

interface IAdminProps extends WithStylesProps<typeof styles> {}

const Admin: FC<IAdminProps> = ({ classes }) => {
  console.log("Admin")
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("/api/getOrders")
        setOrders(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getOrders()
  }, [])

  return (
    <div>
      {orders.map((order, idx) => (
        <div key={idx} className={classes.order}>
          <p>IMIE I NAZWISKO: {order.nameandsurname}</p>
          <p>NUMER TELEFONU: {order.phonenumber}</p>
          <p>ULICA: {order.street}</p>
          <p>NUMER ULICY: {order.streetnumber}</p>
          <p>NUMER MIESZKANIA: {order.flat}</p>
          <p>PIETRO: {order.floor}</p>
          <p>MIASTO: {order.town}</p>
          <p>UWAGI: {order.note}</p>
          <p>SPOSÓB PŁATNOŚCI: {order.payment}</p>
          <p>
            PRZYJETE O GODZINIE:
            {new Date(order.createdAt).getHours()}:
            {new Date(order.createdAt).getMinutes()}
          </p>
          <div>
            {" "}
            ZAMÓWIENIE:
            {order.products.map(
              (product: { name: string; price: number; quantity: number }) => (
                <div className={classes.products}>
                  <p>PRODUCT: {product.name}</p>
                  <p>CENA: {product.price}</p>
                  <p>ILOŚĆ: {product.quantity}</p>
                </div>
              )
            )}
          </div>
          <p>DO ZAPŁATY: {order.totalamount} zł</p>
        </div>
      ))}
    </div>
  )
}

export default withStyles(styles)(Admin)

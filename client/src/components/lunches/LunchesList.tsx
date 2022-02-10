import React, { FC } from "react"
import { useAppSelector } from "../../redux/hooks"
import { Row } from "react-bootstrap"
import Lunch from "./Lunch"

const LunchesList: FC = () => {
  const lunches = useAppSelector((state) => state.lunches.lunches)

  return (
    <section id="zestawy">
      <h2 className="title pt-5 mb-4">Zestawy obiadowe:</h2>
      <Row>
        {lunches.map((lunch) => (
          <Lunch key={lunch._id} lunch={lunch} />
        ))}
      </Row>
    </section>
  )
}

export default LunchesList

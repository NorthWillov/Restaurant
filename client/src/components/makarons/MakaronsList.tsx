import React, { FC, useEffect, useState } from "react"
import axios from "axios"
import { Row } from "react-bootstrap"
import Makaron from "./Makaron"

export interface IMakaron {
  name: string
  type: string
  image: string
  price: number
}

const MakaronsList: FC = () => {
  const [makarons, setMakarons] = useState<IMakaron[]>([
    { name: "", type: "", image: "", price: 0 },
  ])

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
      <h2 className="pt-5 mb-4">Makarony:</h2>
      <Row>
        {makarons.map((makaron) => (
          <Makaron key={makaron.name} makaron={makaron} />
        ))}
      </Row>
    </section>
  )
}

export default MakaronsList

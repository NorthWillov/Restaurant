import React, { FC } from "react"
import { Container } from "react-bootstrap"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../styles/about"

interface IAboutProps extends WithStylesProps<typeof styles> {}

const About: FC<IAboutProps> = ({ classes }) => {
  return (
    <section className={`mb-4 mt-5 ${classes.root}`} id="about">
      <Container>
        <h1 className="pt-4">O nas:</h1>
        <p className="pb-4">
          <b>PIZZERIA & RESTAURANT RICCARDO</b> znajduje się na Oruni Górnej
          przy Placu Czerwona Torebka w Gdańsku. Riccardo tworzą osoby
          kreatywne, z wieloletnim doświadczeniem, jak również osoby młode,
          otwarte, pełne optymizmu i zaangażowania. Naszym celem było stworzenie
          miejsca nowego, o prawdziwie wyjątkowym klimacie, do którego chętnie
          się powraca, które niechętnie się opuszcza. Ciepłe wnętrze jak i
          stworzona przez nas atmosfera pozwalają na pełen relaks i chwilę
          zapomnienia.Każdy odnajdzie tu coś dla siebie, zarówno dorośli,
          młodzież, jak i rodzice z dziećmi. Proponujemy szeroki wybór kuchni
          polskiej i europejskiej. SERDECZNIE ZAPRASZAMY!
        </p>
      </Container>
    </section>
  )
}

export default withStyles(styles)(About)

import React, { FC } from "react"
import gif from "../../assets/pizza_spinner.gif"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/pages/loadingPage"

interface LoadingPageProps extends WithStylesProps<typeof styles> {}

const LoadingPage: FC<LoadingPageProps> = ({ classes }) => {
  return <img src={gif} alt="LOADING" className={classes.root} />
}

export default withStyles(styles)(LoadingPage)

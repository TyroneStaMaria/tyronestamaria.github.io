import React from "react"
import { Button as MuiButton } from "@material-ui/core";


const Button = ({children}) => {
  return(
    // <div>{children}</div>
    <MuiButton variant="contained" className="button">
      {children}
    </MuiButton>
  );
}

export default Button;
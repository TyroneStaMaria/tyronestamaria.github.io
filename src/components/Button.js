import { Button as MuiButton } from "@material-ui/core";
import React from "react";


const Button = ({children, link}) => {
  return(
    // <div>{children}</div>
    <MuiButton variant="contained" className="button" href={link} target="_blank">
      {children}
    </MuiButton>
  );
}

export default Button;
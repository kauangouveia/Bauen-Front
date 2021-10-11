import * as React from "react";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/core/Rating";
import Typography from "@material-ui/core/Typography";
import {Star} from "./styles";
export default function BasicRating() {
  // const [value] = React.useState(2);

  return (
    <Star>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend"></Typography>
        <Rating name="size-large" size="large" readOnly />
      </Box>
    </Star>
  );
}

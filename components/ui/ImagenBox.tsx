import { Box, Grid } from "@mui/material";

import { FC } from "react";
import { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

interface Props {
  imageUrl: string;
  positionImage: string;
}

export const ImageBox: FC<Props> = ({ imageUrl, positionImage }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        backgroundPosition:positionImage,
        opacity: 0.9,
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        },
      }}
    />
  );
};

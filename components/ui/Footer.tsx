import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export const FooterComponent = () => {
  return (
    <Box>
      <footer>
        <Divider sx={{ my: 2, backgroundColor: "white" }} />

        <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
          <Box>
            <IconButton>
              <InstagramIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </Box>

          <Box>
            <IconButton>
              <WhatsAppIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <EmailIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            All rights reserverd. Hybris
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            Development by: Jorge Ochipinti
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};

import {
  makeStyles,
  Box,
  Grid,
  IconButton,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LockIcon from "@mui/icons-material/Lock";
import { Layout } from "@/components";
const styles = {
  iconButton: {
    fontSize: "32px",

    color: "white",
  },
};

interface Props {
  width?: number;
  height?: number;
}

const FernandoLanese = () => {
  return (
    <Layout title='Hybris Agency'>
      <Box
        sx={{ color: "white", width: "100vw" }}
        display="flex"
        justifyContent="center"
      >
        <Box
          component="video"
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            zIndex: -1,
            opacity: 0.3, // establece la opacidad del video
            objectFit: "cover", // hace que el video sea responsive y ocupe todo el ancho y alto disponibles
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </Box>
        <Grid
          container
          sx={{
            m: 5,
            width: "100vw",
            border: "1px solid black",
            backgroundColor: "rgba(0, 0, 0, 0.90)",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            justifyContent="center"
            textAlign="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              sx={{
                backgroundImage: {
                  xs: "url('/background.jpg')",
                  sm: "url('/background.jpg')",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                backgroundSize: "cover",
                filter: "opacity(20)",
                backgroundPosition: "right",
                height: "90vh",
                width: "100%",
              }}
            >
              <Box sx={{ my: 6 }}>
                <Typography
                  variant="h3"
                  sx={{ textAlign: "center", textShadow: "6px 6px 8px black" }}
                >
                  Mauro Bellizi
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="start"
                alignItems="center"
                sx={{
                  mx: 4,
                  my: 3,
                  backgroundColor: "rgba(0, 0, 0, 0.90)",
                  borderRadius: "9px",
                }}
              >
                <IconButton
                  size="large"
                  color="secondary"
                  sx={{
                    fontSize: "1rem",
                    width: "100%",
                    border: "1px solid purple",
                    borderRadius: "9px",
                    py: 2,
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 32, mx: 2, color: "white" }} />
                  <Typography variant="button">Instagram</Typography>
                </IconButton>
              </Box>
              <Box
                display="flex"
                justifyContent="start"
                alignItems="center"
                sx={{
                  mx: 4,
                  my: 3,
                  backgroundColor: "rgba(0, 0, 0, 0.90)",
                  borderRadius: "9px",
                }}
              >
                <IconButton
                  size="large"
                  color="secondary"
                  sx={{
                    fontSize: "1rem",
                    width: "100%",
                    border: "1px solid purple",
                    borderRadius: "9px",
                    py: 2,
                  }}
                >
                  <TwitterIcon sx={{ fontSize: 32, mx: 2, color: "white" }} />
                  <Typography variant="button">Twitter</Typography>
                </IconButton>
              </Box>
              <Box
                display="flex"
                justifyContent="start"
                alignItems="center"
                sx={{
                  mx: 4,
                  my: 3,
                  backgroundColor: "rgba(0, 0, 0, 0.90)",
                  borderRadius: "9px",
                }}
              >
                <IconButton
                  size="large"
                  color="secondary"
                  sx={{
                    fontSize: "1rem",
                    width: "100%",
                    border: "1px solid purple",
                    borderRadius: "9px",
                    py: 2,
                  }}
                >
                  <MusicNoteIcon
                    sx={{
                      fontSize: 33,
                      borderRadius: "9px",
                      mx: 2,
                      color: "white",
                      border: "1px solid white",
                    }}
                  />
                  <Typography variant="button">TikTok</Typography>
                </IconButton>
              </Box>
              <Box
                display="flex"
                justifyContent="start"
                alignItems="center"
                sx={{
                  mx: 4,
                  my: 3,
                  backgroundColor: "rgba(0, 0, 0, 0.90)",
                  borderRadius: "9px",
                }}
              >
                <IconButton
                  size="large"
                  color="secondary"
                  sx={{
                    fontSize: "1rem",
                    width: "100%",
                    border: "1px solid purple",
                    borderRadius: "9px",
                    py: 2,
                  }}
                >
                  <YouTubeIcon sx={{ fontSize: 32, mx: 2, color: "white" }} />
                  <Typography variant="button">Youtube</Typography>
                </IconButton>
              </Box>
              <Box
                display="flex"
                justifyContent="start"
                alignItems="center"
                sx={{
                  mx: 4,
                  my: 3,
                  backgroundColor: "rgba(0, 0, 0, 0.90)",
                  borderRadius: "9px",
                }}
              >
                <IconButton
                  size="large"
                  color="secondary"
                  sx={{
                    fontSize: "1rem",
                    width: "100%",
                    border: "1px solid purple",
                    borderRadius: "9px",
                    py: 2,
                  }}
                >
                  <LockIcon sx={{ fontSize: 32, mx: 2, color: "white" }} />
                  <Typography variant="button">OnlyFans</Typography>
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "right",
                height: "100vh",
                width: "100%",
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
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default FernandoLanese;

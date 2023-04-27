import {
  makeStyles,
  Box,
  Grid,
  IconButton,
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LockIcon from "@mui/icons-material/Lock";
import { Layout } from "@/components";
import { ButtonComponent } from "@/components/ui/ButtonComponent";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";


const FernandoLanese = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCharge, setIsCharge] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {


    setTimeout(() => {
      setIsCharge(true)
    }, 2000);
  }, [])

  useEffect(() => {
    const videos = document.getElementsByTagName('video');
    const promises = [];
    for (let i = 0; i < videos.length; i++) {
      const promise = new Promise((resolve) => {
        videos[i].onloadedmetadata = resolve;
      });
      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <></>;
  }




  return (
    <Layout title='Hybris Agency' isCharge={isCharge}>
      <BackgroundVideo />
      {isCharge
        && (
          <>


            <Box sx={{ mt: 5 }} data-aos="fade-down">
              <Typography variant='body1' sx={{ fontFamily: 'Montserrat', textAlign: 'center', fontSize: '40px', fontWeigth: '700' }}>Mauro Bellizzi</Typography>
            </Box>
            <Box sx={{ mb: 5 }} data-aos="fade-down">
              <Typography variant='body1' sx={{ fontFamily: 'Montserrat', textAlign: 'center', fontSize: '20px', fontWeigth: '700' }}>By Hybris</Typography>
            </Box>
            <Box
              sx={{ color: "white", width: "100vw" }}
              display="flex"
              justifyContent="center"
              data-aos="fade-down"
            >


              <Grid
                container
                sx={{

                  width: "100vw",
                  borderRadius: '9px',
                  backgroundColor: "rgba(0, 0, 0,0.40)",
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
                  sx={{ width:'100vw'}}
                >

                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="start"
                    alignItems='start'
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
                      height: "540px",
                      width: "100vw",px:2
                    }}
                  >
                    <div data-aos="fade-right">
                      <ButtonComponent name='Instagram' url='' icon={<InstagramIcon sx={{ fontSize: 32, mx: 2, color: "#962fbf", backgroundColor: 'white', borderRadius: '9px' }} />} />
                    </div>
                    <div data-aos="fade-left">
                      <ButtonComponent name='Twitter' url='' icon={<TwitterIcon sx={{ fontSize: 32, mx: 2, color: "#00acee", backgroundColor: 'white', borderRadius: '9px' }} />} />
                    </div>

                    <div data-aos="fade-right">
                      <ButtonComponent name='TikTok' url='' icon={<MusicNoteIcon sx={{ fontSize: 33, borderRadius: "9px", mx: 2, backgroundColor: 'black', color: "white", border: "3px solid black", }} />} />
                    </div>
                    <div data-aos="fade-left">
                      <ButtonComponent name='YouTube' url='' icon={<YouTubeIcon sx={{ fontSize: 32, backgroundColor: 'white', borderRadius: '9px', mx: 2, color: "red" }} />} />

                    </div>
                    <div data-aos="fade-right">

                      <ButtonComponent name='OnlyFans' url='' icon={<LockIcon sx={{ fontSize: 32, mx: 2, color: "#00acee", backgroundColor: 'white', borderRadius: '9px' }} />} />
                    </div>
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
          </>
        )}
    </Layout>
  );
};

export default FernandoLanese;

import {
  Button,

  Grid,

  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Layout } from "@/components";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCharge, setIsCharge] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [frase, setFrase] = useState("");
  const ref = useRef()
  const frases = ["El éxito no es una cuestión de suerte, sino de perseverancia en alcanzar lo que parece imposible", "Lo que parece imposible sólo es un reto más para aquellos que no temen al fracaso", "La única manera de hacer posible lo imposible es creer en uno mismo y trabajar duro para lograrlo", "Lo que parece imposible a primera vista, puede ser posible con esfuerzo y dedicación"]
  const generarFraseAleatoria = () => {
    const indice = Math.floor(Math.random() * 3);
    setFrase(frases[indice]);
  };

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    generarFraseAleatoria()

    setTimeout(() => {
      setIsCharge(true)
    }, 2000);
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);


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
    <>

      <Layout title="HYBRIS AGENCY" isCharge={isCharge}>
        <Box
          component="video"
          ref={videoRef}
          loop
          muted
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 0.5, // establece la opacidad del video
            objectFit: "cover", // hace que el video sea responsive y ocupe todo el ancho y alto disponibles
          }}
        >
          <source src={`https://res.cloudinary.com/djk4q3tys/video/upload/v1682572216/w08qbehub51afu2yjdsu.mp4`} type="video/mp4" />
        </Box>
        {isCharge && (
          <>
            <Box
              sx={{ width: "100vw", minHeight: "100vh", zIndex: 100 }}
              display="flex"
              justifyContent="center"
            >
              <Box display="flex" flexDirection="column" sx={{ mt: 7 }}>
                <div data-aos="fade-down">
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h2" sx={{ letterSpacing: ".2em", fontFamily: 'Montserrat' }}>
                      HYBRIS
                    </Typography>
                  </Box>
                </div>


                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  sx={{ mx: 3, height: "100%" }}
                >
                  <Box>
                    <div data-aos="fade-right">


                      <Typography
                        variant="subtitle1"
                        sx={{
                          letterSpacing: ".2em",
                          fontStyle: "italic",
                          textAlign: "center",
                          textShadow: '1px 1px 1px 1px black',mt:4
                        }}
                      >
                        {frase}
                      </Typography>
                    </div>
                  </Box>
                  <Box display="flex" justifyContent="center" sx={{ mt: 4, mb: 2 }}>
                    <div data-aos="fade-left">
                      <Button
                        variant="contained"
                        color="secondary"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ fontSize: '16px', fontFamily: 'Montserrat',my:5 }}
                      >
                        Trabaja con nosotros
                      </Button>
                    </div>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',my:5}}>
                    <div data-aos="fade-up">


                      <Typography variant="subtitle1" sx={{ textAlign: 'center', fontSize: '20px', fontFamily: 'Montserrat', lineHeight: '30px' }}>
                        Hybris brinda la <br style={{ display: isMobile ? 'block' : 'none' }} /> oportunidad para <br style={{ display: isMobile ? 'block' : 'none' }} /> poder alcanzar las metas<br/> que te propongas
                      </Typography>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box
                  display="flex"
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.58)", height: "100%" }}
                >
                  <Box
                    sx={{ mx: 3 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="space-around"
                  >
                    <Box sx={{ mx: 3 }}>

                    </Box>

                    <Box>
                      <Box sx={{ mt: { xs: 5, sm: 5 } }}>
                        <div data-aos="fade-down">

                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "center", fontWeight: "bold", fontSize: { xs: '25px', sm: '25px', md: '40px', lg: '40px', xl: '40px' }, textShadow: '1px 1px 1px 1px black', fontFamily: 'Montserrat', lineHeight: '45px' }}
                          >
                            Nos encontramos en <br />la búsqueda constante <br />de nuevos talentos
                          </Typography>
                        </div>
                      </Box>
                      <Box sx={{ my: { xs: 5, sm: 5 } }}>
                        <div data-aos="fade-down">


                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "center", fontWeight: "bold", fontFamily: 'Montserrat', fontSize: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' }, textShadow: '1px 1px 1px 1px black' }}
                          >
                            Si queres formar parte de Hybris completá el formulario y nos contactaremos a la brevedad                    </Typography>
                        </div>
                      </Box>
                      <div data-aos="fade-up">

                        <Box display="flex" flexDirection="column" ref={ref}>

                          <TextField
                            variant="filled"
                            label="Nombre *"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />

                          <TextField
                            variant="filled"
                            label="Email *"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />
                          <TextField
                            variant="filled"
                            label="Edad"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px",
                              my: 1,
                            }}
                          />
                          <TextField
                            variant="filled"
                            label="Nacionalidad"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />
                          <TextField
                            variant="filled"
                            label="Celular"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />
                          <TextField
                            variant="filled"
                            label="Cantidad de horas disponibles que te gustaría dedicar"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />
                          <TextField
                            variant="filled"
                            label="Nombre de usuario que te gusaría"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />
                          <TextField
                            variant="filled"
                            label="¿Contas con elementos para realizar contenido?"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />
                          <TextField
                            variant="filled"
                            label="¿Manejas algún idioma adicional?"
                            color="secondary"
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />
                          <TextField
                            variant="filled"
                            label="Contanos algo más sobre vos"
                            color="secondary"
                            rows={4}
                            multiline
                            sx={{
                              color: "white",
                              backgroundColor: "white",
                              borderRadius: "9px 9px 0px 0px",
                              my: 1,
                            }}
                          />
                        </Box>

                      </div>

                      <Box
                        display="flex"
                        justifyContent="center"
                        sx={{ mt: 4, mb: 2 }}
                      >
                        <div data-aos="fade-up">
                          <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<ArrowForwardIcon />}
                          >
                            ENVIAR
                          </Button>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box display='flex' justifyContent='center' alignItems='start'>
                  <video
                    width="100%"
                    height="100%"
                    ref={videoRef}
                    loop
                    muted
                    controls={false}
                  >
                    <source src="/produccion.mp4" type="video/mp4" />
                  </video>
                </Box>
              </Grid>
            </Grid>
          </>)}
      </Layout>
    </>
  );
}

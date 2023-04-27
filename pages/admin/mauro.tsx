import {
  makeStyles,
  Box,
  Grid,
  IconButton,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { ChromePicker, SketchPicker } from "react-color";
import LockIcon from "@mui/icons-material/Lock";
import { ChangeEvent, useRef, useState } from "react";
import { ImageBox, Layout } from "@/components";
import axios from "axios";
import { UploadOutlined } from "@mui/icons-material";



interface IModel{
  _id?:string
  name:string
  tiktokUrl:string
  instagramUrl:string
  onlyFansUrl:string
  twitterUrl:string
  youtubeUrl:string
  imageUrl:string
  colorBotones:string
  colorDeFondo:string
  colorDeNombre:string
  colorDeFuente:string
  posicionDeImagen:string

}



const PerfilPago = () => {
  const [colorDeFondo, setColorDeFondo] = useState({
    r: 255,
    g: 0,
    b: 0,
    a: 1,
  });
  const [colorDeBotones, setColorDeBotones] = useState({
    r: 255,
    g: 0,
    b: 0,
    a: 1,
  });

  const [colorNombre, setColorNombre] = useState("#000000");
  const [colorFuente, setColorFuente] = useState("#000000");
  const [imageUrl_, setImageUrl] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showColorPickerBotones, setShowColorPickerNBotones] = useState(false);
  const [showColorPickerFuente, setShowColorPickerNFuente] = useState(false);
  const [showColorPickerNombre, setShowColorPickerNombre] = useState(false);
  const [tiktokLink, setTiktokLink] = useState("");
  const [youtubeLink, setYoutubekLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [onlyFanseLink, setOnlyFansLink] = useState("");
  const [onlyTwitterink, setTwitterLink] = useState("");
  const [positionImage, setPositionImage] = useState("center");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangeColorDeFondo = (color: any) => {
    setColorDeFondo(color.rgb);
  };
  const handleChangeColorDeBotones = (color: any) => {
    setColorDeBotones(color.rgb);
  };

  const handleChangeColorFuente = (color: any) => {
    setColorFuente(color.hex);
  };
  const handleChangeColorNombre = (color: any) => {
    setColorNombre(color.hex);
  };

  const onFilesSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    }

    try {
      // console.log( file );
      for (const file of target.files) {
        const formData = new FormData();
        formData.append("file", file);
        const { data } = await axios.post<{ message: string }>(
          "/api/upload",
          formData
        );
        console.log(data.message);
        setImageUrl(data.message);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Layout title="Hybris Agency">
      <>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: "white", p: 4 }}
        >
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
              <Button
                color="secondary"
                fullWidth
                startIcon={<UploadOutlined />}
                sx={{ mb: 3 }}
                onClick={() => fileInputRef.current?.click()}
              >
                Cargar imagen
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/png, image/gif, image/jpeg"
                style={{ display: "none" }}
                onChange={onFilesSelected}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ m: 2 }}
              flexWrap="wrap"
            >
              <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
                <TextField
                  variant="outlined"
                  label="Instagran"
                  color="secondary"
                />
              </Box>
              <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
                <TextField
                  variant="outlined"
                  label="Twitter"
                  color="secondary"
                />
              </Box>
              <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
                <TextField
                  variant="outlined"
                  label="Youtube"
                  color="secondary"
                />
              </Box>
              <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
                <TextField
                  variant="outlined"
                  label="TikTok"
                  color="secondary"
                />
              </Box>
              <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
                <TextField
                  variant="outlined"
                  label="Onlyfans"
                  color="secondary"
                />
              </Box>
            </Box>

            <Box display="flex" justifyContent="space-around" flexWrap="wrap">
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "black", textAlign: "center" }}
                >
                  Color de fondo
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
                  <SketchPicker
                    color={colorDeFondo}
                    onChange={handleChangeColorDeFondo}
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "black", textAlign: "center" }}
                >
                  Color de Botones
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
                  <SketchPicker
                    color={colorDeBotones}
                    onChange={handleChangeColorDeBotones}
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "black", textAlign: "center" }}
                >
                  Color de Nombre
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
                  <SketchPicker
                    color={colorNombre}
                    onChange={handleChangeColorNombre}
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "black", textAlign: "center" }}
                >
                  Color de Fuente
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
                  <SketchPicker
                    color={colorFuente}
                    onChange={handleChangeColorFuente}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1">Posición de la imagen</Typography>
              <Box display="flex" justifyContent="center" sx={{ p: 3 }}>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={positionImage}
                  sx={{ color: "black" }}
                  onChange={(e) => setPositionImage(e.target.value)}
                >
                  <FormControlLabel
                    sx={{ color: "black" }}
                    value="center"
                    control={<Radio sx={{ p: 2 }} />}
                    label="Centro"
                  />
                  <FormControlLabel
                    sx={{ color: "black" }}
                    value="right"
                    control={<Radio sx={{ p: 2 }} />}
                    label="Derecha"
                  />
                  <FormControlLabel
                    sx={{ color: "black" }}
                    value="left"
                    control={<Radio sx={{ p: 2 }} />}
                    label="Izquierda"
                  />
                </RadioGroup>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", color: "black", my: 4 }}>
              <Typography variant="h5">VISTA PREVIA:</Typography>
            </Box>
          </Box>
        </Box>
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
              backgroundColor: `rgba(${colorDeFondo.r}, ${colorDeFondo.g}, ${colorDeFondo.b}, ${colorDeFondo.a})`,
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
                    sx={{
                      textAlign: "center",
                      textShadow: "6px 6px 8px black",
                      color: colorNombre,
                    }}
                  >
                    Mauro Bellizzi
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  sx={{
                    mx: 4,
                    my: 3,

                    backgroundColor: `rgba(${colorDeBotones.r}, ${colorDeBotones.g}, ${colorDeBotones.b}, ${colorDeBotones.a})`,
                    borderRadius: "9px",
                  }}
                >
                  <IconButton
                    size="large"
                    color="secondary"
                    sx={{
                      fontSize: "1rem",
                      width: "100%",
                      borderRadius: "9px",
                      p: 2,
                      color: colorFuente,
                    }}
                  >
                    <InstagramIcon
                      sx={{ fontSize: 32, mx: 2, color: colorNombre }}
                    />
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
                    backgroundColor: `rgba(${colorDeBotones.r}, ${colorDeBotones.g}, ${colorDeBotones.b}, ${colorDeBotones.a})`,
                    borderRadius: "9px",
                  }}
                >
                  <IconButton
                    size="large"
                    color="secondary"
                    sx={{
                      fontSize: "1rem",
                      width: "100%",
                      borderRadius: "9px",
                      py: 2,
                      color: colorFuente,
                    }}
                  >
                    <TwitterIcon
                      sx={{ fontSize: 32, mx: 2, color: colorNombre }}
                    />
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
                    backgroundColor: `rgba(${colorDeBotones.r}, ${colorDeBotones.g}, ${colorDeBotones.b}, ${colorDeBotones.a})`,
                    borderRadius: "9px",
                  }}
                >
                  <IconButton
                    size="large"
                    color="secondary"
                    sx={{
                      fontSize: "1rem",
                      width: "100%",
                      borderRadius: "9px",
                      py: 2,
                      color: colorFuente,
                    }}
                  >
                    <MusicNoteIcon
                      sx={{
                        fontSize: 33,
                        borderRadius: "9px",
                        mx: 2,
                        color: colorNombre,
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
                    backgroundColor: `rgba(${colorDeBotones.r}, ${colorDeBotones.g}, ${colorDeBotones.b}, ${colorDeBotones.a})`,
                    borderRadius: "9px",
                  }}
                >
                  <IconButton
                    size="large"
                    color="secondary"
                    sx={{
                      fontSize: "1rem",
                      width: "100%",
                      borderRadius: "9px",
                      py: 2,
                      color: colorFuente,
                    }}
                  >
                    <YouTubeIcon
                      sx={{ fontSize: 32, mx: 2, color: colorNombre }}
                    />
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
                    backgroundColor: `rgba(${colorDeBotones.r}, ${colorDeBotones.g}, ${colorDeBotones.b}, ${colorDeBotones.a})`,
                    borderRadius: "9px",
                  }}
                >
                  <IconButton
                    size="large"
                    color="secondary"
                    sx={{
                      fontSize: "1rem",
                      width: "100%",
                      borderRadius: "9px",
                      py: 2,
                      color: colorFuente,
                    }}
                  >
                    <LockIcon
                      sx={{ fontSize: 32, mx: 2, color: colorNombre }}
                    />
                    <Typography variant="button">OnlyFans</Typography>
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
              <ImageBox imageUrl={imageUrl_} positionImage={positionImage} />
            </Grid>
          </Grid>
        </Box>
      </>
    </Layout>
  );
};

export default PerfilPago;

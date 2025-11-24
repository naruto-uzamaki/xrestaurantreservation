import mobile from "../../../assets/dining-app.png";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

//download app component to render input details using SmsForm component
export default function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Stack direction={"row"} spacing={6} alignItems="center">
          <Box
            src={mobile}
            component="img"
            height="80vh"
            sx={{ width: { xs: "100%", md: "45%" } }}
          />

          <Box
            position="relative"
            pl={{ xs: "36px", md: "50px" }}
            mb={{ xs: 4, md: 0 }}
            sx={{ width: { xs: "100%", md: "55%" } }}
          >
            <Typography variant="h2" mb={2}>
              Download the
              <br />
              <Box component="span" color="primary.main">
                Restaurant Booking{" "}
              </Box>
              App
            </Typography>

            <Box
              src={arrow}
              component="img"
              width={{ xs: 24, md: 40 }}
              position="absolute"
              left={0}
              top={50}
            />

            <SmsForm />

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 2 }}
            >
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size={"large"}
                startIcon={<img src={playstore} height={24} />}
                variant="contained"
                disableElevation
              >
                Google Play
              </Button>
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={apple} height={24} />}
                variant="contained"
                disableElevation
              >
                App Store
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

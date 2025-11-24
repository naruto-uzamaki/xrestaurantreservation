import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import banner from "../../../assets/restaurant-team.png"; //to be changed

export default function TableBooking() {
  return (
    <Box
      pt={3}
      sx={{
        background: "linear-gradient(#E7F0FF, #E8F1FF)",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} direction="row">
          <Stack
            direction="column"
            width={{ xs: "100%", md: "50%" }}
            spacing={3}
            justifyContent="center"
            padding={4}
          >
            <Typography fontWeight={600} color="primary.main">
              RESERVE YOUR DINING EXPERIENCE
            </Typography>
            <Typography variant="h2">Table Booking</Typography>
            <Typography color="#77829D" lineHeight={1.8}>
              Discover the perfect dining experience at our restaurant. From
              intimate dinners to special celebrations, we offer seamless
              reservations that ensure your dining experience is exactly as you
              envision. Our attentive staff is ready to accommodate your
              preferences and dietary requirements.
            </Typography>
          </Stack>

          <Box
            component="img"
            src={banner}
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "auto",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import banner from "../../../assets/restaurant-logo.png";
import tick from "../../../assets/tick-blue.png";

export default function Dining() {
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={6}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner}
              sx={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} color="primary.main">
              EXPERIENCE FINE DINING AT ITS BEST
            </Typography>
            <Typography variant="h2" mb={1}>
              Table{" "}
              <Box component="span" color="primary.main">
                Reservation
              </Box>
            </Typography>
            <Typography color="#77829D" lineHeight={1.8}>
              We make dining memorable with our seamless reservation system.
              Book your perfect table and enjoy an exceptional culinary
              experience with impeccable service.
            </Typography>

            <List sx={{ fontSize: { xs: 12, md: 18 } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Easy Online Booking"
                  sx={{
                    fontSize: { xs: 14, md: 18 },
                    fontWeight: 500,
                    color: "#1B3C74",
                  }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Special Occasion Planning"
                  sx={{
                    fontSize: { xs: 14, md: 18 },
                    fontWeight: 500,
                    color: "#1B3C74",
                  }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Instant Confirmation"
                  sx={{
                    fontSize: { xs: 14, md: 18 },
                    fontWeight: 500,
                    color: "#1B3C74",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

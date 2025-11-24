import { Box, Container, Stack } from "@mui/material";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";
import SearchRestaurant from "../components/SearchRestaurant/SearchRestaurant";
import ServiceLayout from "../components/ServiceLayout/ServiceLayout";
import Offers from "../components/Sections/Offers/Offers";
import Dining from "../components/Sections/Dining/Dining";
import Blogs from "../components/Sections/Blogs/Blogs";
import TableBooking from "../components/Sections/TableBooking/TableBooking";
import FAQs from "../components/Sections/FAQs/FAQs";

function Home() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />

        <Container maxWidth="xl">
          <HeroSection />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchRestaurant />
            <ServiceLayout />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Dining />

      <Blogs />

      <TableBooking />

      <FAQs />
    </>
  );
}

export default Home;

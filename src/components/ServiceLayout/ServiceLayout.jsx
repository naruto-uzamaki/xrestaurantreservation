import { Box, Grid, Typography } from "@mui/material";
import restaurantIcon from "../../assets/menu-icon.png";
import locationIcon from "../../assets/location-icon.png";
import reservationIcon from "../../assets/reservation-icon.png";
import specialIcon from "../../assets/special-icon.png";
import serviceIcon from "../../assets/service-icon.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useMemo } from "react";

export default function ServiceLayout() {
  const Services = useMemo(
    () => [
      { img: restaurantIcon, title: "Restaurants" },
      { img: locationIcon, title: "Locations" },
      { img: reservationIcon, title: "Reservations", active: true },
      { img: specialIcon, title: "Special Menus" },
      { img: serviceIcon, title: "Services" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 2, md: 6 }}
        justifyContent={"center"}
      >
        {Services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <ServiceCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

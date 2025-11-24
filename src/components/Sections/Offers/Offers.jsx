import { Box, Container } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import offer1 from "../../../assets/restoffer1.png";
import offer2 from "../../../assets/restoffer2.png";

export default function Offers() {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Box
              component={"img"}
              src={offer1}
              sx={{
                width: "100%", // fit inside slide width
                height: "auto", // keep aspect ratio
                objectFit: "cover", // crop nicely if needed
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer2}
              sx={{
                width: "100%", // fit inside slide width
                height: "auto", // keep aspect ratio
                objectFit: "cover", // crop nicely if needed
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer1}
              sx={{
                width: "100%", // fit inside slide width
                height: "auto", // keep aspect ratio
                objectFit: "cover", // crop nicely if needed
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer2}
              sx={{
                width: "100%", // fit inside slide width
                height: "auto", // keep aspect ratio
                objectFit: "cover", // crop nicely if needed
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer1}
              sx={{
                width: "100%", // fit inside slide width
                height: "auto", // keep aspect ratio
                objectFit: "cover", // crop nicely if needed
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer2}
              sx={{
                width: "100%", // fit inside slide width
                height: "auto", // keep aspect ratio
                objectFit: "cover", // crop nicely if needed
              }}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}

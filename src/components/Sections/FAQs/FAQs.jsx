import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import faqBanner from "../../../assets/diningfaq.jpeg";
import CustomizedAccordions from "../../Accordion/Accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "How does the reservation system work?",
      answer:
        "Our reservation system allows you to easily book tables online, select your preferred dining time, and specify any special requirements.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel or modify your reservation up to 2 hours before your booking time without any charges.",
    },
    {
      question: "Do you accommodate special dietary requirements?",
      answer:
        "Yes, we cater to various dietary needs. Please mention your requirements while making the reservation.",
    },
    {
      question: "Can I make group reservations?",
      answer:
        "Absolutely! We welcome group bookings and can accommodate special arrangements for larger parties.",
    },
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>
        <Stack spacing={5} direction={"row"}>
          <Box
            src={faqBanner}
            component="img"
            height="auto"
            width={{ xs: "100%", md: "50%" }}
          />

          <Box width={{ xs: "100%", md: "50%" }} maxWidth={450}>
            <CustomizedAccordions data={faqs} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

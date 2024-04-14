import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to My Restaurant, a culinary haven nestled in the heart of India. Our restaurant promises an unforgettable dining experience, marrying exquisite flavors with a charming ambiance to delight the senses of every guest who walks through our doors.

Step into a world where culinary artistry meets comfort, where every dish tells a story, crafted with passion and the finest ingredients. Our menu is a celebration of Dosa , Chola , Idli,Dosa , Paneer,Thali, expertly curated to tantalize even the most discerning palate.

Savor the essence of our carefully crafted dishes, each bearing the stamp of our chefs' creativity and dedication to culinary excellence. From the savory aromas that waft from our kitchens to the visually stunning presentation on your plate, every bite at My-Restaurant is a symphony of flavors, textures, and colors.

But it's not just the food that defines us; it's the ambiance we offer. Our restaurant boasts an inviting atmosphere, blending modern elegance with a warm, welcoming vibe. Whether you're dining with friends, family, or that special someone, our attentive staff ensures a seamless experience, making every visit a cherished memory.
        </p>
        <br />
        <p>
        At My Restaurant , we take pride in more than just exceptional cuisine and ambiance. Our commitment to sustainability reflects in our sourcing practices, supporting local farmers and producers to serve you the freshest, most ethically sourced ingredients possible.

From intimate gatherings to celebratory events, our versatile space caters to a variety of occasions. Whether it's a romantic dinner for two, a lively family feast, or a corporate event, we tailor our services to meet your needs, ensuring a personalized and unforgettable dining affair.

Come join us at My Restaurant and embark on a culinary journey that transcends the ordinary. Experience the perfect blend of flavors, hospitality, and ambiance that defines us as more than just a restaurant but a destination where moments turn into cherished memories.


        </p>
      </Box>
    </Layout>
  );
};

export default About;

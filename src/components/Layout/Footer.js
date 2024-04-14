import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/am-1145", "_blank"); 
  };
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
            "& a": {
            color: "white", 
            textDecoration: "none", 
          },
          "& a:hover": {
            color: "white", 
          },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
            <a href="https://github.com/am-1145" target="_blank"  onClick={handleGitHubClick} >
          <GitHubIcon className="icon github-icon"/>
        </a>
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
            
          }}
        >
          All Rights Reserved &copy; Ankit Maurya
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

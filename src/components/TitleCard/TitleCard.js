import { Avatar, Box, Typography, Divider } from "@mui/material";
import image from "./tyler.jpg";

const padding = 3;

const TitleCard = () => {

    return (
<>
        <Box align="center" sx={{ p: padding }}>
        <Avatar
          alt="Tyler Gandee"
          src={image}
          sx={{ width: 256, height: 256 }}>
        </Avatar>
      </Box>

      <Typography variant="h1" padding={padding}>
        Tyler John Gandee
      </Typography>

      <Divider />
      </>
    );
};

export default TitleCard;
import React from "react";

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import styled from "@emotion/styled";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CardHover = styled(Card)({
  border: "1px solid #F7F7F7",
  "&:hover": {
    backgroundColor: "#F7F7F7",
  },
});

const Post = () => {
  return (
    <CardHover sx={{ minWidth: 345, padding: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/17260662/pexels-photo-17260662/free-photo-of-den-va-tr-ng-dan-ong-t-th-ch-p-nh-toc-ng-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
        sx={{ borderRadius: "2px" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          {...label}
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
        />

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </CardHover>
  );
};

export default Post;

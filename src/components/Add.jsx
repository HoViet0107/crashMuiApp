import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";

const style = {
  width: 350,
  height: "fit-content",

  bgcolor: "background.paper",
  border: "1px solid #F7F7F7",
  borderRadius: "10px",
  // boxShadow: 24,
  p: { sm: 4, xs: 2 },
};

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  flexDirection: "column",
});

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="New post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { md: 300 },
          right: { xs: 20 },
        }}
        onClick={(e) => handleOpen()}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      {/* input new post */}
      <StyleModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* input post form */}
        <Box sx={style}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>

          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={2}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button sx={{ width: "50px" }}>
                <DateRange />
              </Button>
              <Button>Post</Button>
            </ButtonGroup>
          </UserBox>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;

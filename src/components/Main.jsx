import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Add, Delete, Folder, Edit } from "@mui/icons-material";
import Modal from "./common/Modal";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Main = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        width: "100%",
        height: "800px",
        marginTop: "68px",
        paddingBlock: "40px",
        paddingInline: "100px",
        bgcolor: "whitesmoke",
      }}
    >
      <Paper elevation={3} sx={{ minHeight: "100%", padding: "20px" }}>
        <Tooltip title="Add">
          <Button variant="contained" onClick={openModal}>
            <Add />
          </Button>
        </Tooltip>
        <Box>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Avatar with text and icon
            </Typography>
            <Box>
              <List dense={dense}>
                {generate(
                  <ListItem
                    sx={{
                      marginBottom: 2,
                      boxShadow: "2px 2px 5px rgb(0,0,0,0.3)",
                      borderRadius: 8,
                    }}
                    secondaryAction={
                      <Box display={"flex"} gap={2} marginRight={2}>
                        <Tooltip title="Edit">
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            color="primary"
                          >
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            color="warning"
                          >
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <Folder />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                )}
              </List>
            </Box>
          </Grid>
        </Box>
      </Paper>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>This is modal</h1>
      </Modal>
    </Container>
  );
};

export default Main;

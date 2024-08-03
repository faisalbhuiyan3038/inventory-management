"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { firestore } from "@/firebase";
import {
  Box,
  Modal,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import {
  query,
  collection,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [searchText, setSearchText] = useState("");

  const updateInventory = async () => {
    //fetch the snapshot
    const snapshot = query(collection(firestore, "inventory"));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      });
    });
    setInventory(inventoryList);
    console.log(inventoryList);
  };

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }
    await updateInventory();
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }

    await updateInventory();
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    updateInventory();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var filteredItemName;
  const filteredInventory = inventory.filter((item) => {
    const filteredItemName = item.name;
    return filteredItemName.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <Box>
      <Typography
        mt={2}
        display="flex"
        justifyContent="center"
        sx={{ typography: { lg: "h2", sm: "h3" } }}
      >
        Inventory Tracker
      </Typography>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        mt={4}
        flexDirection="column"
        alignItems="center"
        gap="2"
      >
        <Modal open={open} onClose={handleClose}>
          <Box
            position="absolute"
            top="50%"
            left="50%"
            width={400}
            bgcolor="white"
            border="2px solid #000"
            boxShadow={24}
            p={4}
            display="flex"
            flexDirection="column"
            gap={3}
            sx={{
              transform: "translate(-50%,-50%)",
            }}
          >
            <Typography variant="h6">Add Item</Typography>
            <Stack width="100%" direction="row" spacing={2}>
              <TextField
                variant="outlined"
                fullWidth
                value={itemName}
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              ></TextField>
              <Button
                variant="outlined"
                onClick={() => {
                  addItem(itemName);
                  setItemName("");
                  handleClose;
                }}
              >
                ADD
              </Button>
            </Stack>
          </Box>
        </Modal>

        <Box borderRadius="40px" border="1px solid #333">
          <Box
            sx={{
              width: {
                lg: "70vw",
                sm: "80vw",
              },
            }}
            height="100px"
            bgcolor="#9CA986"
            borderRadius="40px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: {
                  lg: "800px",
                  sm: "200px",
                },
              }}
              marginRight="10px"
            >
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                size="small"
                fullWidth
                onChange={handleSearchChange}
              />
            </Box>

            <Button
              variant="contained"
              onClick={() => {
                handleOpen();
              }}
            >
              Add New Item
            </Button>
          </Box>

          <Stack
            width="70vw"
            height="auto"
            maxHeight="60vh"
            spacing={2}
            overflow="auto"
          >
            {filteredInventory.map(({ name, quantity }) => (
              <Box
                key={name}
                width="100%"
                minHeight="150px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding={5}
              >
                <Box>
                  <Typography
                    sx={{
                      typography: {
                        lg: "h3",
                        sm: "h5",
                      },
                    }}
                    color="#333"
                    textAlign="left"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Typography>
                  <Typography
                    sx={{
                      typography: {
                        lg: "h3",
                        sm: "h5",
                      },
                    }}
                    color="#333"
                    textAlign="center"
                  >
                    {quantity}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        addItem(name);
                      }}
                    >
                      Add
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => {
                        removeItem(name);
                      }}
                    >
                      Remove
                    </Button>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

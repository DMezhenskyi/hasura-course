import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

export interface Photo {
  photoUrl: string;
  description: string;
}

interface Props extends DialogProps {
  photoUrl: string;
  onSave: (photo: Photo) => void;
  onCancel: () => void;
}

export const UploadPhotoDialog = ({
  photoUrl,
  onSave,
  onCancel,
  ...dialogProps
}: Props) => {
  const [description, setDescription] = useState("");
  return (
    <Dialog {...dialogProps}>
      <DialogTitle>Upload Photo</DialogTitle>
      <DialogContent>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          autoFocus
          margin="dense"
          label="Photo description"
          fullWidth
        />
        <Box>
          <img height={300} src={photoUrl} alt="" />
        </Box>
        <DialogActions>
          <Button
            onClick={() => onSave({ photoUrl, description })}
            color="primary"
          >
            Save
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

import { Box, Snackbar, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";
import {
  useInsertPhotoMutation,
  useUploadPhotoMutation,
} from "../../generated/graphql";
import { Photo, UploadPhotoDialog } from "./UploadPhotoDialog";

interface Props {}

export const UploadPhoto = (props: Props) => {
  const [uploadPhoto, { loading }] = useUploadPhotoMutation();
  const [open, setOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [savePhoto, { loading: savingPhoto }] = useInsertPhotoMutation();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const uploadPhotoHandler = (files: FileList | null) => {
    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          uploadPhoto({ variables: { base64image: reader.result } })
            .then(({ data, errors }) => {
              if (errors) {
                console.log(errors);
              } else {
                setPhotoUrl(data?.upload_photo?.url[0] || "");
                setOpen(true);
              }
            })
            .catch(console.error);
        }
      };
    }
  };
  const onSave = (photo: Photo) => {
    savePhoto({ variables: photo })
      .then(() => {
        setOpen(false);
        setOpenSnackbar(true);
      })
      .catch(console.error);
  };
  return (
    <Box marginTop={2}>
      <Typography variant="subtitle2">Upload Photo</Typography>
      <Box padding={2} border="dashed 1px #999">
        {loading && (
          <Typography color="primary" variant="caption">
            File is being uploaded...
          </Typography>
        )}
        <input
          type="file"
          onChange={({ target }) => uploadPhotoHandler(target?.files)}
        />
      </Box>
      <UploadPhotoDialog
        style={{ opacity: savingPhoto ? 0.7 : 1 }}
        open={open}
        photoUrl={photoUrl}
        onCancel={() => setOpen(false)}
        onSave={onSave}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        message={<SuccessSnackbar photoUrl={photoUrl} />}
      />
    </Box>
  );
};

const SuccessSnackbar: FC<{ photoUrl: string }> = ({ photoUrl }) => (
  <Box display="flex" alignItems="center">
    <img src={photoUrl} height={15} style={{ marginRight: 15 }} />
    <Typography variant="caption">Uploaded successfully!</Typography>
  </Box>
);

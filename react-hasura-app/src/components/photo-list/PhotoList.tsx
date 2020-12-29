import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserPhotosQuery } from "../../generated/graphql";
import { PhotoDetailsDialog } from "../photo-details/PhotoDetailsDialog";

interface Props {}

export const PhotoList = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const [selectedPhotoId, setSelectedPhotoId] = useState("");
  const { data, loading } = useGetUserPhotosQuery({
    variables: { userId: id },
  });
  return (
    <div>
      {loading ? (
        <Typography variant="caption">Photos are being loaded...</Typography>
      ) : (
        <Box
          component="section"
          marginTop={4}
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(230px, 1fr))"
          gridGap="15px 15px"
        >
          {data?.photos.map(
            ({
              id,
              created_at,
              firebase_user_profile,
              photo_url,
              comments_aggregate,
            }) => (
              <Card key={id} onClick={() => setSelectedPhotoId(id)}>
                <CardHeader
                  title={"by: " + firebase_user_profile?.displayName}
                  subheader={new Intl.DateTimeFormat("en-US").format(
                    new Date(created_at)
                  )}
                />
                <CardMedia image={photo_url} style={{ paddingTop: "56.25%" }} />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    Comments: ({comments_aggregate.aggregate?.count})
                  </Typography>
                </CardContent>
              </Card>
            )
          )}
          <PhotoDetailsDialog
            photoId={selectedPhotoId}
            onCancel={() => setSelectedPhotoId("")}
            open={!!selectedPhotoId}
          />
        </Box>
      )}
    </div>
  );
};

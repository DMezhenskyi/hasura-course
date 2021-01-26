import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import {
  Comments,
  GetPhotoDocument,
  GetPhotoQuery,
  useGetPhotoLazyQuery,
  useInsertCommentMutation,
} from "../../generated/graphql";

interface Props extends DialogProps {
  photoId: string;
  onCancel: () => void;
}

export const PhotoDetailsDialog = ({
  photoId,
  onCancel,
  ...dialogProps
}: Props) => {
  const [getPhoto, { loading, data }] = useGetPhotoLazyQuery();
  const [comment, setComment] = useState("");
  const [saveComment, { loading: commentSaving }] = useInsertCommentMutation();
  const isCommentsEmpty = () => {
    return (
      data?.photos_by_pk?.comments && data?.photos_by_pk?.comments.length <= 0
    );
  };
  const saveCommentHandler = () => {
    saveComment({
      variables: { comment, photoId },
      update: (cache, result) => {
        const options = {
          query: GetPhotoDocument,
          variables: { photoId },
        };

        //read data from cache
        const cachedData = cache.readQuery<GetPhotoQuery>(options);
        //modify data
        if (cachedData?.photos_by_pk && result.data?.insert_comments_one) {
          const updatedData = {
            ...cachedData,
            photos_by_pk: {
              ...cachedData.photos_by_pk,
              comments: [
                result.data.insert_comments_one,
                ...cachedData?.photos_by_pk?.comments,
              ],
            },
          };
          //write modified data back into cache
          cache.writeQuery({
            ...options,
            data: updatedData,
          });
        }
      },
    })
      .then(() => {
        setComment("");
        // refetch && refetch();
      })
      .catch(console.error);
  };
  useEffect(() => {
    if (photoId) {
      getPhoto({ variables: { photoId } });
    }
  }, [getPhoto, photoId]);

  return (
    <Dialog {...dialogProps}>
      <DialogTitle>Photo Details</DialogTitle>
      <DialogContent>
        {loading && (
          <Typography variant="caption">Deatails are loading...</Typography>
        )}
        <Typography variant="body1">
          {data?.photos_by_pk?.description}
        </Typography>
        <Box marginBottom={2}>
          <img height={300} src={data?.photos_by_pk?.photo_url} alt="" />
        </Box>
        <Typography variant="subtitle2">Comments: </Typography>
        <Box>
          <TextField
            value={comment}
            multiline
            onChange={(e) => setComment(e.target.value)}
            label="New Comment"
            fullWidth
          />
          <Button
            style={{ margin: "10px 0" }}
            size="small"
            color="primary"
            variant="outlined"
            disabled={commentSaving}
            onClick={saveCommentHandler}
          >
            Comment
          </Button>
        </Box>
        {isCommentsEmpty() && (
          <Box padding={1} bgcolor="#fafafa">
            <Typography color="textSecondary" variant="caption">
              No comments...
            </Typography>
          </Box>
        )}
        {data?.photos_by_pk?.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

interface CommentProps {
  comment: Pick<Comments, "firebase_user_profile" | "comment" | "created_at">;
}

export const Comment: FC<CommentProps> = ({ comment }) => {
  const formattedDate = new Intl.DateTimeFormat("en-US").format(
    new Date(comment.created_at)
  );
  return (
    <Card style={{ padding: 5, marginBottom: 5 }}>
      <Typography variant="subtitle2">
        {comment.firebase_user_profile?.displayName}
      </Typography>
      <Typography variant="body1" component="p">
        {comment.comment}
      </Typography>
      <Typography variant="caption">{formattedDate}</Typography>
    </Card>
  );
};

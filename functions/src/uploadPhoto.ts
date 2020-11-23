import { Request, Response } from "firebase-functions";
import { storage } from "firebase-admin";

export const uploadPhotoHandler = async (
  request: Request,
  response: Response
) => {    
  try {
    const { base64image } = request.body.input;
    const contentType = base64image.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1]
    const file = storage().bucket().file(`photos/${Date.now()}`);

    const base64EncodedImageString = base64image.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = new Buffer(base64EncodedImageString, 'base64');
    await file.save(imageBuffer, { contentType });

    const url = await file.getSignedUrl({
      action: 'read',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10)
    });

    response.status(200).send({ url });
  
  } catch (error) {
    response.status(500).send({ message: `Message: ${error.message}` });
  }
};

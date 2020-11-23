import { auth } from "firebase-admin";
import { Request, Response } from "firebase-functions";

export const getProfileHandler = async (
  request: Request,
  response: Response
) => {
  try {
    const { id } = request.body.input;
    const { uid, email, displayName } = await auth().getUser(id);

    response.status(200).send({
      id: uid,
      email,
      displayName,
    });
  } catch (error) {
    response.status(500).send({ message: `Message: ${error.message}` });
  }
};

import { Request, Response } from "firebase-functions";

export const authHookHandler = async (request: Request, response: Response) => {
  try {
    const customAuthHeader = request.headers["secret-header"];
    if (!customAuthHeader || customAuthHeader !== "trust-me")
      throw Error("No header or invalid");
    response.status(200).send({
      "x-hasura-role": "user",
    });
  } catch (error) {
    response.status(401).send({ message: `Message: ${error.message}` });
  }
};
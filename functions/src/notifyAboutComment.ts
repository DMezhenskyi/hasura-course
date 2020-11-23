import { Request, Response, logger } from "firebase-functions";
import fetch from "node-fetch";
import {
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} from "nodemailer";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const GET_PHOTO_QUERY = `query GetPhoto($id: uuid!) {
  photos_by_pk(id: $id) {
    photo_url
    description
  }
}
`;
export const notifyAboutCommentHandler = async (
  request: Request,
  response: Response
) => {
  try {
    const { event } = request.body;
    const { photo_id, comment } = event?.data?.new;
    const { session_variables } = event;

    const photoInfoQuery = await fetch("http://localhost:8080/v1/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: GET_PHOTO_QUERY,
        variables: { id: photo_id },
      }),
      headers: { ...session_variables, ...request.headers },
    });

    const {
      data: {
        photos_by_pk: { photo_url, description },
      },
    } = await photoInfoQuery.json();

    const testAccount = await createTestAccount();
    const transporter = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    const sentEmail = await transporter.sendMail({
      from: `"Firebase Function" <${testAccount.user}>`,
      to: "dmytro.mezhenskyi@gmail.com",
      subject: "New Comment to the photo",
      html: `
        <html>
          <head></head>
          <body>
            <h1>Hi there!</h1>
            <br> <br>
            <p>You have got a new comment to your photo: <a href="${photo_url}">${description}</a> </p>
            <p>The comment text is: <i>${comment}</i></p>
          </body>
        </html>     
    `,
    });

    logger.log(getTestMessageUrl(sentEmail));

    response.status(200).send({ message: "success" });
  } catch (error) {
    response.status(500).send({ message: `Message: ${error.message}` });
  }
};

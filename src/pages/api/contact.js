const { SuperfaceClient } = require('@superfaceai/one-sdk');

const sdk = new SuperfaceClient();

// Just check if all required fields are provided
function formValid(body) {
  return body.email && body.phone && body.first && body.last;
}

export default async function handler(req, res) {
  const body = req.body;

  if (!formValid(body)) {
    res.status(422).end();
    return;
  }

  const profile = await sdk.getProfile('communication/send-email@2.1.0');
  const message = `
    Email: ${body.email}
    Phone: ${body.phone}
    Name: ${body.first} ${body.last}
    Message: ${body.message} 
    `;
  const result = await profile.getUseCase('SendEmail').perform(
    {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'Message from contact form',
      text: message,
    },
    {
      provider: 'sendgrid',
      security: {
        bearer_token: {
          token: process.env.SENDGRID_API_KEY,
        },
      },
    }
  );

  try {
    const data = result.unwrap();
    console.log(data);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
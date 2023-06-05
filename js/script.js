const accountSid = "ACc4f7550851eb1f7b6f4a395589ad584d";
const authToken = "508a69ee424cd9ea5804e1ac3cb140d7";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Olá, esta é uma mensagem teste da Twilio!",
    from: "+13613211324",
    to: "+558881902800",
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.error(err));

"use server";

export async function sendBoilermakerConnectEmail(email: string) {
  const domain = email.split("@")[1];

  if (domain !== "purdue.edu") {
    throw new Error("Use your Purdue email to connect!");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Manav Bokinala <manav@hi.mbokinala.com>",
      to: email,
      subject: "👋 Hi from Manav! (+ contact info)",
      html: "<p>Hey there, thanks for reaching out! I'm always stoked to connect with other Boilermakers. My cell # is 925-984-7982 and the email address I check the most is manav@vly.ai. Please don't hesitate to drop me a message! I visit campus fairly regularly and I'd love to meet up whenever I'm in town.</p><br/><br/><p>P.S. This email was sent automatically. I won't receive any replies to it.</p>",
    }),
  });

  console.log(response);
}

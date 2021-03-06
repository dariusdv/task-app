const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'ddariusn@gmail.com',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
	});
};

const sendGoodbyEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'ddariusn@gmail.com',
		subject: 'Account cancelation successful!',
		text: `We are sorry to see you leaving. Goodby, ${name}. We hope to see you back soon.`
	});
};

module.exports = { sendWelcomeEmail, sendGoodbyEmail };

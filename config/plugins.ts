export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit",
      providerOptions: {
        publicKey: env("IK_PUBLIC_KEY"),
        privateKey: env("IK_PRIVATE_KEY"),
        urlEndpoint: env("IK_ID"),

        params: {
          folder: "/digitree",
        },
      },
    },
  },
  email: {
    config: {
      provider: "strapi-provider-email-brevo",
      providerOptions: {
        apiKey: env("BREVO_API_KEY"),
      },
      settings: {
        defaultSenderEmail: "noreply@digitree.com",
        defaultSenderName: "Digitree",
        defaultReplyTo: "hello@digitree.com",
      },
    },
  },
});

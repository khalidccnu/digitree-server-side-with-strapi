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
});

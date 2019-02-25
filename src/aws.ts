import Amplify from "aws-amplify";
import config from "./config";

export default {
  configure: () => {
    Amplify.configure({
      Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
      },
      API: {
        endpoints: [
          {
            name: "userMovie",
            endpoint: config.apiGateway.URL,
            region: config.apiGateway.REGION
          }
        ]
      }
    });
  }
}

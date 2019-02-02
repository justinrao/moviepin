import { CognitoUser } from "amazon-cognito-identity-js";

export interface User {
    cognitoUser?: CognitoUser;
    userInfo: {
        attributes: {
            email: string;
        }
    }
}
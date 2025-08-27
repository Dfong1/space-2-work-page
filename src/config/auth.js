const auth = {
    meEndpoint: "auth/me",
    loginEndpoint: "auth/login",
    registerEndpoint: "auth/register",
    storageTokenKeyName: "accessToken",
    onTokenExpiration: "refreshToken", // logout | refreshToken
};

export default auth;
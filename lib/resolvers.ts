import getConfig from "next/config";
import { ApolloError } from "apollo-server-errors";
import getWhoAmI from "./queries/getWhoAmI";

const BAD_REQUEST = "BAD_REQUEST";
const INTERNAL_ERROR_SERVER = "INTERNAL_ERROR_SERVER";
const UNKNOWN_ERROR = "UNKNOWN_ERROR";

interface GetQuoteDataArgs {
    vehicleType: string;
    id: string;
    plant: string;
    operation: string;
}

const getQuotes = "api/auth/getQuotes";
const CdGetQuotes = "api/auth/getQuotesForResc";
const confQuote = "api/auth/confQuote";
const changeDate = "api/auth/changeDate";
const cancelQuote = "api/auth/cancelQuote";
const origen = "T";

interface DoSignInArgs {
    username: string;
    password: string;
}

interface getWhoAmIArgs {
    token: string;
}

export type SignInResponse = {
    username: string;
    role: string;
    token: string;
}

export type WhoAmIResponse = {
    username: string;
    role: string;
}

const Query = {
    async getWhoAmI(
        __parent: unknown,
        _args: getWhoAmIArgs
    ): Promise<WhoAmIResponse> {
        const backendUrl = getConfig().serverRuntimeConfig.backendUrl;
        const suffixUrl = '/whoami'
        const destinationEndpoint = backendUrl + suffixUrl;

        const headers = {
            Authorization: 'Bearer ' + _args.token,
        }

        const requestOptions = {
            method: 'GET',
            headers,
        };

        const response = await fetch(destinationEndpoint, requestOptions);
        if (!response.ok) {
            if (response.status === 400) {
                throw new ApolloError("", BAD_REQUEST, {
                    details: {
                        reason: BAD_REQUEST,
                    },
                });
            }
            if (response.status === 500) {
                throw new ApolloError("", INTERNAL_ERROR_SERVER, {
                    details: {
                        reason: INTERNAL_ERROR_SERVER,
                    },
                });
            }
            throw new ApolloError("", UNKNOWN_ERROR, {
                details: {
                    reason: UNKNOWN_ERROR,
                },
            });
        } else {
            const data = await response.json();
            const result = { username: data.username, role: data.role };
            return result;
        }
    },
};

const Mutation = {
    async doSignIn(
        __parent: unknown,
        _args: DoSignInArgs
    ): Promise<SignInResponse> {
        const backendUrl = getConfig().serverRuntimeConfig.backendUrl;
        const suffixUrl = '/signin'
        const destinationEndpoint = backendUrl + suffixUrl;

        const bodyData = {
            email: _args.username,
            password: _args.password
        };

        const headers = {
            'Content-Type': 'application/json',
        }

        const requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(bodyData),
        };

        const response = await fetch(destinationEndpoint, requestOptions);
        if (!response.ok) {
            if (response.status === 400) {
                throw new ApolloError("", BAD_REQUEST, {
                    details: {
                        reason: BAD_REQUEST,
                    },
                });
            }
            if (response.status === 500) {
                throw new ApolloError("", INTERNAL_ERROR_SERVER, {
                    details: {
                        reason: INTERNAL_ERROR_SERVER,
                    },
                });
            }
            throw new ApolloError("", UNKNOWN_ERROR, {
                details: {
                    reason: UNKNOWN_ERROR,
                },
            });
        } else {
            const data = await response.json();
            const result = { username: data.username, role: data.role, token: data.token };
            return result;
        }
    },
};

export default { Query, Mutation };
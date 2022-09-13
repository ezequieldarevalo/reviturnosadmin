import getConfig from "next/config";
import { ApolloError } from "apollo-server-errors";

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

interface DoRescheduleArgs {
    plant: string;
    email: string;
    dominio: string;
    nombre: string;
    telefono: string;
    anio: string;
    combustible: string;
    quoteId: number;
    tipoVehiculo: string;
    paymentMethod: string;
    operation: string;
}

interface DateChangeArgs {
    plant: string;
    email: string;
    quoteId: number;
    oldQuoteId: number;
}

interface CancelQuoteArgs {
    plant: string;
    email: string;
    quoteId: number;
}



const Query = {
    async getQuoteData(
        __parent: unknown,
        _args: GetQuoteDataArgs
    ): Promise<string> {
        return 'pepe'
    },
};

const Mutation = {
    async doReschedule(
        __parent: unknown,
        _args: DoRescheduleArgs
    ): Promise<string> {
        return 'pepe'
    },
    async doChangeDate(
        __parent: unknown,
        _args: DateChangeArgs
    ): Promise<string> {
        return 'pepe'
    },
    async doCancelQuote(
        __parent: unknown,
        _args: CancelQuoteArgs
    ): Promise<string> {
        return 'pepe'
    }
};

export default { Query, Mutation };
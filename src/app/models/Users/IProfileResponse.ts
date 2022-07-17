import { IResponse } from "../IResponse";

interface Idata {
    firstname: string,
    lastname: string,
    email: string,
    phone: number,
    country: string,
    city: string,
    address: string
}

export default interface IProfileResponse extends IResponse {
    data: Idata
}
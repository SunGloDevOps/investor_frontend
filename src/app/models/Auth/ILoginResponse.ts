import { IResponse } from "../IResponse";

interface ResponseData {
    token: string,
    id: string,
    firstname: string,
    email: string
}

export interface ILoginResponse extends IResponse{
    data: ResponseData
}

import { environment } from "src/environments/environment";

//this function converts USD to naira
export function dollarToNaira(usd: number): number{
    const naira_rate = environment.naira;
    return usd * naira_rate
}
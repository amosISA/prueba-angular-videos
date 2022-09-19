import { Partido } from "./partido.interface";

export interface ScorebatResponse {
    response: Partido[];
    warning: string;
}
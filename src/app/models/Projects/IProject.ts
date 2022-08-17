import { IResponse } from "../IResponse";

  export default interface IProjects {
  
    _id: string,
    title: string,
    description: string,
    cost_per_cell: string,
    thumbnail: string,
    status?: string
  }

  

  export interface IProjectResponse extends IResponse {
    data: any
  }

  export interface IProjectRequest {
    id: string
  }

  export interface IProject extends IProjects {
    sold_cell: number,
    ROI: string,
    carbon_reduced: number,
    energy_yeild: number,
    end_date: string,
    no_of_investors: string,
    start_date: string,
    operator: string,
    total_cell: number,
    availability: string
  }
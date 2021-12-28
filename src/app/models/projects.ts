export interface Project {
    projectName:string;
    client: Client;
    timeSpent:number;
    projectId:number

}
export interface Client {
    clientName:string;
    clientId:number;
}


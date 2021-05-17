/** Account Types */
export interface AccountAPIDataResponse{
    token: string;
}

export interface AccountApiResponse{
    statusCode: number,
    data?: AccountAPIDataResponse
}

export interface AccountAction{
    type: string,
    data?: AccountAPIDataResponse
}

export interface AccountState{
    account?: AccountAPIDataResponse,
}
/** Account Types */

import React from "react";

export interface Error{
    type:string,
    message:string
}

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
    data?: AccountAPIDataResponse,
    error?: Error
}

/** Form */

/* The available editors for the field */
type Editor = "textbox" | "multilinetextbox" | "dropdown" | "password" | "button";

/*The available Validation rules */
export type Rules = "Required" | "Email"

export interface IValidation{
    rule: Array<Rules>
}

export interface IFieldProps {
    /* The unique field name */
    id: string;

    /* The label text for the field */
    label?: string;

    /* The editor for the field */
    editor?: Editor;

    /* The drop down items for the field */
    options?: string[];

    /* The field value */
    value?: any;

    /* The type of field */
    type?: string;

    /* validation rule */
    validation?: IValidation
}

export interface IFields {  
    [key: string]: IFieldProps;
}

export interface IValues{
    /* Key value pairs for all the field values with key being the field name */
    [key: string]: any;
}

export interface IErrors {  
    /* The validation error messages for each field (key is the field name */  
    [key: string]: string;
}


export interface IFormState {
    /* Field values */
    values: IValues,

    /* Field Errors */
    errors: IErrors
}
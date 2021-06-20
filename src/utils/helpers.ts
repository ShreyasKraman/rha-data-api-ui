import { IFormFieldProps } from '../components/Form/FormField/FormField';
import {IValues, IValidation, Rules} from '../types/types';

/**
 * Get host of the website
 * @returns A string value which contains host of the website
 */
export const getWebsiteHost = ():string =>{
    let url:string = '';
    if(window !== undefined){
        url = window.location.host;
        if(url.includes('localhost')){
            url = 'http://localhost:15000'
        }
    }
    return url;
}

/**
 * Check if given text is empty
 * @param text A string value
 * @returns true if text is empty
 */
export const isEmpty = (text:string):boolean =>{
    return text === undefined || text.length === 0; 
}

/**
 * Validates whether a field has a value
 * @param {IValues} values - All the field values in the form
 * @param {string} fieldName - The field to validate
 * @returns {string} - The error message
 */
 export const required = (values: IValues, fieldName: string): string =>
    values[fieldName] === undefined ||
    values[fieldName] === null ||
    values[fieldName] === ""
    ? `${fieldName} is required`
    : "";

/**
 * Validates whether a field is a valid email
 * @param {IValues} values - All the field values in the form
 * @param {string} fieldName - The field to validate
 * @returns {string} - The error message
 */
 export const isEmail = (values: IValues, fieldName: string): string =>
    values[fieldName] &&
    values[fieldName].search(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    ? `${fieldName} must be in a valid email format`
    : "";


/**
 * A Function which returns deep clone object
 * @param fields A object value
 */
export const deepClone = (fields:IValues) => {

    const newObject:IValues = {};

    for(let key in fields){
        if(typeof fields[key] === 'object'){
            if(Array.isArray(fields[key]))
                newObject[key] = fields[key].slice();
            else
                newObject[key] = deepClone(fields[key]);
        }else{
            newObject[key] = fields[key]
        }
    }

    return newObject;

}

export const getValidationMessage = (validation:IValidation, values: IValues, fieldName: string) : string => {
    const rules: Array<Rules> = validation.rule;
    let message: string = ''
    for(const rule of rules){
        switch(rule){
            case 'Required': 
                message = required(values, fieldName);
                if(message !== '')return message;
                break;
            case 'Email':
                message = isEmail(values,fieldName);
                if(message !== '')return message;
                break;
            default:
                break;
        }
    }
    return '';
}
import axios from 'axios';
import * as api from '../constants/ApiUrls';
import {getWebsiteHost} from '../utils/helpers';
/**
 * Login to account
 * @param username A string value which contains username of account
 * @param password A string value which contains password of account
 */
export default {
    login: async (username: string, password: string, cb) => {
            const url:string = getWebsiteHost();
            if(url){
                try{
                    const response = await axios.post(url+api.LOGIN_URL,{
                        emailId:username,
                        password:password
                    });
                    cb(response);
                }catch(e){
                    console.log(e);
                    cb(e);
                }
            }
        }
}
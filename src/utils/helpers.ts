
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
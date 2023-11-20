const ajaxservice = (address, city)=>{
    const url = "https://api.postit.lt/v2/?city=";
    const key = "acgMKpCFze7tSbCDa64T";
    return fetch (`${url}${city}&address=${address}&key=${key}`)
        .then(response=>response.json())
        
    }
export default ajaxservice
import ajaxservice from "./ajaxservice";
const searchcode = ()=>{
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchterm = document.querySelector('.term').value;
    const city = document.querySelector('.city').value;
    let searchresponse;
    ajaxservice(searchterm,city)
    .then(result=>searchresponse=result)
    .then(()=>console.log(searchresponse))
    .then(()=>document.querySelector('.result').value=searchresponse.data[0].post_code)

})
}

export default searchcode
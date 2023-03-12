const showAlert=()=>{

    alert('i am the browser api')
}
const showConfirm=()=>{
    const result =confirm('Are you adult')
    result===true? alert('you can go inside the website'):alert('you cant go');
 
   
}

const showPromt =()=>{
const result = prompt('enter your name');
console.log(result)
result ===null?alert('enter a valid num to enter this site'):alert('you can go inside this site');

// result ===null?(result===''?(result===isNaN? alert('enter a valid num to enter this site') :alert('you can go inside this site')):''):''

}
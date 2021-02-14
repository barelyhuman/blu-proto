(function(){

    const querystring = require('querystring');
    let query = querystring.parse(global.location.search);
    let port = JSON.parse(query['?port'])


    const APIURL = `http://localhost:${port}/api`

    fetch(APIURL+'/status')
    .then(r=>r.json())
    .then((data)=>{

        const statusContainer = document.getElementById('status');
        statusContainer.innerHTML = "Status: "+data.status;


    })
    .catch(err=>{
        console.log(err);
    });


})()
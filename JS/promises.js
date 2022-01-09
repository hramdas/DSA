var promise = new Promise( function(resolve, reject){
    var a = "Ram"
    var b = "Ram"
    if(a == b) resolve()
    else reject()
} )

promise
    .then( function(){
        console.log("Success")
    })
    .catch(function(){
        console.log("Error")
    })
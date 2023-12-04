function getData() {
    let request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/bharat")
    request.send()

    request.addEventListener("load", () => {
        var [data] = JSON.parse(request.responseText)
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("population").innerHTML = data.population
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("area").innerHTML = data.area
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("unMember").innerHTML = data.unMember
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("startOfWeek").innerHTML = data.startOfWeek
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("currencies").innerHTML= data.currencies.INR
        document.getElementById("maps").href = data.maps.googleMaps


    })
}
getData()

function fun() {
    let request = new XMLHttpRequest()
    var name = document.getElementById("search").value
    request.open("get", "https://restcountries.com/v3.1/name/"+name)
    request.send()
    request.addEventListener("load", () => {
        var [data] = JSON.parse(request.responseText)
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("population").innerHTML = data.population
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("area").innerHTML = data.area
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("unMember").innerHTML = data.unMember
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("startOfWeek").innerHTML = data.startOfWeek
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("currencies").innerHTML= data.currencies.INR
        document.getElementById("maps").href = data.maps.googleMaps


    })
}
fun()


// function getData() {
//     fetch("get", "https://restcountries.com/v3.1/name/bharat")
//     .then((responseText)=>{
//         responseText.json()
//         .then((data)=>{ 
//             var [data] = data
//             document.getElementById("name").innerHTML = data.name.official
//             document.getElementById("capital").innerHTML = data.capital[0]
//             document.getElementById("flags").src = data.flags.svg
//             document.getElementById("borders").innerHTML = data.borders
//             document.getElementById("population").innerHTML = data.population
//             document.getElementById("timezones").innerHTML = data.timezones
//             document.getElementById("area").innerHTML = data.area
//             document.getElementById("region").innerHTML = data.region
//             document.getElementById("subregion").innerHTML = data.subregion
//             document.getElementById("unMember").innerHTML = data.unMember
//             document.getElementById("independent").innerHTML = data.independent
//             document.getElementById("startOfWeek").innerHTML = data.startOfWeek
//             document.getElementById("landlocked").innerHTML = data.landlocked
//             document.getElementById("currencies").innerHTML= data.currencies.INR
//             document.getElementById("maps").href = data.maps.googleMaps
//         })
//         .catch((error)=>{
//             console.log(error)
//             alert("Invailid Country Name") 
//         })

//     })
//     .catch((error)=>{
//         console.log(error)
//         alert("Invailid Country Name")

//     })
// }
// getData()

// function fun() {
//     var name = document.getElementById("search").value
//     fetch("get", "https://restcountries.com/v3.1/name/"+name)
//     .then((responseText)=>{
//         responseText.json()
//         .then((data)=>{ 
//             var [data] = data
//         document.getElementById("name").innerHTML = data.name.official
//         document.getElementById("capital").innerHTML = data.capital[0]
//         document.getElementById("flags").src = data.flags.svg
//         document.getElementById("borders").innerHTML = data.borders
//         document.getElementById("population").innerHTML = data.population
//         document.getElementById("timezones").innerHTML = data.timezones
//         document.getElementById("area").innerHTML = data.area
//         document.getElementById("region").innerHTML = data.region
//         document.getElementById("subregion").innerHTML = data.subregion
//         document.getElementById("unMember").innerHTML = data.unMember
//         document.getElementById("independent").innerHTML = data.independent
//         document.getElementById("startOfWeek").innerHTML = data.startOfWeek
//         document.getElementById("landlocked").innerHTML = data.landlocked
//         document.getElementById("currencies").innerHTML= data.currencies.INR
//         document.getElementById("googleMaps").href = data.maps.googleMaps


//     })
//     .catch((error)=>{
//         console.log(error)
//         alert("Invailid Country Name") 
//     })

// })
// .catch((error)=>{
//     console.log(error)
//     alert("Invailid Country Name")
// })
// }

//declaring variables
let x = 7
const y = 10

//console.log
console.log(x)
console.debug("This is a debug message")
console.warn("This is a warning")
console.info("This happened")
console.error("Something went wrong")

//accessing elements of HTML
/*
DOM - Document Object Model
*/

function changeText(){
    try{
        document.getElementById("title").innerText = document.getElementById("textChangeBox").value
    }
    catch(e){
        alert("e")
    }
}


// getElementsByClassName - all the elements having the same class name


let listItems = Array.from(document.getElementsByClassName("list_items"))



listItems.forEach((item) => {
    console.log(item.innerText);
})

/*
listItems.forEach(function(item) {
    console.log(item.innerText);
})
*/

/*
for(let item of listItems){

}
*/

/*
for (i = 0; i < listItems.length; i ++){}
*/

// consuming data from the internet
fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(data => data.json())
    .then(data => {
        data.forEach(item => {
            // let title = item.title
            // let body = item.body

            let {id, title, body} = item

            document.getElementById("post_list").innerHTML += `
                <h1>${id} - ${title}</h1>
                <p>${body}</p>
            `
        })
    })

document.getElementById("more_data").addEventListener("click", async() => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_start=10")
    let jsonData = await data.json();
    jsonData.forEach(item => {
        // let title = item.title
        // let body = item.body

        let {id, title, body} = item

        document.getElementById("post_list").innerHTML += `
            <h1>${id} - ${title}</h1>
            <p>${body}</p>
        `
    })
})
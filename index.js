
let url=`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
async function getdata(){
    
   let res= await fetch(url);
   let data= await res.json();
  let arr=data.results;
//   console.log(arr);
  localStorage.setItem("arr",JSON.stringify(arr));

 
}
getdata();


// please comment above code after making one request


function display(){
    let dataArr= JSON.parse(localStorage.getItem("arr"));

    document.querySelector("#table_container").innerHTML = "";
console.log( dataArr );

dataArr.forEach((name)=>{

    // console.log(name.name)

    let table=document.createElement("table");
    let theader=document.createElement("thead");
    let tbody=document.createElement("tbody");
    
    let row1=document.createElement("tr");
    let th=document.createElement("th");
    th.textContent=`POKEMON NAME`;
    row1.append(th);

   
    theader.append(row1);
     table.append(theader);
    let row=document.createElement("tr");
    let td=document.createElement("td");
     td.textContent=name.name;
     row.append(td);
     tbody.append(row);
     table.append(tbody);
     
   
     document.querySelector("#table_container").append(table);




})
}
display();



//SEARCH


document.querySelector("#searchbtn").addEventListener("click",searchbtn);


function searchbtn(){
    var searchDATA=document.querySelector("#search").value;
    let dataArr= JSON.parse(localStorage.getItem("arr"));
    for(let i=0;i<dataArr.length;i++){
        if(searchDATA===dataArr[i].name){
            DISPLAY(dataArr,index);
        }
    }
}


function DISPLAY(dataArr,index){

    let div=document.createElement("div");

    let pID=document.createElement("p");

    let pname=document.createElement("p");

    let pheight=document.createElement("p");

    let weight=document.createElement("p");


    let abilities=document.createElement("p");

    let moves=document.createElement("p");
}

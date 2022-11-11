var array = [
    {

 id:"1",
 title:"2 states",
 author:"chetan bhagat",
 subject:"love story",
 pdate:"20/8/2020"
},
{

    id:"2",
    title:"rajesh",
    author:"boys",
    subject:"comedy",
    pdate:"12/12/2021"
   }, {

    id:"3",
    title:"king",
    author:"preetham",
    subject:"war",
    pdate:"11/11/2021"
   }, {

    id:"4",
    title:"queen",
    author:"pavan",
    subject:"comedy",
    pdate:"10/03/2003"
   }, {

    id:"5",
    title:"rose",
    author:"rajesh",
    subject:"love story",
    pdate:"12-02-2021"
   }, {

    id:"6",
    title:"war",
    author:"preeti",
    subject:"war",
    pdate:"15/11/2022"
   }, {

    id:"7",
    title:"life of pie",
    author:"quobi",
    subject:"comedy",
    pdate:"09/09/2001"
   }, {

    id:"8",
    title:"detectiv",
    author:"preetham",
    subject:"suspence",
    pdate:"12/05/2000"
   }, {

    id:"9",
    title:"rs",
    author:"shruti",
    subject:"love story",
    pdate:"12/04/2017"
   }, {

    id:"10",
    title:"home",
    author:"suma",
    subject:"drama",
    pdate:"10/4/2004"
   }

]

//show table

function showtable(curarray){

document.getElementById("mytable").innerHTML=`

<tr class="bg-primary text-white fw-bold">
<td>ID</td>
<td>TITLE</td>
<td>AUTHOR</td>
<td>SUBJECT</td>
<td>PUBLISHED-DATE</td>
</tr>

<td style="color:red;"><b> Number of rows = ${curarray.length}</b></td>

`;

//FOR CHECKING ARRAY IS EMPTY

if(curarray==""){
    document.getElementById("error").innerHTML=`<span class="text-danger">Not Found</span>`
}
else{
  
    document.getElementById("error").innerHTML="";

    for(var i=0;i<curarray.length;i++){

  document.getElementById("mytable").innerHTML +=`
  <tr>
  <td>${curarray[i].id}</td>
  <td>${curarray[i].title}</td>
  <td>${curarray[i].author}</td>
  <td>${curarray[i].subject}</td>
  <td>${curarray[i].pdate}</td>
  
  </tr>
  
  

  
  
  
  
  `



    }
}



}

//calling 
showtable(array);

//take filtered data array

var newarr = [];

//for searching methods

document.getElementById("search").addEventListener("keyup",function(){

var search=this.value.toLocaleLowerCase();

newarr = array.filter(function(val){

    if(val.id.includes(search) || val.pdate.includes(search)  || val.title.includes(search)  || val.author.includes(search)  || val.subject.includes(search)){
      
  var newobj ={id:val.id, title:val.title,author:val.author,subject:val.subject,pdate:val.pdate};
  
  return newobj;


    }
   


})

showtable(newarr);



})
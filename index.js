let j=2;
let button=document.getElementById("addbutton")
button.addEventListener('click',()=>
{ 
if(document.getElementById('add').value==""){
    return 1;
}
let newlist=document.createElement('div');
document.getElementById('listcontainer').appendChild(newlist);
newlist.className='list';
newlist.id=j;
newlist.innerHTML=document.getElementById('add').value;
document.getElementById('add').value="";
let newcross=document.createElement('button');
newcross.className='close';
newcross.id='b'+j;
newcross.innerHTML='<i class="fa-solid fa-xmark"></i>';
document.getElementById(j).append(newcross);
newcross.addEventListener('click',function(){
    newcross.parentElement.remove();
});
j=j+1;
}
);


function removeList(x){
document.getElementById(x).parentNode.remove();
}
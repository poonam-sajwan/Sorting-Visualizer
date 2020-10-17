
const generate=document.querySelector('#newArray');
generate.addEventListener('click',generate_new_array);



const white='#f4f9f4';
const yellow='#ffe05d';
const red='#d92027';
const green='#335d2d';
const blue='#272343';



let arr=[];
let div=[];
let curr_delay=0;
const arrContainer=document.querySelector('#array-container');
function generate_new_array()
{
  div=[];
  arr=[];
  arr.push(0);
  div[0]=document.createElement("div");
  arrContainer.innerHTML='';

  for(let i=1;i<7;i++)
  {
    let h=(Math.floor(Math.random()*10+1));
    arr.push(h);
    div[i]=document.createElement("div");
    arrContainer.appendChild(div[i]);
    update(div[i],'white',arr[i]*20+'px',0);
  }

  console.log("before");
  for(let i=1;i<arr.length;i++)
  console.log(arr[i]);
}



// algorithms call
const algorithm=document.querySelectorAll('.algos button');
algorithm[0].addEventListener('click',()=>{
    bubbleSort();
    console.log("After");
    for(let i=1;i<arr.length;i++)
    console.log(arr[i]);
    // now();
});
algorithm[1].addEventListener('click',()=>{
    selectionSort();
    console.log("After");
    for(let i=1;i<arr.length;i++)
    console.log(arr[i]);
    // now();
});
algorithm[2].addEventListener('click',()=>{
    insertionSort();
    console.log("After");
    for(let i=1;i<arr.length;i++)
    console.log(arr[i]);
    // now();
});
algorithm[3].addEventListener('click',()=>{
    mergeSort(arr,1,arr.length-1);
    console.log("After");
    for(let i=1;i<arr.length;i++)
    console.log(arr[i]);
    // now();
});
algorithm[4].addEventListener('click',()=>{
    quickSort();
    console.log("After");
    for(let i=1;i<arr.length;i++)
    console.log(arr[i]);
    // now();
});

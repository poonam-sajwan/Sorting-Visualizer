function bubbleSort(){
curr_delay=0;
  for(var i=1;i<arr.length;i++)
  {
    for(var j=1;j<arr.length-i;j++)
    {
              update(div[j],yellow,arr[j]*20+'px',curr_delay);// checking for current element
               if(arr[j]>arr[j+1])
               {
                 update(div[j],red,arr[j]*20+'px',curr_delay+1000);
                 update(div[j+1],red,arr[j+1]*20+'px',curr_delay);

                 let c=arr[j];
                 arr[j]=arr[j+1];
                 arr[j+1]=c;

                update(div[j],blue,arr[j]*20+'px',curr_delay+2000);
                update(div[j+1],blue,arr[j+1]*20+'px',curr_delay);
               }
              update(div[j],white,arr[j]*20+'px',curr_delay+3000);// checking for current element
    }
    update(div[j],green,arr[j]*20+'px',curr_delay);
  }
}

function now(){
     for(var i=1;i<arr.length;i++)
     {
       console.log(arr[i]);

       // div[i].innerHTML='';
       update(div[i],'green',arr[i]*20+'px',7000);
     }
}
// now();

// function bubbleSort(){
//   var  i=1,j=1;
//
//   function outer(){
//      j=1;
// // inner();
//      console.log('\n'+i+" "+"now j ");
//     function inner(){
//       console.log(j+" ");
//       // console.log("B   "+arr[j]+arr[j+1]);
//       if(arr[j]>arr[j+1])
//       {
//         let c=arr[j];
//         arr[j]=arr[j+1];
//         arr[j+1]=c;
//       }
//       // console.log("B   "+arr[j]+arr[j+1]);
//     }
//     inner();
//     j+=1;
//     if(j<arr.length-i)
//     inner();
//   }
//   outer();
//   i+=1;
//   if(i<arr.length)
//   outer();
// }

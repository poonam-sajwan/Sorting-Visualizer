

// yellow: curr element
// blue : the actual min element
function selectionSort(){
  curr_delay=0;

  for(var i=1;i<arr.length;i++)
  {
    let curr_mini=i;
    update(div[i],yellow,arr[i]*20+'px',curr_delay+1000);
    for(var j=i+1;j<arr.length;j++)
    {
      if(arr[j]<arr[curr_mini])
      {
        curr_mini=j;
      }
    }

    if(curr_mini===i)
    {
    update(div[curr_mini],green,arr[curr_mini]*20+'px',curr_delay+2000);

    }
    else{
      update(div[curr_mini],blue,arr[curr_mini]*20+'px',curr_delay+2000);

      let s=arr[i];
      arr[i]=arr[curr_mini];
      arr[curr_mini]=s;

     update(div[i],green,arr[i]*20+'px',curr_delay+3000);
     update(div[curr_mini],white,arr[curr_mini]*20+'px',curr_delay);
    }
  }
}

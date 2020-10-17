function insertionSort()
{
    curr_delay=0;

    for(var j=1;j<arr.length;j++)
    {
        update(div[j],yellow,arr[j]*20+'px',curr_delay+1000);//Color update
        // update(div[j],yellow,arr[j]*20+'px',curr_delay);// checking for current element
        var key= arr[j];
        var i=j-1;
        while(i>=0 && arr[i]>key)
        {
          update(div[i],red,arr[i]*20+'px',curr_delay+000);
          // update(div[j],red,arr[j]*20+'px',curr_delay+1000);
            // div_update(divs[i],div_sizes[i],"red");//Color update
            update(div[i+1],red,arr[i+1]*20+'px',curr_delay+1000);
            // div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            arr[i+1]=arr[i];

          // update(div[i],red,arr[i]*20+'px',curr_delay+1000);
          // update(div[i+1],red,arr[i+1]*20+'px',curr_delay+1000);
            // div_update(divs[i],div_sizes[i],"red");//Height update
            // div_update(divs[i+1],div_sizes[i+1],"red");//Height update

            // div_update(divs[i],div_sizes[i],"blue");//Color update
            update(div[i],blue,arr[i]*20+'px',curr_delay+2000);
            if(i==(j-1))
            {
              update(div[i+1],yellow,arr[i+1]*20+'px',curr_delay+3000);
                // div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
              update(div[i+1],blue,arr[i+1]*20+'px',curr_delay+3000);
                // div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        arr[i+1]=key;

        for(var t=0;t<j;t++)
        {
          update(div[t],white,arr[t]*20+'px',0);
            // div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    update(div[j-1],green,arr[j-1]*20+'px',curr_delay+5000);
    // div_update(divs[j-1],div_sizes[j-1],"green");//Color update

}

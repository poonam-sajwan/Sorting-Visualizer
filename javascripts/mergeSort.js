function merge(arr,l,m,r)
{
   let n1 = m - l + 1;
   let n2 = r - m;

   // Create temp arrays
   // int L[n1], R[n2];
  L=[],R=[];
   // Copy data to temp arrays L[] and R[]
   for(var i = 0; i < n1; i++)
       // L[i] = arr[l + i];
       L.push(arr[l + i]);
   for(var j = 0; j < n2; j++)
       // R[j] = arr[m + 1 + j];
       R.push(arr[m + 1 + j]);

   // Merge the temp arrays back into arr[l..r]

   // Initial index of first subarray
  i = 0;

   // Initial index of second subarray
  j = 0;

   // Initial index of merged subarray
   let k = l;

   while (i < n1 && j < n2)
   {
       if (L[i] <= R[j])
       {
           arr[k] = L[i];
           i++;
       }
       else
       {
           arr[k] = R[j];
           j++;
       }
       k++;
   }

   // Copy the remaining elements of
   // L[], if there are any
   while (i < n1)
   {
       arr[k] = L[i];
       i++;
       k++;
   }

   // Copy the remaining elements of
   // R[], if there are any
   while (j < n2)
   {
       arr[k] = R[j];
       j++;
       k++;
   }
}
function mergeSort(arr,l,r)
{
    if (l < r)
    {
        let m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

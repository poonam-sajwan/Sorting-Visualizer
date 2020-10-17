const create=(division,height,color)=>{
      division.style.backgroundColor=color;
      division.style.height=height;
      division.style.margin='2px';
      // division.style.marginTop=500height;
};

var delay=0;
const update=(division,color,height,time)=>{
      setTimeout(()=>{
        division.style.backgroundColor=color;
      division.style.height=height;
      division.style.margin='2px';
      division.style.width='50px';
    },delay+=time);
};

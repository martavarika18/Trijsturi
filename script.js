//const mala1;
//const mala2;
//const mala3;
function nolasa(){
    const malas=document.getElementsByClassName("mala");
      
    const m1 = parseFloat (mala1.value);
    const m2 = parseFloat (mala2.value);
    const m3 = parseFloat (mala3.value);
      
      if(m1>0&&m2>0&&m3>0){//pārbauda vai malu gaurmi ir lielāki par 0
        console.log({m1,m2,m3});
        return (m1,m2,m3);
      }else{
        console.log(false);
        return false;
      }
    }
    function perimetrs(m1,m2,m3){
      const m=nolasa();
      m1=m.m1; m2=m.m2; m3=m.m3;
      console.log(m1, m2, m3);
      const p=m1+m2+m3;
      console.log(p);
      return (p);
    }
      
    //function pusper(m1,m2,m3){
      
    //}
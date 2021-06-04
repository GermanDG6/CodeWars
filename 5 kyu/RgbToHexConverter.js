// Link: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

//Instructions: The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

//Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

//The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


//====SOLUTIONS 

//My last solution (refactorized)
function rgb(r, g, b){
    const toHex=(rgbComp)=>{
      if(rgbComp>255){rgbComp=255}
      if(rgbComp<0){rgbComp=0}
      let hexComp = rgbComp.toString(16).toUpperCase()
      if(hexComp.length<2){
        return '0'+ hexComp
      }else{
        return hexComp
      }
    }
    return toHex(r)+ toHex(g)+ toHex(b)
  }


  // my first solution
  function rgb(r, g, b){
    if(r<=0){r= 0}
    if(r>255){r=255}
    let rhex1 = Math.floor(r/16)
    let rhex2 = r- rhex1*16  
    if(rhex1===10){rhex1= 'A'}
    if(rhex1===11){rhex1= 'B'}
    if(rhex1===12){rhex1= 'C'}
    if(rhex1===13){rhex1= 'D'}
    if(rhex1===14){rhex1= 'E'}
    if(rhex1>=15){rhex1='F'}
    if(rhex2===10){rhex2= 'A'}
    if(rhex2===11){rhex2= 'B'}
    if(rhex2===12){rhex2= 'C'}
    if(rhex2===13){rhex2= 'D'}
    if(rhex2===14){rhex2= 'E'}
    if(rhex2>=15){rhex2= 'F'}
    
    if(g<=0){g= 0}
    if(g>255){g=255}
    let ghex1 = Math.floor(g/16)
    let ghex2 = g- ghex1*16  
    if(ghex1===10){ghex1= 'A'}
    if(ghex1===11){ghex1= 'B'}
    if(ghex1===12){ghex1= 'C'}
    if(ghex1===13){ghex1= 'D'}
    if(ghex1===14){ghex1= 'E'}
    if(ghex1===15){ghex1='F'}
    if(ghex2===10){ghex2= 'A'}
    if(ghex2===11){ghex2= 'B'}
    if(ghex2===12){ghex2= 'C'}
    if(ghex2===13){ghex2= 'D'}
    if(ghex2===14){ghex2= 'E'}
    if(ghex2===15){ghex2= 'F'}
  
    if(b<=0){b= 0}
    if(b>=255){b=255}
    let bhex1 = Math.floor(b/16)
    let bhex2 = b- bhex1*16  
    if(bhex1===10){bhex1= 'A'}
    if(bhex1===11){bhex1= 'B'}
    if(bhex1===12){bhex1= 'C'}
    if(bhex1===13){bhex1= 'D'}
    if(bhex1===14){bhex1= 'E'}
    if(bhex1>=15){bhex1='F'}
    if(bhex2===10){bhex2= 'A'}
    if(bhex2===11){bhex2= 'B'}
    if(bhex2===12){bhex2= 'C'}
    if(bhex2===13){bhex2= 'D'}
    if(bhex2===14){bhex2= 'E'}
    if(bhex2>=15){bhex2= 'F'}
    return(`${rhex1}${rhex2}${ghex1}${ghex2}${bhex1}${bhex2}`)
  }
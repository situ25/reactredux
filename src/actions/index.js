//redux

export const incNumber= (num)=> {
 return { 
     type: "INCREMENT",
     payloadXyz: num
 }
}


export const decNumber= (numb)=> {
    return { 
        type: "DECREMENT",
        payloadDec: numb
    }
   }
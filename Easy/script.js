let uniformSet = ["hat", "glasses"]
let uniformPieces = ["company1_hat", "company1_glasses", "company2_hat"]

const getCompany = (uniformSet, uniformPieces) => {
    // Please write your code here.    
    for(let i = 0; i <= uniformPieces.length; i++) {
    console.log("1", uniformPieces)
      for(let j = i + 1; j <= uniformSet.length; j++) {
        // console.log("2", uniformSet)


         let companyName = uniformPieces[i];
         console.log("3", companyName)
        //  let name = companyName.split("_");
        //  let company = name[0]
        //  let piece = name[1]
         
        //  if(!uniformSet[j].includes(piece)) {
        //     console.log(piece, uniformSet)
        //     let result = company;
        //     return result; 
        // }
    }
  }

return "N/A";
}

console.log(getCompany(uniformSet, uniformPieces));
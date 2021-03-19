//chessBoard

let whiteBlock = "# # # #"
let blackBlock = "# # # #"
let i = 0

for (i = 0; i <=8; i++){
    if (i % 2 === 0){
        console.log(whiteBlock)
    } else {
        console.log(blackBlock)
    }
}
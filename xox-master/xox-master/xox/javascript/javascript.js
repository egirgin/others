var count = 0;
var finished = false;
arr = [0,0,0,0,0,0,0,0,0,0];
function change(id){
    if(finished){
        return;
    }
    if(arr[Number(id)]!=0){
        return;
    }
    count++;
    if(count%2!=0){
        document.getElementById(id).src = 'images/x.png';
        arr[Number(id)] = "X";
    }
    else{
        document.getElementById(id).src = 'images/o.jpg';
        arr[Number(id)] = "O";
    }
    x = checkFinish(arr);
    if(x==1){
        document.getElementById("win").innerHTML = 'Player 1 WON';
        finished=true;
    }else if (x==2) {
        document.getElementById("win").innerHTML = 'Player 2 WON';
        finished=true;
    }
}

function checkFinish(arr){
    if(arr[1] == arr[2] && arr[2] == arr[3] && arr[3] != 0){
        if(arr[1] == "X"){
            return 1;
        }return 2;
    }
    if(arr[4] == arr[5] && arr[5] == arr[6] && arr[6] != 0){
        if(arr[4] == "X"){
            return 1;
        }return 2;
    }
    if(arr[7] == arr[8] && arr[8] == arr[9] && arr[9] != 0){
        if(arr[7] == "X"){
            return 1;
        }return 2;
    }
    if(arr[1] == arr[5] && arr[5] == arr[9] && arr[9] != 0){
        if(arr[1] == "X"){
            return 1;
        }return 2;
    }
    if(arr[3] == arr[5] && arr[5] == arr[7] && arr[7] != 0){
        if(arr[3]=="X"){
            return 1;
        }
        return 2;
    }
    if(arr[1] == arr[4] && arr[4] == arr[7] && arr[7] != 0){
        if(arr[1]=="X"){
            return 1;
        }
        return 2;
    }
    if(arr[2] == arr[5] && arr[5] == arr[8] && arr[8] != 0){
        if(arr[2]=="X"){
            return 1;
        }
        return 2;
    }
    if(arr[3] == arr[6] && arr[6] == arr[9] && arr[9] != 0){
        if(arr[3]=="X"){
            return 1;
        }
        return 2;
    }
    return 0;

}

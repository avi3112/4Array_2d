// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.


function arrangeCoins(n) {
    let i = 1;
    let coins = 0;
    let cnt = 0;
    
    while((n-coins) >= i) {
        coins += i;
        i++;
        cnt++;
    }
    return cnt;
};

const result= arrangeCoins(8)
console.log(result)
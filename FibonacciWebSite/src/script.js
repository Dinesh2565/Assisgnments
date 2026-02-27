function fibUsingRecursion(n, a = 0, b = 1, result) {
    //     if (n === 0) {
    //         return result;
    //     }
    //     result.push(a);
    //     return fibUsingRecursion(n - 1, b, a + b, result);
    // }
    // let intervelId;
    // const button = document.getElementById("button");
    // const stopButton = document.getElementById("stop");
    // button.addEventListener("click", () => {
    //     const input = document.getElementById("input").value;
    //     const resultDiv = document.getElementById("result");
    //     resultDiv.innerHTML = "";
    //     if (input === "") {
    //         resultDiv.innerHTML = "Please enter a number";
    //         return;
    //     }
    //     const n = input;`~
    //     if (n < 0 || isNaN(n)) {
    //         resultDiv.innerHTML += "Please enter a valid positive integer";
    //         return;
    //     }
    //     let a = 0, b = 1;
    //     resultDiv.innerHTML = "Fibonacci Sequence: ";
    //     let index = 0;
    //     // intervalId = setInterval(() => {
    //     //     if (index >= n) {
    //     //         clearInterval(intervalId);
    //     //         return;
    //     //     }
    //     //     let temp = a + b;
    //     //     a = b;
    //     //     b = temp;
    //     //     resultDiv.innerHTML += temp + " ";
    //     //     index++;
    //     // }, 1000);



    // });

    // stopButton.addEventListener("click", () => {
    //     clearInterval(intervalId);
    //     const input = document.getElementById("input").value = "";
    //     input.value = "";
    // }
    // );



    // const start = document.getElementById("button")
    // start.addEventListener('click', () => {
    //     const resultDiv = document.getElementById("result")
    //     resultDiv.innerHTML = ""
    //     let index = 0;

    //     let a = 0, b = 1;
    //     let sum = a + b;
    //     setInterval(() => {
    //         resultDiv.innerHTML += " " + sum
    //         console.log(sum)
    //     }, 2000);
    //     a = b;
    //     b = sum;
    //     index++;

    // })



    let intervalId;

    function generateFib(n) {
        let a = 0, b = 1;
        const arr = [];

        for (let i = 0; i < n; i++) {
            arr.push(a);
            a = b;
            b = a + b;
        }

        return arr;
    }

    function showFib(n) {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "";

        const fibArray = generateFib(n);
        let index = 0;

        intervalId = setInterval(() => {
            if (index >= fibArray.length) {
                clearInterval(intervalId);
                return;
            }

            resultDiv.innerHTML += fibArray[index] + " ";
            index++;
        }, 2000);
    }
}

showFib(10);
function nFibonacci(num) {
    if (num < 2) {
        return num;
    } else {
        return nFibonacci(num - 1) + nFibonacci(num - 2);
    }

}

nFibonacci(10)
let count = 0
function prime(numbe) {
    for (j = 2; j <= numbe; j++) {
        for (i = 1; i <= j; i++) {
            if (j % i == 0)
                count++

        }

        if (count == 2)

            console.log(j)
        count = 0



    }
}
prime(40)










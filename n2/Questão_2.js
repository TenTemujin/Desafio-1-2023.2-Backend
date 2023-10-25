function convertToRoman(num) {
    const values = {"":0, I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9};
    const notroman = [];
    const numasroman = [];
    notroman.push(num % 10, num % 100, num % 1000, num % 10000);
    notroman[3] = (notroman[3] - notroman[2])/1000; 
    notroman[2] = (notroman[2] - notroman[1])/100; 
    notroman[1] = (notroman[1] - notroman[0])/10; 
    for (var i in values) {
        if (values[i] == notroman[0]) {
            numasroman.push(i);
        } 

    } if (notroman[1] < 4) {
        numasroman.push("X".repeat(notroman[1]));
    } else if (notroman[1] == 4) {
        numasroman.push("XL");
    } else if (notroman[1] < 9) {
        numasroman.push("L" + "X".repeat(notroman[1] - 5));
    } else {
        numasroman.push("XC");

    } if (notroman[2] < 4) {
        numasroman.push("C".repeat(notroman[2]));
    } else if (notroman[2] == 4) {
        numasroman.push("CD");
    } else if (notroman[2] < 9) {
        numasroman.push("D" + "C".repeat(notroman[2] - 5));
    } else {
        numasroman.push("CM");
    } 

    // greater than 1000

    numasroman.push("M".repeat(notroman[3]));
    return numasroman.reverse().join("");
}

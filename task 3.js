let compile = [];
Sort = (arg) => {
    for (i=1; i<=arg; i++) {
        if (i%2===0 && i%3===0 && i%5===0) {
            compile.push('yu-gi-oh');
        } else if (i%2===0 && i%3===0) {
            compile.push('yu-gi');
        } else if (i%2===0 && i%5===0) {
            compile.push('yu-oh');
        } else if (i%3===0 && i%5===0) {
            compile.push('gi-oh');
        } else if (i%2===0) {
            compile.push('yu');
        } else if (i%3===0) {
            compile.push('gi');
        } else if (i%5===0) {
            compile.push('oh')
        } else {
            compile.push(i);
        }
    }
    console.log(compile);
}
Sort(5000); //Hehehehehe
Sort(100);
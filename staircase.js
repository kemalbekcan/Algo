function staircase(n) {
  /* 
    n = 4
       #
      ##
     ###
    ####
  */
  var space = "";
  for (var i = n - 1; i >= 0; i--) {
    space = " ".repeat(i) + "#".repeat(Math.abs(n - i));
    console.log(space);
  }
}

function main() {
  staircase(4);
}

main();

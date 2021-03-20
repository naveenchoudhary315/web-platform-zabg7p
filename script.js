var acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];

//Sort
//Case--> 1
function Part2_1(acctData, balance) {
  //Code used to return account no
  for (index = 0; index < acctData.length; ++index) {
    console.log(acctData[index]["acctNum"]);
  }
  //code used to sort on acc no
  var arr = new Array();
  for (index = 0; index < acctData.length; ++index) {
    var data = acctData[index]["acctNum"];
    arr.push(data);
    var data = arr.sort();
    if (index == acctData.length - 1) {
      console.log(data);
    }
  }
}

//Method used to filter on Name
//Case --> 2.a,b,
function FilterByName(Name) {
  Name = "Alice";
  var res = acctData.filter(function(test) {
    return test.user == Name;
  });
  console.log(res);
}

//Method used to filter on acctNum
//Case --> 2.C
function FilterByAccNum() {
  Name = "Alice";
  var res = acctData.filter(function(test) {
    return test.user == Name;
  });
  console.log(res);
}

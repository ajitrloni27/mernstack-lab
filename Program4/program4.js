//var student = new Object();
//student.name = "Ajit";
//student.grade = 80;
//student.subjects = ["aI", "ML"];
//student.display = function(){
    //console.log();
//}
var student = {
   name : "Ajit",
   grade : 20,
   subjects : [" DBMS ", " JAVA ", " MERN "],
   displayinfo : function () {
    console.log("Student details");
    console.log("Name:  "+ this.name);
    console.log("Grade :  "+ this.grade);
    console.log("Subjects :  "+ this.subjects.join(","));
    //console.log(displayinfo());

   }
};
console.log(student.displayinfo());
student.passed = student.grade >= 40;
console.log("status  : "+ student.passed);

var keys = Object.keys(student);
console.log("\n");
console.log("\n");
console.log("\nIterating using simple for loop ");
for(var i=0 ; i<keys.length; i++){
    var key = keys[i];
    var value = student[key];

    if(typeof value == "function"){
        console.log(key +" : Function or Method");
    }
else{
    console.log(key+" : "+ value);
}
}
//console.log(keys);
//console.log("Student Details : ",Student);
//console.log("Student Details");

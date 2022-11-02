class Student{
    rollNumber:String;
    name:String;
    marksInEnglish:number;
    marksInMaths:number;
    marksInScience:number;

    assignValues(rollNumber:String, name:String, marksInEnglish:number, marksInScience:number, marksInMaths:number):void{
        this.rollNumber = rollNumber;
        this.name = name;
        this.marksInEnglish = marksInEnglish;
        this.marksInMaths = marksInMaths;
        this.marksInScience = marksInScience;
    }

    getTotalMarksAndPercentage():void{
        var totalMarks = this.marksInEnglish + this.marksInMaths + this.marksInScience;
        var percentage = (totalMarks/300)*100;
        console.log("Student with name: "+this.name+" got total marks: "+totalMarks+" and percentage: "+percentage+"%");
    }
}

let student = new Student();
var rollNumber = "18121A05N9";
var studentName = "Pavanteja";
var marksInEnglish = 90;
var marksInMaths = 99;
var marksInScience = 100;
student.assignValues(rollNumber, studentName, marksInEnglish, marksInScience, marksInMaths);
student.getTotalMarksAndPercentage();
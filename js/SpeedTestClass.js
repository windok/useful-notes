function SpeedTest(testImplement, testParams, repetitions){
    this.testImplement = testImplement;
    this.testParams = testParams;
    this.repetitions = repetitions;
    this.average = 0;
}
 
SpeedTest.prototype = {
    startTest : function(){
        var beginTime, endTime, sumTimes = 0,
            i, x;
        for (i = 0, x = this.repetitions; i < x; i++){
            beginTime = +new Date();
            this.testImplement(this.testParams);
            endTime = +new Date();
            sumTimes += endTime - beginTime;
        }
        this.average = sumTimes / this.repetitions;
        return console.log("Average execution: " + this.average + " for " + this.repetitions + " repetitions");
    }
}
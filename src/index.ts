import { simpleLog } from "./logger/decorator";

class Test {
        @simpleLog()
        TTTest(){
                console.log('damnn test')
        }
}

const test =  new Test();
test.TTTest();
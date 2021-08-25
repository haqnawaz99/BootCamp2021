
export class Task{
    public constructor (public taskID: number, public task: string, public done: boolean = false ){

    }

    printTask():void{
    console.log(`The  id is ${this.task} \n
    The  task is ${this.taskID} \n
    The  completed is ${this.done} \n`)
}

}


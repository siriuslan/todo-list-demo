export class ToDoContentTooShort extends Error {
    constructor(errMsg: string) { 
        super(errMsg)
    }
}
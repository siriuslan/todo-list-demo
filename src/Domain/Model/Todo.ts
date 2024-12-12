export default class Todo {
    constructor(
        private _id: string,
        private _content: string,
        private _isCompleted: boolean
    ) {}

    get id(): string {
        return this._id;
    }

    get content(): string {
        return this._content;
    }

    get isCompleted(): boolean {
        return this._isCompleted;
    }

    markAsComplete(): Todo {
        return new Todo(this.id, this.content, true);
    }
}
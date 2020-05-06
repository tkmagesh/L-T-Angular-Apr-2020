import { Component, EventEmitter, Output } from '@angular/core';

import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/bugOperations.service';

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" (input)="newBugName = $event.target.value" >
            <span> [ {{newBugName.length}} ] </span>
            <input type="button" value="Add New" (click)="onAddNewClick()">
        </section>
    `
})
export class BugEditComponent{
    newBugName: string = '';

    @Output()
    public onBugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations : BugOperationsService){

    }
    onAddNewClick() {
        const newBug: Bug = this.bugOperations.createNew(this.newBugName);
        //this.bugs.push(newBug);
        //this.bugs = [...this.bugs, newBug];
        this.onBugCreated.emit(newBug);
    }

}
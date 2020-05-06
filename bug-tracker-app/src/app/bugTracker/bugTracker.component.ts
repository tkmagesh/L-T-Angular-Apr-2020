import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];
    //closedCount : number = 0;

    bugSortAttr : string = '';
    bugSortDesc : boolean = false;

    

    constructor(private bugOperations : BugOperationsService){
        this.bugs = this.bugOperations.getAll();
    }

    onNewBugCreatedHandler(bug : Bug){
        this.bugs = [ ...this.bugs, bug ];
    }

    onBugNameClick(bugToToggle : Bug){
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugOperations.remove(bugToRemove);
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onRemoveClosedClick() : void {
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.onRemoveClick(closedBug));
    }
}
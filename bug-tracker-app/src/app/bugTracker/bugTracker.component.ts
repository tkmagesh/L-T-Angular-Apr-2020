import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];
    //closedCount : number = 0;

    onAddNewClick(bugName : string){
        const newBug: Bug = { name : bugName , isClosed :false};
        this.bugs.push(newBug);
    }

    onBugNameClick(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
        //this.closedCount = this.bugs.reduce((result, bug) => bug.isClosed ? ++ result : result, 0);
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onRemoveClosedClick() : void {
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount() : number {
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}
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

    newBugName : string = '';

    constructor(private bugOperations : BugOperationsService){
        this.bugs.push(this.bugOperations.createNew('Server communication failure'));
        this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
        this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
        this.bugs.push(this.bugOperations.createNew('Application not responding'));
    }

    onAddNewClick(){
        const newBug: Bug = this.bugOperations.createNew(this.newBugName);
        //this.bugs.push(newBug);
        this.bugs = [...this.bugs, newBug];
    }

    onBugNameClick(bugToToggle : Bug){
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
        
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onRemoveClosedClick() : void {
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    //convert the following into a pipe 'closedCountPipe'
    getClosedCount() : number {
        console.log('getClosedCount triggered');
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}
import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
//based on the bugOperations ( which is asynchronous returning an observable)
export class BugTrackerComponent implements OnInit {
    bugs: Bug[] = [];
    //closedCount : number = 0;

    bugSortAttr: string = '';
    bugSortDesc: boolean = false;

    ngOnInit(){
        this.bugOperations
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
    }

    constructor(private bugOperations: BugOperationsService) {
        
    }

    onNewBugCreatedHandler(bug: Bug) {
        this.bugs = [...this.bugs, bug];
    }

    onBugNameClick(bugToToggle: Bug) {
        this.bugOperations
            .toggle(bugToToggle)
            .subscribe(toggledBug => 
                this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug)
            );
    }

    onRemoveClick(bugToRemove: Bug) {
        this.bugOperations
            .remove(bugToRemove)
            .subscribe(_ => this.bugs = this.bugs.filter(bug => bug !== bugToRemove));
        
    }

    onRemoveClosedClick(): void {
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.onRemoveClick(closedBug));
    }
}


//based on the bugOperations (which is synchronous)
/* export class BugTrackerComponent{
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
} */
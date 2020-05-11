import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
//import { BugStorageService } from './bugStorage.service';
import { BugApiService } from "./bugApi.service";
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService {

    constructor(private bugApi: BugApiService) {

    }

    //private bugStorage : BugStorageService = new BugStorageService();

    getAll(): Observable<Bug[]> {
        return this.bugApi.getAll();
    }
    createNew(bugName: string): Observable<Bug> {
        const newBugData = {
            id: 0,
            name: bugName,
            isClosed: false,
            createdAt: new Date()
        };
        return this.bugApi.save(newBugData);
    }

    toggle(bugToToggle: Bug): Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
    }

    remove(bug: Bug) : Observable<any>{
        return this.bugApi.remove(bug);
    }
}

//the below is based on bugStorage Service
/* export class BugOperationsService {

    constructor(private bugStorage : BugStorageService){

    }

    //private bugStorage : BugStorageService = new BugStorageService();

    getAll() : Bug[]{
        return this.bugStorage.getAll();
    }
    createNew(bugName : string) : Bug{
        const newBugData = { 
            id : 0, 
            name : bugName, 
            isClosed : false, 
            createdAt : new Date() 
        };
        return this.bugStorage.save(newBugData);
    }

    toggle(bugToToggle : Bug ) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugStorage.save(toggledBug);
    }

    remove(bug : Bug){
        this.bugStorage.remove(bug);
    }
} */
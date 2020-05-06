import { Injectable } from "@angular/core";
import { Bug } from '../models/Bug';

@Injectable()
export class BugStorageService{
    private _currentBugId : number = 0;
    
    //private storage : Storage = window.localStorage;

    constructor(private storage : Storage){

    }

    save(bug : Bug) : Bug {
        if (bug.id === 0){
            bug.id = ++this._currentBugId;
        }
        this.storage.setItem(`bug-${bug.id}`, JSON.stringify(bug));
        return bug;
    }

    getAll() : Bug[]{
        const bugs : Bug[] = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            const key = this.storage.key(index);
            if (key.startsWith('bug-')){
                const rawData = this.storage.getItem(key),
                    bug = JSON.parse(rawData);
                bugs.push(bug);
                if (this._currentBugId < bug.id)
                    this._currentBugId = bug.id;
            }
        }
        return bugs;
    }

    remove(bug : Bug){
        this.storage.removeItem(`bug-${bug.id}`);
    }
}
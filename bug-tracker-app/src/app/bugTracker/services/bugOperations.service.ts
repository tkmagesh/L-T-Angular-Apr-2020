import { Bug } from '../models/Bug';

export class BugOperationsService {
    createNew(bugName : string) : Bug{
        const newBug = { name : bugName, isClosed : false };
        return newBug;
    }

    toggle(bugToToggle : Bug ) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return toggledBug;
    }
}
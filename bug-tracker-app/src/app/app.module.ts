import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';

import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';
import { ElapsedPipe } from './bugTracker/pipes/elapsed.pipe';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';


function localStorageFactory(){
  //some logic for creating the object goes here
  return window.localStorage;
}


@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , ClosedCountPipe
    , TrimTextPipe
    , SortPipe
    , ElapsedPipe
  ],
  imports: [
    BrowserModule
  ],
  /* providers: [
    BugOperationsService
    , BugStorageService
  ], */
  providers : [
    { provide : BugOperationsService, useClass : BugOperationsService },
    { provide : BugStorageService, useClass : BugStorageService },
    //{ provide : Storage, useValue : window.localStorage}
    { provide :Storage, useFactory : localStorageFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/dataService';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredStates = new BehaviorSubject<any[]>([]);

  constructor(private dataService: DataService) {
  }

  getData(searchTxt: string) {
    this.dataService.queryData({term: searchTxt})
      .then(res => {
        const data = res.json();

        this.filteredStates.next(data);
      });
  }

  ngOnInit() {
    this.stateCtrl.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(val => {
        this.getData(val);
      });
  }
}

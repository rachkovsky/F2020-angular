import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString: string = '';
  filterResult?: any[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
  }

  onInput() {
    this.api.getData()
    .subscribe((res: any[]) => {
      this.filterResult = res.filter((record) => {
        return record.name.includes(this.searchString);
      });
      console.log(this.filterResult);
    });
  }

}

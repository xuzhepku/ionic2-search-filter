import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Data} from "../../providers/data/data";
import {Control} from "@angular/common";
import 'rxjs/add/operator/debounceTime';// 必须要加, 否则debounceTime不生效

@Component({
    templateUrl : 'build/pages/home/home.html',
    providers   : [Data]
})
export class HomePage {
    searchTerm: string = '';
    items: any;
    searchControl: Control;
    searching: any = false;

    constructor(public navCtrl: NavController, private dataService: Data) {
        this.searchControl = new Control();
    }

    ionViewLoaded() {
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
        });
    }

    onSearchInput() {
        this.searching = true;
    }

    setFilteredItems() {
        this.items = this.dataService.filterItems(this.searchTerm);

    }
}

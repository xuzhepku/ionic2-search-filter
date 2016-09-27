import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Data} from "../../providers/data/data";

@Component({
    templateUrl : 'build/pages/home/home.html',
    providers   : [Data]
})
export class HomePage {
    searchTerm: string = '';
    items: any;

    constructor(public navCtrl: NavController, private dataService: Data) {
    }

    ionViewLoaded() {
        this.setFilteredItems();
    }

    setFilteredItems() {
        this.items = this.dataService.filterItems(this.searchTerm);
    }
}

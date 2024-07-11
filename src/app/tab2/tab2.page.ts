import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ ExploreContainerComponent, IonicModule, CommonModule, FormsModule]
})


  export class Tab2Page {
    tableauNonTrie: string[] = ["Pomme", "Fraise", "Banane", "Framboise"];
    tableauTrie: string[] = [];
    elementrecherche: any[] = [
      {name: "Pomme", description:""}, 
      {name:"Fraise", description: ""}, 
      {name: "Banane", description: ""}, 
      {name: "Framboise", descrption:""}
    ];
    showButton: boolean = true; // Déclaration et initialisation de showButton
    searchItem: string = "";
    mySearch : string[] = this.tableauNonTrie;

    constructor() {}
  
    trierTableauDeChaines(tableau: string[]): string[] {
      return tableau.sort((a, b) => a.localeCompare(b));
    }
  
    trierEtAfficher(): void {
      this.tableauTrie = this.trierTableauDeChaines([...this.mySearch]);
      this.showButton = false; // Cache le bouton après le clic
    }
  
    getColorClass(item: string): string {
      switch (item) {
        case 'Pomme':
          return 'green';
        case 'Fraise':
          return 'blue';
        case 'Banane':
          return 'red';
        case 'Framboise':
          return 'light-gray';
        default:
          return '';
      }
    }

    ajouterElement():void {
      //console.log("first")
      this.mySearch.push(this.version);
    }
  
    version: string = "";

    
  
    filterItems() {
      this.mySearch = this.tableauNonTrie.filter(item =>
         item.toLowerCase().includes(this.searchItem.toLowerCase()) 
      );
      //console.log()
    }

  }
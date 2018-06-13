import { DataService } from './services/data.service'
import { Component, ViewChild } from '@angular/core';
import { TuloksetComponent } from './tulokset/tulokset.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tosi super';
  tekstii = 'Hieman haroa';
  supersankari: string;
  @ViewChild(TuloksetComponent) tulokset: TuloksetComponent;
  
  constructor(private dataService: DataService) { }
  
  onValmis($event) {
    this.supersankari = $event.supersankari;
    this.dataService.postSupersankari(
      $event.nimi,
      $event.supersankari
    ).then(function() {
      console.log("Tallennus onnistui");
    });
  }

  onValinta($event) {
    this.dataService.postSupersankari(
      $event.nimi,
      $event.sankari
    ).then(() => {
      this.supersankari = $event.supersankari;
      this.tulokset.paivitaTulokset();
    }).catch((err) => {
      console.log(err);
    });
  }

  painallus() {
    this.tekstii = this.tekstii + this.tekstii;
  }
}

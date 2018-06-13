import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lomake',
  templateUrl: './lomake.component.html',
  styleUrls: ['./lomake.component.css']
})
export class LomakeComponent implements OnInit {
  nimi: string;
  supersankari: string;
  vaihtoehdot = [ "Superhessu", "Wonder Woman", "Teräsmies" ];

  @Output() valmis = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  laheta() {
    console.log("Lomakkeen tiedot pitäis lähettää johonkin");
    console.log("Nimi:", this.nimi);
    this.valmis.emit({
      nimi: this.nimi,
      supersankari: this.supersankari
    });
  }
}

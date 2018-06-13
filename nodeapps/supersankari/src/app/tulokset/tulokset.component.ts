import { DataService } from '../services/data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tulokset',
  templateUrl: './tulokset.component.html',
  styleUrls: ['./tulokset.component.css']
})

export class TuloksetComponent implements OnInit {

  @Input() supersankari;
  tuloslista: any[];

  labels;
  datasets;
  /*
  labels = ["A", "B"];
  datasets = [{
    data: [3, 7],
    label: "numerot"
  }];
  */

  options = {
    maintainAspectRatio: false,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.paivitaTulokset();
  }

  public paivitaTulokset() {
    this.dataService.haeTulokset().then((response) => {
      this.asetaTulokset(response.json());
    });
  }

  /*
  private asetaTulokset(tulokset) {
    this.tuloslista = [];
    for (let t in tulokset) {
      this.tuloslista.push([t, tulokset[t]]);
    }
  }
  */
  private asetaTulokset(tulokset) {
    let newLabels: string[] = [];
    let newData: number[] = [];
    for (let k in tulokset) {
      newLabels.push(k);
      newData.push(tulokset[k]);
    }
    this.datasets = [
      {data: newData, label: "Suosikit"}
    ];
    this.labels = newLabels;
  }
}

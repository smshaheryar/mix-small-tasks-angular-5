import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServerService} from "./server.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
//export class AppComponent {
  title = 'app';
  results = [];
  lbltitle = '';
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  private http: any;


  constructor(private serverService: ServerService) {
  }
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  ngOnInit()  {

  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  makeRequest () {

      this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(response => {
        console.log(response);
        console.log('wt');
        //this.results = JSON.stringify(response);

        const userStr = JSON.stringify(response);

        /*JSON.parse(userStr, (`ey, value) => {
         if (typeof value === 'string') {
         this.results.push(value.toUpperCase());
         }
         this.results.push(value);
         });*/

        JSON.parse(userStr, (key, value) => {
          // if (key === 'title') {
          //   this.results.push(value.toUpperCase());
          //   this.lbltitle = value.toUpperCase();
          // }
          this.results.push(value);
        });


      });

  }

}

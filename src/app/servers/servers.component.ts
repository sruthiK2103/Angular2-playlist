import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*template: `<h2>
              <app-server></app-server>
              <app-server></app-server>
              </h2>`, */
  templateUrl: "./servers.component.html",
  styles: [`
  h2 {
    color:blue;
  }
  `]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "TestServer";
  serverCreated = false;
  servers = ["TestServer", "TestServer2"];
  constructor () {
      setTimeout( ()=> {
          this.allowNewServer = true;
      }, 2000);
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created and it's name is" +this.serverName;
  }

  onUpdateServerName(event:Event) {
    //explicit casting to tell it is input element
    this.serverName = (<HTMLInputElement>event.target).value;


  }

  ngOnInit() {
  }

}

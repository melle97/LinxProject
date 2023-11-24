import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  // collapsed = true;

  constructor(private observer: BreakpointObserver) {

  }

  screenSize: any = "side";

  updateModo() {
    (window.innerWidth <= 850) ? this.screenSize = "over" : this.screenSize = "side";
  }

  ngAfterViewInit (){




    // this.observer.observe('[max-width: 800px]').subscribe((res) =>{
    //   if (res.matches){
    //     this.sidenav.mode ='over';
    //     this.sidenav.close();
    //   } else {
    //     this.sidenav.mode ='side';
    //     this.sidenav.open();
    //   }
    // })
  }



  ngOnInit(): void {
  }

}

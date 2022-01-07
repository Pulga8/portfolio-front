import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() login: string ="";
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.btnClick.emit();
  }

}

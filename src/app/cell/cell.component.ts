import { Component, Input } from '@angular/core';

@Component({
  selector: 'cell-box',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  @Input() content = "";
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  cells!: any[];
  changePlayer: number = 0;

  newGame() {
    this.cells = Array(9).fill(null);
  }

  playerChange(index: number) {
    if (!this.cells[index]) {
      if (this.changePlayer % 2 === 0) {
        this.cells[index] = 'X';
        this.changePlayer++;
      } else {
        this.cells[index] = 'O';
        this.changePlayer++;
      }
    }
  }
}

// hello.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true, // <--- important
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent { }

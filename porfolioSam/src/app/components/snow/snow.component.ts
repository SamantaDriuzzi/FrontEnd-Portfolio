import { Component, OnInit } from '@angular/core';

interface Snowflake {
  top: string;
  left: string;
  delay: string;
}

@Component({
  selector: 'app-snow',
  templateUrl: './snow.component.html',
  styleUrls: ['./snow.component.css'],
})
export class SnowComponent implements OnInit {
  snowflakes = Array.from({ length: 50 }).map((_, index) => ({
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    delay: `${index * 0.1}s`,
  }));

  constructor() {}

  ngOnInit(): void {}
}

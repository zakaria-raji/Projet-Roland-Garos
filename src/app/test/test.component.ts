import { Component, OnInit } from '@angular/core';
import {TestSerice} from "./test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests;
  constructor(service: TestSerice) { // creating a dependency === instead of writing let service = new TestSerice();
    this.tests = service.getTests();
  }

  ngOnInit(): void {
  }

}

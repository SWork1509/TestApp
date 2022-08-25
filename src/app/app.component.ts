import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TestApp';

  ngOnInit() {
    // Swal.fire('Oops...', 'Something went wrong!', 'error');
  }
}

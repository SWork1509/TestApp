import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-schematic-nav',
  templateUrl: './schematic-nav.component.html',
  styleUrls: ['./schematic-nav.component.scss']
})
export class SchematicNavComponent {

  navListItems = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Customers (Lazy-Loaded)', link: '/customers' },
    { name: 'Custom Decorators', link: '/decorators' },
    { name: 'Component Communication', link: 'communication' },
    { name: 'Zones ', link: 'zones' },
    { name: 'NGRX (Lazy-Loaded)', link: 'ngrx' }
  ]


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}

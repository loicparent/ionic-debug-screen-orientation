import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
	private platform: Platform,
  ) {
	this.platform.ready().then(() => this.initializeApp());
  }

  initializeApp() {
	// condition browser
	if( !this.platform.is('desktop') && !this.platform.is('mobileweb')) {
		StatusBar.setStyle({
			style: Style.Dark
		});

		if( this.platform.is('android') ) {
			StatusBar.setOverlaysWebView({
				overlay: true
			});
			// StatusBar.setBackgroundColor({
			// 	color: '#25202044' // If this line is enable, the style is not always correct.
			// });
		}
	}
  }
}

import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docApp';
  docSrc="https://drive.google.com/file/d/1S8gJeCD_vDjbM2JKk8Ojkt-6Uj_fdn_NQPdzHeQnn0Y/view?pli=1"
}

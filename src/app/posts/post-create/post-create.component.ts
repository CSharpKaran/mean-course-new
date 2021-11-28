import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  txtAreaValue = '';
  addedValue = 'No Data!';
  onAddPost() {
    this.addedValue = this.txtAreaValue;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-01';
  name: string="MEAN stack"
  src: string="../../../assets/images/mean_image.jpg"
  changeimage(){
    if (this.name== "MEAN stack"){
      this.name= "MERN stack"
      this.src="../../../assets/images/mern_image.png"
    }
    else if(this.name == "MERN stack"){
      this.name="MEAN stack"
      this.src="../../../assets/images/mean_image.jpg"
    }
  }
}

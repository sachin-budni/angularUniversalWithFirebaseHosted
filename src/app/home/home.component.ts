import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    "https://cdn-images-1.medium.com/max/1600/1*P7x-_0XfQz6CVmMY_QAv0w.png",
    "https://gccontent.blob.core.windows.net/gccontent/blogs/grapecity/20190318-angular-roadmap-the-death-and-life-of-angular/aaa.png",
    "https://miro.medium.com/max/1200/1*1Dx9Yl54R7EZ0Cr4w6TxlA.png",
    "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/angular/tutorials/main/img/6.svg",
    "http://ng-bootstrap.com/img/logo-stack.png",
    "https://miro.medium.com/max/1050/1*B8OUb8_SCmO-Xn6xCqIV1w.png",
    "https://oasisdigital.com/images/tech-logos/ngrx.svg",
    "https://camo.githubusercontent.com/84fe5f1dac571664269fb219ab48f6414e002327/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f616e67756c61722d6d6174657269616c2d657874656e73696f6e732f6c696e6b2d707265766965772f6173736574732f616e67756c61722d6d6174657269616c2d657874656e73696f6e732d6c6f676f2e706e67",
    "https://atlassian.gallerycdn.vsassets.io/extensions/atlassian/atlascode/1.4.0/1558123121475/Microsoft.VisualStudio.Services.Icons.Default",
    "https://user-images.githubusercontent.com/7585388/27636865-e6505c60-5c0d-11e7-92d1-1adc1ac81a11.png",
    "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
  ]

  constructor() { }

  ngOnInit() {
  }

}

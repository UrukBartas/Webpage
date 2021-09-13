import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GameComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    let win = window as any;
    console.log(win.SendMessageToWeb);
    console.log(win.receiveMessageFromUnity)
    console.log(win)
    var container:any = document.querySelector("#unity-container");
    var canvas:any = document.querySelector("#unity-canvas");
    var loadingBar:any = document.querySelector("#unity-loading-bar");
    var progressBarFull:any = document.querySelector("#unity-progress-bar-full");


    var buildUrl = "assets/uruk-game/Build";
    var loaderUrl = buildUrl + "/Build-Uruk.loader.js";
    var config = {
      dataUrl: buildUrl + "/Build-Uruk.data",
      frameworkUrl: buildUrl + "/Build-Uruk.framework.js",
      codeUrl: buildUrl + "/Build-Uruk.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "Uruk Bartas Game",
      productVersion: "1.0",
    };

    // By default Unity keeps WebGL canvas render target size matched with
    // the DOM size of the canvas element (scaled by window.devicePixelRatio)
    // Set this to false if you want to decouple this synchronization from
    // happening inside the engine, and you would instead like to size up
    // the canvas DOM size and WebGL render target sizes yourself.
    // config.matchWebGLToCanvasSize = false;

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Mobile device style: fill the whole browser client area with the game canvas:

      var meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
      document.getElementsByTagName('head')[0].appendChild(meta);
      container.className = "unity-mobile";

      // To lower canvas resolution on mobile devices to gain some
      // performance, uncomment the following line:
      // config.devicePixelRatio = 1;

      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    } else {
      // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

      canvas.style.width = (window.innerWidth * 0.80) + 'px';
      canvas.style.height = (window.innerHeight ) + 'px';
    }

    loadingBar.style.display = "block";

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress:any) => {
        progressBarFull.style.width = 100 * progress + "%";
      }).then((unityInstance:any) => {
        loadingBar.style.display = "none";
      setTimeout(() => {
        unityInstance.SendMessage('Controller', 'HelloStringIntern', "Fill de puta");
      }, 2000);
      //  unityInstance.SetFullscreen(1);
      }).catch((message:any) => {
        alert(message);
      });
    };
    document.body.appendChild(script);
  }
}

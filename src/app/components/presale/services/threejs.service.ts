import { Injectable, ElementRef, NgZone } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class ThreeService {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private smokeParticles: THREE.Mesh[] = [];
  private resizeListener!: () => void;

  constructor(private ngZone: NgZone) {}

  initialize(container: ElementRef<HTMLDivElement>): void {
    // Create the scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    // Create the camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.nativeElement.clientWidth /
        container.nativeElement.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Create the renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(
      container.nativeElement.clientWidth,
      container.nativeElement.clientHeight
    );
    container.nativeElement.appendChild(this.renderer.domElement);

    // Add lighting
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 5, 10);
    this.scene.add(pointLight);

    // Add centered light
    const centeredLight = new THREE.PointLight(0xffffff, 1, 100);
    centeredLight.position.set(0, 0, 0);
    this.scene.add(centeredLight);

    // Load fog texture
    const loader = new THREE.TextureLoader();
    loader.load('assets/presale/fog.png', (texture) => {
      // Create smoke particles using the texture
      this.createSmoke(texture);
    });

    this.resizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.resizeListener);

    this.animate();
  }

  private createSmoke(texture: THREE.Texture) {
    const smokeMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const smokeGeometry = new THREE.PlaneGeometry(10, 10);
    for (let i = 0; i < 40; i++) {
      const particle = new THREE.Mesh(smokeGeometry, smokeMaterial);
      particle.position.set(
        Math.random() * 20 - 10,
        Math.random() * 10 - 10,
        Math.random() * 20 - 10
      );
      particle.rotation.z = Math.random() * Math.PI * 2;
      this.scene.add(particle);
      this.smokeParticles.push(particle);
    }
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate = () => {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(this.animate);
      this.smokeParticles.forEach((particle) => {
        particle.rotation.z += 0.002;
      });
      this.renderer.render(this.scene, this.camera);
    });
  };
}

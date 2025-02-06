import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
const light = new THREE.AmbientLight(0xFFFFFF)
const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.0001, 10000);
const controls = new OrbitControls(camera, renderer.domElement);
let tetrahedron = null;


controls.update();
camera.position.set( 0, 0, 2 );
scene.add(light);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  tetrahedron.rotation.y += 0.01;
  renderer.render(scene, camera);
}

loader.load(
  "public/misumi_uika.glb",
  function(gltf) {
    tetrahedron = gltf.scene;
    tetrahedron.rotation.x += 3.4;
    scene.add(tetrahedron);
    renderer.setAnimationLoop( animate );
  },
  undefined,
  function(error) {
    console.error(error);
  }
);

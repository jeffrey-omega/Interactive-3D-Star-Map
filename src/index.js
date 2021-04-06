import style from './main.css'
import Scene from './js/scene'
import * as THREE from 'three';

const mouse = new THREE.Vector2()
window.addEventListener('mousemove', (event) =>
 {
     mouse.x = event.clientX / window.innerWidth * 2 - 1
     mouse.y = - (event.clientY / window.innerHeight) * 2 + 1
 })

const canvas =  document.querySelector('.canvas');
const scene = new Scene(canvas, mouse)
scene.init()

console.log(scene)



import { VRButton } from './VRButton.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5

var geometry = new THREE.BoxGeometry(1,1,1);
for ( var i = 0; i < geometry.faces.length; i += 2 ) {
    var faceColor = Math.random() * 0xffffff;
    geometry.faces[i].color.setHex(faceColor);
    geometry.faces[i+1].color.setHex(faceColor);
}
var material = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );

var cubes_number = 300
// https://itnext.io/heres-why-mapping-a-constructed-array-doesn-t-work-in-javascript-f1195138615a
var cubes = [...Array(cubes_number)].map(x => new THREE.Mesh(geometry, material));
function addCube(cube){
  cube.position.x = (Math.random() - 0.5) * 33;
  cube.position.y = (Math.random() - 0.5) * 33;
  cube.position.z = (Math.random() - 0.5) * 33;
  scene.add(cube)
}
cubes.forEach(addCube);

var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(0,0,0);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 2, 1000)
light.position.set(0,0,25);
scene.add(light);


var renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#e5e5e5");
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.xr.enabled = true;
console.log("renderer initialised.. appending to DOM")

document.body.appendChild( renderer.domElement );
document.body.appendChild( VRButton.createButton( renderer ));

function rotateCube(cube){
  cube.rotation.x += Math.random() * 0.01;
  cube.rotation.y += Math.random() * 0.01;
}

renderer.setAnimationLoop( function() {
  cubes.forEach(rotateCube)
  renderer.render( scene, camera );
})

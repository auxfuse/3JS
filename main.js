import * as THREE from '../node_modules/three/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    // FOV, Aspect Ratio, Near, Far
    50, window.innerWidth / window.innerHeight, 0.1, 1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

// create cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial(
    { color: 0x1ea5e4 }
);
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments(
    edges, new THREE.LineBasicMaterial(
        { color: 0x000000 }
    )
);

const cube = new THREE.Mesh(geometry, material);

scene.add( cube );
scene.add( line );

camera.position.z = 5;

// render to screen
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();
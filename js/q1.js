var geometry = new THREE.SphereGeometry(3, 50, 50);
var material = new THREE.MeshNormalMaterial();
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 10;

// var animate = function () {
//     requestAnimationFrame( animate );
//     sphere.rotation.y += 0.01;
//     renderer.render( scene, camera );
// };

// animate();

renderer.render( scene, camera );
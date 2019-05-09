var geometry = new THREE.SphereGeometry(3, params.q1.rep, params.q1.rep);
var material = new THREE.MeshNormalMaterial({
    wireframe: true
});
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 10;

controllerq1.onChange(function(value) {
    update(value)
  });


function update(){
    scene.remove(sphere)
    geometry = new THREE.SphereGeometry(3, params.q1.rep, params.q1.rep);
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
}

var animate = function () {
    requestAnimationFrame( animate );
    sphere.rotation.y += 0.01;
    renderer.render( scene, camera );
};

animate();
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00, emissive: 0x2a2a2a } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

/*var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 2, 2, 2 );
scene.add( light );*/

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
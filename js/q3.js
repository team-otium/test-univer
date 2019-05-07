var geometry = new THREE.PlaneGeometry( 500, 500, params.q3.freq, params.q3.freq );
var material = new THREE.MeshLambertMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
plane.rotation.x = Math.PI/2
plane.position.y = 0
scene.add( plane );
let count = 0

for (var i = 0; i < geometry.vertices.length; i++) {
    geometry.vertices[i].z += Math.random() * params.q3.amp - params.q3.amp;
    geometry.vertices[i]._myZ = geometry.vertices[i].z
    plane.geometry.verticesNeedUpdate = true;
}

var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 0, 5, -100 );
scene.add( light );

camera.position.z = 5;
camera.position.y = 5;

controllerq31.onChange(function(value) {
    update(value)
  });

  controllerq32.onChange(function(value) {
    update(value)
  });

  function update(val){
    scene.remove(plane)
    geometry = new THREE.PlaneGeometry( 500, 500, params.q3.freq, params.q3.freq );
    plane = new THREE.Mesh( geometry, material );
    plane.rotation.x = Math.PI/2
    plane.position.y = 0
    scene.add( plane );
    count = 0
    for (var i = 0; i < geometry.vertices.length; i++) {
        geometry.vertices[i].z += Math.random() * params.q3.amp - params.q3.amp;
        geometry.vertices[i]._myZ = geometry.vertices[i].z
        plane.geometry.verticesNeedUpdate = true;
    }
  }
var animate = function () {
    requestAnimationFrame( animate );

    for (var i = 0; i < geometry.vertices.length; i++) {
        var z = +geometry.vertices[i].z;
        geometry.vertices[i].z = Math.sin(( i + count * 0.00002)) * (geometry.vertices[i]._myZ - (geometry.vertices[i]._myZ* 0.6))
        plane.geometry.verticesNeedUpdate = true;
  
        count += 1
      }

    renderer.render( scene, camera );
};

animate();
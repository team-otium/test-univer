var geometryPlane = new THREE.PlaneGeometry( 500, 500, params.q3.freq, params.q3.freq );
var material = new THREE.MeshLambertMaterial( {color: 0xf2d4c2, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometryPlane, material );
plane.rotation.x = Math.PI/2
plane.position.y = 0
scene.add( plane );
let count = 0

for (var i = 0; i < geometryPlane.vertices.length; i++) {
  geometryPlane.vertices[i].z += Math.random() * params.q3.amp - params.q3.amp;
  geometryPlane.vertices[i]._myZ = geometryPlane.vertices[i].z
    plane.geometry.verticesNeedUpdate = true;
}

/*var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 0, 5, -100 );
scene.add( light );*/

camera.position.z = 5;
camera.position.y = 15;
camera.rotation.x = Math.PI / 16

controllerq31.onChange(function(value) {
    updateq3(value)
  });

  controllerq32.onChange(function(value) {
    updateq3(value)
  });

  function updateq3(val){
    scene.remove(plane)
    geometryPlane = new THREE.PlaneGeometry( 500, 500, params.q3.freq, params.q3.freq );
    material = new THREE.MeshLambertMaterial( {color: 0xf2d4c2, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometryPlane, material );
    plane.rotation.x = Math.PI/2
    plane.position.y = 0
    scene.add( plane );
    count = 0
    for (var i = 0; i < geometryPlane.vertices.length; i++) {
      geometryPlane.vertices[i].z += Math.random() * params.q3.amp - params.q3.amp;
      geometryPlane.vertices[i]._myZ = geometryPlane.vertices[i].z
        plane.geometry.verticesNeedUpdate = true;
    }
  }
var animateq3 = function () {
    for (var i = 0; i < geometryPlane.vertices.length; i++) {
        var z = +geometryPlane.vertices[i].z;
        geometryPlane.vertices[i].z = Math.sin(( i + count * 0.00002)) * (geometryPlane.vertices[i]._myZ - (geometryPlane.vertices[i]._myZ* 0.6))
        plane.geometry.verticesNeedUpdate = true;
  
        count += 1
      }
};
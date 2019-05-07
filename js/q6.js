class Box {
    constructor(){
    this.obj = new THREE.Object3D()
    var geometryBox = new THREE.SphereGeometry(500, 64, 64, 2);
    var materialBox = new THREE.MeshLambertMaterial( {color: 0x87ceeb, side: THREE.BackSide} );
    var sphere = new THREE.Mesh(geometryBox, materialBox);

    var light = new THREE.PointLight( 0xffffff, 0.5, 2000, 2 );
    light.position.set( 0, 100, -420 );
    this.obj.add( light );

    var pointLightHelper = new THREE.PointLightHelper( light, 3 );
    //this.obj.add( pointLightHelper );

      this.obj.add(sphere)
    }
  }

  let box = new Box()
  scene.add(box.obj)
  controllerq6.onChange(function(value) {
    updateq6(value)
  });

  function updateq6(val){

  }
var animateq6 = function () {

};
class Box {
    constructor(mom){
    this.obj = new THREE.Object3D()
    var geometryBox = new THREE.SphereGeometry(500, 64, 64, 2);

    switch (mom) {
      case 0:
        var materialBox = new THREE.MeshLambertMaterial( {color: 0x9198c7, side: THREE.BackSide} );
        var light = new THREE.PointLight( 0xc6c8f8, 0.5, 2000, 2 );
        var ambientLight = new THREE.AmbientLight( 0x444444 ) // soft white light
        break;

      case 1:
        var materialBox = new THREE.MeshLambertMaterial( {color: 0xffffe0, side: THREE.BackSide} );
        var light = new THREE.PointLight( 0xf7d0d6, 0.5, 2000, 2 );
        var ambientLight = new THREE.AmbientLight( 0xaaaaaa ) // soft white light
        break;

      case 2:
        var materialBox = new THREE.MeshLambertMaterial( {color: 0x94bfe0, side: THREE.BackSide} );
        var light = new THREE.PointLight( 0xffffff, 0.5, 2000, 2 );
        var ambientLight = new THREE.AmbientLight( 0xcccccc ) // soft white light
        break;

      case 3:
        var materialBox = new THREE.MeshLambertMaterial( {color: 0xf0b1b1, side: THREE.BackSide} );
        var light = new THREE.PointLight( 0xeb4a3e, 0.5, 2000, 2 );
        var ambientLight = new THREE.AmbientLight( 0x999999 ) // soft white light
        break;

      case 4:
        var materialBox = new THREE.MeshLambertMaterial( {color: 0x000041, side: THREE.BackSide} );
        var light = new THREE.PointLight( 0xc6c8f8, 0.5, 2000, 2 );
        var ambientLight = new THREE.AmbientLight( 0x444444 ) // soft white light
        break;
    
      default:
        console.log(mom)
        break;
    }

    var sphere = new THREE.Mesh(geometryBox, materialBox);

    
    light.position.set( 0, 100, -420 );
    this.obj.add( light );
    this.obj.add(ambientLight)

    var pointLightHelper = new THREE.PointLightHelper( light, 3 );
    //this.obj.add( pointLightHelper );

      this.obj.add(sphere)
    }
  }

  let box = new Box(params.q6.rep)
  scene.add(box.obj)
  controllerq6.onChange(function(value) {
    updateq6(value)
  });

  function updateq6(val){
    scene.remove(box.obj)
    box = new Box(params.q6.rep)
    scene.add(box.obj)
  }
var animateq6 = function () {

};
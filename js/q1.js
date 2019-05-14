class FloatingObj {
  constructor(){
    let random = Math.floor(Math.random() * 2)
    switch(random){
      case 0:
        var geometry = new THREE.SphereGeometry(1, params.q1.rep, params.q1.rep)
        break
      case 1:
        var geometry = new THREE.ConeGeometry( 1, 3, params.q1.rep );
        break
    }
    
    var material = new THREE.MeshPhongMaterial( {color: 0xd4c2f2} );
    var sphere = new THREE.Mesh(geometry, material);

    this.y = rand(15, 20)
    sphere.position.y = this.y
    sphere.position.x = rand(-10, 10 )
    sphere.position.z = rand(-20, -5)
    this.obj = sphere
  }
}

let spheres = []

for (let i = 0; i < params.q2.rep; i++) {
  let s = new FloatingObj()
  spheres.push(s)
  scene.add(s.obj)
}

controllerq1.onChange(function(value) {
    updateq1(value)
  });
  controllerq2.onChange(function(value) {
    updateq1(value)
  });


function updateq1(){
    spheres.forEach(s => {
      scene.remove(s.obj)
    })
    spheres = []
    for (let i = 0; i < params.q2.rep; i++) {
      let s = new FloatingObj()
      spheres.push(s)
      scene.add(s.obj)
    }
}

var animateq1 = function () {
  for (let i = 0; i < spheres.length; i++) {
    spheres[i].obj.rotation.y += 0.01;
    spheres[i].obj.position.y = (Math.cos((Date.now()+i*500)*0.001)*1)+spheres[i].y;
    
  }
};
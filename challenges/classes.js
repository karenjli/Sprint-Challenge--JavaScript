// 1. Copy and paste your prototype in here and refactor into class syntax.

//Note to TL: I altered the name of the class and the object slightly because the exact same names are declared in prototype.js already. Other than the names, I copied and pasted all the code from the prototype page.

class CuboidMakers {
    constructor (shape){
        this.length = shape.length;
        this.width = shape.width;
        this.height = shape.height;
    }

    volume () {
        return this.length * this.width * this.height;
    }

    surfaceArea () {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
  
  const cuboids = new CuboidMakers ({
    length: 4,
    width: 5,
    height:5
  })
  

  
  
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboids.volume()); // 100
console.log(cuboids.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakers {
    constructor (shape) {
        super(shape);
    }

    cubeVolume () {
        return Math.pow(this.length, 3); //Volume = a^3
    }

    cubeSurfaceArea() {
        return 6 * Math.pow(this.length,2);  //surfaceArea = 6a^2
    }
}

const cube = new CubeMaker ({
    length: 5
})

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
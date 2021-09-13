import * as THREE from 'three'
import Time from '../../Utils/Time'

export default class Planet {
    constructor(jurisdiction, data, _options) {
        this.experience = window.experience
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.raycaster = this.experience.raycaster
        this.jurisdiction = jurisdiction
        this.data = data
        this.time = new Time()

        this.setPlanets()
    }

    setPlanets() {
        this.astreMesh = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32, 32, 1),
            new THREE.MeshPhongMaterial({
                opacity: 1,
                transparent: true,
            })
        );
        const textureMap = this.data.astre.astreName.toLowerCase() + 'Texture'
        this.astreMesh.material.map = this.resources.items[textureMap]
        this.astreMesh.name = this.data.astre.astreName
        this.astreMesh.scale.set(10,10,10);
        this.jurisdiction.add(this.astreMesh)
        this.raycaster.objectToTest.push(this.astreMesh)
    }

    resize() {
    }

    update() {
    }

    destroy() {
    }
}
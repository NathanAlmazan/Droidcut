class HaircutModel {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    setImage(image) {
        this.image = image;
    }

    getHaircut() {
        return {
            name: this.name,
            image: this.image,
            description: this.description
        }
    }

    databaseObjectToArray(haircutObject) {
        let hairList = [];
        Object.keys(haircutObject).forEach(obj => {
            const currHaircut = haircutObject[obj];
            currHaircut.uid = obj;
            hairList.push(currHaircut);
        })

        return hairList;
    } 
}

export default HaircutModel
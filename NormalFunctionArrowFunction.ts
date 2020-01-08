let user = {
    name: "Raza",
    getNameArrow:() => {
        console.log("hello " + this.name); //Arrow don't have this
    },
    getNameNormal(){
        console.log("Welcome to " + this.name);
    }
};
user.getNameArrow();
user.getNameNormal();

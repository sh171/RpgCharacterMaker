const chracterImgUrl = {
    maleHero : "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png",
    maleWarrior : "https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png",
    maleMage : "https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png",
    femaleHero : "https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png",
    femaleWarrior : "https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png",
    femaleMage : "https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png"
}

class Character {
    constructor(name, job, gender, trait, status) {
        this.name = name;
        this.job = job;
        this.gender = gender;
        this.trait = trait;
        this.status = status;
    }

    getImgUrl() {
        if (this.gender === "Male") {
            if (this.job === "Hero") return chracterImgUrl.maleHero;
            else if (this.job === "Warrior") return chracterImgUrl.maleWarrior;
            else if (this.job === "Mage") return chracterImgUrl.maleMage;
        }
        else if (this.gender === "Female") {
            if (this.job === "Hero") return chracterImgUrl.femaleHero;
            else if (this.job === "Warrior") return chracterImgUrl.femaleWarrior;
            else if (this.job === "Mage") return chracterImgUrl.femaleMage;
        }
    }

    updateStatus() {
        let updatedStatus = new Status(
            this.status.strength,
            this.status.agility,
            this.status.resilience,
            this.status.wisdom,
            this.status.luck
        );

        let initStatus = updatedStatus;

        if (this.trait === "Bat out of hell") {
            updatedStatus.agility *= 1.4;
        }
        else if (this.trait === "Brave" && this.job === "Warrior") {
            updatedStatus.strength *= 1.1;
            updatedStatus.agility *= 1.1;
            updatedStatus.luck *= 1.2;
        }
        else if (this.trait === "Lucky devil" && this.gender === "Male") {
            updatedStatus.luck *= 1.5;
        }
        else if (this.trait === "Tomboy" && this.gender === "Female") {
            updatedStatus.strength *= 1.1;
            updatedStatus.agility *= 1.1;
        }
        else return initStatus;

        return updatedStatus;
    }
}

class Status {
    constructor(strength, agility, resilience, wisdom, luck) {
        this.strength = strength;
        this.agility = agility;
        this.resilience = resilience;
        this.wisdom = wisdom;
        this.luck = luck;
    }
}

var vm = new Vue ({
    el: "#app",
    data: {
        name: "Unknown",
        job: "Hero",
        gender: "Male",
        trait: "Everyman",
        status: {
            strength: 10,
            agility: 10,
            resilience: 10,
            wisdom: 10,
            luck: 10
        }
    },
    computed: {
        characterImg: function() {
            let character = new Character(this.name, this.job, this.gender, this.trait, this.status);
            return character.getImgUrl();
        },
        getStatus: function() {
            let character = new Character(this.name, this.job, this.gender, this.trait, this.status);
            return character.updateStatus();
        }   
    }
})
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
    constructor(drugs = []) {
        this.drugs = drugs;
    }
    updateBenefitValue() {
        for (let drug of this.drugs) {
            this.updateBenefit(drug)
            this.updateExpire(drug)
        }
        return this.drugs
    }

    updateBenefit(drug) {
        switch (drug.name) {
            case "Magic Pill":
                break;
            case "Dafalgan":
                this.updateDafalgan(drug)
                break;
            case "Herbal Tea":
                this.updateHerbal(drug)
                break;
            case "Fervex":
                this.updateFervex(drug)
                break;
            default:
                this.updateNormal(drug)
                break;
        }
    }

    updateFervex(drug) {
        if (drug.expiresIn <= 0) {
            drug.benefit = 0;
        } else if (drug.expiresIn <= 5) {
            this.increaseBenefit(drug, 3)
        } else if (drug.expiresIn <= 10) {
            this.increaseBenefit(drug, 2)
        } else
            this.increaseBenefit(drug, 1)
    }

    updateDafalgan(drug) {
        const amount = drug.expiresIn > 0 ? 2 : 4
        this.decreaseBenefit(drug, amount)
    }

    updateNormal(drug) {
        const amount = drug.expiresIn > 0 ? 1 : 2
        this.decreaseBenefit(drug, amount)
    }

    updateHerbal(drug) {
        const amount = drug.expiresIn <= 0 ? 2 : 1
        this.increaseBenefit(drug, amount)
    }

    increaseBenefit(drug, amount) {
        drug.benefit = Math.min(50, drug.benefit + amount);
    }

    decreaseBenefit(drug, amount) {
        drug.benefit = Math.max(0, drug.benefit - amount);
    }

    updateExpire(drug) {
        if (drug.name !== "Magic Pill") {
            drug.expiresIn -= 1
        }
    }
}

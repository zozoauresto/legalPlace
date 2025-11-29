export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

// export class Pharmacy {
//   constructor(drugs = []) {
//     this.drugs = drugs;
//   }
//   updateBenefitValue() {
//     for (var i = 0; i < this.drugs.length; i++) {
//       if (
//         this.drugs[i].name != "Herbal Tea" &&
//         this.drugs[i].name != "Fervex"
//       ) {
//         if (this.drugs[i].benefit > 0) {
//           if (this.drugs[i].name != "Magic Pill") {
//               if (this.drugs[i].name == "Dafalgan") {
//                   this.drugs[i].benefit = this.drugs[i].benefit - 2;
//               } else {
//                   this.drugs[i].benefit = this.drugs[i].benefit - 1;
//               }          }
//         }
//       } else {
//         if (this.drugs[i].benefit < 50) {
//           this.drugs[i].benefit = this.drugs[i].benefit + 1;
//           if (this.drugs[i].name == "Fervex") {
//             if (this.drugs[i].expiresIn < 11) {
//               if (this.drugs[i].benefit < 50) {
//                 this.drugs[i].benefit = this.drugs[i].benefit + 1;
//               }
//             }
//             if (this.drugs[i].expiresIn < 6) {
//               if (this.drugs[i].benefit < 50) {
//                 this.drugs[i].benefit = this.drugs[i].benefit + 1;
//               }
//             }
//           }
//         }
//       }
//       if (this.drugs[i].name != "Magic Pill") {
//         this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
//       }
//       if (this.drugs[i].expiresIn < 0) {
//         if (this.drugs[i].name != "Herbal Tea") {
//           if (this.drugs[i].name != "Fervex") {
//             if (this.drugs[i].benefit > 0) {
//               if (this.drugs[i].name != "Magic Pill") {
//                   if (this.drugs[i].name == "Dafalgan") {
//                       this.drugs[i].benefit = this.drugs[i].benefit - 2;
//                   } else {
//                       this.drugs[i].benefit = this.drugs[i].benefit - 1;
//                   }              }
//             }
//           } else {
//             this.drugs[i].benefit =
//               this.drugs[i].benefit - this.drugs[i].benefit;
//           }
//         } else {
//           if (this.drugs[i].benefit < 50) {
//             this.drugs[i].benefit = this.drugs[i].benefit + 1;
//           }
//         }
//       }
//     }
//
//     return this.drugs;
//   }
// }


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
            default:
                this.updateNormal(drug)
                break;
        }
    }

    updateDafalgan(drug) {
        const amount = drug.expiresIn > 0 ? 2 : 4
        this.decreaseBenefit(drug, amount)
    }
    
    updateNormal(drug) {
        const amount = drug.expiresIn > 0 ? 1 : 2
        this.decreaseBenefit(drug, amount)
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

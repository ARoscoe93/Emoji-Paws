class Pet {
    constructor(id) {
      this.id = id;
      this.fedLevel = 100;
      this.fedElement = document.getElementById(`hunger${id}`);
      this.messageElement = document.getElementById(`message${id}`);
      this.displayElement = document.getElementById(`pet${id}`);
      this.decreaseInterval = setInterval(() => this.decreaseFedLevel(), 5000);
    }
  
    feed(amount) {
      this.fedLevel += amount;
      if (this.fedLevel > 100) this.fedLevel = 100;
      this.updateFedLevel();
    }
  
    decreaseFedLevel() {
      this.fedLevel -= 5;
      if (this.fedLevel < 0) {
        this.fedLevel = 0;
        this.messageElement.innerHTML = "Pet ran away";
      }
      this.updateFedLevel();
    }
  
    updateFedLevel() {
      this.fedElement.textContent = this.fedLevel;
    }
  }
  
  const pet1 = new Pet(1);
  const pet2 = new Pet(2);
  let selectedPet = null;
  
  const pet1Element = document.getElementById("pet1");
  const pet2Element = document.getElementById("pet2");
  
  function feedPet(amount) {
    if (selectedPet) {
      selectedPet.feed(amount);
    }
  }
  
  function selectPet(id) {
    if (selectedPet) {
      selectedPet.displayElement.classList.remove("selected");
    }
  
    selectedPet = id === 1 ? pet1 : id === 2 ? pet2 : null;
  
    if (selectedPet) {
      selectedPet.displayElement.classList.add("selected");
    }
  }
  
  selectPet(1); 
  
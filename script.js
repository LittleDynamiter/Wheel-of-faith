const races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Undead', 'Halfling', 'Gnome'];
const weapons = ['Sword', 'Bow', 'Staff', 'Claws', 'Axe', 'Hammer'];
const powers = ['Fireball', 'Teleportation', 'Mind Control', 'Invisibility', 'Healing', 'Telekinesis'];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById('spin-btn').addEventListener('click', () => {
    const race = getRandomItem(races);
    const weapon = getRandomItem(weapons);
    const power = getRandomItem(powers);

    document.getElementById('race').textContent = race;
    document.getElementById('weapon').textContent = weapon;
    document.getElementById('power').textContent = power;
});

const races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Undead', 'Halfling', 'Gnome'];
const weapons = ['Sword', 'Bow', 'Staff', 'Claws', 'Axe', 'Hammer'];
const powers = ['Fireball', 'Teleportation', 'Mind Control', 'Invisibility', 'Healing', 'Telekinesis'];
const strengths = [10, 20, 30, 40, 50];
const intelligences = [10, 20, 30, 40, 50];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomStat(stats) {
    return stats[Math.floor(Math.random() * stats.length)];
}

document.getElementById('spin-btn').addEventListener('click', () => {
    // Display spinning animation
    document.getElementById('wheel').style.display = 'block';
    
    // Wait for the animation to finish
    setTimeout(() => {
        // Generate random values
        const race = getRandomItem(races);
        const weapon = getRandomItem(weapons);
        const power = getRandomItem(powers);
        const strength = getRandomStat(strengths);
        const intelligence = getRandomStat(intelligences);

        // Update the page with the results
        document.getElementById('race').textContent = race;
        document.getElementById('weapon').textContent = weapon;
        document.getElementById('power').textContent = power;
        document.getElementById('strength').textContent = strength;
        document.getElementById('intelligence').textContent = intelligence;

        // Hide the spinning wheel after animation
        setTimeout(() => {
            document.getElementById('wheel').style.display = 'none';
        }, 3000);
    }, 3000);  // Delay to match animation duration
});

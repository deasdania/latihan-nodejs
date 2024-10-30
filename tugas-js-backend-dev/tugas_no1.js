
function formatZooTasks(tasks) {
    return Object.entries(tasks)
        .map(([animal, task]) => `${animal}: ${task}`)
        .join(', ');
}

// Contoh penggunaan
const zooTasks = {
    'Singa': 'Memberi makan',
    'Zebra': 'Membersihkan kandang',
    'Penguin': 'Mengawasi pertunjukan',
    'Kuda': 'Memandikan',
};

const result = formatZooTasks(zooTasks);
console.log(result); 

// Output: "Singa: Memberi makan, Zebra: Membersihkan kandang, Penguin: Mengawasi pertunjukan, Kuda: Memandikan"

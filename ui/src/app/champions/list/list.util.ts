
export function buildChampionAlphabet(championList: string[]): Array<any> {
    championList.sort();
    const map = new Map();
    for (const champion of championList) {
        const letter = champion.substring(0, 1);
        if (map.has(letter)) {
            map.get(letter).push(champion);
        } else {
            map.set(letter, [ champion ]);
        }
    }
    return Array.from(map.entries());
}

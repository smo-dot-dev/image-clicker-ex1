import { reactive } from "vue";

export const store = reactive({
  clickedPokemons: {},
  lastSelectedPokemon: null,

  incrementClick(row, updateLastSelectedPokemon = true) {
    if (this.clickedPokemons[row.id] === undefined) {
      this.clickedPokemons[row.id] = 1;
    } else {
      this.clickedPokemons[row.id]++;
    }
    if (updateLastSelectedPokemon) {
      this.lastSelectedPokemon = row;
      // copy amount of clicks to display later on th ecard
      this.lastSelectedPokemon.clicks = this.clickedPokemons[row.id];
    }
  },
});

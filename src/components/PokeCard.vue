<template>
  <div>
    <q-card bordered flat v-if="store.lastSelectedPokemon" class="my-card">
      <q-card-section>
        <div class="text-body">This is the last Pokemon you clicked:</div>
      </q-card-section>

      <img
        :src="`/thumbnails/${store.lastSelectedPokemon.id
          .toString()
          .padStart(3, '0')}.png`"
        style="width: 100px; height: 100px; margin-left: 1em"
      />

      <q-card-section>
        <div class="text-h6">
          🇬🇧 {{ store.lastSelectedPokemon.name.english }}
        </div>
        <div class="text-h6">
          🇨🇳 {{ store.lastSelectedPokemon.name.chinese }}
        </div>
        <div class="text-h6">
          🇯🇵 {{ store.lastSelectedPokemon.name.japanese }}
        </div>
        <div class="text-h6">
          🇫🇷 {{ store.lastSelectedPokemon.name.french }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body1">
          Type: {{ store.lastSelectedPokemon.type.join(", ") }}
        </div>

        <q-separator inset />

        <div class="text-h6">Base Stats</div>
        <div class="text-body1">
          HP: {{ store.lastSelectedPokemon.base.HP }}
        </div>
        <div class="text-body1">
          Attack: {{ store.lastSelectedPokemon.base.Attack }}
        </div>
        <div class="text-body1">
          Defense: {{ store.lastSelectedPokemon.base.Defense }}
        </div>
        <div class="text-body1">
          Sp. Attack: {{ store.lastSelectedPokemon.base["Sp. Attack"] }}
        </div>
        <div class="text-body1">
          Sp. Defense: {{ store.lastSelectedPokemon.base["Sp. Defense"] }}
        </div>
        <div class="text-body1">
          Speed: {{ store.lastSelectedPokemon.base.Speed }}
        </div>
      </q-card-section>
      <q-card-section>
        <!-- Display how many clicks -->
        <div class="text-h6">
          Clicks: {{ store.lastSelectedPokemon.clicks }}
        </div>
      </q-card-section>
    </q-card>
    <q-card v-else flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Hello World :D</div>
        <div class="text-body1">Click on any pokemon to begin.</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
.my-card {
  margin: 1em;
}
</style>

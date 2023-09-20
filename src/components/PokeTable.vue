<template>
  <q-table
    style="width: 100%"
    flat
    title="All Pokemons"
    :rows="pokeData"
    :columns="columns"
    :filter="filter"
    :pagination="initialPagination"
    row-key="name"
    @row-click="rowClicked"
  >
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:body-cell-image="{ value }">
      <td class="q-pa-none">
        <img
          style="width: 32px"
          :src="`/thumbnails/${value.toString().padStart(3, '0')}.png`"
        />
      </td>
    </template>
  </q-table>
</template>

<script>
import { store } from "src/store.js";

export default {
  setup() {},
  data() {
    return {
      store,
      pokeData: [],
      columns: [
        {
          name: "image",
          required: true,
          label: "",
          align: "left",
          field: (row) => row.id,

          sortable: true,
        },
        {
          name: "id",
          required: true,
          label: "PokeDex id",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: (row) => row.name.english,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "type",
          align: "center",
          label: "Type",
          field: (row) => row.type,
          format: (val) => `${val.join(", ")}`,
          sortable: true,
        },
        {
          name: "img",
          align: "center",
          label: "Clicks",
          field: (row) => {
            // Each time the row is rendered, we check if the current pokemon has been clicked.
            let clicked_poke = store.clickedPokemons[row.id];
            if (clicked_poke) {
              if (clicked_poke > 1) {
                return `${clicked_poke} times`;
              } else {
                return `${clicked_poke} time`;
              }
            } else {
              return 0;
            }
          },
          sortable: true,
        },
      ],
      filter: "",
      initialPagination: {
        sortBy: "id",
        rowsPerPage: 15,
      },
    };
  },
  async beforeMount() {
    try {
      const response = await fetch("/pokedex.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.pokeData = data;
    } catch (error) {
      console.error("Error loading JSON file: ", error);
    }
  },
  methods: {
    rowClicked(evt, row, index) {
      store.incrementClick(row);
    },
  },
};
</script>

<template>
  <q-table
    style="width: 100%; height: 100%"
    flat
    bordered
    grid
    title="All Pokemons"
    grid-header
    :rows="pokeData"
    :columns="columns"
    row-key="name"
    :filter="filter"
    hide-header
    @row-click="$emit('row-clicked')"
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
  </q-table>
</template>

<script>
export default {
  data() {
    return {
      pokeData: [],
      pagination: {
        page: 1,
        rowsPerPage: 10,
      },
      columns: [
        {
          name: "desc",
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
          label: "id",
          field: (row) => row.id,
          sortable: true,
        },
      ],
      filter: "",
    };
  },
  async mounted() {
    try {
      const response = await fetch("/pokedex.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.pokeData = data;
    } catch (error) {
      console.error("Error loading JSON file:", error);
    }
  },
  methods: {},
  watch: {},
};
</script>

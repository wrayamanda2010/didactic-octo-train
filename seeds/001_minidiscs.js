exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('minidiscs').del()
    .then(function() {
      // Inserts seed entries
      return knex('minidiscs').insert([
        {id: 1, title: 'Black Hole Sun', artist: 'Soundgarden', genre: 'Rock', description: 'Wont you come', cover_url: 'Soundgarden.jpg'},
        {id: 2, title: 'VS', artist: 'Pearl Jam', genre: 'Rock', description: 'Wonderful, Captivating', cover_url: 'pearljam.jpg'},
        {id: 3, title: 'Exciter', artist: 'Depeche Mode', genre: 'Alternative Goth Pop Punk Rock Core', description: 'Post-consumer society blanketed in a tasty malaise of sadness', cover_url: 'depechemode.jpg'},
        {id: 4, title: 'Pepper', artist: 'Butthole Surfers', genre: 'Rock', description: 'Flipper died a natural death he caught a nasty virus', cover_url: 'buttholesurfers.jpg'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('minidiscs_id_seq', (SELECT MAX(id) FROM minidiscs));")
      })
    })
}

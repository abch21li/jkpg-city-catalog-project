const { Client } = require('pg');

class Model {
  constructor() {
    this.client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: '12345',
      port: 5432,
    });
  }

  async init() {
    await this.client.connect();
  }

// ------ Creates a 'stores' table if it doesn't already exist
  async setup(storeJson) {
    await this.client.query(`
      CREATE TABLE IF NOT EXISTS public.stores
      (
          id SERIAL NOT NULL,
          name text,
          url text,
          district text,
          CONSTRAINT stores_pkey PRIMARY KEY (id)
      );
    `);

    // ------ Changes the owner of the table to "postgres"
    await this.client.query(`
      ALTER TABLE IF EXISTS public.stores OWNER to postgres;
    `);
    // ------ Inserts the data from storeJson into the 'stores' table
    for (const store of storeJson) {
      const checkForStore = await this.client.query(`
        SELECT * FROM public.stores
        WHERE
         name = $1
        LIMIT 1
      `, [store.name]);

      console.log(checkForStore.rows);

    // ----- Inserts into database if the store doesn't already exist
      if (checkForStore.rows.length === 0) {
        await this.client.query(`
          INSERT INTO public.stores (name, url, district)
          VALUES ($1, $2, $3)
        `, [store.name, store.url, store.district]);
      }
    }

  }

   // ------ Gets the stores from the database 
  async getAllStores() {
    const res = await this.client.query('SELECT * FROM public.stores');
    return res.rows;
  }

}

module.exports = Model;
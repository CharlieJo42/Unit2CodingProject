CREATE TABLE IF NOT EXISTS user_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    status BOOLEAN NOT NULL DEFAULT false,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
);

ALTER TABLE water_table ADD COLUMN user_id INTEGER REFERENCES user_table(id);
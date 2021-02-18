CREATE TABLE horses
(
    id SERIAL PRIMARY KEY ,
    name text NOT NULL,
    date_of_birth date NOT NULL,
    gender text NOT NULL,
    pregnant boolean ,
    due_date date ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)

CREATE TABLE horsesHeartMonitor
(
    id SERIAL PRIMARY KEY ,
    heart_rate integer NOT NULL,
    horse_id integer NOT NULL,
    is_monitoring boolean NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)
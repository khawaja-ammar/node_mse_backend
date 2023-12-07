import { Generated, Selectable } from 'kysely';

export interface Database {
  hotel_finder_table: hotel_finder_table;
}

export interface hotel_finder_table {
  hotel_id: Generated<number>;
  hotel_name: string;
  hotel_formerName: string | null;
  hotel_city: string;
  hotel_state: string | null;
  hotel_country: string;
  hotel_coordinates: string;
}

export type Hotel = Selectable<hotel_finder_table>;

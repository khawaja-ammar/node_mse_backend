import { Generated, Selectable } from 'kysely';

export interface Database {
  main_hotel_table: main_hotel_table;
}

export interface main_hotel_table {
  hotel_id: Generated<number>;
  hotel_name: string;
  hotel_formerName: string | null;
  hotel_city: string;
  hotel_state: string | null;
  hotel_country: string;
  hotel_coordinates: string;
}

export type Hotel = Selectable<main_hotel_table>;



export interface Note {
  id?:            number;
  category?:      Category;
  usuario?:       Usuario;
  title?:         string;
  text?:          string;
  creation_date?: CreationDate;
  edit_date?:     CreationDate;
}

export interface Category {
  id?:   number;
  name?: string;
}

export interface CreationDate {
  year?:  number;
  month?: number;
  day?:   number;
}

export interface Usuario {
  id?:        number;
  name?:      string;
  last_name?: string;
  username?:  string;
  password?:  string;
  hash?:      Hash;
}

export interface Hash {
  id?:         number;
  hash?:       string;
  expiration?: CreationDate;
}

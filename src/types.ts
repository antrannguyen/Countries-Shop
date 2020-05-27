// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const REQUEST_APIS = 'REQUEST_APIS'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const SHOPPING_CART = ' SHOPPING_CART'

// Countries
export type CountriesData = {
  name: string
  languages: { name: string }[]
  population: number
  region: string
  flag: string
}

export type RequestAPIs = {
  type: typeof REQUEST_APIS
}

export type ReceiveDataAction = {
  type: typeof RECEIVE_DATA
  payload: { dataCountries: CountriesData[] }
}

export type SearchCountrytAction = {
  type: typeof SEARCH_COUNTRY
  payload: {
    searchCountry: string
  }
}

export type AddCountrytAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: CountriesData
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: CountriesData
  }
}

export type InCart = {
  flag: string
  name: string
}

export type ShoppingCart = {
  type: typeof SHOPPING_CART
  payload: { inCart: InCart[] }
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

export type CountriesActions =
  | RequestAPIs
  | ReceiveDataAction
  | SearchCountrytAction
  | AddCountrytAction
  | RemoveCountryAction

export type CountriesState = {
  dataCountries: CountriesData[]
  inCart: InCart[]
  searchCountry: string
}

export type AppState = {
  product: ProductState
  ui: UiState
  countries: CountriesState
}

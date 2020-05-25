// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const REQUEST_APIS = 'REQUEST_APIS'
export const RECEIVE_DATA = 'RECEIVE_DATA'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// Countries Data APIs
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

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type CountriesActions = RequestAPIs | ReceiveDataAction

export type CountriesState = {
  dataCountries: CountriesData[]
}

export type AppState = {
  product: ProductState
  ui: UiState
  countries?: CountriesState
}

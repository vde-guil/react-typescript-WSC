import { IWilderProps } from '../components/Wilder/Wilder';

export type AppState = {
  showAddForm: boolean;
  wilders: IWilderProps[];
  justAdded: boolean;
  successMessage: string
};

export type Action =
  | {
      type: 'TOGGLE_SHOW_ADD_FORM';
    }
  | {
      type: 'WILDER_ADDED';
      newWilder: IWilderProps;
    }
  | {
      type: 'WILDERS_FETCH_SUCCESS';
      wilders: IWilderProps[];
    }
  | {
      type: 'CLOSE_ADD_FORM';
    };

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'TOGGLE_SHOW_ADD_FORM':
      return { ...state, showAddForm: !state.showAddForm };
    case 'CLOSE_ADD_FORM':
      return { ...state, showAddForm: false };
    case 'WILDER_ADDED':
      return {
        ...state,
        showAddForm: false,
        successMessage: `the Wilder ${action.newWilder.name} has been successfully added`,
        wilders: [
          ...state.wilders,
          {
            ...action.newWilder,
          },
        ],
      };
    case 'WILDERS_FETCH_SUCCESS':
      return { ...state, wilders: [...action.wilders] };
    default:
      return state;
  }
};

export default appReducer;

let sonID = 0;

const ProfilReducer = (state = [], action) => {
  switch (action.type) {
    case "PROFIL_EKLE":
      return [
        ...state,
        {
          id: ++sonID,
          adSoyad: action.payload.adSoyad,
          uni: action.payload.uni,
          fakulte: action.payload.fakulte,
          bolum: action.payload.bolum,
          sinif: action.payload.sinif,
        },
      ];

    case "PROFIL_SIL":
      return state.filter((profil) => profil.id !== action.payload.id);

    default:
      return state;
  }
};

export default ProfilReducer;

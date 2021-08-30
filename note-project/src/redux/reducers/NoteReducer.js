const initialState = {
  notBaslik: '',
  metin: '',
  ög: '',
  dosyaAdi: '',
  notlar: []
};

export const NoteReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'NOT.DEGİSTİR_BASLİK':
      const baslik = Object.assign({}, state, { notBaslik: action.payload.notBaslik });
      return baslik;
    case 'NOT.DEGİSTİR_METİN':
      const metin = Object.assign({}, state, { metin: action.payload.metin });
      return metin;
    case 'NOT.DEGİSTİR_ÖG':
      const ög = Object.assign({}, state, { ög: action.payload.ög });
      return ög;
    case 'NOT.DEGİSTİR_DOSYA':
      const dosyaAdi = Object.assign({}, state, { dosya4: action.payload.dosyaAdi });
      return dosyaAdi;
    case 'NOT.EKLE':
      const yeniNot = { notBaslik: state.notBaslik, metin: state.metin, ög: state.ög, dosyaAdi: state.dosyaAdi };
      const yeniListe = [...state.notlar, yeniNot];
      const liste = Object.assign({}, state, { notlar: yeniListe });
      return liste;
    case 'NOT.SİL':
    case 'TEL_SIL':
      return state.notlar(not => not.id !== action.payload.not);
    default:
      return state;
  }
};


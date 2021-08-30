let sonID = 0;

const NotlarReducer = (state = [], action) => {
    switch (action.type) {
        case 'NOT_EKLE':

            return [...state,
            {
                id: ++sonID,
                baslik: action.payload.baslik,
                ög: action.payload.ög,
                metin: action.payload.metin,
                dosyaAdi: action.payload.dosyaAdi
            }
            ];

        case 'NOT_SIL':
            return state.filter(not => not.id !== action.payload.id);

        default:
            return state
    }
}

export default NotlarReducer;
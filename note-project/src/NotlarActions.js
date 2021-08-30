export const notKaydiEkle = (yeniKayit) => {
    return {
        type: 'NOT_EKLE',
        payload: yeniKayit
    }
}

export const notKaydiSil = (id) => {
    return {
        type: 'NOT_SIL',
        payload: id
    }
}
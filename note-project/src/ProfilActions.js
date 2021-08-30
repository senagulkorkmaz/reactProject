export const profilKaydiEkle = (yeniKayit) => {
    return {
        type: 'PROFİL_EKLE',
        payload: yeniKayit
    }
}

export const profilKaydiSil = (id) => {
    return {
        type: 'PROFİL_SIL',
        payload: id
    }
}
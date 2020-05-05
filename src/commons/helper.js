export const formatPrice = cents => {
    return ( cents / 100 ).toLocaleString('zh' , {
        style: 'currency',
        currency: 'NTD'
    });
};      // 轉換幣值
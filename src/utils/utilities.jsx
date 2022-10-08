export const toLocalCurrency = (value) =>{
	return  new Intl.NumberFormat('es-GT', {  style: 'currency', currency: 'GTQ' 
	})
	.format(value)
  }

export const toLocaleDateString = (value, lang='es-GT', options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }) => {
    const date = new Date(value).toLocaleDateString(lang, options);
    return date;
}
  
export const uuidV4 = () => {
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16).toUpperCase()
	);
}

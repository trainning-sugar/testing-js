// takes in ?by=kati-frantz&popular=true&category=nodejs and returns { by:'kati-frantz', popular:'true', category:'nodejs'}
const parse = queryString => {
	const params = {};
	if(queryString[0] === '?'){
	 queryString = queryString.substring(1)
	 queryString.split('&').forEach(query => {
		 const queryObject = query.split('=');
		 params[queryObject[0]] = queryObject[1];
	 })
	} else {
		queryString.split('&').forEach(query => {
		const queryObject = query.split('=');
		params[queryObject[0]] = queryObject[1];
	});
	}
	return params
}

console.log(parse('?by=kati-frantz&popular=true&category=nodejs'));

//Takes a obj and verify doesn't have properties with out values and delete that properties
const removeEmpty = obj => {
	Object.keys(obj).forEach(key => (obj[key] === null || obj[key] === undefined) && delete obj[key])
	return obj
}

// takes in { by:'kati-frantz', popular:'true', category:'nodejs'} and returns ?by=kati-frantz 
const stringify = queryObject => {
	queryObject = removeEmpty(queryObject);
	let queryString = '';
	for (let element of Object.keys(queryObject)) {
		queryString = `${queryString}&${element}=${queryObject[element]}`
  }
  return `?${queryString.substring(1)}`
};

//console.log(stringify({ by: 'kati-frantz', popular:'true', category:'nodejs'}));

module.exports = {
  parse,
  stringify
}
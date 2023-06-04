const marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

const dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(pathName) {
  const TRs = this.map(function(item) {
	const TDs = [];
    TDs.push(`<td>${item.name}</td>`);
    TDs.push(`<td><img src="images/${pathName}/${item.name.toLowerCase().replaceAll(' ', '')}.svg" wigth=50px, height=50px></td>`);
	return `<tr>${TDs.join('')}</tr>`;
  })
  return document.write(`
    <table>
      <thead><tr><th width=200px>Name</th><th width=200px>Icon</th></tr></thead>
      <tbody>${TRs.join('')}</tbody>
    </table>`);
}

marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender('dc');
 

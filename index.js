let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
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
  const TRs = []
  for (let i = 0; i < this.length; i++) {
    const TDs = [];
    TDs.push(`<td>${this[i].name}</td>`)
    TDs.push(`<td><img src="images/${pathName}/${this[i].name.toLowerCase().replaceAll(' ', '')}.svg" wigth=50px, height=50px></td>`)
    TRs.push(`<tr>${TDs.join('')}</tr>`)
  }
  return document.write(`
    <table>
      <thead><tr><th width=200px>Name</th><th width=200px>Icon</th></tr></thead>
      <tbody>${TRs.join('')}</tbody>
    </table>`);
}

marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender('dc');
var App = React.createClass({
	render: function(){
		return(
			<div>
				Open 
				<News data={posledine_novosti}/>
				<Comments />
			</div>
		);
	}
})

var News = React.createClass({
	render: function () {
		return (
			<div className="Hello">Hello World</div>
		);
	}
});

var Comments = React.createClass({
	render: function(){
		return(
			<div>No Comments</div>
		);
	},
	componentWillReceiveProps: function(nextProps){
		{/* Invoked when a component is receiving new props */}
	},

})

var posledine_novosti = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];



ReactDom.render(
	<App />
	document.getElementById('root')
);
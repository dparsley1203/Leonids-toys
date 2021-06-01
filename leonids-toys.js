const laptop = {
	id: 1,
	name: "Zephyrus",
	maker: "Asus",
	operatingSystem: "Windows",
	price: 1449,
	size: 14
}

const mouse = {
	id: 2,
	name: "G305",
	maker: "Logitech",
	connection: "Wireless",
	price: 49,
	size: 3,
}

const webCam = {
	id: 3,
	name: "C270",
	maker: "Logitech",
	resolution: 720,
	price: 39,
	size: 2
}



const toys = [
	{
		id: 1,
		name: "Zephyrus",
		maker: "Asus",
		operatingSystem: "Windows",
		price: 1449,
		size: 14
	},
	{
		id: 2,
		name: "G305",
		maker: "Logitech",
		connection: "Wireless",
		price: 49,
		size: 3,
	},
	{
		id: 3,
		name: "C270",
		maker: "Logitech",
		resolution: 720,
		price: 39,
		size: 2
	}
]

const xperia = {
	id: 4,
	name: "Xperia",
	maker: "Sony",
	operatingSystem: "Android",
	price: 999,
	weight: 1.5
}

const superman = {
	id: 5,
	name: "Superman",
	maker: "Warner",
	type: "Action Figure",
	price: 10,
	size: 6
}

toys.push(xperia);
toys.push(superman);


for (const names of toys) {
	//console.log(names.name);
}

for (const toy of toys) {
	//console.log(`The ${toy.maker} ${toy.name} cost ${toy.price} dollars`)
	// The Asus Zephyrus cost 1449 dollars
	// The Logitech G305 cost 49 dollars
	// The Logitech C270 cost 39 dollars
	// The Sony Xperia cost 999 dollars
	// The Warner Superman cost 10 dollars
}

for (const toy of toys) {
	toy.price = toy.price * 1.05
	//console.log(`The ${toy.maker} ${toy.name} cost ${toy.price} dollars`)
// 	//The Asus Zephyrus cost 1521.45 dollars
// The Logitech G305 cost 51.45 dollars
// The Logitech C270 cost 40.95 dollars
// The Sony Xperia cost 1048.95 dollars
// The Warner Superman cost 10.5 dollars
}

// const findToy = 4
// for (const toy of toys)
// 	if (toy.id === findToy) {
// 		toy.price = toy.price * 1.05
// 		console.log(`The ${toy.maker} ${toy.name} cost ${toy.price} dollars`)
// 	} // Out Puts The Sony Xperia cost 1101.3975 dollars
	

const batman = {
	name: "Batman",
	maker: "Warner",
	type: "Action Figure",
	price: 10,
	size: 6
}


const phone = {
	name: "AT&T",
	type: "Corded",
	price: 39
}

// toys.push(batman, phone)


const addNewToy = (toyObject) => {
	const lastIndex = toys.length - 1
	const currentLastToy = toys[lastIndex]
	const newId = currentLastToy.id
	const newToyId = newId + 1

	toyObject.id = newToyId
	toys.push(toyObject)	

}

addNewToy(batman)
addNewToy(phone)
// console.log(toys)
//Confirmed output added new IDs

const findToy = 6
for (const toy of toys) {
	if (toy.id === findToy) {
		toy.price = toy.price * 1.05
		console.log (`The new ${toy.name} toy has just arrived for $${toy.price}.`)
	}
}



// const calcId = (arr) => {
// 	const lastIndex = arr.length - 1
// 	if (lastIndex === -1) {
// 		const newId = 1
// 		return newId
// 	}

// 	const lastItemId = arr[lastIndex].id
// 	const newId = lastItemId + 1
// 	return newId
// }

// const newId = calcId(toys)
// console.log(toys)

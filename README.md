# Constructors & Prototypes - Pizza Ordering

### _Basic Online Ordering, vs: 11/06/2020_

### _Created by: Eric Stratton_

## Description

This webpage allows user to make a very basic pizza order. 

## Setup/Instillation

### Requirements: 

- Internet browser
- Code editor if you wish to view/edit the code

### Download: 

- Download this repository by clicking the green 'Code' icon and selecting download zip
- Use your favorite zip.file opener to extract files to your local device
- Click `index.html` to open webpage in your default browser

### Terminal:

- Open command terminal on local device
- Navigate to desktop in terminal using `$ cd desktop`
- Copy repository link by clicking on green 'Code' icon and clicking the clipboard to the right of the url
- Use command `$ git clone {specific_repository_URL}`
- From desktop, run command `$ cd {newly-downloaded-directory}` to navigate to the installed directory
- Run command `code .` to open directory in default code editor
- Rick click `index.html` and select `Copy File Path`
- Paste in browser
- Alternatively: open using a Live Server plugin in your code edior

## Test Table

| Test | Input | Output |
| :------------| :---------------| :-----------|
| Add Size to Order |||
| Take size from user input and add it to their order | M | Size: M |
| Add Toppings to Order |||
| Take selected toppings and add it to the customer's order | artichoke, olives | Toppings: artichoke, olives |
| Calculate Total Cost |||
| Calculate cost from number of toppings and size | 4 toppings + large | $16 |

## Specs

Describe: addSize ();

Test: "It will take size data from user input and add it to the order"
`Expect(pizzaOrder.addSize(large).toEqual(this.size = "large"));`

Describe: addToppings ();

Test: "It will add individually selected toppings to order"
`Expect(pizzaOrder.addToppings("artichoke", "olives").toEqual(this.toppings = ["artichoke", "olives"]));`

Describe: addToppingsQuantity ();

Test:"It will add the quantity of toppings selected by user to the order"
`Expect(pizzaOrder.addToppingsQuantity("artichoke", "olives").toEqual(this.toppingsQuantity = 2));`

Describe: calcTotalCost ();

Test: "It will calculate cost of pizza based on size and number of toppings"
`Expect(pizzaOrder.calcTotalCost("large", 3).toEqual($14));`

## Known Bugs

There are no known bugs at this time.

## Support & Contact Details

Do not hesistate to contact me at:

<strattonericj@gmail.com>

## Technologies

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap
- Git
- GitHub

## Licensing

Copyright (c) 2020 Eric Stratton

This software is licensed under the MIT license





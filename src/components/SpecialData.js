// json file that will contain the data for the website's special section
// import images needed for the specials 
import pizza1 from '../images/pizza1.png'

// json type data files used to render on to the card

const SpecialData = [
    {
        imgsrc: pizza1,
        title: "Choco Lava Cake",
        description: "Chocolate Cake filled with gooey chocolate lava",
        price: "$4.99"
    },
    {
        imgsrc: pizza1,
        title: "New York Cheesecake",
        description: "The classic New York Cheesecake made classic",
        price: "$6.99"
    },
    {
        imgsrc: pizza1,
        title: "Mix n Match Slices",
        description: "Mix n Match multiple slices to make 1 whole pie",
        price: "$12.99"
    },
]

// export the json file
export default SpecialData
// import images to use for the menu card
import pizza1 from '../images/pizza1.png'

// json type data files used to render info to the card
// array of objects

const Data =
    [
        {
            imgsrc: pizza1,
            title: "Margharita Pizza",
            description: "Pizza with homemade marinara sauce, mozarella cheese and fresh basil",
            price: "$15.99/pie",
            price1: "3.49/slice"
        },
        {
            imgsrc: pizza1,
            title: "Pepporoni Pizza",
            description: "Fresh Pepporoni Pizza",
            price: "$16.99/pie",
            price1: "3.59/slice"
        },
        {
            imgsrc: pizza1,
            title: "Meatlover's Pizza",
            description: "Meatlover's pizza",
            price: "$19.99/pie",
            price1: "4.99/slice"
        }
    ]

    // export the data component to be used in other components
export default Data
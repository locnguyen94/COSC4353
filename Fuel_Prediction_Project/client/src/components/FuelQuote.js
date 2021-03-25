import React, { Fragment } from "react";
import "./stylesheets/style.css";
import { Link } from "react-router-dom";

const FuelQuote = () => {
    return (
    <Fragment>
        <html lang="en">

        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title> Fuel Quote Project- Quote</title>
            <link rel="stylesheet" href="stylesheets/style.css" />
                
        </head>

        <body class = "center">
            <div>
                <h1>Fuel Quote</h1>
            </div>
            <form>
                <div>
                    <label for = "gal-id"> Gallons Requested: &emsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type= "number" id = "gal-id" name= "gallon" placeholder="Number of Gallons" style={{width: '350px'}}/>

                </div>

                <div> 
                    <label for = "delivery-id"> Delivery Address: &emsp;&emsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" id= "delivery-id" name= "delivery" placeholder="This address will later do in JS(get-method)" style={{width: '350px'}}/>
                </div>

                <div>
                    <label for= "delivered-date-id"> Delivery Date: &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="date" name="delivered-date" required= "required" style={{width: '353px'}}/>
                </div>

                <div> 
                    <label for= "suggested-price-id"> Suggested Price/Gallon: </label>
                    <input type="number" id= "suggested-price-id" name= "price" placeholder="This price will later do in JS(get-method)" style={{width: '350px'}}/>
                </div>

                <div> 
                    <label for= "total-id"> Total Amount: &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="number" id= "total-id" name= "total" placeholder="This price will later do in JS(get-method)" style={{width: '350px'}}/>
                </div>
            </form>
            <div>
                <Link to="/FuelHistory"><button type="submit" class="view-quotes">View All Quotes</button></Link>
            </div>

        </body>
        </html>
    </Fragment>);
}

export default FuelQuote;
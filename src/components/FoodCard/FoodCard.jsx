import React from "react";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from './../../Hook/useAxiosSecure';


const FoodCard = ({ item }) => {
  const { name, image, price, recipe , _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location =useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    if(user && user.email){
      // TODO : send cart item to the database
      console.log( user.email, food );
      const cartItem= {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts' , cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }
    else{
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login !"
      }).then((result) => {
        if (result.isConfirmed) {
          // Send the user to the login page
          navigate('/login' , {state: {from: location}})
        }
      });
    }
  };


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </figure>
      <p className="absolute bg-slate-900 text-white right-0 mr-10 mt-8 px-4 p-1">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end  mx-auto">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 mt-4 uppercase bg-slate-200 border-orange-400"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

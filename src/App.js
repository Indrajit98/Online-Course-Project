import Image1 from "./Picture/java.jpg";
import Image2 from "./Picture/javascript.jpg";
import Image3 from "./Picture/python.jpg";
import "./App.css";
import CourseCart from "./Components/CourseCart/CourseCart";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import Header from "./Components/Header/Header";

function App() {
  const CourseDetails = [
    { name: "python", price: 45, image: Image3 },
    { name: "Java", price: 65, image: Image1 },
    { name: "JavaScript", price: 85, image: Image2 },
    { name: "JavaScript", price: 85, image: Image2 },
    { name: "JavaScript", price: 85, image: Image2 },
  ];
  const [cart, setCart] = useState([]);

  const handleAdd = (course) => {
    const newCart = [...cart, course];
    console.log("Indrajit", course);
    setCart(newCart);
  };

  return (
    <div className="App">
        <Header></Header>
      <div>
        <h1>Online Course</h1>
        <div className="courseContainer">
          <div className="courseItem">
            {CourseDetails.map((course) => (
              <CourseCart detail={course} handle={handleAdd}>
                {" "}
              </CourseCart>
            ))}
          </div>
          <div>
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

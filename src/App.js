import CartContainer from "./component/ui/CartContainer";
import Navbar from "./component/ui/Navbar";
import Modal from "./component/Modal ";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "./component/features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const { isLoading } = useSelector((state) => state.cart);

  //  console.log(isOpen);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  //  console.log(isLoading);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

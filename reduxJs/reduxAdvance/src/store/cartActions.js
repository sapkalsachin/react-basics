import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

//GET data action creater
export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async ()=>{
            const response = await fetch("https://react-hooks-7f5cd-default-rtdb.firebaseio.com/cart.json");
            if(!response.ok){
                throw new Error('Could not fetch cart data!!');
            }
            const data = await response.json();
            return data;
        };

        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        }catch(error){
            uiActions.showNotification({
                status: 'error',
                title: 'Error!!',
                message: 'Fetching cart data failed!',
            });
        }
    }
}

//PUT DATA, ACTION CREATER
export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
  
      const sendData = async () => {
        const response = await fetch(
          "https://react-hooks-7f5cd-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity
            }),
          }
        );
  
        if (!response.ok) {
          throw new Error("Sending cart data failed!!");
        }
      };
  
      try {
        await sendData();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!!",
            message: "Sent data successfully",
          })
        );
      } catch (e) {
        sendCartData().catch((error) => {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error...",
              message: "Sending cart data failed!",
            })
          );
        });
      }
    };
  };
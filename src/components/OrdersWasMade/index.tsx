import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Links from "../../constants/Links";

function OrdersWasMade() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    seconds > 0
      ? setTimeout(setSeconds, 1000, seconds - 1)
      : navigate(Links.MAIN_PAGE);
  }, [navigate, seconds]);

  return seconds ? (
    <h3>
      Заказ оформлен. Вы через {seconds}сек будете перенаправлены на главную
      страницу
    </h3>
  ) : null;
}

export default OrdersWasMade;

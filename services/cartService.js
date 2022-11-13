const cartDao = require("../models/cartDao");

const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const cartUpdate = async (product_id, put_quantity, token) => {
  //장바구니 담는 기능은 회원가입 한사람만 할 수 있게 기능 구현
  //해당 토큰으로 user_id 가져올 수 있음
  const user = jwt.verify(token, jwtSecret);
  const user_id = user.id;

  await cartDao.cartUpdate(product_id, put_quantity, user_id);
};

const cartList = async (token) => {
  //해당 토큰으로 user_id를 가져올 수 있음
  console.log(token);
  //유저관련 api 완료되면 validateToken에서 보내는 req.userInfo로 해당 유저id받아올수 있음
  let user = jwt.verify(token, jwtSecret);
  const user_id = user.id;

  return await cartDao.cartList(user_id);
};

module.exports = { cartUpdate, cartList };
